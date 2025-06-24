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
import type { blogLocales } from '@i18n/locales';

export function filterPosts(posts: CollectionEntry<blogLocales>[], {
    filterDrafts = true,
    filterFuturePosts = true,
    orderByDate = true,
    limit = undefined,
} = {}) {
    const filteredPosts = posts.filter((post) => {
        const { pubDate, draft } = post.data;
        if (filterDrafts && draft) return false;
        if (filterFuturePosts && new Date(pubDate) > new Date()) return false;
        return true;
    });

    if(orderByDate) {
        posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    } else {
        posts.sort(() => Math.random() - 0.5)
    }

    if(typeof limit === "number"){
        return filteredPosts.slice(0, limit);
    }
    return filteredPosts;
}