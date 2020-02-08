import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

const Main = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<button>Go to clock </button>
			<button>Go to admin</button>
		</div>
	);
};

export default Main;
