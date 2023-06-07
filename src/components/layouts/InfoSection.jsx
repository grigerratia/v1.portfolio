import '../../styles/styles-layout/InfoSection.css'

function InfoSection() {
    return(
        <section className="info">

            <div className='box-info-item'>
                <div className='info-title'>Skills</div>
                <div className="info-item skills">
                    <div className="javascript skill">JavaScript</div>
                    <div className="next skill">Next.js</div>
                    <div className="react skill">React.js</div>
                    <div className="vue skill">Vue.js</div>
                    <div className="tailwind skill">Tailwind</div>
                    <div className="api-consume skill">Api Consume</div>
                    <div className="node skill">Node.js</div>
                    <div className="express skill">Express</div>
                    <div className="mongodb skill">MongoDB</div>
                    <div className="api-rest skill">API REST</div>
                    <div className="figma skill">Figma</div>
                </div>
            </div>

            <div className='box-info-item'>
                <div className='info-title'>Portafolio</div>
                <div className="info-item proyects">
                    <div className="info-proyect twitter-clone">Twitter Clone</div>
                    <div className="info-proyect tic-tac-toe">Tic Tac Toe</div>
                    <div className="info-proyect store">Store</div>
                    <div className="info-proyect todo-list">Todo List</div>
                    <div className="info-proyect traslate-mony">Traslate Money</div>
                    <div className="info-proyect betel-church">Betel Church</div>
                </div>
            </div>

            <div className='box-info-item'>
                <div className='info-title'>Experiencia</div>
                <div className="info-item experiences">
                    <div className="info-experience">Backend Developer en Cesticom</div>
                </div>
            </div>


            <div className='box-info-item box-contact'>
                <div className='info-title'>Contacto</div>
                <div className='mailtome'>
                    <a href='mailto:grigerratia@gmail.com'>Salúdame</a>
                </div>
            </div>

    </section>
    )
}

export default InfoSection