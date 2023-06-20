import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function ApiConsumePage() {
	return (
		<>
			<p className='javascript-page-text'>
				No puedo negar lo que me divierte consumir APIs en la web. Es fascinante
				la realidad de disponer de cientos de APIs gratuitas para usar en mis
				proyectos.
			</p>
			<p>
				Puedes ver {<Anchor anchor='#' text='Aquí' />} algunas de las Apps que
				he creado gracias a la enorme cantidad de data que estas ofrecen.
			</p>
			<MyServices />
		</>
	);
}
