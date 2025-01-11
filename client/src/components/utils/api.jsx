import axios from "axios";

const API_BASE_URL = "https://api.coingecko.com/api/v3";

// Fetch price for a specific coin (in USD and INR with 24h change)
export const getCoinPrice = async (coinId) => {
	const url = `${API_BASE_URL}/simple/price`;
	const params = {
		ids: coinId,
		vs_currencies: "usd,inr",
		include_24hr_change: "true", // Fetch 24hr change for the coin
	};

	try {
		const response = await axios.get(url, { params });
		return response.data[coinId]; // Dynamically return data for the specified coin
	} catch (error) {
		console.error(`Error fetching data for ${coinId}:`, error);
		throw error; // Ensure calling code can handle the error
	}
};

// Fetch trending coins data
export const getTrendingCoins = async () => {
	const url = `${API_BASE_URL}/search/trending`;

	try {
		const response = await axios.get(url);
		return response.data.coins; // Return the array of trending coins
	} catch (error) {
		console.error("Error fetching trending coins:", error);
		throw error; // Ensure calling code can handle the error
	}
};
