import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function JavascriptPage() {
	return (
		<>
			<p className='javascript-page-text'>
				Comencé a aprender JavaScript hace 10 años en la Universidad Politécnica
				{<Anchor anchor='https://www.uptos.edu.ve/' text='UPTOS Sucre' />},
				donde adquirí las habilidades para construir proyectos sencillos, como{" "}
				{<Anchor anchor='#' text='Calculadoras' />} y{" "}
				{<Anchor anchor='#' text='Juegos' />}. Desde entonces, he seguido
				desarrollando mis habilidades en JavaScript y he trabajado en proyectos
				más complejos, como {<Anchor anchor='#' text='Aplicacinoes Web' />} y{" "}
				{<Anchor anchor='#' text='Sistemas de Gestión de Contenido' />}.
			</p>
			<MyServices />
		</>
	);
}
