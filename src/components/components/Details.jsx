import { useEffect } from "react";
import "../../styles/styles-components/Details.css";

export default function Details({ children }) {
	useEffect(() => {
		const elementDom = document.querySelector("#general-details");

		setTimeout(() => {
			elementDom.classList.toggle("efect-general-details");
		}, 2000);

		elementDom.classList.toggle("efect-general-details");
	}, []);

	return <div id='general-details'>{children}</div>;
}
