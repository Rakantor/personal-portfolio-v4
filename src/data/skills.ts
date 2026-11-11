import type { SimpleIcon } from 'simple-icons';
import {
	siApachemaven,
	siAndroid,
	siAngular,
	siAstro,
	siC,
	siCapacitor,
	siCloudflare,
	siClaudecode,
	siCss,
	siCursor,
	siDaisyui,
	siDocker,
	siDotnet,
	siFigma,
	siFirebase,
	siGit,
	siGithub,
	siGithubcopilot,
	siGoogleadmob,
	siGradle,
	siHetzner,
	siHtml5,
	siJavascript,
	siLua,
	siModelcontextprotocol,
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
	siSupabase,
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
	/** 1 = Basics, 2 = Familiar, 3 = Proficient, 4 = Advanced, 5 = Expert */
	level: SkillLevel;
	/** First year of use. The years label is computed from it. */
	since: number;
	/** Number of projects it was used in, not only those on this site. 0 is shown as "> 10". */
	projects: number;
};

export type SkillGroupKey = 'languages' | 'frontend' | 'backend' | 'databases';

export type SkillGroup = {
	key: SkillGroupKey;
	skills: Skill[];
};

/** Platforms and tools, listed without a level. */
export type Tool = {
	name: string;
	icon: SkillIcon;
};

export type ToolGroupKey = 'cloudHosting' | 'buildDevops' | 'aiTooling' | 'design';

export type ToolGroup = {
	key: ToolGroupKey;
	tools: Tool[];
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

// simple-icons removed the OpenAI icons, so the logo path is kept here.
const siOpenai: SimpleIcon = {
	title: 'OpenAI',
	slug: 'openai',
	source: 'https://openai.com/brand/',
	hex: '000000',
	svg: '',
	path: 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z',
};

// Three linked nodes, since agents have no logo.
const siAgents: SimpleIcon = {
	title: 'AI Agents',
	slug: 'aiagents',
	source: '',
	hex: '0C1730',
	svg: '',
	path: 'M9 5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM2 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM16 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM12.66 5.36L11.34 4.64L4.34 17.64L5.66 18.36ZM11.34 5.36L12.66 4.64L19.66 17.64L18.34 18.36ZM5 17.25h14v1.5H5Z',
};

// simple-icons has no Slim icon, so this is the PHP one in Slim's green.
const siSlim: SimpleIcon = {
	...siPhp,
	title: 'Slim',
	slug: 'slim',
	source: 'https://www.slimframework.com/',
	hex: '719E40',
};

// simple-icons removed the C# icon, so the hexagon badge is drawn here.
const siCsharp: MulticolorIcon = {
	title: 'C#',
	slug: 'csharp',
	viewBox: '0 0 24 24',
	paths: [
		{ d: 'M12 1l9.53 5.5v11L12 23l-9.53-5.5v-11Z', fill: '#68217A' },
		{ d: 'M13.68 8.32A5.2 5.2 0 1 0 13.68 15.68L12.26 14.26A3.2 3.2 0 1 1 12.26 9.74Z', fill: '#FFFFFF' },
		{ d: 'M15.8 9.8h.9v4.4h-.9ZM17.8 9.8h.9v4.4h-.9ZM15.2 10.7h4v.9h-4ZM15.2 12.5h4v.9h-4Z', fill: '#FFFFFF' },
	],
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
			{ name: 'TypeScript', icon: siTypescript, level: 4, since: 2022, projects: 9 },
			{ name: 'PHP', icon: siPhp, level: 3, since: 2018, projects: 4 },
			{ name: 'Lua', icon: siLua, level: 3, since: 2023, projects: 3 },
			{ name: 'C', icon: siC, level: 1, since: 2009, projects: 3 },
			{ name: 'Python', icon: siPython, level: 1, since: 2025, projects: 2 },
			{ name: 'C#', icon: siCsharp, level: 1, since: 2026, projects: 1 },
		],
	},
	{
		key: 'frontend',
		skills: [
			{ name: 'Vue.js', icon: siVuedotjs, level: 4, since: 2020, projects: 7 },
			{ name: 'Nuxt', icon: siNuxt, level: 3, since: 2022, projects: 3 },
			{ name: 'React', icon: siReact, level: 2, since: 2025, projects: 3 },
			{ name: 'Astro', icon: siAstro, level: 2, since: 2025, projects: 4 },
			{ name: 'HTML', icon: siHtml5, level: 4, since: 2009, projects: 0 },
			{ name: 'CSS', icon: siCss, level: 4, since: 2009, projects: 0 },
			{ name: 'Tailwind CSS', icon: siTailwindcss, level: 2, since: 2024, projects: 4 },
			{ name: 'Angular', icon: siAngular, level: 2, since: 2026, projects: 1 },
		],
	},
	{
		key: 'backend',
		skills: [
			{ name: 'Spring Boot', icon: siSpringboot, level: 3, since: 2025, projects: 3 },
			{ name: 'Node.js', icon: siNodedotjs, level: 2, since: 2022, projects: 2 },
			{ name: 'Slim', icon: siSlim, level: 3, since: 2018, projects: 4 },
			{ name: '.NET', icon: siDotnet, level: 1, since: 2026, projects: 1 },
		],
	},
	{
		key: 'databases',
		skills: [
			{ name: 'MySQL', icon: siMysql, level: 4, since: 2007, projects: 0 },
			{ name: 'PostgreSQL', icon: siPostgresql, level: 4, since: 2021, projects: 4 },
			{ name: 'IndexedDB (NoSQL)', icon: siIndexeddb, level: 3, since: 2021, projects: 2 },
			{ name: 'Firestore (NoSQL)', icon: siFirebase, level: 3, since: 2021, projects: 2 },
		],
	},
];

