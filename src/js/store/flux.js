import React, { useState, useEffect } from "react";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			hash: "",
			company: [],
			vans: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// VAN
			createVan: data => {
				fetch("https://loadtrackerapi.herokuapp.com/api/van", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					},
					body: JSON.stringify({
						company_name: data.company,
						vin: data.vin
					})
				})
					.then(response => response.json())
					.then(data => {
						console.log("Success:", JSON.stringify(data));
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			loadAllVans: data => {
				fetch("https://loadtrackerapi.herokuapp.com/api/van", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(response => response.json())
					.then(data => {
						setStore({
							...getStore,
							vans: data
						});
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			// LOGIN
			login: (data, history) => {
				fetch("https://loadtrackerapi.herokuapp.com/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: data.email,
						password: data.password
					})
				})
					.then(response => response.json())
					.then(data => {
						setStore({
							hash: data.jwt
						});
						localStorage.clear();
						localStorage.setItem("token", data.jwt);
						history.push("/admin");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			}
		}
	};
};

export default getState;
