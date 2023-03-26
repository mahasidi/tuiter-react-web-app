import React from "react";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
	return(
		<div>
		<h2>Home</h2>
			<WhatsHappening/>
			<TuitsList/>
		</div>
	);
}

export default HomeComponent;