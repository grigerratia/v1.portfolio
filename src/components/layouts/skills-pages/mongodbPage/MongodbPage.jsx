import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function MongodbPage() {
	return (
		<>
			<p className='javascript-page-text'>
				Hace muchos años creé mi primera base de datos relacional, pero cuando
				ví la versatilidad de las bases de datos no relacionales, las usé con
				mayor frecuencia. Aquí dejo {<Anchor anchor='#' text='Esta Imagen' />} y
				{<Anchor anchor='#' text='Este Código' />} si es de tu interés.
			</p>
			<MyServices />
		</>
	);
}
