import ButtonMyServices from "./ButtonMyServices";

export default function MyServices() {
	return (
		<>
			<hr />
			<p className='my-services--p'>
				Si quieres contratar mis servicios, envíame un Email sobre lo que
				necesitas a mi dirección de <ButtonMyServices texto='Contacto' />
			</p>
		</>
	);
}
