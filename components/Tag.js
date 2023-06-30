import React from "react";

function Tag({ tag }) {
	return (
		<div className="text-red bg-red-600 opacity-10 not-prose">
			{tag}
			<div></div>
		</div>
	);
}

export default Tag;
