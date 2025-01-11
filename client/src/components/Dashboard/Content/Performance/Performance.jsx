// Performance.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

// Registering the necessary components of Chart.js
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

// Function to get data for Graph1 and Graph2
const getBitcoinData = async (days) => {
	try {
		const response = await axios.get(
			`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart`,
			{
				params: {
					vs_currency: "usd",
					days: days,
				},
			}
		);
		const prices = response.data.prices;
		const labels = prices.map((price) =>
			new Date(price[0]).toLocaleDateString()
		);
		const data = prices.map((price) => price[1]);
		return { labels, data };
	} catch (error) {
		console.error("Error fetching Bitcoin data:", error);
		return { labels: [], data: [] }; // Return empty data in case of error
	}
};

const Performance = () => {
	const [graph1Data, setGraph1Data] = useState({ labels: [], data: [] });
	const [graph2Data, setGraph2Data] = useState({ labels: [], data: [] });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchGraphData = async () => {
			setLoading(true); // Explicitly set loading to true
			try {
				const data1 = await getBitcoinData(1); // Today's data (1 day)
				const data2 = await getBitcoinData(365); // 52W data (365 days)
				setGraph1Data(data1);
				setGraph2Data(data2);
			} catch (error) {
				console.error("Error fetching graph data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchGraphData();
	}, []);

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				type: "category", // Switch to category scale for this case
				ticks: {
					autoSkip: true,
					maxTicksLimit: 10, // Limit number of ticks for clarity
				},
			},
		},
	};

	// Handling empty data gracefully (if there's no data, render an empty div or a message)
	if (loading) {
		return <div className="text-center p-4">Loading...</div>;
	}

	if (!graph1Data.labels.length || !graph2Data.labels.length) {
		return <div className="text-center p-4">No data available.</div>;
	}

	return (
		<div className="p-4 gap-4 flex flex-col bg-white rounded-xl">
			<div className="text-xs gap-4 font-extralight flex flex-col">
				<h3 className="text-xl font-semibold">Performance</h3>
				<div className="flex items-center justify-between">
					<div>
						<div>Today's Low</div>
						<div>46,930.22</div>
					</div>
					<div className="w-full ml-2 mr-2 rounded-full h-2 bg-gradient-to-r via-orange-400 from-red-600 to-green-500"></div>
					<div>
						<div>Today's High</div>
						<div>49,343.83</div>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<div>
						<div>52W Low</div>
						<div>15,599.05</div>
					</div>
					<div className="w-full ml-2 mr-2 rounded-full h-2 bg-gradient-to-r via-orange-400 from-red-600 to-green-500"></div>
					<div></div>
					<div>
						<div>52W High</div>
						<div>49,743.83</div>
					</div>
				</div>
			</div>
			<div>
				<h4 className="mb-3 text-xl font-semibold">Fundamentals</h4>
				<div className="flex gap-4 flex-col md:flex-row justify-between">
					<div className="flex flex-col min-w-[45%]">
						<div className="flex p-2 border-b items-center justify-between">
							<div className="font-light text-sm">Bitcoin Price</div>
							<div className="text-sm font-medium">$16,815.46</div>
						</div>
						<div className="flex p-2 border-b items-center justify-between">
							<div className="font-light text-sm">Market Cap</div>
							<div className="text-sm font-medium">$323,937,064,947</div>
						</div>
						<div className="flex p-2 gap-2 border-b items-center justify-between">
							<div className="font-light text-sm">
								24-hour Low / 24-hour High
							</div>
							<div className="text-sm font-medium">$16,300.27/$16,874.70</div>
						</div>
						<div className="flex p-2 border-b items-center justify-between">
							<div className="font-light text-sm">Market Cap Dominance</div>
							<div className="text-sm font-medium">38.14%</div>
						</div>
						<div className="flex p-2 border-b items-center justify-between">
							<div className="font-light text-sm">7-day Low / 7-day High</div>
							<div className="text-sm font-medium">$15,599.05  /  $16,874.70</div>
						</div>
					</div>
					<div className="flex flex-col min-w-[45%]">
						<div className="flex p-2 border-b items-center justify-between">
							<div className="font-light text-sm">Volume / Market Cap</div>
							<div className="text-sm font-medium">0.038</div>
						</div>
						<div className="flex p-2 border-b items-center justify-between">
							<div className="font-light text-sm">Trading Volume</div>
							<div className="text-sm font-medium">$12,322,062,762</div>
						</div>
						<div className="flex p-2 border-b items-center justify-between">
							<div className="font-light text-sm">All-Time High</div>
							<div className="text-sm font-medium">$69,044.77 (-75.65%)</div>
						</div>
						<div className="flex p-2 border-b items-center justify-between">
							<div className="font-light text-sm">Market Cap Rank</div>
							<div className="text-sm font-medium">#1</div>
						</div>
						<div className="flex p-2 border-b items-center justify-between">
							<div className="font-light text-sm">All-Time Low</div>
							<div className="text-sm font-medium">$67.81 (24719.8%)</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Performance;
