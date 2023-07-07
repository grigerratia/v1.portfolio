import "../../styles/styles-layout/InfoSection.css";
import SKILLS from "../../utils/myskylls";
import PROYECTS from "../../utils/myproyects";
import EXPERIENCES from "../../utils/myexperiences";
import InfoItem from "./InfoItem";
import SkillPage from "./skills-pages/SkillPage";
import ButtonMyServices from "../components/ButtonMyServices";
import ProyectsPages from "./proyects-pages/ProyectPage";

function InfoSection() {
	return (
		<section className='info'>
			<InfoItem
				title='Skills'
				className='action'
				elements={SKILLS}
				page={<SkillPage />}
			/>
			<InfoItem
				title='Proyectos'
				className='anchor'
				elements={PROYECTS}
				page={<ProyectsPages />}
			/>
			<InfoItem title='Experiencia' className='anchor' elements={EXPERIENCES} />
			<InfoItem title='Contacto'>
				<p style={{ fontSize: "0.8rem" }}>
					¿Necesitas ayuda con tu sitio web? Estoy aquí para ayudarte.
					Contáctame por correo electrónico o mis redes sociales. ¡Espero saber
					de ti pronto!
				</p>
				<ButtonMyServices texto='¡Salúdame!' />
			</InfoItem>
		</section>
	);
}

export default InfoSection;
