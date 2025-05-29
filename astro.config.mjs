// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	i18n: {
    	locales: ["en", "fr", "de", "ru", "be"],
    	defaultLocale: "en",
  	},
	vite: {
    resolve: {
      alias: {
        '@layouts': '/src/layouts',
        '@components': '/src/components',
		'@i18n': '/src/i18n',
		'@consts': '/src/consts',
		'@styles': '/src/styles',
      }
    }
  }
});
