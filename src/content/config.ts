import { defineCollection, z } from "astro:content";

const poemsCollection = defineCollection({
	type: "content",
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
