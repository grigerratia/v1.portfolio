import "../../styles/styles-layout/InfoSection.css";
import InfoItem from "./InfoItem";
import SKILLS from "../../utils/myskylls";
import PROYECTS from "../../utils/myproyects";
import EXPERIENCES from "../../utils/myexperiences";
import SkillPage from "./skills-pages/SkillPage";
import ProyectsPages from "./proyects-pages/ProyectPage";
import ExperiencePage from "./experience-page/ExperiencePage";
import ButtonMyServices from "../components/ButtonMyServices";

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
			<InfoItem
				title='Experiencia'
				className='anchor'
				elements={EXPERIENCES}
				page={<ExperiencePage />}
			/>
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
