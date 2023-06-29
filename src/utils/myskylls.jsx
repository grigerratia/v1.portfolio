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

import JavascriptPage from "../components/layouts/skills-pages/javascriptPage/JavascriptPage";
import NextPage from "../components/layouts/skills-pages/nextPage/NextPage";
import ReactPage from "../components/layouts/skills-pages/reactPage/ReactPage";
import VuePage from "../components/layouts/skills-pages/vuePage/VuePage";
import NuxtPage from "../components/layouts/skills-pages/nuxtPage/NuxtPage";
import TailwindPage from "../components/layouts/skills-pages/tailwindPage/TailwindPage";
import ApiConsumePage from "../components/layouts/skills-pages/apiConsumePage/ApiConsumePage";
import NodePage from "../components/layouts/skills-pages/nodePage/NodePage";
import ExpressPage from "../components/layouts/skills-pages/expressPage/ExpressPage";
import MongoosePage from "../components/layouts/skills-pages/mongoosePage/MongoosePage";
import MongodbPage from "../components/layouts/skills-pages/mongodbPage/MongodbPage";
import ApirestPage from "../components/layouts/skills-pages/apirestPage/ApirestPage";
import FigmaPage from "../components/layouts/skills-pages/figmaPage/FigmaPage";
import WordpressPage from "../components/layouts/skills-pages/wordpressPage/WordpressPage";

const SKILLS = [
	{
		name: "JavaScript",
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

export default SKILLS;
