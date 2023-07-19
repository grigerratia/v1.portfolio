import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function FigmaPage() {
	return (
		<>
			<p className='javascript-page-text'>
				Tomé un excelente curso de diseño web en{" "}
				{<Anchor anchor='#' text='Platzi' />}, donde aprendí a usar herramientas
				increíbles como Notion y Figma. Aunque no soy diseñador, puedo codificar
				interfaces a partir de bocetos hechos en Figma, como se requiere en todo
				proyecto.
			</p>
			<p>
				De igual forma, puedes darle un vistazo a
				{<Anchor anchor='#' text='Mi Cuenta Figma' />} y a algunos diseños que
				he realizado.
			</p>
			<MyServices />
		</>
	);
}
