import MyServices from "../../../components/MyServices";

export default function NextPage() {
	return (
		<>
			<p className='javascript-page-text'>
				Next.js es una maravilla, y tengo el honor de usarlo en mis proyectos
				más grandes y ambiciosos para garantizar la escalabilidad, el
				enrutamiento, el rerenderizado, entre otras cosas.
			</p>
			<p>
				Actualmente, trabajo en mis proyectos más ambiciosos con esta poderosa
				herramienta. Puedes ver un adelanto de uno de estos proyectos
				<a href='#'>
					<strong> Aquí</strong>
				</a>
				.
			</p>
			<MyServices />
		</>
	);
}
