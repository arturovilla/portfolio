import React from "react";
import {
	AiOutlineLinkedin,
	AiOutlineGithub,
	AiOutlineMail,
} from "react-icons/ai";

const email = "artuvillam@gmail.com";
function Footer() {
	return (
		<div className="bg-pink-900  flex-col items-center text-center py-16 sticky top-[100vh] mt-52">
			<div className="flex justify-center ">
				<div className="flex justify-between w-1/2 md:w-1/5 ">
					<a
						href="https://www.linkedin.com/in/rtvro/"
						target="_blank"
					>
						<AiOutlineLinkedin
							size={40}
							className="cursor-pointer"
							color="black"
						/>
					</a>
					<a href="https://github.com/arturovilla" target="_blank">
						<AiOutlineGithub
							size={40}
							className="cursor-pointer"
							color="black"
						/>
					</a>
					<a href={`mailto:${email}`}>
						<AiOutlineMail
							size={40}
							className="cursor-pointer"
							color="black"
						/>
					</a>
				</div>
			</div>

			<div className=" mt-4">
				<p>Created by Arturo Villalobos. © 2023</p>
			</div>
		</div>
	);
}

export default Footer;
