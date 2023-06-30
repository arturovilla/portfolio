import fs from "fs";
import path from "path";
import React from "react";
import matter from "gray-matter";
import Postcard from "@/components/Postcard";
import { sortByDate } from "../utils";

export async function getStaticProps() {
	//gets files from folder
	const files = fs.readdirSync(path.join("posts"));

	// get slug and front matter from the actual posts themselves
	const posts = files.map((filename) => {
		// creates the slug
		const slug = filename.replace(".md", "");
		// get  files contents
		const markdownMeta = fs.readFileSync(
			path.join("posts", filename),
			"utf-8"
		);
		// get front matter
		const { data: frontmatter } = matter(markdownMeta);

		return {
			slug,
			frontmatter,
		};
	});

	// this is to return the posts sorted by date
	return {
		props: {
			posts: posts.sort(sortByDate),
		},
	};
	// return {
	// 	props: {
	// 		posts,
	// 	},
	// };
}

function Work({ posts }) {
	return (
		<div className="mt-24 text-white flex flex-col items-center text-center justify-center">
			<div className="text-4xl md:text-7xl font-bold mb-10">
				Work, Projects, and Designs
			</div>

			<div className=" w-3/4">
				{posts.map((post, index) => (
					<Postcard key={index} post={post} />
				))}
			</div>
		</div>
	);
}

export default Work;
