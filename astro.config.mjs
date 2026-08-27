// @ts-check
import { defineConfig } from 'astro/config';

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
});
