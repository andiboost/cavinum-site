#!/usr/bin/env node
// Публикация dist/ на cavinum.me по SFTP.
// Пароль запрашивается интерактивно при каждом запуске и нигде не сохраняется.

import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "node:path";
import prompts from "prompts";
import Client from "ssh2-sftp-client";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const configPath = join(rootDir, "deploy.config.json");
const distDir = join(rootDir, "dist");

const isDryRun = process.argv.includes("--dry-run");

function loadConfig() {
  if (!existsSync(configPath)) {
    console.error(`Не найден файл конфига: ${configPath}`);
    console.error("Создайте deploy.config.json по образцу из README/DEPLOY.md.");
    process.exit(1);
  }

  const raw = JSON.parse(readFileSync(configPath, "utf8"));
  const required = ["host", "port", "username", "remotePath"];
  const missing = required.filter((key) => {
    const value = raw[key];
    return value === undefined || value === null || value === "";
  });

  if (missing.length > 0) {
    console.error(
      `В deploy.config.json не заполнены поля: ${missing.join(", ")}.`
    );
    console.error(
      `Впишите значения вручную в ${configPath} перед первым запуском деплоя.`
    );
    process.exit(1);
  }

  return raw;
}

// Рекурсивный обход локальной dist/: список файлов и список директорий
// (директории нужны отдельно, чтобы создать их на сервере до заливки файлов).
function walkDist(dir, base = dir) {
  const files = [];
  const dirs = [];

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      dirs.push(relative(base, fullPath));
      const nested = walkDist(fullPath, base);
      dirs.push(...nested.dirs);
      files.push(...nested.files);
    } else if (entry.isFile()) {
      files.push(relative(base, fullPath));
    }
  }

  return { files, dirs };
}

function toRemotePath(remoteBase, relPath) {
  // SFTP-пути всегда с прямым слэшем, независимо от ОС клиента.
  const normalized = relPath.split(path.sep).join("/");
  return remoteBase.endsWith("/")
    ? `${remoteBase}${normalized}`
    : `${remoteBase}/${normalized}`;
}

async function confirm(message) {
  const { ok } = await prompts({
    type: "text",
    name: "ok",
    message: `${message} (введите "yes" для подтверждения)`,
  });
  return ok === "yes";
}

async function main() {
  const config = loadConfig();

  if (!existsSync(distDir) || !statSync(distDir).isDirectory()) {
    console.error(`Не найдена папка сборки: ${distDir}`);
    console.error("Сначала выполните build (npm run build).");
    process.exit(1);
  }

  const { files, dirs } = walkDist(distDir);

  console.log(`Хост:        ${config.host}:${config.port}`);
  console.log(`Пользователь: ${config.username}`);
  console.log(`Remote path: ${config.remotePath}`);
  console.log("");
  console.log(`Будет отправлено файлов: ${files.length}`);
  console.log(`Будет создано/использовано папок: ${dirs.length}`);
  console.log("");
  console.log("Файлы и папки для отправки:");
  for (const d of dirs) {
    console.log(`  [dir]  ${toRemotePath(config.remotePath, d)}`);
  }
  for (const f of files) {
    console.log(`  [file] ${toRemotePath(config.remotePath, f)}`);
  }
  console.log("");

  if (isDryRun) {
    console.log("[DRY RUN] Ничего не отправлено и подключение не выполнялось.");
    return;
  }

  const proceed = await confirm(
    `Отправить содержимое dist/ в ${config.remotePath} на ${config.host}?`
  );
  if (!proceed) {
    console.log("Отменено пользователем.");
    process.exit(1);
  }

  const { password } = await prompts({
    type: "password",
    name: "password",
    message: `Пароль для ${config.username}@${config.host}`,
  });

  if (!password) {
    console.log("Пароль не введён, отменено.");
    process.exit(1);
  }

  const sftp = new Client();
  const uploaded = [];

  try {
    await sftp.connect({
      host: config.host,
      port: config.port,
      username: config.username,
      password,
    });

    for (const d of dirs) {
      const remoteDir = toRemotePath(config.remotePath, d);
      const alreadyExists = await sftp.exists(remoteDir);
      if (!alreadyExists) {
        await sftp.mkdir(remoteDir, true);
      }
    }

    for (const f of files) {
      const localFile = join(distDir, f);
      const remoteFile = toRemotePath(config.remotePath, f);
      await sftp.put(localFile, remoteFile);
      uploaded.push(remoteFile);
    }
  } finally {
    await sftp.end();
  }

  console.log("");
  console.log(`Фактически передано файлов: ${uploaded.length}`);
  for (const remoteFile of uploaded) {
    console.log(`  ${remoteFile}`);
  }
}

main().catch((err) => {
  console.error("Ошибка деплоя:", err.message || err);
  process.exit(1);
});
