import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
	labels: ["Crowdsale Investors", "Foundation"],
	datasets: [
		{
			data: [80, 20],
			backgroundColor: ["blue", "orange"],
			hoverBackgroundColor: ["blue", "orange"],
		},
	],
};

const options = {
	responsive: true,
	maintainAspectRatio: false,
};

const Tokenomics = () => {
	return (
		<div className="bg-white rounded-xl p-4">
			<div>
				<h3 className="text-2xl font-semibold mb-4">Tokenomics</h3>
				<h4 className="text-lg font-semibold">Initial Distribution</h4>
				<div style={{ width: "300px", height: "300px", margin: "0 auto" }}>
					<Doughnut data={data} options={options} />
				</div>
				<div className="text-sm mt-4">
					Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
					tristique pharetra. Diam id et lectus urna et tellus. aliquam dictum
					at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
					scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
					urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
					fermentum sapien morbi sodales odio sed rhoncus.
				</div>
			</div>
		</div>
	);
};

export default Tokenomics;
