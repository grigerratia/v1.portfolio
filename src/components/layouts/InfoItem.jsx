import PropTypes from "prop-types";

InfoItem.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	title: PropTypes.string,
	elements: PropTypes.array,
	page: PropTypes.object,
};

import "../../styles/styles-layout/InfoItem.css";
import InfoTitle from "../components/InfoTitle";
import ButtonAction from "../components/ButtonAction";

function InfoItem({ children = null, className, title, elements, page }) {
	return (
		<div className='info-item'>
			<InfoTitle title={title} />

			<div className='info-elements'>
				{children ?? children}
				{elements?.map((element) => {
					return (
						<ButtonAction
							key={element.key}
							className={className}
							elementName={element.name}
							classTheme={element.classTheme}
							colorPointer={element.colorPointer}
							page={page}
							data={element.data}
							element={element}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default InfoItem;
