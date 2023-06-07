import '../../styles/styles-layout/InfoItem.css'
import InfoTitle from '../components/InfoTitle'
import ButtonAction from '../components/ButtonAction'

function InfoItem({ children, className, title, elements}) {
    return(
        <div className='info-item'>

            <InfoTitle title={title} />

            <div className='info-elements'>
                { children }
                {
                    elements?.map((element) => {
                        return(
                            <ButtonAction className={ className } elementName={ element.name } key={ element.name }/>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default InfoItem