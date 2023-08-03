import PropTypes from "prop-types";

StateAppContext.propTypes = {
	children: PropTypes.node.isRequired,
};

import { useState } from "react";
import AppContext from "./AppContext";
import DetailsPage from "../components/layouts/detailsPage/DetailsPage";

function StateAppContext({ children }) {
	const [colorGradient, setColorGradient] = useState("#032731");
	const [page, setPage] = useState(DetailsPage);
	const [infoShowed, setInfoShowed] = useState({});
	const [myPhoto, setMyPhoto] = useState("11rem");

	return (
		<AppContext.Provider
			value={{
				colorGradient,
				setColorGradient,
				page,
				setPage,
				infoShowed,
				setInfoShowed,
				myPhoto,
				setMyPhoto,
			}}>
			{children}
		</AppContext.Provider>
	);
}

export default StateAppContext;
