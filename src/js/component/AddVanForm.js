import React from "react";
import PropTypes from "prop-types";
import Context from "../store/appContext";

const AddVanForm = props => {
	// const { store, actions } = useContext(Context);

	const companyRef = React.createRef();
	const vinRef = React.createRef();
	const statusRef = React.createRef();

	const createVan = event => {
		//.1 stop the form from subbiting
		event.preventDefault();
		const van = {
			company: companyRef.current.value,
			vin: vinRef.current.value,
			status: statusRef.current.value
		};
		console.log(van);
	};

	return (
		<form className="van-edit" onSubmit={createVan}>
			<input name="company" ref={companyRef} type="text" placeholder="company" />
			<input name="vin" ref={vinRef} type="text" placeholder="vin" />
			<select name="status" ref={statusRef} placeholder="status">
				<option value="available"> Good to go</option>
				<option value="unavailable"> Getting Repairs </option>
			</select>
			<button>+ Add Van</button>
		</form>
	);
};

export default AddVanForm;
