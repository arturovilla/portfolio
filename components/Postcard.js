import React from "react";
import Link from "next/link";

function Postcard({ post }) {
	return (
		<div className=" my-8 py-2 px-4 text-left flex flex-col transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-75">
			<Link href={`/blog/${post.slug}`}>
				<div className="flex flex-col justify-center text-gruvborder">
					<h1 className="font-bold text-2xl md:text-4xl ">
						{post.frontmatter.title}
					</h1>
					<div className=" flex justify-between">
						<p className="text-xs md:text-lg mt-5 text-[#A13D5C]">
							{post.frontmatter.excerpt}
						</p>
						<p className="text-xs md:text-lg mt-5 text-[#A13D5C]">
							{post.frontmatter.date}
						</p>
					</div>
				</div>
			</Link>
			<hr className="border-gruvgreen w-ful mt-3" />
		</div>
	);
}

export default Postcard;
