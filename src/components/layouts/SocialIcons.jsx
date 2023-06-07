import '../../styles/styles-layout/SocialIcons.css'
import { ICONS } from '../../utils/socialIcons'

function SocialICons() {
    return (
        <div className='socialIcons-menu'>
            {
                ICONS.map((elem, i)=>{
                    return (
                        <div className={ elem.className } key={ elem.name }>
                            { elem.icon }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SocialICons


