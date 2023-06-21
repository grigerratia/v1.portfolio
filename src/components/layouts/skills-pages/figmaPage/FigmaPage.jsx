import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function FigmaPage() {
	return (
		<>
			<p className='javascript-page-text'>
				Tomé un excelente curso de diseño web en
				{<Anchor anchor='#' text='Platzi' />}, en el que aprendí a usar
				herramientas increíbles como Notion y Figma. Aunque no me dedico al
				diseño, puedo codificar proyectos partiendo de diseños hechos en figma,
				como debe hacerse en todo proyecto.
			</p>
			<p>
				De igual forma, puedes darle un vistazo a
				{<Anchor anchor='#' text='Mi Cuanta Figma' />} y a algunos diseños que
				he realizado.
			</p>
			<MyServices />
		</>
	);
}
