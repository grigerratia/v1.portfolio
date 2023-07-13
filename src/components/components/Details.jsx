import PropTypes from "prop-types";

Details.propTypes = {
	children: PropTypes.node.isRequired,
};

import { useContext, useEffect, useRef, useState } from "react";
import "../../styles/styles-components/Details.css";
import AppContext from "../../context/AppContext";

export default function Details({ children }) {
	const [animate, setAnimate] = useState(false);
	const elementRef = useRef(null);
	const { page, infoShowed } = useContext(AppContext);

	useEffect(() => {
		setAnimate(true);

		setTimeout(() => {
			setAnimate(false);
		}, 500);
	}, [page, infoShowed]);

	useEffect(() => {
		if (animate && elementRef.current) {
			elementRef.current.classList.add("efect-general-details");

			setTimeout(() => {
				if (elementRef.current) {
					elementRef.current.classList.remove("efect-general-details");
				}
			}, 500);
		}
	}, [animate]);

	return (
		<div id='general-details' ref={elementRef}>
			{children}
		</div>
	);
}
