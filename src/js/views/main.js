import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

const Main = () => {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = event => {
		//.1 stop the form from subbiting
		event.preventDefault();

		actions.login({
			email,
			password
		});
		//reset the form.
		event.currentTarget.reset();
	};

	return (
		<div className="Site">
			<div className="row">
				<div className="admin-card">
					<form className="col s6" onSubmit={login}>
						<p>Welcome please sign in to view admin dashboard, else view clock</p>
						<div className="row">
							<div className="input-field col s6">
								<input
									id="email"
									type="email"
									requiered
									placeholder="Email"
									className="validate"
									onChange={e => setEmail(e.target.value)}
									value={email}
								/>
								x{" "}
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input
									id="password"
									type="password"
									requiered
									placeholder="Password"
									onChange={e => setPassword(e.target.value)}
									value={password}
									className="validate"
								/>
							</div>
						</div>
						<button className="btn waves-effect waves" type="submit" name="action">
							Submit
							<i className="material-icons right">send</i>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Main;
