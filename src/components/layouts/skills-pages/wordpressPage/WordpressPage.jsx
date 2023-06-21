import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function WordpressPage() {
	return (
		<>
			<p className='javascript-page-text'>
				Hace abstante tiempo que dejé de ver a Wordpress como un enemigo, y
				ahora lo considero una herramienta importantísima para el desarrollo
				web. Colaboro en proyectos hechos con Wordpress,
				{<Anchor anchor='https://www.uptos.edu.ve/' text='Como Estos' />}.
			</p>
			<MyServices />
		</>
	);
}
