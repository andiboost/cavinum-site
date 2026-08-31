export const languages = {
	ru: 'Русский',
	en: 'English',
} as const;

export const defaultLang = 'ru';

export const ui = {
	ru: {
		title: 'Cavinum',
		meta: {
			description:
				'Cavinum помогает вести учёт коллекции вин и открывать культуру, историю и легенды региона за каждой бутылкой.',
		},
		footer: {
			privacy: 'Политика конфиденциальности',
			feedback: 'Обратная связь',
		},
		privacy: {
			title: 'Cavinum — Политика конфиденциальности',
		},
		feedback: {
			title: 'Обратная связь',
			name: 'Имя',
			subject: 'Тема',
			message: 'Сообщение',
			submit: 'Отправить',
			sending: 'Отправка…',
			success: 'Сообщение отправлено. Спасибо!',
			error: 'Не удалось отправить сообщение. Попробуйте ещё раз позже.',
			close: 'Закрыть',
		},
		hero: {
			title: ['Ваш винный погреб', 'История в каждой бутылке'],
			subtitle:
				'Cavinum помогает вести учёт коллекции вин и открывать культуру, историю и легенды региона за каждой бутылкой',
			cta: 'Скачать бесплатно',
		},
		forYou: {
			heading: 'Это про вас, если…',
			items: [
				{ icon: 'shelf', text: 'Дома больше пары бутылок вина' },
				{
					icon: 'globe',
					text: 'Интересна не только сама дегустация, а культура и история вина',
				},
				{
					icon: 'search',
					text: 'Хочется порядка в погребе и не тратить время на поиск нужной бутылки',
				},
			],
		},
		choosing: {
			heading: 'Выбор вина',
			items: [
				{
					icon: 'glass',
					text: 'Подобрать вино к ужину из своей коллекции — и бокал, и блюдо',
				},
				{
					icon: 'glasses',
					text: 'Подобрать вино и бокалы к дегустации с друзьями',
				},
				{
					icon: 'leaf',
					text: 'Выбрать вино из коллекции, чтобы изучить регион и винодельню',
				},
				{
					icon: 'grape',
					text: 'Выбрать вино из каталога приложения — даже если его нет у вас дома',
				},
			],
		},
		learning: {
			heading: 'Изучение вина',
			text: 'О каждом вине — своём или из каталога — узнайте регион, апелласьон, историю винодельни, винодела или энолога, легенды и истории',
		},
		selfGuided: {
			icon: 'compass',
			text: 'Погружайтесь в мир вина самостоятельно — без курсов сомелье и специальной подготовки',
		},
		openStructure: {
			icon: 'puzzle',
			text: 'Дополняйте и настраивайте информацию под свои задачи — структура открыта',
		},
		closing: {
			cta: 'Скачать бесплатную версию',
		},
	},
	en: {
		title: 'Cavinum',
		meta: {
			description:
				"Cavinum helps you track your wine collection and uncover the culture, history, and legends behind every bottle — no sommelier training required.",
		},
		footer: {
			privacy: 'Privacy Policy',
			feedback: 'Feedback',
		},
		privacy: {
			title: 'Cavinum — Privacy Policy',
		},
		feedback: {
			title: 'Feedback',
			name: 'Name',
			subject: 'Subject',
			message: 'Message',
			submit: 'Send',
			sending: 'Sending…',
			success: 'Message sent. Thank you!',
			error: 'Could not send the message. Please try again later.',
			close: 'Close',
		},
		hero: {
			title: ['Your wine cellar', 'A story in every bottle'],
			subtitle:
				"Cavinum helps you track your wine collection and uncover the culture, history, and legends behind every bottle — no sommelier training required",
			cta: 'Download for free',
		},
		forYou: {
			heading: 'This is for you if…',
			items: [
				{ icon: 'shelf', text: 'You keep more than a couple of bottles at home' },
				{
					icon: 'globe',
					text: 'You care about the culture and history of wine, not just the tasting',
				},
				{
					icon: 'search',
					text: 'You want your cellar organized and hate hunting for the right bottle',
				},
			],
		},
		choosing: {
			heading: 'Choosing a wine',
			items: [
				{
					icon: 'glass',
					text: 'Pick a wine from your collection for dinner — glass and food pairing included',
				},
				{
					icon: 'glasses',
					text: 'Pick a wine and glasses for a tasting with friends',
				},
				{
					icon: 'leaf',
					text: 'Pick a wine from your collection to explore its region and winery',
				},
				{
					icon: 'grape',
					text: "Pick a wine from the app's catalog — even one you don't own",
				},
			],
		},
		learning: {
			heading: 'Learning about wine',
			text: "For any wine — yours or from the catalog — discover its region, appellation, the winery's or winemaker's story, and the legends behind it",
		},
		selfGuided: {
			icon: 'compass',
			text: 'Explore the world of wine on your own — no sommelier courses, no special training',
		},
		openStructure: {
			icon: 'puzzle',
			text: 'Add and customize information to fit your own needs — the structure is open',
		},
		closing: {
			cta: 'Download the free version',
		},
	},
} as const;
