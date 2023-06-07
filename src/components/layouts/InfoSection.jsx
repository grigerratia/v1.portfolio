import '../../styles/styles-layout/InfoSection.css'
import SKILLS from '../../utils/myskyls'
import PROYECTS from '../../utils/myproyects'
import EXPERIENCES from '../../utils/myexperiences'
import InfoItem from './InfoItem'

function InfoSection() {
    return(
        <section className="info">

            <InfoItem title='Skills' className='action' elements={ SKILLS } />

            <InfoItem title='Proyectos' className='anchor' elements={ PROYECTS } />

            <InfoItem title="Experiencia" className='anchor' elements={ EXPERIENCES } />

            <InfoItem title='Contacto' typeItem='anchor' />
                <a href='mailto:grigerratia@gmail.com' className='mailtome'>Salúdame</a>

    </section>
    )
}

export default InfoSection