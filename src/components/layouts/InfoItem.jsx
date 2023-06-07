import '../../styles/styles-layout/InfoItem.css'
import ButtonAction from '../components/ButtonAction'

function InfoItem({ children, className, title, elements}) {
    return(
        <div className='info-item'>

            <div className='info-title'>{ title }</div>

            <div className='info-elements'>
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