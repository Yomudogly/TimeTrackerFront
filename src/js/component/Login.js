import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const Login = () => {
	const { actions, store } = useContext(Context);

	console.log("This is the actual store", store);
	return <div />;
};

export default Login;
