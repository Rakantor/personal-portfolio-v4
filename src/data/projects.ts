import type { Locale } from '../i18n';

export type ProjectButtonType = 'website' | 'github' | 'pdf';

export type ProjectButton = {
	label: string;
	href: string;
	aria?: string;
	type: ProjectButtonType;
};

export type ProjectImage = {
	src: string;
	alt: string;
};

export type Project = {
	slug: string;
	title: string;
	category: string;
	year: string;
	description: string;
	overview: string[];
	features: string[];
	learned: string;
	tech: string[];
	image: string;
	images: ProjectImage[];
	buttons: ProjectButton[];
};

const projectScreenshotBaseUrl = 'https://d29l6egdxvgg9c.cloudfront.net';
const projectScreenshot = (fileName: string) => `${projectScreenshotBaseUrl}/${fileName}`;
const projectImages = (title: string, fileNames: string[]): ProjectImage[] =>
	fileNames.map((fileName, index) => ({
		src: projectScreenshot(fileName),
		alt: `${title} screenshot ${index + 1}`,
	}));

export const projects: Project[] = [
	{
		slug: 'torii-srs-v2',
		title: 'Torii SRS (v2)',
		category: 'Progressive Web App',
		year: 'Featured Work',
		description:
			'Torii SRS (v2) is a comprehensive Japanese vocabulary learning platform featuring robust offline capabilities via IndexedDB. The web application integrates a dynamic dictionary for seamless word addition, offers advanced review methodologies to optimize vocabulary retention, and provides a review forecast chart for strategic study planning. Enhanced search and analytics tools deliver actionable insights, supporting learners at every stage.',
		overview: [
			'Torii SRS (v2) was built as a full-featured vocabulary study platform for Japanese learners who need a reliable daily review workflow across devices. The product focuses on fast study sessions, offline access, flexible word management, and clear progress visibility.',
			'The application combines spaced repetition, dictionary-driven content entry, review forecasting, and learner analytics in one interface. A major goal was making advanced study tooling approachable without slowing down the core review loop.',
		],
		features: [
			'Offline-first learning flow backed by IndexedDB',
			'Dynamic dictionary integration for adding vocabulary quickly',
			'Multiple review modes designed around retention and recall',
			'Forecast and analytics views for planning study workload',
			'Cloud-backed architecture for account data and synchronization',
		],
		learned:
			'This project sharpened my understanding of data-heavy offline web apps, especially around synchronization, local persistence, and keeping complex study features understandable for regular daily use.',
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
		images: projectImages('Torii SRS (v2)', [
			'torii-v2-01.jpg',
			'torii-v2-03.jpg',
			'torii-v2-04.jpg',
			'torii-v2-05.jpg',
			'torii-v2-06.jpg',
			'torii-v2-07.jpg',
			'torii-v2-08.jpg',
			'torii-v2-09.jpg',
			'torii-v2-10.jpg',
		]),
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
		slug: 'torii-srs-v1',
		title: 'Torii SRS (v1)',
		category: 'Cross-Platform App',
		year: 'Featured Work',
		description:
			'Torii SRS (v1) is a cross-platform Japanese vocabulary learning tool leveraging spaced repetition to facilitate effective memorization. Designed for both casual learners and JLPT candidates, it features specialized vocabulary lists, diverse review modes, audio support, font randomization, progress tracking, and automatic cloud synchronization, all within an intuitive user interface.',
		overview: [
			'Torii SRS (v1) established the first complete version of the learning product, bringing spaced repetition practice to desktop and mobile users through a cross-platform app architecture.',
			'The project focused on making vocabulary review flexible: learners could work with curated JLPT lists, customize review behavior, use audio support, and keep progress synchronized without managing files manually.',
		],
		features: [
			'Cross-platform app experience built with Java and libGDX',
			'Spaced repetition review modes for vocabulary memorization',
			'JLPT-focused vocabulary lists and custom study material',
			'Audio support, font randomization, and progress tracking',
			'Automatic cloud synchronization for learner data',
		],
		learned:
			'This project taught me how much product quality depends on day-to-day usability: review speed, sync reliability, clear progress feedback, and small learning-focused details mattered as much as the core algorithm.',
		tech: ['Java', 'libGDX', 'MySQL', 'PHP', 'Amazon Web Services', 'WordPress'],
		image: projectScreenshot('torii-v1-1.jpg'),
		images: projectImages('Torii SRS (v1)', [
			'torii-v1-1.jpg',
			'torii-v1-2.png',
			'torii-v1-3.png',
			'torii-v1-4.png',
			'torii-v1-5.png',
			'torii-v1-6.png',
		]),
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
		slug: 'torii-srs-landing-page',
		title: 'Torii SRS Landing Page',
		category: 'Marketing Website',
		year: 'Featured Work',
		description:
			'A fast, modern landing page for Torii SRS, built to present the platform with clear product messaging, feature highlights, testimonials, pricing and an integrated knowledge base. It gives new learners a polished first impression and a direct path into the web app.',
		overview: [
			'The Torii SRS landing page was designed to give the product a clearer public face, turning a feature-rich learning tool into a focused presentation for new users.',
			'The page emphasizes quick comprehension: product positioning, feature highlights, pricing, testimonials, and support content are organized so visitors can understand the value before entering the app.',
		],
		features: [
			'Responsive marketing layout built with Astro and React components',
			'Clear product messaging for Japanese vocabulary learners',
			'Feature, testimonial, pricing, and knowledge-base sections',
			'Reusable component structure with Tailwind CSS and shadcn/ui',
			'Fast static delivery optimized for first impressions',
		],
		learned:
			'This work reinforced how different product websites are from application screens: the interface has to explain value immediately, guide attention deliberately, and still stay fast and maintainable.',
		tech: ['TypeScript', 'Astro', 'React', 'Tailwind CSS', 'shadcn/ui'],
		image: projectScreenshot('torii-srs-site-1.jpg'),
		images: projectImages('Torii SRS Landing Page', ['torii-srs-site-1.jpg']),
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
		slug: 'iu-quiz-app',
		title: 'IU Quiz App',
		category: 'Web App',
		year: 'Featured Work',
		description:
			'An interactive online quiz platform developed to support IU distance learning students in exam preparation. It fosters collaborative and cooperative learning by enabling students to collectively answer subject-specific questions. Inspired by popular quiz games, the app encourages both individual and group participation, enhancing engagement and knowledge retention.',
		overview: [
			'IU Quiz App was created to make exam preparation more interactive for distance-learning students. Instead of studying isolated question sets, users can practice through a shared quiz experience inspired by familiar game mechanics.',
			'The project combines a Vue/Nuxt frontend with Firebase services, making it possible to deliver a lightweight collaborative learning tool without a heavy custom backend.',
		],
		features: [
			'Interactive quiz flow for individual and group preparation',
			'Subject-specific question sets for exam-focused practice',
			'Firebase-backed data and hosting setup',
			'Responsive SPA interface built with Nuxt and Vuetify',
			'Project report documenting the concept and implementation',
		],
		learned:
			'The project helped me think more deeply about learning behavior, especially how collaboration, feedback loops, and game-like interaction can make dry exam material easier to revisit.',
		tech: ['JavaScript', 'Vue.js', 'Nuxt', 'Vuetify', 'Firebase'],
		image: projectScreenshot('iu-quiz-app-2.jpg'),
		images: projectImages('IU Quiz App', ['iu-quiz-app-2.jpg']),
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
		slug: 'menacing-blue',
		title: 'Menacing Blue',
		category: 'Cross-Platform Game',
		year: 'Featured Work',
		description:
			'Menacing Blue is a cross-platform 2D game inspired by classic Pokémon titles. Developed from the ground up, it features animated NPCs, interactive objects, turn-based battles (including online multiplayer), custom maps created with Tiled, immersive sound design, and multiple difficulty levels, delivering a rich and engaging gaming experience.',
		overview: [
			'Menacing Blue is a custom 2D game project that recreates the feel of classic handheld RPGs while implementing the systems from scratch.',
			'The work spans gameplay programming, map tooling, battle flow, animation, sound, and multiplayer logic, making it one of the broadest technical projects in the portfolio.',
		],
		features: [
			'Custom 2D game engine structure using Java and libGDX',
			'Maps and interactive environments built with Tiled',
			'Animated NPCs, objects, and turn-based battle systems',
			'Online multiplayer battle support',
			'Sound design and multiple difficulty levels',
		],
		learned:
			'Building a game made architecture problems very concrete: state management, asset loading, collision, input handling, and feedback all have to work together smoothly for the experience to feel responsive.',
		tech: ['Java', 'libGDX', 'Tiled'],
		image: projectScreenshot('pmb-6.png'),
		images: projectImages('Menacing Blue', [
			'pmb-6.png',
			'pmb-1.png',
			'pmb-2.png',
			'pmb-3.png',
			'pmb-4.png',
			'pmb-5.png',
		]),
		buttons: [
			{
				label: 'View on GitHub',
				href: 'https://github.com/Rakantor/',
				type: 'github',
			},
		],
	},
	{
		slug: 'personal-website',
		title: 'Personal Website',
		category: 'Portfolio Website',
		year: 'Featured Work',
		description:
			'A personal portfolio website showcasing selected projects, technical skills, and professional achievements.',
		overview: [
			'This personal website was built to present selected work, skills, and professional context in a compact and maintainable format.',
			'The project focuses on clarity, responsive presentation, and a simple content structure that can evolve as new work is added.',
		],
		features: [
			'Responsive single-page portfolio structure',
			'Project showcase with direct links to deployed work and source code',
			'Nuxt and Vuetify-based interface',
			'Static deployment through GitHub Pages',
			'Reusable content sections for project and skill presentation',
		],
		learned:
			'This project helped me refine how to present technical work concisely and reinforced the value of keeping personal sites easy to update as the portfolio changes.',
		tech: ['TypeScript', 'Vue.js', 'Nuxt', 'Vuetify', 'GitHub Pages'],
		image: projectScreenshot('personal-website-1.jpg'),
		images: projectImages('Personal Website', ['personal-website-1.jpg']),
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
		slug: 'iu-gamer-app',
		title: 'IU Gamer App',
		category: 'Android App',
		year: 'Featured Work',
		description:
			'The IU Gamer App is an Android application designed to streamline the organization of board game sessions for gaming groups. It provides reliable scheduling notifications, enables users to propose and vote on games, rate past events, and communicate through an integrated chat, ensuring efficient coordination and enhanced group interaction.',
		overview: [
			'IU Gamer App was designed around the practical coordination problems of recurring board game sessions: deciding what to play, organizing attendance, and keeping communication in one place.',
			'The Android app combines scheduling, voting, ratings, notifications, and chat into a focused tool for small gaming groups.',
		],
		features: [
			'Native Android app built with Java',
			'Game proposals, voting, and event coordination',
			'Reliable scheduling notifications',
			'Rating system for past sessions',
			'Integrated Firebase-backed chat and data storage',
		],
		learned:
			'This project improved my understanding of mobile workflow design, especially around notifications, state persistence, and keeping group coordination features simple enough to use during real events.',
		tech: ['Java', 'Android', 'Firebase'],
		image: projectScreenshot('iu-gamer-app-1.jpg'),
		images: projectImages('IU Gamer App', ['iu-gamer-app-1.jpg', 'iu-gamer-app-2.jpg']),
		buttons: [
			{
				label: 'View on GitHub',
				href: 'https://github.com/Rakantor/iubh-gamer-app',
				type: 'github',
			},
			{
				label: 'View Project Report',
				href: projectScreenshot('iu-gamer-app-projektbericht.pdf'),
				type: 'pdf',
			},
		],
	},
];

