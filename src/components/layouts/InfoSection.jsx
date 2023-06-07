import '../../styles/styles-layout/InfoSection.css'
import InfoItem from './InfoItem'

function InfoSection() {
    return(
        <section className="info">

            <InfoItem title='Skills'>
                <div className="action">JavaScript</div>
                <div className="action">Next.js</div>
                <div className="action">React.js</div>
                <div className="action">Vue.js</div>
                <div className="action">Tailwind</div>
                <div className="action">Api Consume</div>
                <div className="action">Node.js</div>
                <div className="action">Express</div>
                <div className="action">MongoDB</div>
                <div className="action">API REST</div>
                <div className="action">Figma</div>
            </InfoItem>

            <InfoItem title='Proyectos'>
                <div className="anchor">Twitter Clone</div>
                <div className="anchor">Tic Tac Toe</div>
                <div className="anchor">Store</div>
                <div className="anchor">Todo List</div>
                <div className="anchor">Traslate Money</div>
                <div className="anchor">Betel Church</div>
            </InfoItem>

            <InfoItem title="Experiencia">
                <div className="anchor">Backend Developer en Cesticom</div>
            </InfoItem>

            <InfoItem title='Contacto'>
                <a href='mailto:grigerratia@gmail.com' className='mailtome'>Salúdame</a>
            </InfoItem>

    </section>
    )
}

export default InfoSection