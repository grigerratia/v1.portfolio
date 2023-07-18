import { useState } from "react";
import "../../styles/styles-components/Logo.css";
import THANKS from "../../utils/thanks";

function Logo() {
	const [className, setClassName] = useState("msg-desactive");
	const [message, setMessage] = useState(THANKS[0]);
	const [aNew, setANew] = useState("new-news");

	const vewMessage = () => {
		className === "msg-desactive"
			? (setClassName("msg-active"), setANew("not-news"))
			: (setClassName("msg-desactive"), setNotice());
	};

	const setNotice = () => {
		setTimeout(() => {
			setMessage(THANKS[Math.floor(Math.random() * (THANKS.length - 0))]);
			setANew("new-news");
		}, 10000);
	};

	return (
		<div className='logo' onClick={vewMessage}>
			<img
				src='https://thumbs2.imgbox.com/16/75/BrVkQVSF_t.jpg'
				alt='Logo Griger'
			/>
			<div className={aNew}>1</div>
			<a href='#' className={className}>
				{message}
			</a>
		</div>
	);
}

export default Logo;
