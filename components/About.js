import React from "react";
import { useState, useEffect } from "react";
import parse from "html-react-parser";

function About() {
	const words = [
		"<span className='font-extrabold italic text-5xl md:text-7xl lg:text-8xl' >Arturo <br className='md:hidden' /> Villalobos</span>",
		"<span className='font-extrabold italic text-5xl md:text-7xl lg:text-8xl' >a Software Engineer 👨🏻‍💻</span>",
		"<span className='font-extrabold italic text-5xl md:text-7xl lg:text-8xl' >a Data Scientist 📊</span>",
		"<span className='font-extrabold italic text-5xl md:text-7xl lg:text-8xl' >a Graphic Designer 👨🏼‍🎨</span>",
		"<span className='font-extrabold italic text-5xl md:text-7xl lg:text-8xl' >a 3-D Modeler 🗜️</span>",
	];

	const [index, setIndex] = useState(0);
	useEffect(() => {
		const intervalDelayMilliseconds = words[index].length * 10;
		const interval = setInterval(() => {
			setIndex((prevIndex) => {
				// reset index if current index is greater than array size
				return prevIndex + 1 < words.length ? prevIndex + 1 : 0;
			});
		}, intervalDelayMilliseconds);

		return () => clearInterval(interval);
	});

	return (
		<div className="">
			<div className=" text-[#E4DFDB] flex flex-col">
				<h1 className=" text-left pl-5 pr-5 md:text-8xl md:pl-11 text-6xl w-full px-0 mx-0">
					Hello, I&apos;m{" "}
				</h1>
				<span className=" transition-all text-left pl-5 pr-5 md:text-8xl md:pl-11 w-full px-0 mx-0">
					{parse(words[index])}
				</span>
			</div>
			<p className="text-left pl-5 text-[#E4DFDB] text-md w-2/3 md:text-2xl md:pl-11 md:w-1/2 ">
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
				interest in and am working towards getting to know more about.
			</p>
		</div>
	);
}

export default About;
