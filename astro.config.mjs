// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://mikhail-labar.com',
	base: '',
	integrations: [mdx(), sitemap(), react()],
	i18n: {
    	locales: ["en", "fr", "de", "ru", "be"],
    	defaultLocale: "en",
		routing: {
			prefixDefaultLocale: true
		}
  	},
	vite: {
    resolve: {
      alias: {
        '@layouts': '/src/layouts',
        '@components': '/src/components',
		'@i18n': '/src/i18n',
		'@styles': '/src/styles',
      	"@content": '/src/content'
      }
    }
  }
});