import "./ExperiencePage.css";
import { useContext } from "react";

import ButtonMyServices from "../../components/ButtonMyServices";

import AppContext from "../../../context/AppContext";

export default function ExperiecePages() {
	const { infoShowed } = useContext(AppContext);

	return (
		<div className='boxExperienceCard'>
			<h2>{infoShowed.name}</h2>
			<div className='experienceCard'>
				<div className='imgExperienceCard'>
					<img src={infoShowed.imgExperience} alt='' />
				</div>

				<div className='infoExperienceCard'>
					<p>{infoShowed.texto}</p>
				</div>
			</div>
			<ButtonMyServices texto='¡Contáctame!' />
		</div>
	);
}
