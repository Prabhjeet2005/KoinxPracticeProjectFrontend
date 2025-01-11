import React from "react";
import TeamCard from "./TeamCard";
import Footer from "../../Footer";
const Team = () => {
	return (
		<div className="p-4 bg-white rounded-xl sm:mb-0 mb-10">
			<div>
				<h3 className="font-semibold text-2xl">Team</h3>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem
					iusto quis aliquam illum. Natus, dolores similique corrupti veniam
					corporis, sint odio harum cum animi adipisci magnam quae consequatur
					mollitia.
				</div>
				<div className="flex flex-col gap-4 mt-4">
					<TeamCard
						image={"/src/assets/JohnSmith.png"}
						name={"John Smith"}
					/>
					<TeamCard
						image={"/src/assets/Elina.png"}
						name={"Elina Williams"}
					/>
					<TeamCard
						image={"/src/assets/John2.png"}
						name={"John Smith"}
					/>
					<div className=" mt-5 sm:hidden flex">
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
