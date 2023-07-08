import "./ProyectPage.css";
import { useContext } from "react";

import IconsProyectCard from "../../components/IconsProyectCard";
import ButtonMyServices from "../../components/ButtonMyServices";

import AppContext from "../../../context/AppContext";

export default function ProyectsPages() {
	const { infoShowed } = useContext(AppContext);

	return (
		<div className='boxProyectCard'>
			<div className='proyectCard'>
				<div className='imgProyectCard'>
					<img src={infoShowed.imgProyect} alt='' />
				</div>

				<div className='infoProyectCard'>
					<div className='infoProyectCard-header'>
						<h2>{infoShowed.name}</h2>
					</div>
					<div className='infoProyectCard-year'>
						<h3>2022 - 2023</h3>
					</div>
					<div className='infoProyectCard-p'>
						<p>{infoShowed.texto}</p>
					</div>
					<div className='infoProyectCard-icons'>
						<IconsProyectCard />
					</div>
				</div>
			</div>

			<footer className='proyectCard-footer'>
				<h2>{infoShowed.name}</h2>
				<div className='infoProyectCard-icons'>
					<IconsProyectCard />
				</div>
			</footer>
			<ButtonMyServices texto='¡Contáctame!' />
		</div>
	);
}
