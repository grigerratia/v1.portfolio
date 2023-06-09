import '../../styles/styles-layout/SocialIcons.css'
import { ICONS } from '../../utils/socialIcons'

function SocialICons() {
    return (
        <div className='socialIcons-menu'>
            {
                ICONS.map((elem, i)=>{
                    return (
                        <a href={ elem.href } target='blank' className={ elem.className } key={ elem.name }>
                            { elem.icon }
                        </a>
                    )
                })
            }
        </div>
    )
}

export default SocialICons


