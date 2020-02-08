import React from "react";
import AddVanForm from "./AddVanForm";
import addVan from "./App";
import PropTypes from "prop-types";

export const Admin = props => {
	return (
		<div className="inventory">
			<h2>Adding vans</h2>
			<AddVanForm addVan={addVan} />
		</div>
	);
};

AddVanForm.propTypes = {
	addVan: PropTypes.func
};

export default Admin;
