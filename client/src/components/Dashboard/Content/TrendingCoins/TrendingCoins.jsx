import React, { useEffect, useState } from "react";
import axios from "axios";

const getTrendingCoins = async () => {
	const url = "https://api.coingecko.com/api/v3/search/trending";
	try {
		const response = await axios.get(url);
		return response.data.coins;
	} catch (error) {
		console.error("Error fetching trending coins:", error);
		throw error;
	}
};

const TrendingCoins = () => {
	const [trendingCoins, setTrendingCoins] = useState([]);

	useEffect(() => {
		// Fetch trending coins data
		const fetchTrendingCoins = async () => {
			try {
				const coins = await getTrendingCoins();
				setTrendingCoins(coins);
			} catch (error) {
				console.error("Error fetching trending coins:", error);
			}
		};
		fetchTrendingCoins();
	}, []);

	if (trendingCoins.length === 0) {
		return <div className="text-center p-4">Loading...</div>;
	}

	return (
		<div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
			{/* Header */}
			<div className="font-semibold text-2xl mb-4">Trending Coins (24h)</div>
			{/* Coin List */}
			<div className="space-y-4 text-xs">
				{trendingCoins.slice(0, 3).map((coin) => (
					<div
						key={coin.item.id}
						className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
						{/* Coin Info */}
						<div className="flex items-center space-x-4">
							<img
								src={coin.item.small}
								alt={coin.item.name}
								className="w-8 h-8 rounded-full"
							/>
							<div>
								<div className="font-medium">{coin.item.name}</div>
								<div className="text-xs">
									({coin.item.symbol.toUpperCase()})
								</div>
							</div>
						</div>
						{/* Price Change */}
						<div
							className={`text-xs font-semibold ${
								coin.item.data.price_change_percentage_24h.usd > 0
									? "text-green-500 bg-green-100 p-1 rounded"
									: "text-red-500 bg-red-100 p-1 rounded"
							}`}>
							{coin.item.data.price_change_percentage_24h.usd > 0 ? "▲" : "▼"}{" "}
							{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TrendingCoins;
