import type { SimpleIcon } from 'simple-icons';
import {
	siApachemaven,
	siAndroid,
	siAstro,
	siC,
	siCloudflare,
	siCss,
	siDaisyui,
	siDocker,
	siFirebase,
	siGit,
	siGithubactions,
	siGithubpages,
	siGradle,
	siHetzner,
	siHtml5,
	siJavascript,
	siLua,
	siMysql,
	siNodedotjs,
	siNpm,
	siNuxt,
	siPhp,
	siPostgresql,
	siPython,
	siReact,
	siShadcnui,
	siSpringboot,
	siTailwindcss,
	siTypescript,
	siVitest,
	siVuedotjs,
	siVuetify,
	siWebpack,
	siWordpress,
} from 'simple-icons';

export type MulticolorIcon = {
	title: string;
	slug: string;
	viewBox: string;
	paths: {
		d: string;
		fill: string;
	}[];
};

export type SkillIcon = SimpleIcon | MulticolorIcon;

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type Skill = {
	name: string;
	icon: SkillIcon;
	/** 1 Basics · 2 Familiar · 3 Proficient · 4 Advanced · 5 Expert */
	level: SkillLevel;
	/** First year of real use; the years of experience are counted from it at build time. */
	since: number;
	/**
	 * Projects it was used in, including ones not shown on this site. 0 means
	 * too many to count reliably and is shown as "> 10" — a tech with no real
	 * projects behind it doesn't make the list in the first place.
	 */
	projects: number;
};

export type SkillGroupKey = 'languages' | 'frontend' | 'backend' | 'databases' | 'cloudHosting' | 'buildDevops';

export type SkillGroup = {
	key: SkillGroupKey;
	skills: Skill[];
};

const siAws: SimpleIcon = {
	title: 'AWS',
	slug: 'aws',
	path: 'M6.66 9.35c.23-2.72 2.52-4.85 5.31-4.85 2.23 0 4.16 1.37 4.96 3.32.29-.08.6-.12.92-.12 1.86 0 3.37 1.51 3.37 3.37 0 1.74-1.32 3.17-3.02 3.35H6.31A3.51 3.51 0 0 1 2.8 10.91c0-1.94 1.57-3.51 3.51-3.51.12 0 .23.01.35.02ZM5.55 18.47c2.31 1.35 4.51 2.03 6.6 2.03 2.1 0 4.3-.68 6.6-2.03.33-.19.74-.08.93.24.19.33.08.74-.24.93C16.93 21.11 14.5 21.85 12.15 21.85s-4.78-.74-7.29-2.21a.68.68 0 0 1-.24-.93c.19-.32.61-.43.93-.24Zm11.37-2.18c.63-.08 1.27.02 1.89.3.34.15.5.55.35.9-.15.34-.55.5-.9.35-.39-.17-.78-.24-1.16-.19-.38.05-.72.2-1.04.45-.29.23-.72.18-.95-.11a.68.68 0 0 1 .11-.96c.5-.39 1.07-.64 1.7-.74Z',
	source: 'https://aws.amazon.com/architecture/icons/',
	hex: 'FF9900',
	svg: '',
};

const siIndexeddb: SimpleIcon = {
	title: 'IndexedDB',
	slug: 'indexeddb',
	path: 'M12 1.75c-5.08 0-9.2 1.58-9.2 3.53v13.44c0 1.95 4.12 3.53 9.2 3.53s9.2-1.58 9.2-3.53V5.28c0-1.95-4.12-3.53-9.2-3.53Zm0 1.5c4.49 0 7.7 1.28 7.7 2.03S16.49 7.31 12 7.31 4.3 6.03 4.3 5.28 7.51 3.25 12 3.25Zm7.7 15.47c0 .75-3.21 2.03-7.7 2.03s-7.7-1.28-7.7-2.03v-2.7c1.62 1.08 4.5 1.75 7.7 1.75s6.08-.67 7.7-1.75v2.7Zm0-5.14c0 .75-3.21 2.03-7.7 2.03s-7.7-1.28-7.7-2.03v-2.7c1.62 1.08 4.5 1.75 7.7 1.75s6.08-.67 7.7-1.75v2.7Zm0-5.13c0 .75-3.21 2.03-7.7 2.03S4.3 9.2 4.3 8.45v-.8C5.92 8.73 8.8 9.4 12 9.4s6.08-.67 7.7-1.75v.8Z',
	source: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
	hex: '2563EB',
	svg: '',
};

// simple-icons has no Slim mark, so the PHP one stands in, in Slim's brand
// green (#719E40, from slimframework.com).
const siSlim: SimpleIcon = {
	...siPhp,
	title: 'Slim',
	slug: 'slim',
	source: 'https://www.slimframework.com/',
	hex: '719E40',
};

