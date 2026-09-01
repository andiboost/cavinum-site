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
		ageGate: {
			question: 'Вам уже можно пить вино?',
			yes: 'Да',
			no: 'Нет',
			blocked: 'Извините, сайт с возрастными ограничениями. Заходите, когда будет можно.',
		},
		hero: {
			title: ['Ваш винный погреб', 'История в каждой бутылке'],
			subtitle:
				'Cavinum помогает вести учёт коллекции вин и открывать культуру, историю и легенды региона за каждой бутылкой',
			cta: 'Скачать бесплатно',
			tagline: 'Cavinum — не вместо, а вместе с Vivino',
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
					text: 'Подобрать вино, бокалы и блюдо к ужину из своей коллекции',
				},
				{
					icon: 'glasses',
					text: 'Найти вино и бокалы к дегустации с друзьями',
				},
				{
					icon: 'grape',
					text: 'Выбрать вино из коллекции, чтобы изучить регион и винодельню',
				},
			],
		},
		learning: {
			heading: 'Изучение вина',
			text: 'О каждом вине — своём или из каталога — узнайте регион, апелласьон, историю винодельни, винодела или энолога, легенды и истории',
		},
		selfGuided: {
			icon: 'compass',
			text: 'Погружайтесь в мир вина самостоятельно — без курсов сомелье и обучения',
		},
		openStructure: {
			icon: 'puzzle',
			text: 'Дополняйте и настраивайте информацию под свои задачи — структура открыта',
		},
		closing: {
			cta: 'Скачать бесплатную версию',
		},
		howTo: {
			heading: 'Как пользоваться',
			correspondsLabel: 'соответствует',
			terms: [
				{ vivino: 'Vivino «Мои вина»', cavinum: '«Каталог» в Cavinum' },
				{ vivino: 'Vivino «Погреб»', cavinum: '«Коллекция» в Cavinum' },
			],
			start: {
				heading: 'Как начать',
				items: [
					{ icon: 'download', text: 'Импорт из Vivino' },
					{ icon: 'cabinet', text: 'Шаблон шкафа' },
					{ icon: 'packagePlus', text: 'Вино на полку' },
				],
			},
			capabilities: {
				heading: 'Возможности',
				items: [
					{ icon: 'gridLayout', text: 'Шкаф и расположение' },
					{ icon: 'sliders', text: 'Поиск по параметрам' },
					{ icon: 'fileText', text: 'Характеристики и описание' },
					{ icon: 'glassPairing', text: 'Подбор бокала' },
				],
			},
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
		ageGate: {
			question: 'Old enough to drink wine?',
			yes: 'Yes',
			no: 'No',
			blocked: "Sorry — this site is age-restricted. Come back when you're old enough.",
		},
		hero: {
			title: ['Your wine cellar', 'A story in every bottle'],
			subtitle:
				"Cavinum helps you track your wine collection and uncover the culture, history, and legends behind every bottle — no sommelier training required",
			cta: 'Download for free',
			tagline: 'Cavinum works with Vivino, not instead of it.',
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
					icon: 'grape',
					text: 'Pick a wine from your collection to explore its region and winery',
				},
			],
		},
		learning: {
			heading: 'Learning about wine',
			text: "For any wine — yours or from the catalog — discover its region, appellation, the winery's or winemaker's story, and the legends behind it",
		},
		selfGuided: {
			icon: 'compass',
			text: 'Explore the world of wine on your own — no sommelier courses, no training',
		},
		openStructure: {
			icon: 'puzzle',
			text: 'Add and customize information to fit your own needs — the structure is open',
		},
		closing: {
			cta: 'Download the free version',
		},
		howTo: {
			heading: 'How it works',
			correspondsLabel: 'corresponds to',
			terms: [
				{ vivino: 'Vivino "My Wines"', cavinum: '"Catalog" in Cavinum' },
				{ vivino: 'Vivino "Cellar"', cavinum: '"Collection" in Cavinum' },
			],
			start: {
				heading: 'Getting started',
				items: [
					{ icon: 'download', text: 'Import from Vivino' },
					{ icon: 'cabinet', text: 'Cabinet template' },
					{ icon: 'packagePlus', text: 'Place a wine on the shelf' },
				],
			},
			capabilities: {
				heading: 'What you can do',
				items: [
					{ icon: 'gridLayout', text: 'Visual cabinet layout' },
					{ icon: 'sliders', text: 'Search by any parameter' },
					{ icon: 'fileText', text: 'Characteristics & description' },
					{ icon: 'glassPairing', text: 'Glass pairing' },
				],
			},
		},
	},
} as const;
