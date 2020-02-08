import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Track Countdown</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Login</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/admin">
					<button className="btn btn-primary">Admin</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
