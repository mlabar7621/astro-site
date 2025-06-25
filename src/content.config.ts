import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import {locales} from '@i18n/locales.ts';

const blogCollections = Object.fromEntries(
	locales.map((locale) => [
    `blog-${locale}`,
	defineCollection({
      	// Load Markdown and MDX files in the relevant directory.
		loader: glob({ base: `./src/content/blog/${locale}`, pattern: '*.{md,mdx}' }),
      	schema: z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.string().optional(),
			tag: z.string(),
			draft: z.boolean(),
			rating: z.number(),
      }),
    }),
  ])
);

export const collections = {
  ...blogCollections,
};
