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
					<img
						src='https://www.escueladeinternet.com/wp-content/uploads/2022/05/ideas_disenoweb-800x400.png'
						alt=''
					/>
				</div>

				<div className='infoExperienceCard'>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
						debitis nostrum soluta dicta ratione incidunt optio? Quidem iure
						rerum numquam recusandae eius, beatae hic, odio ullam omnis magnam
						expedita. Officia.
					</p>
				</div>
			</div>
			<ButtonMyServices texto='¡Contáctame!' />
		</div>
	);
}
