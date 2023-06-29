import { useContext } from "react";
import "../../styles/styles-components/ButtonAction.css";
import AppContext from "../../context/AppContext";

function ButtonAction({
	className,
	elementName,
	classTheme,
	colorPointer,
	data,
	page,
}) {
	const { setColorGradient, setPage, setInfoShowed } = useContext(AppContext);

	const setLayout = () => {
		document.documentElement.className = classTheme;
		setColorGradient(colorPointer);
		setPage(page);
		setInfoShowed(data);
	};

	return (
		<div className={className} onClick={setLayout}>
			{elementName}
		</div>
	);
}

export default ButtonAction;
