import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import staticLogo from "../public/00012.webp";

import {
	AiOutlineMenu,
	AiOutlineClose,
	AiOutlineLinkedin,
	AiOutlineGithub,
	AiOutlineMail,
} from "react-icons/ai";

function Navbar() {
	const email = "artuvillam@gmail.com";
	const [menuOpen, setMenuOpen] = useState(false);
	const handleNav = () => {
		setMenuOpen(!menuOpen);
	};

	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;

		if (currentScrollPos > prevScrollPos) {
			setVisible(false);
		} else {
			setVisible(true);
		}

		setPrevScrollPos(currentScrollPos);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	});

	/////////////////////////////////////////////
	return (
		<nav className={`sticky w-full h-32  ${visible ? "top-0" : ""} `}>
			<div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 py-24 md:py-32">
				<div className="">
					<Link href="/">
						<Image
							src={staticLogo}
							alt="spinning gif saying a.dev"
							className="cursor-pointer"
							width="auto"
							height="300"
						/>
					</Link>
				</div>
				<div className="hidden sm:flex">
					<ul className="flex text-gruvpink">
						<Link href="/">
							<li className="ml-10 hover:border-b hover:border-gruvpink text-lg py-1">
								Home
							</li>
						</Link>

						<Link href="/work">
							<li className="ml-10 hover:border-b hover:border-gruvpink text-lg py-1">
								Work
							</li>
						</Link>

						<Link href="/resume">
							<li className="ml-10 hover:border-b hover:border-gruvpink text-lg py-1">
								Resume
							</li>
						</Link>
						<Link href="/contact">
							<li className="ml-10 text-lg py-1 px-5 text-gruv rounded-md border border-gruvpink hover:bg-gruvpink hover:text-[#0C0D1C]  transition duration-150 ease-in-out">
								Contact
							</li>
						</Link>
					</ul>
				</div>
				{/* mobile menu icon*/}
				<div className="sm:hidden flex justify-end items-center h-full w-full">
					<div
						onClick={handleNav}
						className="sm:hidden pl-20 cursor-pointer "
					>
						<AiOutlineMenu size={25} color="#E95584" />
					</div>
				</div>
			</div>
			{/* mobile menu */}
			<div
				className={
					menuOpen
						? "fixed left-0 top-0 w-[100%] sm:hidden h-screen bg-gray-900/70 backdrop-blur-sm p-10 ease-in duration-500"
						: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
				}
			>
				{/* inside mobile menu */}
				<div className="flex w-full items-center justify-end ">
					<div onClick={handleNav} className="cursor-pointer">
						<AiOutlineClose size={20} color="#E95584" />
					</div>
				</div>
				<div className="flex-col items-center text-center text-5xl py-4 text-gruvred">
					<ul>
						<Link href="/">
							<li
								onClick={() => setMenuOpen(false)}
								className="hover:border-b border-gruvgreen pt-10 pb-3"
							>
								Home
							</li>
						</Link>
						<Link href="/work">
							<li
								onClick={() => setMenuOpen(false)}
								className="hover:border-b border-gruvgreen pt-10 pb-3"
							>
								Work
							</li>
						</Link>

						<Link href="/resume">
							<li
								onClick={() => setMenuOpen(false)}
								className="hover:border-b border-gruvgreen pt-10 pb-3"
							>
								Resume
							</li>
						</Link>
						<Link href="/contact">
							<li
								onClick={() => setMenuOpen(false)}
								className="hover:border-b border-gruvgreen pt-10 pb-3"
							>
								Contact
							</li>
						</Link>
					</ul>
				</div>
				{/* socials, legal, and other links inside the mobile menu */}
				<div className="flex flex-row justify-around pt-52 items-center">
					<a
						href="https://www.linkedin.com/in/rtvro/"
						target="_blank"
					>
						<AiOutlineLinkedin
							size={40}
							className="cursor-pointer"
							color="#F12F26"
						/>
					</a>
					<a href="https://github.com/arturovilla" target="_blank">
						<AiOutlineGithub
							size={40}
							className="cursor-pointer"
							color="#F12F26"
						/>
					</a>
					<a href={`mailto:${email}`}>
						<AiOutlineMail
							size={40}
							className="cursor-pointer"
							color="#F12F26"
						/>
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
