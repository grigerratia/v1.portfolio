import '../../styles/styles-layout/GeneralSection.css'
import { MdCloudDownload } from 'react-icons/md'
import Details from '../components/Details'

function GeneralSection() {

    const setTheme = () => document.documentElement.className = 'griger-theme';

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
                    <p className='details'>
                        Soy desarrollador Web, especializado en los Stacks MERN y MEVN. Inicié mis estudios en <a href='https://platzi.com/p/Griger/'>Platzi</a>, donde desarrollé mis capacidades para crear interfaces de usuario usando buenas prácticas con ReactJs y NextJs. Realicé un bootcamp en la empresa <a href='https://cesticom.com/'>Cesticom</a>, en donde aprendí y demostré mis habilidades para la construcción de API REST con Node, Express y MongoDB.
                    </p>
                </Details>
        </section>
    )
}


export default GeneralSection

