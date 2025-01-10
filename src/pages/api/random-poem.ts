import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	try {
		const poems = await getCollection("poems");
		const randomIndex = Math.floor(Math.random() * poems.length);
		const randomPoem = poems[randomIndex];

		return new Response(JSON.stringify({ slug: randomPoem.slug }), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: "Failed to get random poem" }),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}
};
