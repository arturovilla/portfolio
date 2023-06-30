import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import Link from "next/link";

export default function PostPage({
	frontmatter: { title, date, cover_image },
	content,
	slug,
}) {
	return (
		<div className="text-white mt-32 flex flex-col">
			<img src={cover_image} />
			<div className=" flex flex-col text-left w-4/6 mx-auto">
				<h1 className="text-4xl md:text-7xl font-extrabold text-gruvred">
					{title}
				</h1>
				<p className="text-sm md:text-2xl font-thin text-gruvpink">
					{date}
				</p>
			</div>
			<div className="prose lg:prose-2xl prose-pink mx-auto max-w-none w-4/6 prose-img:rounded-xl prose-img:mx-auto">
				<div
					dangerouslySetInnerHTML={{
						__html: marked(content, {
							mangle: false,
							headerIds: false,
						}),
					}}
				/>
			</div>
		</div>
	);
}

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
