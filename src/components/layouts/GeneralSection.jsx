import "../../styles/styles-layout/GeneralSection.css";
import { MdCloudDownload } from "react-icons/md";

import { useContext } from "react";
import Details from "../components/Details";
import AppContext from "../../context/AppContext";
import DetailPage from "./detailsPage/DetailsPage";

function GeneralSection() {
	const { setColorGradient, page, setPage } = useContext(AppContext);
	const a = document.querySelector("#general-details");

	const setTheme = () => {
		a.classList.toggle("efect-general-details");
		document.documentElement.className = "griger-theme";
		setColorGradient("#1d4ed826");
		setPage(DetailPage);
	};

	return (
		<section className='general'>
			<div className='photo-name'>
				<div className='box-photoName'>
					<img src='https://unavatar.io/twitter/grigerratia' alt='my-photo' />
					<h1 onClick={setTheme}>Griger Ratia</h1>
				</div>
				<div className='download_cv'>
					<h2>Desarrollador Web</h2>
					<a
						href='http://127.0.0.1:5173/src/assets/Curriculum-Griger-06-23.pdf'
						target='_blank'>
						<MdCloudDownload />
					</a>
				</div>
			</div>
			<hr />
			<Details>{page}</Details>
		</section>
	);
}

export default GeneralSection;
