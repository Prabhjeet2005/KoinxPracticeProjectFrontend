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

      <div>
        <SubNavbarOne />
			<div className="flex ">
				<div className="p-4 flex flex-col gap-4">
					<Bitcoin />
					<SubNavbarTwo />
					<Performance />
					<Sentiment />
					<About />
					<Tokenomics />
					<Team />
				</div>
				<div className="flex flex-col gap-4">
					<GetStarted />
					<TrendingCoins />
				</div>
			</div>
      </div>
	);
};

export default Content;
