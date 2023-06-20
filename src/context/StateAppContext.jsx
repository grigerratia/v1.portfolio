import { useState } from "react";
import AppContext from "./AppContext";
import DetailsPage from "../components/layouts/detailsPage/DetailsPage";

function StateAppContext({ children }) {
	const [colorGradient, setColorGradient] = useState("#1d4ed826");
	const [page, setPage] = useState(DetailsPage);
	const [infoShowed, setInfoShowed] = useState({});

	return (
		<AppContext.Provider
			value={{
				colorGradient,
				setColorGradient,
				page,
				setPage,
				infoShowed,
				setInfoShowed,
			}}>
			{children}
		</AppContext.Provider>
	);
}

export default StateAppContext;
