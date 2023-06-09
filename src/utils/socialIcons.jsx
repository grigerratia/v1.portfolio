import { SiTwitter } from 'react-icons/si'
import { FaInstagramSquare, FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

export const ICONS = [
    { name: 'twitter', className: 'twitter-icon social-icon', icon: <SiTwitter />, href: 'https://twitter.com/grigerratia' },
    { name: 'linkedin', className: 'linkedin-icon social-icon', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/griger-ratia-880899161/' },
    { name: 'facebook', className: 'facebook-icon social-icon', icon: <BsFacebook />, href: 'https://www.facebook.com/GrigerDev/' },
    { name: 'instagram', className: 'instagram-icon social-icon', icon: <FaInstagramSquare />, href: 'https://www.instagram.com/griger_rt/' },
    { name: 'github', className: 'github-icon social-icon', icon: <FaGithub />, href: 'https://github.com/Grigerlord' },
]