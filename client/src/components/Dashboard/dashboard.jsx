import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content/layout";
import SubNavbarOne from "./SubNavbar1";

const Dashboard = () => {
	return (
		<div>
			<Header className="shadow-xl" />
			<Content />
			<div className="hidden sm:flex">
				<Footer />
			</div>
		</div>
	);
};

export default Dashboard;
