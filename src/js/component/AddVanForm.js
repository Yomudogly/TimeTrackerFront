import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const AddVanForm = props => {
	const { actions, store } = useContext(Context);

	const [company, setCompany] = useState("");
	const [vin, setVin] = useState("");

	const addVan = event => {
		//.1 stop the form from subbiting
		event.preventDefault();

		actions.createVan({
			company,
			vin
		});
		//reset the form.
		event.currentTarget.reset();
	};

	return (
		<form className="input-field col s6" onSubmit={addVan}>
			<input
				name="company"
				type="text"
				placeholder="company"
				required
				onChange={e => setCompany(e.target.value)}
				value={company}
			/>
			<input
				name="vin"
				type="text"
				required
				placeholder="vin"
				onChange={e => setVin(e.target.value)}
				value={vin}
			/>
			<select name="status" placeholder="status">
				<option value="available"> Good to go</option>
				<option value="unavailable"> Getting Repairs </option>
			</select>
			<button>+ Add Van</button>
		</form>
	);
};

export default AddVanForm;
