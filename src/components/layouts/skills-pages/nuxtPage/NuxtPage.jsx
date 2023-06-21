import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function NuxtPage() {
	return (
		<>
			<p className='javascript-page-text'>
				Cuando uno de mis proyectos Vue empezó a crecer, fue necesario migrar
				todo el código a Nuxt, y vaya que fue lo mejor.
			</p>
			<p>
				Hecha un vistazo a la estructura de
				{<Anchor anchor='#' text='Este Proyecto' />}.
			</p>
			<MyServices />
		</>
	);
}
