// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mlabar7621.github.io',
	base: '/astro-site',
	integrations: [mdx(), sitemap()],
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
