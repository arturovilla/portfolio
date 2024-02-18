---
title: "How I made my portfolio"
date: "06-05-2023"
excerpt: "A recurring learning experience that I really enjoy"
cover_image: "https://i.imgur.com/3qiMNLx.jpg"
tags:
    - Tailwind
    - Next.js
    - Markdown
    - Vercel
---

### Tech stack

When I made my first portfolio the things I could make were very crude and the features I could implement were useless at best and hurtful to the user experience at worst. This is mostly due to my own inexperience. Back then I would make entire static web pages using pure HTML and CSS, I wouldn't pull data from a CDN or database, everything was hard coded, and I wasn't fully aware of what made a good design. (still am not but slowly getting there).

What also hindered my first couple portfolios was my ignorance of popular and useful web-technologies that, in combination with experience , could take my portfolios and the way I present myself to the next level.

| ![First Website](https://i.imgur.com/R92ZbvE.jpg) |
| :--------------------------------------------------------------------------------------------- |
| _This is my first website the font, color, and size of everything is funny to look back on_    |

Nowadays things are a bit different. For this site I wanted to use React, but I also wanted to have a blog-like component and I wanted the site to work well with Google's web crawlers to give me good SEO.
**Next.js** works really well for this. With server side rendering and functions like `getStaticProps()` and `getStaticPaths()`, web-crawlers are able to see the content without the delay that react rendering usually takes, moreover, the blog like component is able to be made at build time, making navigation and the articles themselves super fast on the client side.

```
export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}
```

```
export async function getStaticProps({ params: { slug } }) {
	const markdownMeta = fs.readFileSync(
		path.join("posts", slug + ".md"),
		"utf-8"
	);
	const { data: frontmatter, content } = matter(markdownMeta);

	return {
		props: {
			frontmatter,
			content,
			slug,
		},
	};
}
```

<sup>_How I am able to get file contents and paths for this website_</sup>

### Styling the site

As I said before, the way I used to do styling was just pure css. Tweaking every detail to exactly the way I wanted pixel by pixel. Even when I started experimenting with React I still made tons of css files for the smallest components. This was dysfunctional and unorganized.
All those CSS files bloated up the project and made first loads really long, in some instances over 30 seconds. Then I discovered Tailwind.

| ![Old Project](https://i.imgur.com/xULd7I7.jpg) |
| :------------------------------------------------------------------------------------------- |
| _Old project from school where we implemented a tinder-like platform but for gamers_         |

Tailwind is the best tool that I have found that allows for a vast amount of customizability while still giving you a design system that results in a good looking site. There is already good tooling for it with some vs-code extensions that show you exactly what its doing.
Better yet, all unused css gets purged leading to smaller amounts of css getting transferred over the network.

| ![css tooling](https://i.imgur.com/4xJFqFC.jpg) |
| :------------------------------------------------------------------------------------------- |
| _vs-code extension that shows you what css is being used for tailwind utility functions_     |

Other functions like using [Node-mailer](https://nodemailer.com/about/) for the contact me page, using [Formik](https://formik.org) and [Yup](https://github.com/jquense/yup) as opposed to regular forms and validation, and using [Vercel](https://vercel.com/blog/what-is-vercel) and host the project are all pretty well documented at this point but I still may write separate posts about these specific topics in the future…
