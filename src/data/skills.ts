import type { SimpleIcon } from 'simple-icons';
import { siAstro, siGit, siJavascript, siNodedotjs, siReact, siTypescript } from 'simple-icons';

export type Skill = {
	name: string;
	icon: SimpleIcon;
};

export const skills: Skill[] = [
	{ name: 'JavaScript', icon: siJavascript },
	{ name: 'TypeScript', icon: siTypescript },
	{ name: 'Astro', icon: siAstro },
	{ name: 'React', icon: siReact },
	{ name: 'Node.js', icon: siNodedotjs },
	{ name: 'Git', icon: siGit },
];
