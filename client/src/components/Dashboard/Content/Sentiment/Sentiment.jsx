import React from 'react'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from './CarouselCard';

const Sentiment = () => {
  return (
		<div className="bg-white flex flex-col gap-4 p-4 rounded-xl">
			<div className="flex flex-col gap-3">
				<h3 className="font-semibold text-2xl">Sentiment</h3>
				<h4 className="font-semibold text-lg">Key Events</h4>
				<div>
					<Carousel className="w-full  ">
						<CarouselContent>
							<CarouselItem className="md:basis-1/2">
								<div className="p-1">
									<CarouselCard
										color={"bg-blue-400"}
										image={<ReceiptLongIcon fontSize="medium" />}
										bg={"bg-blue-100"}
									/>
								</div>
							</CarouselItem>
							<CarouselItem className="md:basis-1/2">
								<div className="p-1">
									<CarouselCard
										color={"bg-green-400"}
										image={<TrendingUpIcon fontSize="medium" />}
										bg={"bg-green-100"}
									/>
								</div>
							</CarouselItem>
							<CarouselItem className="md:basis-1/2">
								<div className="p-1">
									<CarouselCard
										color={"bg-red-400"}
										image={<AttachMoneyIcon fontSize="medium" />}
										bg={"bg-red-100"}
									/>
								</div>
							</CarouselItem>
						</CarouselContent>

						{/* Carousel Navigation */}
						<CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
						<CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
					</Carousel>
				</div>
				<div>
					<h4 className="font-semibold text-lg">Analyst Estimates</h4>
					<div className="flex gap-5 ">
						<div className="w-28 h-28 text-3xl bg-green-100 rounded-full text-green-600 flex items-center justify-center">
							76%
						</div>
						<div className="flex gap-5">
							<div className="flex flex-col justify-center">
								<div>Buy</div>
								<div>Hold</div>
								<div>Sell</div>
							</div>
							<div className="flex flex-col justify-center">
								<div className="flex items-center">
									<div className="min-w-72 bg-green-600 h-2 rounded-full"></div>
									<span className="ml-5">76%</span>
								</div>
								<div className="flex items-center justify-start">
									<div className="min-w-8 bg-gray-400 h-2 rounded-full"></div>
									<span className="ml-5">8%</span>
								</div>
								<div className="flex items-center">
									<div className="min-w-16 bg-red-600 h-2 rounded-full"></div>
									<span className="ml-5">16%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sentiment