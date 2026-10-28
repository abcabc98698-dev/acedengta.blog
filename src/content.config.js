import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const post = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/post' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		dateModified: z.coerce.date().optional(),
		read: z.number().optional(),
		author: z.string().optional(),
		category: z.string().optional(),
		tags: z.array(z.string()).optional(),
		img: z.string().optional(),
		img_alt: z.string().optional(),
		featured: z.boolean().optional(),
		primaryKeyword: z.string().optional(),
		searchIntent: z.string().optional(),
		contentCluster: z.string().optional(),
		pillarPage: z.string().optional(),
		relatedArticles: z.array(z.string()).optional(),
		draft: z.boolean().optional(),
	}),
});

const changelog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/changelog' }),
	schema: z.object({
		title: z.string(),
		publishDate: z.coerce.date(),
		version: z.string().optional(),
		description: z.string().optional(),
	}),
});

export const collections = { post, changelog };
