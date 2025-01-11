import React from "react";

const FooterContentCard = ({ heading, coin }) => {
	return (
		<div className="p-4 bg-white shadow rounded-lg flex flex-col gap-4">

			{/* Coin Information */}
			<div>
				<div className="flex items-center w-full">
					<div className="flex mr-2 items-center gap-2">
						<img src={coin.icon} alt={coin.name} className="w-6 h-6" />
						<span className="text-gray-700 font-medium">{coin.name}</span>
					</div>
					<span
						className={`text-sm bg-green-100 p-0.5 rounded font-medium ${
							coin.change > 0 ? "text-green-500" : "text-red-500"
						}`}>
						{coin.change > 0 ? `+${coin.change}%` : `${coin.change}%`}
					</span>
				</div>
				<div className="text-lg font-semibold text-gray-800">
					${coin.price.toLocaleString()}
				</div>

				{/* Placeholder for Chart */}
				<div className="w-full h-12">
					{/* Replace this div with a small chart or Sparkline */}
					<div
						className={`h-full rounded-md ${
							coin.change > 0 ? "bg-green-100" : "bg-red-100"
						}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default FooterContentCard;
