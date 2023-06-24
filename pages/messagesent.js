import React from "react";
import { useRouter } from "next/router";

function Messagesent() {
	const router = useRouter();

	return (
		<div className="mt-48">
			<div className="text-white">
				thank you for you email, {router.query.name}!
			</div>
		</div>
	);
}

export default Messagesent;
