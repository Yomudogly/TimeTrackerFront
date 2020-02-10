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
			createVan: data => {
				fetch("https://loadtrackerapi.herokuapp.com/api/van", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("hashKey")}`
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
						localStorage.setItem("hashKey", data.jwt);
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
