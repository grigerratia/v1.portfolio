import {
	SiJavascript,
	SiVuedotjs,
	SiNuxtdotjs,
	SiTailwindcss,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaWordpress } from "react-icons/fa";
import { BsDatabaseFillGear } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import { IoLogoFigma } from "react-icons/io5";

import JavascriptPage from "./skills-pages/javascriptPage/JavascriptPage";
import NextPage from "./skills-pages/nextPage/NextPage";
import ReactPage from "./skills-pages/reactPage/ReactPage";
import VuePage from "./skills-pages/vuePage/VuePage";
import NuxtPage from "./skills-pages/nuxtPage/NuxtPage";
import TailwindPage from "./skills-pages/tailwindPage/TailwindPage";
import ApiConsumePage from "./skills-pages/apiConsumePage/ApiConsumePage";
import NodePage from "./skills-pages/nodePage/NodePage";
import ExpressPage from "./skills-pages/expressPage/ExpressPage";
import MongoosePage from "./skills-pages/mongoosePage/MongoosePage";
import MongodbPage from "./skills-pages/mongodbPage/MongodbPage";
import ApirestPage from "./skills-pages/apirestPage/ApirestPage";
import FigmaPage from "./skills-pages/figmaPage/FigmaPage";
import WordpressPage from "./skills-pages/wordpressPage/WordpressPage";

//==========================================================================================================
//==========================================================================================================
//==========================================================================================================
//==========================================================================================================

import "../../styles/styles-layout/InfoSection.css";
import InfoItem from "./InfoItem";
import SkillPage from "./skills-pages/SkillPage";
import ProyectsPages from "./proyects-pages/ProyectPage";
import ExperiencePage from "./experience-page/ExperiencePage";
import ButtonMyServices from "../components/ButtonMyServices";
import Anchor from "../components/Anchor";

//==========================================================================================================
//==========================================SKILLS==========================================================
//==========================================================================================================
//==========================================================================================================

