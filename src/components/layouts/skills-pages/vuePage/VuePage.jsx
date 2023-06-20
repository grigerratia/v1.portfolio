import Anchor from "../../../components/Anchor";
import MyServices from "../../../components/MyServices";

export default function VuePage() {
	return (
		<>
			<p className='javascript-page-text'>
				Aprecio mucho la sencillés de Vue, y lo fresco que es crear aplicaciones
				escalables con este framework. Aprendí a usar esta herramienta mientras
				desarrollaba para
				<Anchor anchor='https://cesticom.com/' text='Cesticom' />, y no pude
				estar más encantado.
			</p>
			<p>
				En <Anchor anchor='#' text='Este enlace' /> puedes ver un proyecto de
				front hecho con Vue3 (Composition).
			</p>
			<MyServices />
		</>
	);
}
