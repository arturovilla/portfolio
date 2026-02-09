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
        // Geist
        gsans: ["var(--font-geist-sans)"],
        gmono: ["var(--font-geist-mono)"],
        // Geist Pixel variants
        "gp-square": ["var(--font-geist-pixel-square)"],
        "gp-grid": ["var(--font-geist-pixel-grid)"],
        "gp-circle": ["var(--font-geist-pixel-circle)"],
        "gp-triangle": ["var(--font-geist-pixel-triangle)"],
        "gp-line": ["var(--font-geist-pixel-line)"],
			},
			colors: {
			gruvred:    "#f5e0dc", // Rosewater – soft light accent / highlights
      gruvtan:    "#f2cdcd", // Flamingo – warm neutral
      gruvpink:   "#f5c2e7", // Pink – primary pink accent
      gruvmute:   "#a6adc8", // Subtext 0 – muted text / secondary
      gruvblue:   "#89dceb", // Sky – bright cyan-blue
      gruvgreen: "#a6e3a1", // Green – success / positive
      gruvpurple:"#cba6f7", // Mauve – primary purple
      gruvbold:  "#fab387", // Peach – bold / attention-grabbing
      gruvline:  "#313244", // Surface 0 – dividers / lines
      gruvborder:"#45475a", // Surface 1 – borders / containers
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
