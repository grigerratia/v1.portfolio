import PropTypes from "prop-types";

InfoTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

import "../../styles/styles-components/InfoTitle.css";

function InfoTitle({ title }) {
	return <div className='info-title'>{title}</div>;
}

export default InfoTitle;
