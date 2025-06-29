export function slugify(title: string) {
  return (
    title
      // remove leading & trailing whitespace
      .trim()
      // remove special characters
      .replace(/[^A-Za-z0-9 ]/g, '')
      // replace spaces
      .replace(/\s+/g, '-')
      // remove leading & trailing separtors
      .replace(/^-+|-+$/g, '')
      // output lowercase
      .toLowerCase()
  )
}

import type { CollectionEntry } from 'astro:content';
import type { BlogLocales } from '@i18n/locales';

export function filterPosts(posts: CollectionEntry<BlogLocales>[], {
    filterDrafts = true,
    filterFuturePosts = true,
    orderByDate = true,
} = {}) {
    const filteredPosts = posts.filter((post) => {
        const { pubDate, draft } = post.data;
        if (filterDrafts && draft) return false;
        if (filterFuturePosts && new Date(pubDate) > new Date()) return false;
        return true;
    });

    if(orderByDate) {
        filteredPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    } else {
        filteredPosts.sort(() => Math.random() - 0.5)
    }

    return filteredPosts;
}


//this is beign directly taken from chatgpt
export function preparePosts(rawPosts: any[]) {
  return rawPosts.map((p) => ({
    title: p.data.title,
    slug: p.slug,
    date: p.data.date,
    rating: p.data.rating ?? 0,
  }));
}
