import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { blogLocales, locales } from '@i18n/locales';

export async function get({ request }) {
  let items = [];

  for (const lang of locales) {
    const blogLocale = blogLocales[lang];
    const posts = await getCollection(blogLocale);

    for (const post of posts) {
      items.push({
        title: post.data.title,
        link: `/blog/${lang}/${post.slug}/`,
        pubDate: post.data.date,
        description: post.data.description,
        language: lang,
      });
    }
  }

  // Generate RSS XML from items
  const rss = `
    <rss version="2.0">
      <channel>
        <title>Your Blog Title</title>
        <link>https://yourdomain.com/</link>
        <description>Your blog description</description>
        ${items.map(item => `
          <item>
            <title>${item.title}</title>
            <link>${item.link}</link>
            <pubDate>${item.pubDate}</pubDate>
            <description>${item.description}</description>
            <language>${item.language}</language>
          </item>
        `).join('')}
      </channel>
    </rss>
  `;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
