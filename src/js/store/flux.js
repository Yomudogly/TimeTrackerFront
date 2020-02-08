const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
				console.log("van added", data);
			},

			login: data => {
				console.log(data);
			}
			// Use getActions to call a function within a fuction
			// loadSomeData: () => {
			// 	const email = "admin@email.com";
			// 	const pass = "123456";
			// 	fetch("http://loadtrackerapi.herokuapp.com/api/login", {
			// 		method: "POST",
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		},
			// 		body: JSON.stringify({
			// 			email: email,
			// 			password: pass
			// 		})
			// 	})
			// 		.then(response => response.json())
			// 		.then(data => {
			// 			console.log("Success:", JSON.stringify(data));
			// 		})
			// 		.catch(error => {
			// 			console.error("Error:", error);
			// 		});
			// }
		}
	};
};

export default getState;
