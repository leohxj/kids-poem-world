// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { file, glob } from "astro/loaders";

const poemsCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/poems" }),
	schema: z.object({
		title: z.string(),
		author: z.string(),
		dynasty: z.string(),
		tags: z.array(z.string()).optional(),
		description: z.string().optional(),
	}),
});

export const collections = {
	poems: poemsCollection,
};
