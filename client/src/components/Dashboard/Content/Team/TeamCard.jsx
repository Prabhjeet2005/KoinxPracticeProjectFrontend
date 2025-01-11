import React from "react";

const TeamCard = ({ image, name }) => {
	return (
		<div className="rounded-xl px-6 py-2" style={{backgroundColor:'rgb(231,244,252)'}}>
			<div className="flex flex-col gap-4 sm:flex-row ">
				<div className="min-w-[25%] flex items-center flex-col">
					<div className="mb-2 ">
						<img className="rounded-lg" src={image} style={{ width: 100 }} />
					</div>
					<div className="font-semibold text-lg">{name}</div>
					<div className="font-extralight text-xs">Designation Here</div>
				</div>
				<div className="flex items-center">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Necessitatibus accusamus, quis fugiat eum facere vitae optio quia
					cumque placeat voluptas, explicabo iste reiciendis rerum officiis
					dignissimos enim aliquid magni omnis.
				</div>
			</div>
		</div>
	);
};

export default TeamCard;
