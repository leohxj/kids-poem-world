/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						color: "#333",
						maxWidth: "100%",
						h2: {
							color: "#1a1a1a",
							fontWeight: "700",
							marginTop: "2em",
							marginBottom: "1em",
						},
						p: {
							marginTop: "1.25em",
							marginBottom: "1.25em",
						},
						a: {
							color: "#3182ce",
							"&:hover": {
								color: "#2c5282",
							},
						},
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
