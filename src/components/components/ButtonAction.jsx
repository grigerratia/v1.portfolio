import { useContext } from "react";
import "../../styles/styles-components/ButtonAction.css";
import AppContext from "../../context/AppContext";

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
