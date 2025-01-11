import React, { useState } from "react";

const SubNavbarTwo = () => {
	const [selected, setSelected] = useState(0);

	const handleOnClick = (index) => {
		setSelected(index);
	};

	return (
		<div className="flex cursor-pointer shrink-0 font-medium text-xs gap-5">
			<div
				onClick={() => handleOnClick(0)}
				className={selected === 0 ? "text-blue-700 border-b border-blue-700" : ""}>
				Overview
			</div>
			<div
				onClick={() => handleOnClick(1)}
				className={selected === 1 ? "text-blue-700 border-b border-blue-700" : ""}>
				Fundamentals
			</div>
			<div
				onClick={() => handleOnClick(2)}
				className={selected === 2 ? "text-blue-700 border-b border-blue-700" : ""}>
				News Insights
			</div>
			<div
				onClick={() => handleOnClick(3)}
				className={selected === 3 ? "text-blue-700 border-b border-blue-700" : ""}>
				Sentiments
			</div>
			<div
				onClick={() => handleOnClick(4)}
				className={selected === 4 ? "text-blue-700 border-b border-blue-700" : ""}>
				Team
			</div>
			<div
				onClick={() => handleOnClick(5)}
				className={selected === 5 ? "text-blue-700 border-b border-blue-700" : ""}>
				Technicals
			</div>
			<div
				onClick={() => handleOnClick(6)}
				className={selected === 6 ? "text-blue-700 border-b border-blue-700" : ""}>
				Tokenomics
			</div>
		</div>
	);
};

export default SubNavbarTwo;
