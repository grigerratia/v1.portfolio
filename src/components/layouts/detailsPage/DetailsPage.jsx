import "./DetailsPage.css";
import MyServices from "../../components/MyServices";

export default function DetailPage() {
	return (
		<>
			<p className='details'>
				🧔 Soy desarrollador Web, especializado en los Stacks MERN y MEVN.
				También construyo páginas web con WordPress 🎓 Inicié mis estudios en
				<a href='https://platzi.com/p/Griger/'> Platzi</a>, donde fortalecí mis
				habilidades para crear atractivas interfaces de usuario con ReactJs y
				NextJs.
			</p>
			<p>
				✨ Construí para la empresa{" "}
				<a href='https://cesticom.com/'> Cesticom</a>, una API REST completa y
				estable, usando NodeJs, ExpressJs y MongoDB.
			</p>
			<p>
				🚀 Actualmente, me desempeño como desarrollador de WordPress freelancer.
				Realizo interfaces a la medida, y brindo soluciones de debugger.
			</p>
			<MyServices />
		</>
	);
}
