import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { ui_text } from '@i18n/ui';

const site_title = ui_text.en.nav.site_title;
const site_description = ui_text.en.nav.site_description;

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: site_title,
		description: site_description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}
