import PropTypes from "prop-types";

import { useContext } from "react";
import "../../styles/styles-components/ButtonAction.css";
import AppContext from "../../context/AppContext";

ButtonAction.propTypes = {
	className: PropTypes.string,
	elementName: PropTypes.string,
	classTheme: PropTypes.string,
	colorPointer: PropTypes.string,
	page: PropTypes.object,
	data: PropTypes.any,
	element: PropTypes.object,
};

function ButtonAction({
	className,
	elementName,
	classTheme,
	colorPointer,
	page,
	data,
	element,
}) {
	const { setColorGradient, setPage, setInfoShowed } = useContext(AppContext);

	const setLayout = () => {
		element ? setInfoShowed(element) : null;

		document.documentElement.className =
			classTheme ?? document.documentElement.className;
		className !== "anchor" ? setColorGradient(colorPointer) : null;
		page ? setPage(page) : null;
		data ? setInfoShowed(data) : null;
	};

	return (
		<div className={className} onClick={setLayout}>
			{elementName}
		</div>
	);
}

export default ButtonAction;
