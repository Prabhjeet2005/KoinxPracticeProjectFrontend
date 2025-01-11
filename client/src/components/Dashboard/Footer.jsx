import React, { useEffect, useState } from "react";
import FooterContentCard from "./FooterContentCard";
import axios from "axios";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"; // Import Carousel from Shadcn

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

const Footer = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    // Fetch Trending Coins data
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
    return <div>Loading...</div>;
  }

  return (
		<div className="bg-white p-10">
			{/* You May Also Like */}
			<div className="font-semibold text-2xl mb-4">You May Also Like</div>

			{/* Carousel Section using Shadcn Carousel */}
			<Carousel className="w-full max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-5xl ">
				<CarouselContent>
					{trendingCoins.slice(0, 7).map((coin) => (
						<CarouselItem key={coin.id} className="md:basis-1/2 lg:basis-1/3">
							<div className="p-1">
								<FooterContentCard
									coin={{
										icon: coin.item.small, // Coin logo
										name: coin.item.name, // Coin name
										symbol: coin.item.symbol, // Coin symbol
										price: coin.item.data.price, // Coin price in USD
										change: coin.item.data.price_change_percentage_24h.usd || 0, // 24H price change
										sparkline: coin.item.data.sparkline, // Sparkline graph URL
									}}
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				{/* Carousel Navigation */}
				<CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
				<CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
			</Carousel>

			{/* Repeat the Same Trending Coins in Another Row */}
			<div className="font-semibold text-2xl mt-8 mb-4">Trending Coins</div>

			{/* Another Carousel Section */}
			<Carousel className="w-full max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-5xl ">
				<CarouselContent>
					{trendingCoins.slice(0, 7).map((coin) => (
						<CarouselItem key={coin.id} className="md:basis-1/2 lg:basis-1/3">
							<div className="p-1">
								<FooterContentCard
									coin={{
										icon: coin.item.small, // Coin logo
										name: coin.item.name, // Coin name
										symbol: coin.item.symbol, // Coin symbol
										price: coin.item.data.price, // Coin price in USD
										change: coin.item.data.price_change_percentage_24h.usd || 0, // 24H price change
										sparkline: coin.item.data.sparkline, // Sparkline graph URL
									}}
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				{/* Carousel Navigation */}
				<CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
				<CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
			</Carousel>
		</div>
	);
};

export default Footer;
