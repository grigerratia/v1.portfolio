import {
	FaInstagramSquare,
	FaLinkedin,
	FaGithubSquare,
	FaTwitterSquare,
} from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

import "../../styles/styles-layout/SocialIcons.css";

function SocialICons() {
	const ICONS = [
		{
			name: "twitter",
			className: "twitter-icon social-icon",
			icon: <FaTwitterSquare />,
			href: "https://twitter.com/grigerratia",
		},
		{
			name: "linkedin",
			className: "linkedin-icon social-icon",
			icon: <FaLinkedin />,
			href: "https://www.linkedin.com/in/griger-ratia-880899161/",
		},
		{
			name: "facebook",
			className: "facebook-icon social-icon",
			icon: <FaSquareFacebook />,
			href: "https://www.facebook.com/GrigerDev/",
		},
		{
			name: "instagram",
			className: "instagram-icon social-icon",
			icon: <FaInstagramSquare />,
			href: "https://www.instagram.com/griger_rt/",
		},
		{
			name: "github",
			className: "github-icon social-icon",
			icon: <FaGithubSquare />,
			href: "https://github.com/Grigerlord",
		},
	];
	return (
		<div className='socialIcons-menu'>
			{ICONS.map((elem) => {
				return (
					<a
						href={elem.href}
						target='blank'
						className={elem.className}
						key={elem.name}>
						{elem.icon}
					</a>
				);
			})}
		</div>
	);
}

export default SocialICons;
