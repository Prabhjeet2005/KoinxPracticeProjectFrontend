import React from "react";

const Header = () => {
	return (
		<div className="flex items-center relative drop-shadow-lgshadow-2xl shadow-black justify-between px-5 p-4">
			<div>
				<img style={{ width: 90 }} src="/images/images.png" alt="Logo" />
			</div>
			<div className="flex font-semibold gap-6 items-center">
				<div>Crypto Taxes</div>
				<div>Free Tools</div>
				<div>Resource Center</div>
				<div className="rounded px-5 text-white bg-gradient-to-r from-blue-500 to-blue-700 p-2 ">
					Get Started
				</div>
			</div>
		</div>
	);
};

export default Header;
