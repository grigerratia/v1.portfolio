import '../../styles/styles-layout/GeneralSection.css'
import { MdCloudDownload } from 'react-icons/md'

import { useContext } from 'react';
import Details from '../components/Details'
import SkillPage from './skills-pages/SkillPage';
import AppContext from '../../context/AppContext';

function GeneralSection() {
    const { setColorGradient } = useContext(AppContext)

    const setTheme = () => {
        document.documentElement.className = 'griger-theme';
        setColorGradient('#1d4ed826')
    }

    return(
        <section className="general">
                <div className="photo-name">
                    <div className="box-photoName">
                        <img src="https://unavatar.io/twitter/grigerratia" alt="my-photo" />
                        <h1 onClick={ setTheme } >Griger Ratia</h1>
                    </div>
                    <div className="download_cv">
                        <h2>Desarrollador Web</h2>
                        <a href='http://127.0.0.1:5173/src/assets/Curriculum-Griger-06-23.pdf' target='_blank'>
                            <MdCloudDownload />
                        </a>
                    </div>
                </div>
                <hr />
                <Details>
                    <SkillPage/>
                </Details>
        </section>
    )
}


export default GeneralSection

