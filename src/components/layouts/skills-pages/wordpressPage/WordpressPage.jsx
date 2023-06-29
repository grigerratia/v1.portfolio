import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function WordpressPage() {
	return (
		<>
			<p className='javascript-page-text'>
				Hace bastante tiempo que dejé de ver a WordPress como un enemigo, y
				ahora lo considero una herramienta importantísima para el desarrollo web
				en todo el mundo. Colaboro en proyectos hechos con Wordpress,
				{<Anchor anchor='https://academia.incluyeme.com/' text='Como Estos' />}.
			</p>
			<MyServices />
		</>
	);
}
