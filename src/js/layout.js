import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import App from "./component/App";
import QR from "./component/QRReader";
import Admin from "./component/Admin";
import Main from "./views/main";

export const Layout = () => {
	const basename = process.env.BASENAME || "";
	//create state

	return (
		<>
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Main} />
						<Route path="/qr" component={QR} />
						<Route path="/app" component={App} />
						<Route path="/admin" component={Admin} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
