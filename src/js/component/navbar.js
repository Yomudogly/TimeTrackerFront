import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav>
			<div className="nav-wrapper blue-grey darken-3">
				<a href="#!" className="brand-logo center">
					Time Track!
				</a>
				<ul className="left hide-on-med-and-down">
					<li>
						<Link to="/app">
							<a href="">Clock</a>
						</Link>
					</li>
					<li>
						<Link to="/admin">
							<a href="badges.html">Admin</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
