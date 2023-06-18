import '../../../styles/base/base.css'
import './SkillPage.css'
import { SiJavascript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
// import AppContext from "../../context/AppContext";
// import { useContext } from 'react';
import DetailPage from './detailsPage/DetailPage'
import JavascriptPage from './javascriptPage/JavascriptPage';

const skillsData = {
    javascript: { logo: <SiJavascript size='2rem'/>, title: 'JavaScript', percentege: 90 },
    next: { logo: <TbBrandNextjs size='2rem'/>, title: 'Next.js', percentege: 70 },
}

// const javascript = skillsData.javascript
// const next = skillsData.next

const tec = 'javascript'
const data = skillsData[tec]

function SkillPage() {

    return (
        <div className="infoSkill">
            <div className="infoSkill-header" >
                <div className='infoSkill-header--left'>
                    <div className="infoSkill-header--logo" >
                        { data.logo }
                    </div>
                    <div className="infoSkill-header--title" >
                        <h2>{ data.title }</h2>
                    </div>
                </div>
                <div className="infoSkill-header--right infoSkill-header--percentage">
                    <div className="percentege-box">
                        <div className="percentage-level" style={{ width: `${data.percentege}%` }} >
                            <div className="percentage-text">{ data.percentege }%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="infoSkill-paragraph">
                {/* <DetailPage /> */}
                <JavascriptPage />
            </div>

            <div className="infoSkill-footer"></div>
        </div>
    );
}

export default SkillPage;