function InfoSection() {
	const SKILLS = [
		{
			name: "JavaScript",
			key: 1,
			classTheme: "javascript-theme",
			colorPointer: "#857e5700",
			data: {
				logo: <SiJavascript size='2rem' />,
				title: "JavaScript",
				percentege: 90,
				languagePage: <JavascriptPage />,
			},
		},
		{
			name: "Next.js",
			key: 2,
			classTheme: "next-theme",
			colorPointer: "#cccccc1e",
			data: {
				logo: <TbBrandNextjs size='2rem' />,
				title: "Next.js",
				percentege: 70,
				languagePage: <NextPage />,
			},
		},
		{
			name: "React.js",
			key: 3,
			classTheme: "react-theme",
			colorPointer: "#1d4ed826",
			data: {
				logo: <FaReact size='2rem' />,
				title: "React.Js",
				percentege: 80,
				languagePage: <ReactPage />,
			},
		},
		{
			name: "Vue3",
			key: 4,
			classTheme: "vue-theme",
			colorPointer: "#2d2d2d28",
			data: {
				logo: <SiVuedotjs size='2rem' />,
				title: "Vue3",
				percentege: 60,
				languagePage: <VuePage />,
			},
		},
		{
			name: "Nuxt.js",
			key: 5,
			classTheme: "nuxt-theme",
			colorPointer: "#03273125",
			data: {
				logo: <SiNuxtdotjs size='2rem' />,
				title: "Nuxt.js",
				percentege: 60,
				languagePage: <NuxtPage />,
			},
		},
		{
			name: "Tailwind",
			key: 6,
			classTheme: "tailwind-theme",
			colorPointer: "#731aad26",
			data: {
				logo: <SiTailwindcss size='2rem' />,
				title: "Tailwind CSS",
				percentege: 80,
				languagePage: <TailwindPage />,
			},
		},
		{
			name: "API Consume",
			key: 7,
			classTheme: "api-consume-theme",
			colorPointer: "#00dfb215",
			data: {
				logo: <BsDatabaseFillGear size='2rem' />,
				title: "APIs",
				percentege: 90,
				languagePage: <ApiConsumePage />,
			},
		},
		{
			name: "Node.js",
			key: 8,
			classTheme: "node-theme",
			colorPointer: "#cccccc18",
			data: {
				logo: <SiNodedotjs size='2rem' />,
				title: "Node.Js",
				percentege: 90,
				languagePage: <NodePage />,
			},
		},
		{
			name: "Express.js",
			key: 9,
			classTheme: "express-theme",
			colorPointer: "#cccccc7c",
			data: {
				logo: <SiExpress size='2rem' />,
				title: "Express.js",
				percentege: 80,
				languagePage: <ExpressPage />,
			},
		},
		{
			name: "Mongoose",
			key: 10,
			classTheme: "mongoose-theme",
			colorPointer: "#ffe8e88a",
			data: {
				logo: (
					<img
						src='https://thumbs2.imgbox.com/e6/ee/FPd5MgKq_t.png'
						alt='image host'
						width='35px'
						style={{ borderRadius: "4px", backgroundColor: "ffffff00" }}
					/>
				),
				title: "Mongoose",
				percentege: 70,
				languagePage: <MongoosePage />,
			},
		},
		{
			name: "MongoDB",
			key: 11,
			classTheme: "mongodb-theme",
			colorPointer: "#01380125",
			data: {
				logo: <SiMongodb size='2rem' />,
				title: "MongoDB",
				percentege: 80,
				languagePage: <MongodbPage />,
			},
		},
		{
			name: "API REST",
			key: 12,
			classTheme: "api-rest-theme",
			colorPointer: "#00000000",
			data: {
				logo: <GiGears size='2rem' />,
				title: "API REST",
				percentege: 70,
				languagePage: <ApirestPage />,
			},
		},
		{
			name: "Figma",
			key: 13,
			classTheme: "figma-theme",
			colorPointer: "#dfdfdf",
			data: {
				logo: <IoLogoFigma size='2rem' />,
				title: "Figma",
				percentege: 50,
				languagePage: <FigmaPage />,
			},
		},
		{
			name: "WordPress",
			key: 14,
			classTheme: "wordpress-theme",
			colorPointer: "#e0f7ff",
			data: {
				logo: <FaWordpress size='2rem' />,
				title: "Wordpress",
				percentege: 50,
				languagePage: <WordpressPage />,
			},
		},
	];

	//==========================================================================================================
	//==========================================================================================================
	//==========================================================================================================
	//==========================================================================================================

	const PROYECTS = [
		{
			name: "Twitter Clone",
			key: 15,
			colorPointer: "#032731",
			imgProyect: "https://thumbs2.imgbox.com/7d/5d/RBT7xmnI_t.png",
			years: "2020 . 2021",
			texto:
				"Crear este proyecto en React representó varios retos interesantes. Manejar el estado y crear componentes eficientes ha sido una curva empinada de aprendizaje, pero que ya he logrado superar.",
		},
		{
			name: "Tic Tac Toe",
			key: 16,
			colorPointer: "#032731",
			imgProyect:
				"https://www.gamesver.com/wp-content/uploads/2022/02/Tic-tac-toe-game.jpg.webp",
			years: "2021 . 2022",
			texto:
				"En mis inicios usando React, como todo principiante, no faltó esta aplicación. Aquí se definen todos los conceptos de esta popular librería.",
		},
		{
			name: "SaverSaver",
			key: 17,
			colorPointer: "#032731",
			imgProyect:
				"https://www.mabisy.com/server/Portal_0006286/img/empiezaavender.png",
			years: "2022 . 2023",
			texto:
				"SaverSaver es uno de mis proyectos estrella. Uno con el que sueño independizarme por completo. Al verlo, notarás que le he puesto corazón.",
		},
		{
			name: "Todo List",
			key: 18,
			colorPointer: "#032731",
			imgProyect:
				"https://www.todoist.com/static/home/features/clear-your-mind-1008.jpg",
			years: "2023 . 2021",
			texto:
				"Todos han hecho un ToDo List, el asunto radica en qué tiene de especial el código y las funcionalidades de cada quién. Averigua los detalles interesantes del mío.",
		},
		{
			name: "Forecaster",
			key: 19,
			colorPointer: "#032731",
			imgProyect:
				"https://www.seoptimer.com/es/blog/wp-content/uploads/2014/10/Apps-tiempo.png",
			years: "2023 . 2021",
			texto:
				"Este proyecto es un buen ejemplo para mostrar mis habilidades para consumir APIs con eficiencia. También notarás la agradable presentaición de front.",
		},
		{
			name: "Healthy",
			key: 20,
			colorPointer: "#032731",
			imgProyect:
				"https://fotografias.lasexta.com/clipping/cmsimages02/2023/01/31/6E4C2072-4827-4582-A499-C53E181689AB/redes-sociales-movil_98.jpg?crop=6000,3376,x0,y358&width=1900&height=1069&optimize=high&format=webply",
			years: "2023 . 2021",
			texto:
				"Este proyecto, es una idea de red social dirigida a toda persona que quiera dejar de consumir contenido inapropiado, innecesario o controvertido. Creo que es ideal para jóvenes y niños.",
		},
		{
			name: "Condostart",
			key: 21,
			colorPointer: "#032731",
			imgProyect:
				"https://d1ih8jugeo2m5m.cloudfront.net/2022/04/tipos-de-paginas-web-1200x685.jpg",
			years: "2023 . 2021",
			texto: [
				`Condostart es un proyecto en el que trabajé miestras desarrollaba para `,
				<Anchor
					key='Anchor-1'
					text='Cesticom'
					anchor='https://cesticom.com/'
				/>,
				`. Es uno de esos retos en mi vida que recuerdo de forma especial, por el trabajo en equipo y la superación personal. `,
			],
		},
		{
			name: "Iglesia Betel",
			key: 22,
			colorPointer: "#032731",
			imgProyect: "https://thumbs2.imgbox.com/86/dc/yNMVVtcI_t.png",
			years: "2023 . 2021",
			texto:
				"Soy cristiano y fiel seguidor de las enseñanzas de Dios y Jesucristo. Me congrego en la Iglesia Bíblica Bautista Betel, así que puedes hacerte una idea de este proyecto. Es una página para darla a conocer. Eso y otras cosas.",
		},
	];

	//==========================================================================================================
	//==========================================================================================================
	//==========================================================================================================
	//==========================================================================================================

	const EXPERIENCES = [
		{
			name: "Backend developer en Cesticom",
			key: 23,
			imgExperience:
				"https://media.licdn.com/dms/image/C4E0BAQF3BMbJgtdjtw/company-logo_200_200/0/1556104079904?e=2147483647&v=beta&t=jz6X48FNWk95Zsl6eg_iZgTlQrJScHUX9xRXKbhkE1Y",
			texto: [
				`Desarrollar para`,
				<Anchor text='Cesticom' anchor='https://cesticom.com/' key='26' />,
				` fue una experiencia muy agradable. Aquí logré fortalecer mis habilidades para la creación de API RESTs, la ejecución de marcos de desarrollo y el trabajo en equipo.`,
			],
		},
		{
			name: "Desasorrador de Wordpress freelancer",
			key: 24,
			imgExperience:
				"data:image/png;base64,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",
			texto: [
				`Actualmente, me dedico a realizar y depurar proyectos creados en WordPress de forma independiente. Este trabajo lo hago gracias a la ayuda de`,
				<Anchor text='Cesar Luis' anchor='https://cesarluis.com/' key='27' />,
				`, un experto en WordPress.`,
			],
		},
		{
			name: "Experiencia personal",
			key: 25,
			imgExperience: "https://thumbs2.imgbox.com/e8/3e/IVhzlmkr_t.jpg",
			texto: [
				`Toda mi trayectoria de aprendizaje y las lecciones extraídas de cada proyecto terminado, son la mejor evidencia de mis capacidades. Todos `,
				<Anchor
					text='estos logros'
					anchor='https://github.com/grigerlord/'
					key='28'
				/>,
				` capturan con precisión mi experiencia y compromiso. `,
			],
		},
	];

	return (
		<section className='info'>
			<InfoItem
				title='Skills'
				className='action'
				elements={SKILLS}
				page={<SkillPage />}
			/>
			<InfoItem
				title='Proyectos'
				className='anchor'
				elements={PROYECTS}
				page={<ProyectsPages />}
			/>
			<InfoItem
				title='Experiencia'
				className='anchor'
				elements={EXPERIENCES}
				page={<ExperiencePage />}
			/>
			<InfoItem title='Contacto'>
				<p style={{ fontSize: "0.8rem" }}>
					¿Necesitas ayuda con tu sitio web? Estoy aquí para ayudarte.
					Contáctame por correo electrónico o mis redes sociales. ¡Espero saber
					de ti pronto!
				</p>
				<ButtonMyServices texto='¡Salúdame!' />
			</InfoItem>
		</section>
	);
}

export default InfoSection;