export const toolGroups: ToolGroup[] = [
	{
		key: 'cloudHosting',
		tools: [
			{ name: 'AWS', icon: siAws },
			{ name: 'Cloudflare', icon: siCloudflare },
			{ name: 'GitHub Pages', icon: siGithub },
			{ name: 'Supabase', icon: siSupabase },
			{ name: 'Firebase', icon: siFirebase },
			{ name: 'Hetzner', icon: siHetzner },
		],
	},
	{
		key: 'buildDevops',
		tools: [
			{ name: 'Git', icon: siGit },
			{ name: 'GitHub Actions', icon: siGithub },
			{ name: 'Docker', icon: siDocker },
			{ name: 'npm', icon: siNpm },
			{ name: 'Gradle', icon: siGradle },
			{ name: 'Maven', icon: siApachemaven },
		],
	},
	{
		key: 'aiTooling',
		tools: [
			{ name: 'AI Agents', icon: siAgents },
			{ name: 'MCP', icon: siModelcontextprotocol },
			{ name: 'Claude Code', icon: siClaudecode },
			{ name: 'Codex (ChatGPT)', icon: siOpenai },
			{ name: 'GitHub Copilot', icon: siGithubcopilot },
			{ name: 'Cursor', icon: siCursor },
		],
	},
	{
		key: 'design',
		tools: [{ name: 'Figma', icon: siFigma }],
	},
];

/**
 * Icons for tech names used in projects.ts that have no entry above, or are
 * named differently there.
 */
const techIcons: Record<string, SkillIcon> = {
	Java: siJavaClassic,
	'Amazon Web Services': siAws,
	Android: siAndroid,
	Capacitor: siCapacitor,
	daisyUI: siDaisyui,
	'Google AdMob': siGoogleadmob,
	'shadcn/ui': siShadcnui,
	Vitest: siVitest,
	Vuetify: siVuetify,
	Webpack: siWebpack,
	WordPress: siWordpress,
};

const skillIcons = new Map(
	[...skillGroups.flatMap((group) => group.skills), ...toolGroups.flatMap((group) => group.tools)].map((item) => [
		item.name,
		item.icon,
	]),
);

/** Icon for a tech name as used in projects.ts. */
export const iconForTech = (name: string): SkillIcon | undefined => techIcons[name] ?? skillIcons.get(name);
