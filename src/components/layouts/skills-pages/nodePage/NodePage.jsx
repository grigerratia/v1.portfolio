import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function NodePage() {
	return (
		<>
			<p className='javascript-page-text'>
				Inicié mi carrera back hace más de un año cuando tuve que aprender
				Node.Js para crear una API REST de un proyecto de gran embergadura. Sin
				duda, aprender JavaScript me abrió las puertas tanto para front como
				para back.
			</p>
			<p>
				Puedes revisar {<Anchor anchor='#' text='Este Proyecto' />} y comprobar
				el nivel profesinal que se debe tener para levantar un servidor estable.
			</p>
			<MyServices />
		</>
	);
}
