import React from "react";
import Header from "./Header";
import Mainview from "./Mainview";
import Order from "./Order";
import Admin from "./Admin";
import QR from "./QRReader";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

const App = () => {
	return (
		<>
			<div className="track">
				<div className="menu">
					<Header tagline="COUNTDOWN TO NEXT WAVE" />
				</div>
				<Mainview />
				<Order />
			</div>
		</>
	);
};

export default App;
