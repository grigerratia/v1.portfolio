import PropTypes from "prop-types";

Anchor.propTypes = {
	anchor: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

function Anchor({ anchor, text }) {
	return (
		<a href={anchor} target='_blank' rel='noreferrer'>
			<strong>{" " + text}</strong>
		</a>
	);
}

export default Anchor;
