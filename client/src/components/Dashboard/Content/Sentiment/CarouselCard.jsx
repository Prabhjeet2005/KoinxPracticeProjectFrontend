import React from "react";

const CarouselCard = ({ image,bg,color }) => {
	return (
		<div className=""> 
			<div className={`flex gap-2 text-sm p-4 rounded-xl min-w-[50%] ${bg}`}>
				<div className={`min-w-[15%] flex items-center justify-center max-h-10 text-white ${color} p-1 rounded-full`}>
					{image}
				</div>
				<div className="flex flex-col gap-2">
					<div className="font-semibold">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
						repudiandae, cum debitis officia 
					</div>
					<div className="text-sm font-light">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
						repudiandae, cum debitis officia delectus quae quo velit tempore
						perspiciatis enim accusantium fuga quaerat, sint quas, ratione
						excepturi beatae ipsam pariatur.
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarouselCard;