type ProjectTranslation = Pick<Project, 'category' | 'year' | 'description' | 'overview' | 'features' | 'learned'>;

const projectTranslations = {
	de: {
		'torii-srs-v2': {
			category: 'Progressive Web App',
			year: 'Ausgewähltes Projekt',
			description:
				'Torii SRS (v2) ist eine Web-App zum Lernen japanischer Vokabeln, die dank IndexedDB auch offline funktioniert. Die App enthält ein Wörterbuch, das sich flexibel erweitern lässt, sowie smarte Wiederholungsmethoden, damit neue Wörter besser hängen bleiben. Ein Prognosediagramm hilft dabei, das Lernen besser zu planen. Dazu kommen verbesserte Such- und Analysefunktionen, die nützliche Einblicke geben und Lernende in jeder Phase unterstützen.',
			overview: [
				'Torii SRS (v2) wurde als vollständige Vokabelplattform für Japanischlernende gebaut, die einen zuverlässigen Review-Ablauf auf verschiedenen Geräten brauchen. Der Fokus liegt auf schnellen Lerneinheiten, Offline-Nutzung, flexibler Wortverwaltung und klarer Fortschrittsübersicht.',
				'Die Anwendung kombiniert Spaced Repetition, wörterbuchgestützte Eingabe, Review-Prognosen und Lernanalysen in einer Oberfläche. Ein wichtiges Ziel war, fortgeschrittene Lernfunktionen zugänglich zu machen, ohne den täglichen Review-Ablauf zu verlangsamen.',
			],
			features: [
				'Offline-first Architektur mit IndexedDB',
				'Dynamische Wörterbuchintegration zum schnellen Hinzufügen von Vokabeln',
				'Mehrere Review-Modi für Erinnerung und aktiven Abruf',
				'Prognose- und Analyseansichten zur Planung des Lernaufwands',
				'Cloud-Architektur für Kontodaten und Synchronisierung',
			],
			learned:
				'Dieses Projekt hat mir geholfen, datenintensive Web-Apps mit Offline-Funktion besser zu verstehen — vor allem, wenn es um Synchronisierung, lokale Speicherung und darum geht, den Benutzern komplexe Lernfunktionen einfach verständlich zu machen.',
		},
		'torii-srs-v1': {
			category: 'Cross-Platform App',
			year: 'Ausgewähltes Projekt',
			description:
				'Torii SRS (v1) ist ein plattformübergreifendes Tool zum Lernen japanischer Vokabeln. Die App nutzt Spaced Repetition, damit Wörter langfristig besser im Gedächtnis bleiben. Sie eignet sich sowohl für Lernende, die nebenbei Japanisch üben, als auch für JLPT-Kandidaten. Dazu bietet sie Vokabellisten, verschiedene Review-Modi, Audio für die korrekte japanische Aussprache, unterschiedliche Schriftvarianten der japanischen Schriftzeichen, Fortschrittsanzeigen und automatische Cloud-Synchronisierung.',
			overview: [
				'Die erste vollständige Version von Torii SRS - für Windows, macOS, Linux und Android-Geräte.',
				'Das Ziel war vor allem, das Lernen japanischer Vokabeln zu vereinfachen und verifizierte Vokabellisten für alle leicht zugänglich zu machen — ohne mühsames Suchen im Internet und ohne aufwendiges Setup in klassischen Flashcard-Programmen.',
			],
			features: [
				'Plattformübergreifende App mit Java und libGDX',
				'Spaced Repetition System',
				'JLPT-Vokabellisten sowie eigene Lerninhalte',
				'Audio-Unterstützung, Schriftvarianten und Fortschrittsanzeige',
				'Automatische Cloud-Synchronisierung',
			],
			learned:
				'Dieses Projekt hat mir gezeigt, wie wichtig Alltagstauglichkeit für die Qualität eines Produkts ist. Schnelle & zuverlässige Datensynchronisierung, klares Feedback beim Lernen und kleine Details im UI waren am Ende genauso wichtig wie der Algorithmus selbst.',
		},
		'torii-srs-landing-page': {
			category: 'Marketing-Website',
			year: 'Ausgewähltes Projekt',
			description:
				'Eine schnelle, moderne Landingpage für Torii SRS, die das Produkt klar erklärt und alle wichtigen Infos an einem Ort bündelt — von Funktionen und Testimonials bis hin zu Preisen und einer integrierten Wissensdatenbank.',
			overview: [
				'Die Landingpage wurde entwickelt, um Torii SRS einen klareren öffentlichen Auftritt zu geben und neuen Nutzern schnell zu zeigen, was die Lernplattform kann.',
				'Die Seite hilft Besuchern dabei, sich schnell zurechtzufinden: Positionierung, Funktionen, Preise, Testimonials und Support-Inhalte sind so aufgebaut, dass der Mehrwert klar wird, bevor sie in die App wechseln.',
			],
			features: [
				'Responsive Marketingseite mit Astro und React-Komponenten',
				'Klare Produktkommunikation für Japanischlernende',
				'Bereiche für Features, Testimonials, Preise und eine Wissensdatenbank',
				'Wiederverwendbare Komponenten mit Tailwind CSS und shadcn/ui',
				'Blitzschnelle statische Bereitstellung für einen starken ersten Eindruck',
			],
			learned:
				'Dieses Projekt hat mir verdeutlicht, wie anders Produktwebsites im Vergleich zu App-Oberflächen funktionieren: Sie müssen den Mehrwert sofort klar machen, Besucher gezielt durch die Inhalte führen und gleichzeitig schnell, SEO-freundlich und gut wartbar bleiben.',
		},
		'iu-quiz-app': {
			category: 'Web-App',
			year: 'Ausgewähltes Projekt',
			description:
				'Eine interaktive Online-Quizplattform zur Unterstützung von IU-Fernstudierenden bei der Prüfungsvorbereitung. Sie fördert gemeinsames Lernen, indem Studierende fachspezifische Fragen kollaborativ beantworten können.',
			overview: [
				'Die IU Quiz App wurde entwickelt, um Prüfungsvorbereitung für Fernstudierende interaktiver zu machen. Statt isolierter Fragensammlungen können Nutzer in einem gemeinsamen Quizformat lernen.',
				'Das Projekt kombiniert ein Vue/Nuxt-Frontend mit Firebase-Diensten und ermöglicht dadurch ein leichtgewichtiges kollaboratives Lernwerkzeug ohne schweren eigenen Backend-Stack.',
			],
			features: [
				'Interaktiver Quizablauf für Einzel- und Gruppenlernen',
				'Fachspezifische Fragen für prüfungsorientierte Vorbereitung',
				'Datenhaltung und Hosting über Firebase',
				'Responsive SPA mit Nuxt und Vuetify',
				'Projektbericht mit Konzept und Umsetzung',
			],
			learned:
				'Das Projekt hat mich stärker über Lernverhalten nachdenken lassen, besonders darüber, wie Zusammenarbeit, Feedback und spielerische Interaktion trockenen Prüfungsstoff zugänglicher machen.',
		},
		'menacing-blue': {
			category: 'Cross-Platform Game',
			year: 'Ausgewähltes Projekt',
			description:
				'Menacing Blue ist ein plattformübergreifendes 2D-Spiel, inspiriert von klassischen Pokémon-Titeln. Es wurde von Grund auf entwickelt und enthält animierte NPCs, interaktive Objekte, rundenbasierte Kämpfe, Online-Multiplayer, Tiled-Karten, Sounddesign und mehrere Schwierigkeitsgrade.',
			overview: [
				'Menacing Blue ist ein eigenes 2D-Spielprojekt, das das Gefühl klassischer Handheld-RPGs aufgreift und die Systeme selbst implementiert.',
				'Die Arbeit umfasst Gameplay-Programmierung, Map-Tooling, Kampflogik, Animation, Sound und Multiplayer und gehört damit zu den technisch breitesten Projekten im Portfolio.',
			],
			features: [
				'Eigene 2D-Spielstruktur mit Java und libGDX',
				'Karten und interaktive Umgebungen mit Tiled',
				'Animierte NPCs, Objekte und rundenbasierte Kampfsysteme',
				'Online-Multiplayer für Kämpfe',
				'Sounddesign und mehrere Schwierigkeitsgrade',
			],
			learned:
				'Ein Spiel zu bauen hat Architekturprobleme sehr greifbar gemacht: State Management, Asset Loading, Kollision, Eingaben und Feedback müssen zusammenspielen, damit sich die Erfahrung reaktionsschnell anfühlt.',
		},
		'personal-website': {
			category: 'Portfolio-Website',
			year: 'Ausgewähltes Projekt',
			description:
				'Eine persönliche Portfolio-Website, die ausgewählte Projekte, technische Fähigkeiten und berufliche Stationen präsentiert.',
			overview: [
				'Diese persönliche Website wurde gebaut, um ausgewählte Arbeiten, Fähigkeiten und beruflichen Kontext kompakt und wartbar zu präsentieren.',
				'Das Projekt fokussiert sich auf klare Darstellung, responsive Umsetzung und eine einfache Inhaltsstruktur, die mit neuen Projekten mitwachsen kann.',
			],
			features: [
				'Responsive Single-Page-Portfolio-Struktur',
				'Projektübersicht mit direkten Links zu Deployments und Quellcode',
				'Oberfläche mit Nuxt und Vuetify',
				'Statisches Deployment über GitHub Pages',
				'Wiederverwendbare Bereiche für Projekte und Skills',
			],
			learned:
				'Dieses Projekt hat mir geholfen, technische Arbeit prägnanter zu präsentieren, und gezeigt, wie wertvoll es ist, persönliche Websites einfach aktualisierbar zu halten.',
		},
		'iu-gamer-app': {
			category: 'Android-App',
			year: 'Ausgewähltes Projekt',
			description:
				'Die IU Gamer App ist eine Android-Anwendung zur Organisation von Brettspielrunden. Sie unterstützt Terminbenachrichtigungen, Spielvorschläge, Abstimmungen, Bewertungen vergangener Events und Kommunikation über einen integrierten Chat.',
			overview: [
				'Die IU Gamer App wurde rund um praktische Koordinationsprobleme regelmäßiger Brettspielrunden entworfen: entscheiden, was gespielt wird, Teilnahme organisieren und Kommunikation bündeln.',
				'Die Android-App kombiniert Terminplanung, Abstimmungen, Bewertungen, Benachrichtigungen und Chat in einem fokussierten Werkzeug für kleine Gruppen.',
			],
			features: [
				'Native Android-App mit Java',
				'Spielvorschläge, Abstimmungen und Event-Koordination',
				'Zuverlässige Terminbenachrichtigungen',
				'Bewertungssystem für vergangene Runden',
				'Firebase-basierter Chat und Datenspeicher',
			],
			learned:
				'Dieses Projekt hat mein Verständnis für mobile Workflows verbessert, besonders bei Benachrichtigungen, Persistenz und dabei, Gruppenfunktionen während echter Events einfach nutzbar zu halten.',
		},
	} satisfies Record<string, ProjectTranslation>,
} satisfies Record<Exclude<Locale, 'en'>, Record<string, ProjectTranslation>>;

const buttonLabels: Record<Locale, Record<ProjectButtonType, string>> = {
	en: {
		website: 'View Website',
		github: 'View on GitHub',
		pdf: 'View Project Report',
	},
	de: {
		website: 'Website ansehen',
		github: 'Auf GitHub ansehen',
		pdf: 'Projektbericht ansehen',
	},
};

export const getLocalizedProject = (project: Project, locale: Locale): Project => {
	if (locale === 'en') {
		return project;
	}

	const translation = projectTranslations[locale][project.slug];

	return {
		...project,
		...translation,
		images: project.images.map((image, index) => ({
			...image,
			alt: `${project.title} Screenshot ${index + 1}`,
		})),
		buttons: project.buttons.map((button) => ({
			...button,
			label: buttonLabels[locale][button.type],
			aria: `${buttonLabels[locale][button.type]}: ${project.title}`,
		})),
	};
};

export const getLocalizedProjects = (locale: Locale = 'en') => projects.map((project) => getLocalizedProject(project, locale));
