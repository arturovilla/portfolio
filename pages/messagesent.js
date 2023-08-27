import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Messagesent() {
	const router = useRouter();

	return (
		<div className="mt-48 mb-96">
			<div className=" text-gruvred text-center flex flex-col items-center justify-center">
				<h1 className="text-6xl font-bold">
					Thanks for your email, {router.query.name}!
				</h1>
				<p className="mt-20 mb-20 text-gruvpink">
					I have recieved your email and will get in touch soon by
					replying back to{" "}
					<span className="font-bold">{router.query.email}.</span>
				</p>
				<Link href="/">
					<p className="text-lg py-1 px-5 text-gruvpink rounded-md border border-gruvpink hover:bg-gruvpink hover:text-black transition duration-150 ease-in-out">
						Go back to home page
					</p>
				</Link>
			</div>
		</div>
	);
}

export default Messagesent;
