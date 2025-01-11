import React from "react";
import LeftImgRightText from "./LeftImgRightText";

const About = () => {
	return (
		<div className="p-4 bg-white rounded-xl">
			<div>
				<div className="text-xl md:text-2xl font-semibold">About Bitcoin</div>
				<div>
					<div className="text-lg font-semibold mt-4">What is Bitcoin?</div>
					<div className="text-sm mt-2">
						Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
						of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
						-7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
						its 7-day all-time low of $16,394.75. BTC has a circulating supply
						of 19.24 M BTC and a max supply of 21 M BTC.
					</div>
					<hr className="border-gray-300 mt-4 mb-4 " />
					<div>
						<div className="text-lg font-semibold">
							Lorem ipsum dolor sit amet
						</div>
						<div className="text-sm  mt-2">
							Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
							lobortis tristique pharetra. Diam id et lectus urna et tellus.
							aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
							sed. Quam scelerisque fermentum sapien morbi sodales odio sed
							rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
							sed. Quam scelerisque fermentum sapien morbi sodales odio sed
							rhoncus.
						</div>
						<div className="text-sm mt-2">
							Diam praesent massa dapibus magna aliquam a dictumst volutpat.
							Egestas vitae pellentesque auctor amet. Nunc sagittis libero
							adipiscing cursus felis pellentesque interdum. Odio cursus
							phasellus velit in senectus enim dui. Turpis tristique placerat
							interdum sed volutpat. Id imperdiet magna eget eros donec cursus
							nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
							Integer dignissim augue viverra nulla et quis lobortis phasellus.
							Integer pellentesque enim convallis ultricies at.
						</div>
						<div className="text-sm mt-2">
							Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
							massa vel convallis duis ac. Mi adipiscing semper scelerisque
							porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
							congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
							eget. Ullamcorper dui
						</div>
					</div>
					<hr className="border-gray-300 mt-4 mb-4 " />
					<div className="text-xl md:text-2xl font-semibold">
						Already Holding Bitcoin?
					</div>
					<div className="flex flex-col sm:flex-row mt-4 gap-4">
						<div className="min-w-full sm:min-w-[45%] flex-1">
							<LeftImgRightText
								color={
									"bg-gradient-to-br from-green-400 to-blue-700 rounded-lg"
								}
								image={"/public/ci1.png"}
								heading={"Calculate Your Profits"}
							/>
						</div>
						<div className="min-w-full sm:min-w-[45%] flex-1">
							<LeftImgRightText
								color={
									"bg-gradient-to-br from-orange-400 to-red-700 rounded-lg"
								}
								image={"/public/ci1.png"}
								heading={"Calculate your tax liability"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
