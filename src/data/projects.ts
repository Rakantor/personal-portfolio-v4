export type ProjectButtonType = 'website' | 'github' | 'pdf';

export type ProjectButton = {
	label: string;
	href: string;
	aria?: string;
	type: ProjectButtonType;
};

export type Project = {
	title: string;
	subtitle: string;
	description: string;
	tech: string[];
	image: string;
	buttons: ProjectButton[];
};

const projectScreenshotBaseUrl = 'https://d29l6egdxvgg9c.cloudfront.net';
const projectScreenshot = (fileName: string) => `${projectScreenshotBaseUrl}/${fileName}`;

export const projects: Project[] = [
	{
		title: 'Torii SRS (v2)',
		subtitle: 'Progressive Web App (SPA)',
		description:
			'Torii SRS (v2) is a comprehensive Japanese vocabulary learning platform featuring robust offline capabilities via IndexedDB. The web application integrates a dynamic dictionary for seamless word addition, offers advanced review methodologies to optimize vocabulary retention, and provides a review forecast chart for strategic study planning. Enhanced search and analytics tools deliver actionable insights, supporting learners at every stage.',
		tech: [
			'JavaScript',
			'Vue.js',
			'Vuetify',
			'MySQL',
			'PHP',
			'Amazon Web Services',
			'MS Azure',
			'IBM Watson',
		],
		image: projectScreenshot('torii-v2-01.jpg'),
		buttons: [
			{
				label: 'View Website',
				href: 'https://beta.torii-srs.com',
				aria: 'Torii SRS v2 website',
				type: 'website',
			},
		],
	},
	{
		title: 'Torii SRS (v1)',
		subtitle: 'Cross-Platform App',
		description:
			'Torii SRS (v1) is a cross-platform Japanese vocabulary learning tool leveraging spaced repetition to facilitate effective memorization. Designed for both casual learners and JLPT candidates, it features specialized vocabulary lists, diverse review modes, audio support, font randomization, progress tracking, and automatic cloud synchronization, all within an intuitive user interface.',
		tech: ['Java', 'libGDX', 'MySQL', 'PHP', 'Amazon Web Services', 'WordPress'],
		image: projectScreenshot('torii-v1-1.jpg'),
		buttons: [
			{
				label: 'View Website',
				href: 'https://torii-srs.com',
				aria: 'Torii SRS v1 website',
				type: 'website',
			},
		],
	},
	{
		title: 'Torii SRS Landing Page',
		subtitle: 'Marketing Website',
		description:
			'A fast, modern landing page for Torii SRS, built to present the platform with clear product messaging, feature highlights, testimonials, pricing and an integrated knowledge base. It gives new learners a polished first impression and a direct path into the web app.',
		tech: ['TypeScript', 'Astro', 'React', 'Tailwind CSS', 'shadcn/ui'],
		image: projectScreenshot('torii-srs-site-1.jpg'),
		buttons: [
			{
				label: 'View Website',
				href: 'https://beta.torii-srs.com',
				aria: 'Torii SRS landing page',
				type: 'website',
			},
			{
				label: 'View on GitHub',
				href: 'https://github.com/Rakantor/torii-srs-site',
				aria: 'Torii SRS landing page GitHub repository',
				type: 'github',
			},
		],
	},
	{
		title: 'IU Quiz App',
		subtitle: 'Web App (SPA)',
		description:
			'An interactive online quiz platform developed to support IU distance learning students in exam preparation. It fosters collaborative and cooperative learning by enabling students to collectively answer subject-specific questions. Inspired by popular quiz games, the app encourages both individual and group participation, enhancing engagement and knowledge retention.',
		tech: ['JavaScript', 'Vue.js', 'Nuxt', 'Vuetify', 'Firebase'],
		image: projectScreenshot('iu-quiz-app-2.jpg'),
		buttons: [
			{
				label: 'View Website',
				href: 'https://iu-quiz-app.web.app',
				type: 'website',
			},
			{
				label: 'View on GitHub',
				href: 'https://github.com/Rakantor/iu-quiz-app',
				type: 'github',
			},
			{
				label: 'View Project Report',
				href: projectScreenshot('iu-quiz-app-projektbericht.pdf'),
				type: 'pdf',
			},
		],
	},
	{
		title: 'Menacing Blue',
		subtitle: 'Cross-Platform App',
		description:
			'Menacing Blue is a cross-platform 2D game inspired by classic Pokémon titles. Developed from the ground up, it features animated NPCs, interactive objects, turn-based battles (including online multiplayer), custom maps created with Tiled, immersive sound design, and multiple difficulty levels, delivering a rich and engaging gaming experience.',
		tech: ['Java', 'libGDX', 'Tiled'],
		image: projectScreenshot('pmb-6.png'),
		buttons: [
			{
				label: 'View on GitHub',
				href: 'https://github.com/Rakantor/',
				type: 'github',
			},
		],
	},
	{
		title: 'Personal Website',
		subtitle: 'Web App (SPA)',
		description:
			'A personal portfolio website showcasing selected projects, technical skills, and professional achievements.',
		tech: ['TypeScript', 'Vue.js', 'Nuxt', 'Vuetify', 'GitHub Pages'],
		image: projectScreenshot('personal-website-1.jpg'),
		buttons: [
			{
				label: 'View Website',
				href: 'https://v1.mave.dev',
				type: 'website',
			},
			{
				label: 'View on GitHub',
				href: 'https://github.com/Rakantor/personal-portfolio',
				type: 'github',
			},
		],
	},
	{
		title: 'IU Gamer App',
		subtitle: 'Android App',
		description:
			'The IU Gamer App is an Android application designed to streamline the organization of board game sessions for gaming groups. It provides reliable scheduling notifications, enables users to propose and vote on games, rate past events, and communicate through an integrated chat, ensuring efficient coordination and enhanced group interaction.',
		tech: ['Java', 'Android', 'Firebase'],
		image: projectScreenshot('iu-gamer-app-1.jpg'),
		buttons: [
			{
				label: 'View on GitHub',
				href: 'https://github.com/Rakantor/iubh-gamer-app',
				type: 'github',
			},
		],
	},
];
