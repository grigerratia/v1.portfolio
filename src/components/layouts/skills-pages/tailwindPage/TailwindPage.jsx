import MyServices from "../../../components/MyServices";
import Anchor from "../../../components/Anchor";

export default function TailwindPage() {
	return (
		<>
			<p className='javascript-page-text'>
				Muchas veces, construir una App en poco tiempo se vuelve imposible. El
				CSS puro me encanta, pero nunca dejo a un lado los beneficios que me
				ofrecen los framewors de CSS, así que uso con frecuencia Tailwind.
			</p>
			<p>
				Mi proyecto preferido hecho con Tailwind es el que realicé en 2022,
				llamado {<Anchor anchor='#' text='GitHobbie' />}.
			</p>
			<MyServices />
		</>
	);
}
