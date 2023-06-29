import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function JavascriptPage() {
	return (
		<>
			<p className='javascript-page-text'>
				Inicié mi aprendizaje de JavaScript hace 10 años en la Universidad
				Politécnica
				{<Anchor anchor='https://www.uptos.edu.ve/' text='UPTOS Sucre' />}. No
				fue fácil aprender cómo funciona el <i>Event Loop</i>, o la{" "}
				<i>Asincronía</i>, pero superé pronto el reto. Ahora puedo construir
				cosas como
				{<Anchor anchor='#' text='Calculadoras' />} o
				{<Anchor anchor='#' text='Juegos Sencillos' />}.
			</p>
			<MyServices />
		</>
	);
}
