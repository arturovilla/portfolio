/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				druk: ["var(--font-Druk-bold)"],
			},
			colors: {
				gruvred: "#F12F26",
				gruvtan: "#F7E2BF",
				gruvpink: "#EF5787",
				gruvmute: "#918175",
				gruvblue: "#5A92C4",
				gruvgreen: "#94B736",
				gruvpurple: "#C37CC1",
				gruvbold: "#FEA090",
				gruvline: "#801914",
				gruvborder: "#C0476C",
			},
			typography: ({ theme }) => ({
				pink: {
					css: {
						"--tw-prose-body": theme("colors.gruvtan"),
						"--tw-prose-headings": theme("colors.gruvred"),
						"--tw-prose-lead": theme("colors.pink[700]"),
						"--tw-prose-links": theme("colors.pink[500]"),
						"--tw-prose-bold": theme("colors.gruvbold"),
						"--tw-prose-counters": theme("colors.gruvpink"),
						"--tw-prose-bullets": theme("colors.gruvpink"),
						"--tw-prose-hr": theme("colors.gruvline"),
						"--tw-prose-quotes": theme("colors.gruvpink"),
						"--tw-prose-quote-borders": theme("colors.gruvborder"),
						"--tw-prose-captions": theme("colors.gruvgreen"),
						"--tw-prose-code": theme("colors.pink[700]"),
						"--tw-prose-pre-code": theme("colors.pink[100]"),
						"--tw-prose-pre-bg": theme("colors.pink[900]"),
						"--tw-prose-th-borders": theme("colors.gruvgreen"),
						"--tw-prose-td-borders": theme("colors.gruvgreen"),
						"--tw-prose-invert-body": theme("colors.pink[200]"),
						"--tw-prose-invert-headings": theme("colors.white"),
						"--tw-prose-invert-lead": theme("colors.pink[300]"),
						"--tw-prose-invert-links": theme("colors.white"),
						"--tw-prose-invert-bold": theme("colors.white"),
						"--tw-prose-invert-counters": theme("colors.pink[400]"),
						"--tw-prose-invert-bullets": theme("colors.pink[600]"),
						"--tw-prose-invert-hr": theme("colors.pink[700]"),
						"--tw-prose-invert-quotes": theme("colors.pink[100]"),
						"--tw-prose-invert-quote-borders":
							theme("colors.pink[700]"),
						"--tw-prose-invert-captions": theme("colors.pink[400]"),
						"--tw-prose-invert-code": theme("colors.white"),
						"--tw-prose-invert-pre-code": theme("colors.pink[300]"),
						"--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
						"--tw-prose-invert-th-borders":
							theme("colors.pink[600]"),
						"--tw-prose-invert-td-borders":
							theme("colors.pink[700]"),
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
	],
};
