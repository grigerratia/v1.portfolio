import "../../styles/styles-components/ButtonMyServices.css";

export default function ButtonMyServices({ texto }) {
	return (
		<a href='mailto:grigerratia@gmail.com'>
			<button className='ov-btn-slide-close' type='button'>
				{texto}
			</button>
		</a>
	);
}
