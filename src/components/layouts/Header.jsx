import '../../styles/styles-layout/Header.css'
import Logo from '../components/Logo'
import SocialIcons from '../layouts/SocialIcons'


function Header(){
    return (
        <header className='header'>
            <Logo />
            <SocialIcons />
        </header>
    )
}

export default Header