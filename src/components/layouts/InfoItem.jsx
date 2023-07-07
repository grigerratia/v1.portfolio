import "../../styles/styles-layout/InfoItem.css";
import InfoTitle from "../components/InfoTitle";
import ButtonAction from "../components/ButtonAction";

function InfoItem({ children, className, title, elements, page }) {
	return (
		<div className='info-item'>
			<InfoTitle title={title} />

			<div className='info-elements'>
				{children}
				{elements?.map((element) => {
					return (
						<ButtonAction
							key={element.name}
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
