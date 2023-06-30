import React from "react";
import Link from "next/link";

function Postcard({ post }) {
	return (
		<div className=" my-8 py-2 px-4 text-left flex flex-col transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-75">
			<Link href={`/blog/${post.slug}`}>
				<div className="flex flex-col justify-center text-white">
					<h1 className="font-bold text-4xl ">
						{post.frontmatter.title}
					</h1>
					<div className=" flex justify-between">
						<p className="text-lg mt-5 text-gray-400">
							{post.frontmatter.excerpt}
						</p>
						<p className="text-lg mt-5 text-gray-400">
							{post.frontmatter.date}
						</p>
					</div>
				</div>
			</Link>
			<hr className="bg-white w-ful mt-3" />
		</div>
	);
}

export default Postcard;
