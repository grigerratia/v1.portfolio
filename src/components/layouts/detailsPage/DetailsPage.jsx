import "./DetailsPage.css";
import MyServices from "../../components/MyServices";

export default function DetailPage() {
	return (
		<>
			<p className='details'>
				🧔 Soy desarrollador web. Me especializo en los Stacks MERN y MEVN, y
				tengo experiencia en la creación de páginas web con WordPress.
			</p>
			<p>
				🚀 Actualmente, trabajo como desarrollador de WordPress independiente.
				Ofrezco interfaces personalizadas y soluciones de depuración a medida
				para ayudar a mis clientes a alcanzar sus objetivos.
			</p>
			<MyServices />
		</>
	);
}
