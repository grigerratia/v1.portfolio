import '../../styles/styles-layout/GeneralSection.css'
import Details from '../components/Details'

function GeneralSection() {
    return(
        <section className="general">
                <div className="photo-name">
                    <div className="box-photoName">
                        <img src="https://unavatar.io/twitter/grigerratia" alt="my-photo" />
                        <h1>Griger Ratia</h1>
                    </div>
                    <h2>Desarrollador Web</h2>
                </div>
                <hr />
                <Details>
                    <p className='details'>
                        Soy desarrollador Web, especializado en los Stacks MERN y MEVN. Inicié mis estudios en <a href='https://platzi.com/p/Griger/'>Platzi</a>, donde desarrollé mis capacidades para crear interfaces de usuario usando buenas prácticas con ReactJs y NextJs. Realicé un bootcamp en la empresa <a href='https://cesticom.com/'>Cesticom</a>, en donde aprendí y demostré mis habilidades para la contrucción de API REST con Node, Express y MongoDB.
                    </p>
                </Details>
        </section>
    )
}


export default GeneralSection

