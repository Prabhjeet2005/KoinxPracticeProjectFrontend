import React from "react";

const FooterContentCard = React.memo(({ coin }) => {
	const price = coin ? coin.price : 0;
	const change = coin ? coin.change : 0;
	const priceFormatted =
		typeof price === "number" ? price.toLocaleString() : "0"; // Format price as a number
	const changeFormatted = change.toFixed(2); // Format change to 2 decimal places

	const coinIcon = coin ? coin.icon : "https://via.placeholder.com/24"; // Default icon for the coin
	const coinName = coin ? coin.name : "Unnamed Coin"; // Default name if no coin name provided

	return (
		<div className="p-4 bg-white shadow rounded-lg flex flex-col gap-4">
			<div>
				<div className="flex items-center w-full mb-2">
					<div className="flex mr-2 items-center gap-2">
						<img style={{borderRadius:"100%"}} src={coinIcon} alt={coinName} className="w-6 h-6" />
						<span className="text-gray-700 font-medium">{coinName}</span>
					</div>

					<span
						className={`text-sm p-0.5 rounded font-medium ${
							change > 0
								? "bg-green-100 text-green-500"
								: "bg-red-100 text-red-500"
						}`}>
						{change > 0 ? `+${changeFormatted}%` : `${changeFormatted}%`}
					</span>
				</div>

				<div className="text-lg font-semibold text-gray-800">
					${priceFormatted}
				</div>

				<div className="w-full h-12 mt-2">
					{coin?.sparkline ? (
						<img
							src={coin.sparkline}
							alt="Price Sparkline"
							className="h-full w-full rounded-md"
						/>
					) : (
						<div
							className={`h-full rounded-md ${
								change > 0 ? "bg-green-100" : "bg-red-100"
							}`}
						/>
					)}
				</div>
			</div>
		</div>
	);
});

export default FooterContentCard;
