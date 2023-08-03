import "../../styles/styles-layout/GeneralSection.css";
import { HiOutlineDownload } from "react-icons/hi";

import { useContext } from "react";
import Details from "../components/Details";
import AppContext from "../../context/AppContext";
import DetailPage from "./detailsPage/DetailsPage";
function GeneralSection() {
	const { setColorGradient, page, setPage, myPhoto, setMyPhoto } =
		useContext(AppContext);
	const a = document.querySelector("#general-details");

	const setTheme = () => {
		a.classList.toggle("efect-general-details");
		document.documentElement.className = "griger-theme";
		setColorGradient("#032731");
		setPage(DetailPage);
		setMyPhoto("11rem");
	};

	return (
		<section className='general'>
			<div className='photo-name' onClick={setTheme}>
				<div className='box-neme'>
					<p className='myName'>Griger Ratia</p>
					<div className='download_cv'>
						<p className='myTitle'>Desarrollador Web</p>
						<a
							href='http://griger.netlify.app/src/assets/Curriculum-Griger-06-23.pdf'
							target='_blank'
							rel='noreferrer'>
							<HiOutlineDownload />
						</a>
					</div>
				</div>
				<img
					src='https://thumbs2.imgbox.com/a6/31/KHwiXMPz_t.jpg'
					alt='my-photo'
					style={{ width: myPhoto, height: myPhoto }}
				/>
			</div>
			<hr />
			<Details>{page}</Details>
		</section>
	);
}

export default GeneralSection;
