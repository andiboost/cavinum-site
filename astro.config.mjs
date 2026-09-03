// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://cavinum.me',
	i18n: {
		locales: ['ru', 'en'],
		defaultLocale: 'ru',
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			// Корневой 404.astro Astro исключает сам (специальный /404.html), но
			// вложенный src/pages/en/404.astro — обычный маршрут (/en/404/) и без
			// явного фильтра тоже попадает в sitemap. Проверено сборкой.
			filter: (page) => !page.endsWith('/en/404/'),
		}),
	],
});
