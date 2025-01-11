import React, { useState, useEffect } from "react";
import axios from "axios";
import TradingViewWidget from "./TradingViewWidget"; // Make sure the import path is correct

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

const getBitcoinPrice = async () => {
	const url =
		"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
	try {
		const response = await axios.get(url);
		return response.data.bitcoin.usd;
	} catch (error) {
		console.error("Error fetching Bitcoin price:", error);
		throw error;
	}
};

const getBitcoin24hChange = async () => {
	const url =
		"https://api.coingecko.com/api/v3/coins/bitcoin?localization=false";
	try {
		const response = await axios.get(url);
		return response.data.market_data.price_change_percentage_24h;
	} catch (error) {
		console.error("Error fetching Bitcoin 24h price change:", error);
		throw error;
	}
};

const Bitcoin = () => {
	const [trendingCoins, setTrendingCoins] = useState([]);
	const [bitcoinPrice, setBitcoinPrice] = useState(null);
	const [dayChange, setDayChange] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch trending coins, Bitcoin price, and 24h change
				const [coins, price, change] = await Promise.all([
					getTrendingCoins(),
					getBitcoinPrice(),
					getBitcoin24hChange(),
				]);
				setTrendingCoins(coins);
				setBitcoinPrice(price);
				setDayChange(change); // Set the 24h price change
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <div className="text-center p-4">Loading...</div>;
	}

	return (
		<div className="bg-white overflow-auto rounded-xl shadow-md p-6 min-w-full mx-auto">
			<div className="mb-4">
				<div className="font-semibold flex items-center gap-2 text-2xl">
					<img className="w-8 h-8" src={"/images/bit.png"} alt="Bitcoin" />
					Bitcoin <span className="font-light text-sm">BTC</span>
					<span className="text-sm ml-5 font-normal bg-gray-500 text-white p-1 rounded-lg">
						Rank #1
					</span>
				</div>
				<div className="text-xl flex gap-6 items-center font-medium mt-2">
					${bitcoinPrice.toFixed(2)}
					<div
						className={`text-xs flex items-center font-semibold ${
							dayChange > 0
								? "text-green-500 bg-green-100 p-1 rounded"
								: "text-red-500 bg-red-100 p-1 rounded"
						}`}>
						{dayChange > 0 ? "▲" : "▼"} {dayChange.toFixed(2)}%
					</div>
					<p className="font-light text-sm">(24H)</p>
				</div>
			</div>
			<hr className="mt-5" />
			<div className="font-medium mt-5 text-xl mb-4">
				Bitcoin Price Chart (USD)
			</div>
			<TradingViewWidget />
		</div>
	);
};

export default Bitcoin;
