import React from "react";
import EastIcon from "@mui/icons-material/East";
const GetStarted = () => {
	return (
		<div
			style={{ backgroundColor: "rgb(0,88,244)" }}
			className="rounded-xl  self-center  text-white md:max-w-fit max-w-[50%]  py-5 px-7">
			<div className="flex gap-3 flex-col items-center text-center">
				<div className="text-2xl font-semibold">
					Get Started with KoinX for Free
				</div>
				<div className="text-xs font-light">
					With our range of features that you can equip for free, KoinX allows
					you to be more educated and aware of your tax reports
				</div>
				<div>
					<img src="/images/getStartedimg.png" />
				</div>
				<button className="text-xs mb-4 font-semibold flex gap-1 items-center justify-center text-black py-2 px-2 bg-white rounded-lg">
					Get Started For Free <EastIcon fontSize="" className="text-black " />
				</button>
			</div>
		</div>
	);
};

export default GetStarted;
