import PropTypes from "prop-types";

ButtonMyServices.propTypes = {
	texto: PropTypes.string.isRequired,
};

import "../../styles/styles-components/ButtonMyServices.css";

function ButtonMyServices({ texto }) {
	return (
		<a href='mailto:grigerratia@gmail.com'>
			<button className='ov-btn-slide-close' type='button'>
				{texto}
			</button>
		</a>
	);
}

export default ButtonMyServices;
