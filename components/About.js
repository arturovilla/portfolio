import React from "react";

function About() {
	return (
		<div className="">
			<div className=" text-gruvred flex flex-col">
				<h1 className=" text-left pl-5 pr-5 md:text-8xl md:pl-11 text-6xl w-full px-0 mx-0">
					Hello, I&apos;m
				</h1>
				<span className=" text-left pl-5 pr-5 md:text-8xl md:pl-11 text-6xl w-full px-0 mx-0">
					Arturo Villalobos
				</span>
			</div>
			<div className="pt-5 pb-8 text-left pl-5 text-gruvgreen text-md w-2/3 md:text-2xl md:pl-11 md:w-1/2 ">
				Currently a{" "}
				<span className=" bg-[#2F3B13] rounded-sm p-1">
					Data Engineer
				</span>{" "}
				at{" "}
				<a
					href="https://standarddata.ai/en/welcome-to-standarddata"
					target="_blank"
					className="hover:text-gray-100 transition-all"
				>
					StandardData&#8599;
				</a>
			</div>
			<p className="text-left pl-5 text-gruvtan text-md w-2/3 md:text-2xl md:pl-11 md:w-1/2 ">
				<br />
				I am a graduate of the Texas A&M College of Engineering with a
				degree in computer science and a minor in statistics, with a
				concentration in data science. I come from a solid technical
				background with a strong interest in statistics and a passion
				for new technologies. My focus and interests vary from machine
				learning to web-development and graphic design.
				<br />
				<br />
				As a freelance software engineer I like taking on projects in
				industries that one would not necessarily think about. Fashion,
				art, product design, and e-commerce are all things I have an
				interest in.
			</p>
		</div>
	);
}

export default About;
