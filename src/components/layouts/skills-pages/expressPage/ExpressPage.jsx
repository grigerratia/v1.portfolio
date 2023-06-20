import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function ExpressPage() {
	return (
		<>
			<p className='javascript-page-text'>
				Para garantizar mi inclinación hacia el stack MERV, me era necesario
				usar Express.Js. Lo fácil que es usarlo, y lo mucho que ayuda para crear
				código más limpio y eficiente es excepcional.
			</p>
			<p>
				Observa {<Anchor anchor='#' text='Este Trozo De Código' />} que
				implementé en un proyecto para {<Anchor anchor='#' text='Cesticom' />}.
				Parece una obra de arte de la ingeniería Web ,gracias a Express.Js.
			</p>
			<MyServices />
		</>
	);
}
