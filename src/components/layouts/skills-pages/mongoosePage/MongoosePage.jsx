import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function MongoosePage() {
	return (
		<>
			<p className='javascript-page-text'>
				Conectar con MongoDB se me ha hecho mucho más fácil gracias a las
				bondades de Mongoose. Aquí dejo una
				{<Anchor anchor='#' text='Sección De Código' />} en la que utilizo
				Mongoose, para una aplicación SaaS.
			</p>
			<MyServices />
		</>
	);
}
