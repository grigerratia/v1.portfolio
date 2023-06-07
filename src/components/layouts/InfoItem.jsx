import '../../styles/styles-layout/InfoItem.css'

function InfoItem({ children, className, title }) {
    return(
        <div className='info-item'>

            <div className='info-title'>{ title }</div>

            <div className='info-elements'>
                { children }
            </div>

        </div>
    )
}

export default InfoItem