const siJavaClassic: MulticolorIcon = {
	title: 'Java',
	slug: 'java',
	viewBox: '0 0 24 24',
	paths: [
		{
			d: 'M10.9 1.2c1.5 1.2-.4 2.2-.9 3.2-.5.9.6 1.5 1.5 2.1-1.9-.2-3.3-1.2-2.7-2.5.5-1.1 2.4-1.8 2.1-2.8Z',
			fill: '#F89820',
		},
		{
			d: 'M14.2.8c1.9 1.5-.5 2.8-1.1 4-.6 1.1.8 1.9 1.8 2.7-2.5-.3-4.2-1.5-3.3-3.1.6-1.3 3-2.2 2.6-3.6Z',
			fill: '#F89820',
		},
		{
			d: 'M16.5 3.3c1.2 1-.2 1.8-.6 2.6-.3.7.5 1.2 1.1 1.7-1.6-.1-2.7-.9-2.2-1.9.4-.9 1.9-1.4 1.7-2.4Z',
			fill: '#F89820',
		},
		{
			d: 'M5.7 10.2h10.8l-.9 5.2c-.2 1.3-1.3 2.2-2.6 2.2H9.2c-1.3 0-2.4-.9-2.6-2.2l-.9-5.2Z',
			fill: '#5382A1',
		},
		{
			d: 'M16.3 11.2h1.1c1.2 0 2.1.8 2.1 1.9s-.9 1.9-2.1 1.9h-1.7l.3-1.3h1.3c.5 0 .9-.3.9-.7s-.4-.7-.9-.7h-1.2l.2-1.1Z',
			fill: '#5382A1',
		},
		{
			d: 'M5.4 18.6c1.4.5 3.5.8 5.9.8s4.5-.3 5.9-.8c.8.2 1.3.5 1.3.9 0 .8-3.2 1.5-7.2 1.5s-7.2-.7-7.2-1.5c0-.4.5-.7 1.3-.9Z',
			fill: '#5382A1',
		},
	],
};

export const skillGroups: SkillGroup[] = [
	{
		key: 'languages',
		skills: [
			{ name: 'Java', icon: siJavaClassic, level: 4, since: 2010, projects: 0 },
			{ name: 'JavaScript', icon: siJavascript, level: 4, since: 2020, projects: 0 },
			{ name: 'TypeScript', icon: siTypescript, level: 4, since: 2022, projects: 8 },
			{ name: 'PHP', icon: siPhp, level: 3, since: 2018, projects: 4 },
			{ name: 'Lua', icon: siLua, level: 3, since: 2023, projects: 3 },
			{ name: 'C', icon: siC, level: 1, since: 2009, projects: 3 },
			{ name: 'Python', icon: siPython, level: 1, since: 2025, projects: 2 },
		],
	},
	{
		key: 'frontend',
		skills: [
			{ name: 'Vue.js', icon: siVuedotjs, level: 4, since: 2020, projects: 7 },
			{ name: 'Nuxt', icon: siNuxt, level: 3, since: 2022, projects: 3 },
			{ name: 'React', icon: siReact, level: 2, since: 2025, projects: 2 },
			{ name: 'Astro', icon: siAstro, level: 2, since: 2025, projects: 3 },
			{ name: 'HTML', icon: siHtml5, level: 4, since: 2009, projects: 10 },
			{ name: 'CSS', icon: siCss, level: 4, since: 2009, projects: 10 },
			{ name: 'Tailwind CSS', icon: siTailwindcss, level: 2, since: 2024, projects: 4 },
		],
	},
	{
		key: 'backend',
		skills: [
			{ name: 'Spring Boot', icon: siSpringboot, level: 4, since: 2025, projects: 3 },
			{ name: 'Node.js', icon: siNodedotjs, level: 2, since: 2022, projects: 2 },
			{ name: 'Slim', icon: siSlim, level: 3, since: 2018, projects: 4 },
		],
	},
	{
		key: 'databases',
		skills: [
			{ name: 'MySQL', icon: siMysql, level: 4, since: 2007, projects: 0 },
			{ name: 'PostgreSQL', icon: siPostgresql, level: 4, since: 2021, projects: 3 },
			{ name: 'IndexedDB (NoSQL)', icon: siIndexeddb, level: 3, since: 2021, projects: 2 },
			{ name: 'Firestore (NoSQL)', icon: siFirebase, level: 3, since: 2021, projects: 2 },
		],
	},
	{
		key: 'cloudHosting',
		skills: [
			{ name: 'AWS', icon: siAws, level: 3, since: 2018, projects: 5 },
			{ name: 'Cloudflare', icon: siCloudflare, level: 3, since: 2023, projects: 5 },
			{ name: 'Firebase', icon: siFirebase, level: 3, since: 2021, projects: 3 },
			{ name: 'Hetzner', icon: siHetzner, level: 3, since: 2025, projects: 3 },
		],
	},
	{
		key: 'buildDevops',
		skills: [
			{ name: 'Maven', icon: siApachemaven, level: 3, since: 2025, projects: 3 },
			{ name: 'Gradle', icon: siGradle, level: 4, since: 2013, projects: 0 },
			{ name: 'npm', icon: siNpm, level: 4, since: 2020, projects: 0 },
			{ name: 'Git', icon: siGit, level: 4, since: 2014, projects: 0 },
			{ name: 'Docker', icon: siDocker, level: 3, since: 2022, projects: 0 },
		],
	},
];

/**
 * Icons for the technologies projects list that are not skills of their own,
 * plus the names projects use for skills listed under another one.
 */
const techIcons: Record<string, SkillIcon> = {
	Java: siJavaClassic,
	'Amazon Web Services': siAws,
	Android: siAndroid,
	daisyUI: siDaisyui,
	'GitHub Actions': siGithubactions,
	'GitHub Pages': siGithubpages,
	'shadcn/ui': siShadcnui,
	Vitest: siVitest,
	Vuetify: siVuetify,
	Webpack: siWebpack,
	WordPress: siWordpress,
};

const skillIcons = new Map(skillGroups.flatMap((group) => group.skills).map((skill) => [skill.name, skill.icon]));

/** The icon for a technology as a project names it, if there is one. */
export const iconForTech = (name: string): SkillIcon | undefined => techIcons[name] ?? skillIcons.get(name);
