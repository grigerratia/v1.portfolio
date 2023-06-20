import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function NuxtPage() {
	return (
		<>
			<p className='javascript-page-text'>
				INUXTde javaScript hace 10 años en la Universidad Politécnica
				{<Anchor anchor='https://www.uptos.edu.ve/' text='UPTOS Sucre' />}. No
				fue fácil aprender como funciona el <i>Event Loop</i>, o la
				<i> Asincronía</i>, pero superé pronto el reto. Ahora puedo construir
				cosas como
				{<Anchor anchor='#' text='Calculadoras' />} o
				{<Anchor anchor='#' text='Juegos Sencillos' />}.
			</p>
			<p>
				Si quieres Aprender JavaScript, puedo enseñarte a desarrollar con este
				lenguaje de forma profesional
				{<Anchor anchor='#' text='Aquí' />}.
			</p>
			<MyServices />
		</>
	);
}
