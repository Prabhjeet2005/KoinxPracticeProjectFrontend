import React from "react";
import SubNavbarOne from "../SubNavbar1";
import Bitcoin from "./Bitcoin/Bitcoin";
import SubNavbarTwo from "../SubNavbar2";
import Performance from "./Performance/Performance";
import Sentiment from "./Sentiment/Sentiment";
import About from "./About/About";
import Tokenomics from "./Tokenomics/Tokenomics";
import GetStarted from "./GetStarted/GetStarted";
import TrendingCoins from "./TrendingCoins/TrendingCoins";
import Team from "./Team/Team";

const Content = () => {
	return (
		<div
			className="p-4 flex flex-col gap-4 "
			style={{ backgroundColor: "rgb(239,242,245)" }}>
			{/* Top SubNavbar */}
			<SubNavbarOne className="" />

			{/* Main Content Area */}
			<div className="flex flex-col md:flex-row gap-4">
				{/* Left Content */}
				<div className="flex md:w-[73%] flex-col gap-4">
					<Bitcoin />
					<SubNavbarTwo />
					<Performance />
					<Sentiment />
					<About />
					<Tokenomics />
					<Team />
				</div>

				{/* Right Sidebar */}
				<div className="flex md:w-[27%] flex-col gap-4">
					<GetStarted />
					<TrendingCoins />
				</div>
			</div>
		</div>
	);
};

export default Content;
