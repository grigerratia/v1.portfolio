import { SiTwitter } from 'react-icons/si'
import { FaInstagramSquare, FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

export const ICONS = [
    { name: 'twitter', className: 'twitter-icon social-icon', icon: <SiTwitter /> },
    { name: 'linkedin', className: 'linkedin-icon social-icon', icon: <FaLinkedin /> },
    { name: 'facebook', className: 'facebook-icon social-icon', icon: <BsFacebook /> },
    { name: 'instagram', className: 'instagram-icon social-icon', icon: <FaInstagramSquare /> },
    { name: 'github', className: 'github-icon social-icon', icon: <FaGithub /> },
]