<?php
declare(strict_types=1);

// Recipient lives only here, server-side — never sent to or readable by the browser.
const CONTACT_RECIPIENT = 'winedrop@cavinum.me';
const MAX_NAME_LENGTH = 200;
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

// Honeypot: hidden from real visitors via CSS; bots that fill every field trip it.
// Pretend success so the bot doesn't learn the field was a trap.
if (trim((string) ($_POST['website'] ?? '')) !== '') {
    respond(200, ['ok' => true]);
}

// Strip CR/LF and other control characters so user input can never inject
// extra headers (Bcc:, additional To:, etc.) into the outgoing email.
function sanitize_header_value(string $value): string
{
    $value = preg_replace('/[\r\n]+/', ' ', $value) ?? '';
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', '', $value) ?? '';
    return trim($value);
}

$name = sanitize_header_value((string) ($_POST['name'] ?? ''));
$subject = sanitize_header_value((string) ($_POST['subject'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $subject === '' || $message === '') {
    respond(422, ['ok' => false, 'error' => 'missing_fields']);
}

$name = mb_substr($name, 0, MAX_NAME_LENGTH);
$subject = mb_substr($subject, 0, MAX_SUBJECT_LENGTH);
$message = mb_substr($message, 0, MAX_MESSAGE_LENGTH);

$mailSubject = '[Cavinum] ' . $subject;
$encodedSubject = '=?UTF-8?B?' . base64_encode($mailSubject) . '?=';

// RFC 2047 encoded-words carry non-ASCII display names in headers; they
// must NOT be wrapped in manual quotes, or some clients show the raw
// "=?UTF-8?B?...?=" text instead of decoding it.
$encodedDisplayName = '=?UTF-8?B?' . base64_encode($name) . '?=';

$body = "From: {$name}\n\n{$message}\n";

$headers = implode("\r\n", [
    "From: {$encodedDisplayName} <noreply@cavinum.me>",
    'Reply-To: noreply@cavinum.me',
    'Content-Type: text/plain; charset=UTF-8',
]);

$sent = mail(CONTACT_RECIPIENT, $encodedSubject, $body, $headers);

if ($sent) {
    respond(200, ['ok' => true]);
}

respond(500, ['ok' => false, 'error' => 'send_failed']);
