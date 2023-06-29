import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function ApirestPage() {
	return (
		<>
			<p className='javascript-page-text'>
				Aprendí la forma de conectar front con back a través de una API REST y
				el MCV. Uno puede darse cuenta de la comodidad que esto brinda, y lo
				fácil que es entender y escalar todo el proyecto.
			</p>
			<p>Míralo {<Anchor anchor='#' text='Aquí' />}, por ejemplo.</p>
			<MyServices />
		</>
	);
}
