import type { Locale } from '../i18n';

export type ProjectButtonType = 'website' | 'demo' | 'github' | 'pdf';

export type ProjectButton = {
	href: string;
	aria?: string;
	type: ProjectButtonType;
};

export type ProjectImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export type Project = {
	slug: string;
	title: string;
	shortDescription: string;
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

/**
 * `[fileName, width, height]`. The screenshots are served from CloudFront rather
 * than bundled, so their intrinsic size cannot be read at build time — carrying
 * it here is what lets the gallery reserve the right box before the first image
 * arrives instead of reflowing the page under it.
 */
type ProjectImageSource = [fileName: string, width: number, height: number];

const projectImages = (title: string, sources: ProjectImageSource[]): ProjectImage[] =>
	sources.map(([fileName, width, height], index) => ({
		src: projectScreenshot(fileName),
		alt: `${title} screenshot ${index + 1}`,
		width,
		height,
	}));

export const projects: Project[] = [
	{
		slug: 'torii-srs-web-v2',
		title: 'Torii SRS (Web v2)',
		shortDescription:
			'The web-based successor to Torii SRS. Works fully offline, syncs when you reconnect, and shows what your review workload looks like weeks ahead.',
		description:
			'Torii SRS (Web v2) is the current version of Torii SRS on the web. It installs like a normal app, and it keeps working without a connection: reviews are stored locally in IndexedDB and sync back up once you\'re online again. It\'s also the version where the app grew up: a built-in dictionary for adding words on the fly, several review modes, spoken audio for every single word, a forecast chart showing how much work is coming your way, and statistics that point out where you\'re actually struggling.',
		overview: [
			'Torii SRS (Web v2) takes everything the earlier versions did and runs it in the browser. Studying happens in five-minute gaps: on the train, waiting for a coffee. So the app had to install on a phone, start instantly, and keep going when the connection drops.',
			'The harder part was fitting more into it without making it slower. The dictionary, the forecast and the statistics are all there when you want them, but the daily loop of open, review, done stayed the shortest path through the app.',
			'This version is a complete rewrite of the previous web app rather than an update to it: Vue 2 became Vue 3, a hand-wired Vue CLI project became Nuxt, Vuex became Pinia, the Options API became the Composition API, and Vuetify 2 became Vuetify 4. Every screen was redrawn along the way, and a long list of bugs the old codebase had learned to live with did not survive the move.',
		],
		features: [
			'Fully offline studying, with reviews stored in IndexedDB and synced once you reconnect',
			'Built-in dictionary for adding new words without leaving the app',
			'Several review modes, from quick recognition to active recall',
			'Pronunciation audio for every word, generated with Amazon Polly, Azure and IBM Watson text-to-speech',
			'Forecast chart for the review workload of the coming days and weeks',
			'Search and statistics that surface the words you keep getting wrong',
			'Cloud-backed accounts that keep progress in sync across devices',
		],
		learned:
			'Offline-first sounds simple until two devices disagree about what you studied. Getting synchronization, local persistence and conflict handling right was the most instructive part of this project. It also confirmed something the Java version had already taught me: the more an app can do, the more work it takes to keep the main path through it short.',
		tech: [
			'TypeScript',
			'Vue.js',
			'Nuxt',
			'Vuetify',
			'MySQL',
			'PHP',
			'Amazon Web Services',
			'MS Azure',
			'IBM Watson',
		],
		image: projectScreenshot('torii-v3-01.webp'),
		images: projectImages('Torii SRS (Web v2)', [
			['torii-v3-01.webp', 1440, 1024],
			['torii-v3-02.webp', 1440, 1024],
			['torii-v3-03.webp', 1440, 1024],
			['torii-v3-04.webp', 1440, 1024],
			['torii-v3-05.webp', 1440, 1024],
			['torii-v3-06.webp', 1440, 1024],
			['torii-v3-07.webp', 1440, 1024],
		]),
		buttons: [
			{
				href: 'https://app.torii-srs.com',
				aria: 'Torii SRS Web v2 website',
				type: 'website',
			},
		],
	},
	{
		slug: 'torii-srs-web-v1',
		title: 'Torii SRS (Web v1)',
		shortDescription:
			'The web-based successor to Torii SRS. Works fully offline, syncs when you reconnect, and shows what your review workload looks like weeks ahead.',
		description:
			'Torii SRS (Web v1) is where the whole thing moved to the web. It installs like a normal app, and it keeps working without a connection: reviews are stored locally in IndexedDB and sync back up once you\'re online again. It\'s also the version where the app grew up: a built-in dictionary for adding words on the fly, several review modes, spoken audio for every single word, a forecast chart showing how much work is coming your way, and statistics that point out where you\'re actually struggling.',
		overview: [
			'Torii SRS (Web v1) takes everything the Java app did and moves it into the browser. Studying happens in five-minute gaps: on the train, waiting for a coffee. So the app had to install on a phone, start instantly, and keep going when the connection drops.',
			'The harder part was fitting more into it without making it slower. The dictionary, the forecast and the statistics are all there when you want them, but the daily loop of open, review, done stayed the shortest path through the app.',
		],
		features: [
			'Fully offline studying, with reviews stored in IndexedDB and synced once you reconnect',
			'Built-in dictionary for adding new words without leaving the app',
			'Several review modes, from quick recognition to active recall',
			'Pronunciation audio for every word, generated with Amazon Polly, Azure and IBM Watson text-to-speech',
			'Forecast chart for the review workload of the coming days and weeks',
			'Search and statistics that surface the words you keep getting wrong',
			'Cloud-backed accounts that keep progress in sync across devices',
		],
		learned:
			'Offline-first sounds simple until two devices disagree about what you studied. Getting synchronization, local persistence and conflict handling right was the most instructive part of this project. It also confirmed something the Java version had already taught me: the more an app can do, the more work it takes to keep the main path through it short.',
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
		images: projectImages('Torii SRS (Web v1)', [
			['torii-v2-01.jpg', 750, 761],
			['torii-v2-03.jpg', 1000, 1014],
			['torii-v2-04.jpg', 1000, 1014],
			['torii-v2-05.jpg', 1000, 1014],
			['torii-v2-06.jpg', 1000, 1014],
			['torii-v2-07.jpg', 1000, 1014],
			['torii-v2-08.jpg', 1000, 1014],
			['torii-v2-09.jpg', 1000, 1014],
			['torii-v2-10.jpg', 1000, 1014],
		]),
		buttons: [
			{
				href: 'https://beta.torii-srs.com',
				aria: 'Torii SRS Web v1 website',
				type: 'website',
			},
		],
	},
	{
		slug: 'torii-srs-java',
		title: 'Torii SRS (Java)',
		shortDescription:
			'A cross-platform app for learning Japanese vocabulary, with spaced repetition, ready-made JLPT lists, several review modes, and cloud sync.',
		description:
			'Torii SRS (Java) is my take on learning Japanese vocabulary without the busywork that usually comes with it. Spaced repetition takes care of scheduling your reviews, and ready-made JLPT word lists are built in, so you can start studying right away instead of building decks first. On top of that: audio for pronunciation, several review modes, different Japanese typefaces, progress stats, and automatic cloud sync, all on Windows, macOS, Linux, and Android.',
		overview: [
			'The first complete version of Torii SRS: one app for Windows, macOS, Linux and Android.',
			'The idea behind it was simple: learning Japanese vocabulary shouldn\'t fail at the preparation stage. Instead of digging around the internet for word lists or spending an evening setting up a traditional flashcard program, you get verified JLPT lists from the start, and you can still add your own words whenever you want.',
		],
		features: [
			'One app for Windows, macOS, Linux and Android, built with Java and libGDX',
			'Spaced repetition that decides what you review and when',
			'Ready-made JLPT vocabulary lists, plus room for your own words',
			'Audio for correct pronunciation, varying Japanese typefaces, and progress tracking',
			'Automatic cloud sync, so your progress follows you between devices',
		],
		learned:
			'What stuck with me most is how much of a product\'s quality comes down to everyday details. Fast and reliable sync, clear feedback while studying, and small interface decisions mattered just as much as the algorithm itself. Those are the things people actually notice, day after day.',
		tech: ['Java', 'libGDX', 'MySQL', 'PHP', 'Amazon Web Services', 'WordPress'],
		image: projectScreenshot('torii-v1-1.jpg'),
		images: projectImages('Torii SRS (Java)', [
			['torii-v1-1.jpg', 750, 750],
			['torii-v1-2.png', 1082, 1119],
			['torii-v1-3.png', 1082, 1119],
			['torii-v1-4.png', 1082, 1119],
			['torii-v1-5.png', 1082, 1119],
			['torii-v1-6.png', 1082, 1119],
		]),
		buttons: [
			{
				href: 'https://torii-srs.com',
				aria: 'Torii SRS Java website',
				type: 'website',
			},
		],
	},
	{
		slug: 'torii-srs-landing-page',
		title: 'Torii SRS Landing Page',
		shortDescription:
			'The marketing site for Torii SRS: what the product does, what it costs, and a knowledge base for when people get stuck.',
		description:
			'The public front door for Torii SRS. The app can do a lot, and on a landing page that is exactly the problem: nobody reads a feature list before they know what the thing is for. So the site leads with the pitch and backs it up afterwards with feature highlights, testimonials, pricing and a knowledge base. All of it is statically generated with Astro, which means it is simply there when you open it.',
		overview: [
			'Torii SRS had grown a lot of functionality but no proper public face. This site is that face: it explains the product to someone who has never heard of it and gives them one obvious way in.',
			'It runs on Astro with React components, Tailwind CSS and shadcn/ui. The output is static, so there is next to nothing to load, and the component structure makes adding a new section or knowledge-base article a five-minute job instead of a refactor.',
		],
		features: [
			'Static, responsive marketing site built with Astro and React components',
			'Structured around what a first-time visitor needs to know, in that order',
			'Sections for features, testimonials, pricing and a knowledge base',
			'Consistent styling through reusable Tailwind CSS and shadcn/ui components',
			'Fast page loads and SEO-friendly markup for organic reach',
		],
		learned:
			'Product sites and app screens are almost opposite problems. Inside the app, people already know what they want; on a landing page you have a few seconds to explain why they should care at all. Learning to lead with the value instead of the feature list was the useful part here. That, and how good a site feels when it ships almost no JavaScript.',
		tech: ['TypeScript', 'Astro', 'React', 'Tailwind CSS', 'shadcn/ui'],
		image: projectScreenshot('torii-srs-site-1.jpg'),
		images: projectImages('Torii SRS Landing Page', [['torii-srs-site-1.jpg', 1440, 1100]]),
		buttons: [
			{
				href: 'https://beta.torii-srs.com',
				aria: 'Torii SRS landing page',
				type: 'website',
			},
			{
				href: 'https://github.com/Rakantor/torii-srs-site',
				aria: 'Torii SRS landing page GitHub repository',
				type: 'github',
			},
		],
	},
	{
		slug: 'google-drive-pdf-downloader',
		title: 'GDrive PDF Downloader',
		shortDescription:
			'A browser tool that rebuilds a proper PDF out of Google\'s image-based preview, text and links included.',
		description:
			'Some PDFs are shared in Google Drive as view-only: you can read them in the browser, but download and print are switched off. That gets annoying when it\'s your own course material and you want it offline. This tool rebuilds the file from what the preview already renders: it walks through the pages, captures each one, and assembles them back into a PDF, optionally with selectable text and working hyperlinks.',
		overview: [
			'Google renders these documents as images, one page at a time, and only loads what is currently on screen. So the tool scrolls through the document itself, waits for each page to finish rendering, captures it, and stitches everything together locally. Nothing is uploaded anywhere.',
			'It comes in two forms: a script you paste into the browser console when you need it once, and a userscript that activates itself on Google Drive, Google Classroom and related viewers. There is a fast mode and a high-quality one, a progress display, and a cancel button for when a long document turns out to be longer than expected.',
		],
		features: [
			'Works with Google Drive, Google Classroom and other Google preview viewers',
			'Fast and high-quality capture modes with adjustable zoom',
			'Optional text layer, so the result stays searchable and selectable, hyperlinks included',
			'Available as a one-off console script or a self-activating userscript for Chrome and Firefox',
			'Runs entirely in the browser, with progress display and cancellation, so nothing leaves your machine',
		],
		learned:
			'This one was a lesson in working with a page that was never meant to be worked with: waiting for the right moment in the render cycle, handling lazy loading, and trading capture quality against processing time and file size, all client-side, where every shortcut costs you somewhere else. Every document also breaks in its own way, which made "it worked on that one PDF" a pretty unreliable definition of working.',
		tech: ['TypeScript', 'Vitest'],
		image: projectScreenshot('gdrive-pdf-2.webp'),
		images: projectImages('GDrive PDF Downloader', [
			['gdrive-pdf-1.webp', 1536, 1024],
			['gdrive-pdf-2.webp', 1560, 1008],
		]),
		buttons: [
			{
				href: 'https://github.com/Rakantor/google-drive-pdf-downloader',
				aria: 'Google Drive PDF Downloader GitHub repository',
				type: 'github',
			},
		],
	},
	{
		slug: 'iu-quiz-app',
		title: 'IU Quiz App',
		shortDescription:
			'A quiz platform that lets students work through exam questions together instead of grinding through them alone.',
		description:
			'A university project from my studies at IU International University, built around a problem I had myself: in distance learning, you prepare for exams largely on your own. This app makes that part social. Students work through subject-specific questions in a shared quiz format inspired by the quiz games everyone knows, solo or against each other, which makes going over the same material for the third time noticeably less painful.',
		overview: [
			'Distance learning is flexible, but it is quiet. There is nobody to quiz you the evening before an exam and no study group down the hall. The IU Quiz App fills that gap with question sets per subject that students can work through together.',
			'It is a Nuxt single-page app on top of Firebase, which handled authentication, data and hosting. That kept a student project from quietly turning into a backend project. A written report covering the concept and implementation is linked below.',
		],
		features: [
			'Shared quiz flow for studying alone or against other students',
			'Question sets organized by subject, aimed at actual exam preparation',
			'Firebase for authentication, data and hosting, with no custom backend to maintain',
			'Responsive single-page interface built with Nuxt and Vuetify',
			'Full project report documenting concept, architecture and implementation',
		],
		learned:
			'The interesting part was not the code, it was noticing what makes people come back to material they find boring. Immediate feedback, a bit of competition and short rounds did more for that than any feature I could have added. It also showed me how much a managed backend buys you when the real constraint is the deadline.',
		tech: ['JavaScript', 'Vue.js', 'Nuxt', 'Vuetify', 'Firebase'],
		image: projectScreenshot('iu-quiz-app-2.jpg'),
		images: projectImages('IU Quiz App', [['iu-quiz-app-2.jpg', 1000, 1000]]),
		buttons: [
			{
				href: 'https://iu-quiz-app.web.app',
				type: 'website',
			},
			{
				href: projectScreenshot('iu-quiz-app-projektbericht.pdf'),
				type: 'pdf',
			},
			{
				href: 'https://github.com/Rakantor/iu-quiz-app',
				type: 'github',
			},
		],
	},
	{
		slug: 'menacing-blue',
		title: 'Menacing Blue',
		shortDescription:
			'A 2D RPG in the spirit of the classic Pokémon games, built from scratch, with turn-based battles and online multiplayer.',
		description:
			'Menacing Blue is the project I built purely for the fun of it: a 2D role-playing game in the spirit of the Pokémon titles I grew up with. Animated NPCs, interactive objects, hand-built maps, turn-based battles you can also fight against another player online, sound design and several difficulty levels. There is no game engine underneath: everything from map rendering to battle logic sits directly on Java and libGDX.',
		overview: [
			'This started as a way to find out whether I could build a whole game rather than a demo, and it turned into the most varied thing I have worked on. Movement and collision, tile maps, animation, dialogue, a turn-based battle system, sound and networking all had to exist before any of it was fun to play.',
			'Maps are built in Tiled and loaded at runtime, so a new area is a content problem instead of a code problem. Battles run through the same system whether the opponent is an NPC or another player across the network. A playable demo is linked below.',
		],
		features: [
			'Written from scratch in Java with libGDX, no game engine involved',
			'Hand-built maps and interactive environments created with Tiled',
			'Animated NPCs, interactive objects and a turn-based battle system',
			'Online multiplayer battles against other players',
			'Sound design and multiple difficulty levels',
		],
		learned:
			'Games make architecture problems impossible to ignore. State handling, asset loading, collision, input and feedback all run in the same loop many times a second, and if one of them is sloppy the whole thing feels off. Not broken, just off. Getting battles to behave identically against an NPC and across a network connection taught me more about decoupling systems than any amount of theory.',
		tech: ['Java', 'libGDX', 'Tiled'],
		image: projectScreenshot('pmb-0.webp'),
		images: projectImages('Menacing Blue', [
			['pmb-0.webp', 1683, 1104],
			['pmb-6.png', 1922, 1119],
			['pmb-1.png', 1922, 1119],
			['pmb-2.png', 1922, 1119],
			['pmb-3.png', 1922, 1119],
			['pmb-4.png', 1922, 1119],
			['pmb-5.png', 1922, 1119],
		]),
		buttons: [
			{
				href: 'https://pmb-demo.mave.dev',
				type: 'demo',
			},
		],
	},
	{
		slug: 'leave-me-be',
		title: 'LMB (WoW)',
		shortDescription:
			'A World of Warcraft addon that quietly filters unwanted whispers, with automatic replies, allowlists, and blocking that switches itself on while you lead a group.',
		description:
			'Leave Me Be started with an annoyance: the moment you list a group in World of Warcraft\'s Premade Group Finder, your chat turns into a wall of whispers from people you have never met. The addon filters them out before they ever reach the screen, sends the sender a polite automatic reply, and lets friends, guild members, group members and anyone above a level you pick through as normal. The level threshold is there because the whispers actually worth blocking, gold sellers and scam links, come from freshly made low-level characters almost without exception. Blocked messages are not thrown away either, they are logged, so you can look at what you missed once you are done playing.',
		overview: [
			'WoW\'s whisper system is fine right up to the moment you become interesting to strangers. Leading a listed group is the obvious case: over the next few minutes a dozen requests pile up while you are trying to actually play. So the addon turns blocking on by itself while you are leading a listed group, and off again shortly after you stop, without you having to remember either.',
			'It is a small Lua addon with deliberately little to it: four files, saved variables for the settings and the message log, and an options panel inside the game\'s own settings menu instead of yet another custom window. Releases are packaged and pushed to CurseForge by GitHub Actions whenever I tag a version.',
		],
		features: [
			'Filters unwanted whispers out of chat entirely, instead of showing them and marking them afterwards',
			'Turns blocking on automatically while you lead a listed Premade Group Finder group, and off again once you stop',
			'Customizable automatic reply, throttled per player so nobody gets spammed back',
			'Exceptions for friends, guild members, group members, conversations already in progress, and anyone above a chosen level, which is what keeps the low-level spam accounts out',
			'Personal allowlist and blocklist, plus a log of everything that was filtered',
			'Configured from the game\'s own options panel or a handful of slash commands',
		],
		learned:
			'The interesting problem was one the game does not solve for you: an incoming whisper says almost nothing about its sender, least of all their level. Getting at it means briefly adding them to the friend list to read the value back, then cleaning up after yourself, muting the sound and swallowing the system messages that come with it. Midnight\'s messaging lockdown added a second constraint on top, where chat data can arrive as values you are not allowed to compare or even look at, so the safe path had to be letting the message through rather than guessing.',
		tech: ['Lua', 'World of Warcraft API', 'GitHub Actions'],
		image: projectScreenshot('lmb-1.webp'),
		images: projectImages('LMB (WoW)', [['lmb-1.webp', 1536, 1024]]),
		buttons: [
			{
				href: 'https://www.curseforge.com/wow/addons/leave-me-be',
				type: 'website',
			},
			{
				href: 'https://github.com/Rakantor/wow-leave-me-be',
				type: 'github',
			},
		],
	},
	{
		slug: 'personal-website',
		title: 'Personal Website',
		shortDescription:
			'The site you are looking at right now. A bilingual portfolio built with Astro, Tailwind CSS and almost no client-side JavaScript.',
		description:
			'This is the site you are on. I rebuilt it with Astro because a portfolio is mostly text and images, and shipping an entire frontend framework to render that always felt like overkill. Everything is generated as static HTML at build time, it is available in English and German, and adding a new project means editing a single data file, which is the only reason it actually stays up to date.',
		overview: [
			'The fourth version of my personal site, and the first one without a frontend framework running in the browser. Astro renders the pages to static HTML at build time; the only JavaScript that reaches visitors is the handful of lines the navigation menu and the project image gallery genuinely need.',
			'Content and presentation are kept apart on purpose. Projects and skills live in typed data files with their translations right next to them, and both language versions of the site are generated from that. Adding a project, a skill or a language is a content change rather than a rewrite.',
		],
		features: [
			'Static site generated with Astro, with no frontend framework shipped to the browser',
			'Complete English and German versions with locale-aware routing',
			'Projects and skills defined in typed data files, so content lives in one place',
			'Responsive layout styled with Tailwind CSS and daisyUI',
			'Built and deployed to GitHub Pages automatically on every push',
		],
		learned:
			'Rebuilding the same site for the fourth time is a good way to notice what actually changes over the years, and it is never the framework. Moving the content into typed data instead of scattering it across templates is what finally made this thing pleasant to update, and it is the pattern I now reach for whenever a site grows past a handful of pages.',
		tech: ['TypeScript', 'Astro', 'Tailwind CSS', 'daisyUI', 'GitHub Pages'],
		image: projectScreenshot('personal-website-1.webp'),
		images: projectImages('Personal Website', [['personal-website-1.webp', 1920, 1118]]),
		buttons: [
			{
				href: 'https://mave.dev',
				type: 'website',
			},
			{
				href: 'https://github.com/Rakantor/personal-portfolio-v4',
				type: 'github',
			},
		],
	},
	{
		slug: 'iu-gamer-app',
		title: 'IU Gamer App',
		shortDescription:
			'An Android app for board game groups: agree on a date, vote on what to play, rate it afterwards, and keep the chat in one place.',
		description:
			'Another project from my studies at IU International University, aimed at something every board game group knows: organizing the evening takes longer than the game. The app keeps scheduling, game suggestions, voting, reminders, ratings and group chat together in one place, so the planning does not end up spread across three different messenger threads.',
		overview: [
			'Board game nights fall apart in fairly predictable ways: nobody commits to what to play, half the group forgets the date, and the whole discussion lives in a group chat where nothing is findable two days later.',
			'The app is native Android, written in Java, with Firebase behind it for authentication, data and chat. Notifications turned out to be the part that mattered most, because a scheduling app that does not remind you reliably is worse than no app at all. A project report is linked below.',
		],
		features: [
			'Native Android app written in Java',
			'Game suggestions and voting, so the group decides before the evening starts',
			'Reliable scheduling notifications and reminders',
			'Ratings for past sessions, to remember what actually went down well',
			'Built-in group chat and data storage backed by Firebase',
		],
		learned:
			'Mobile apps live and die by things that never show up in the UI: notifications that actually arrive, state that survives the system killing your app, and screens that work one-handed while you are holding a game box in the other. The feature list was the easy part.',
		tech: ['Java', 'Android', 'Firebase'],
		image: projectScreenshot('iu-gamer-app-1.jpg'),
		images: projectImages('IU Gamer App', [
			['iu-gamer-app-1.jpg', 1650, 1080],
			['iu-gamer-app-2.jpg', 1650, 1080],
		]),
		buttons: [
			{
				href: projectScreenshot('iu-gamer-app-projektbericht.pdf'),
				type: 'pdf',
			},
			{
				href: 'https://github.com/Rakantor/iubh-gamer-app',
				type: 'github',
			},
		],
	},
];

type ProjectTranslation = Pick<
	Project,
	'shortDescription' | 'description' | 'overview' | 'features' | 'learned'
>;

const projectTranslations = {
	de: {
		'torii-srs-web-v2': {
			shortDescription:
				'Der webbasierte Nachfolger von Torii SRS. Funktioniert komplett offline, synchronisiert später und zeigt den Lernaufwand für die nächsten Wochen.',
			description:
				'Torii SRS (Web v2) ist die aktuelle Webversion von Torii SRS. Die App installiert sich wie eine ganz normale App und funktioniert auch ohne Verbindung: Die Reviews landen lokal in IndexedDB und werden synchronisiert, sobald man wieder online ist. Es ist außerdem die Version, in der die App erwachsen geworden ist: ein integriertes Wörterbuch zum Hinzufügen neuer Wörter, mehrere Review-Modi, Audio zur Aussprache jedes einzelnen Worts, ein Prognosediagramm für die anstehende Lernlast und Statistiken, die zeigen, wo es wirklich hakt.',
			overview: [
				'Torii SRS (Web v2) nimmt alles aus den früheren Versionen mit und lässt es im Browser laufen. Gelernt wird in Fünf-Minuten-Lücken: in der U-Bahn, beim Warten auf den Kaffee. Also musste sich die App am Handy installieren lassen, sofort starten und auch dann weiterlaufen, wenn die Verbindung wegbricht.',
				'Die schwierigere Aufgabe war, mehr hineinzupacken, ohne dass es langsamer wird. Wörterbuch, Prognose und Statistiken sind da, wenn man sie braucht. Der tägliche Ablauf, also aufmachen, wiederholen, fertig, ist trotzdem der kürzeste Weg durch die App geblieben.',
				'Diese Version ist keine Aktualisierung der bisherigen Web-App, sondern eine komplette Neuentwicklung: Aus Vue 2 wurde Vue 3, aus einem handverdrahteten Vue-CLI-Projekt Nuxt, aus Vuex Pinia, aus der Options API die Composition API und aus Vuetify 2 Vuetify 4. Dabei wurde jeder Bildschirm neu gezeichnet, und eine lange Liste an Fehlern, mit denen die alte Codebasis zu leben gelernt hatte, hat den Umzug nicht überlebt.',
			],
			features: [
				'Komplettes Offline-Lernen: Reviews liegen lokal in IndexedDB und synchronisieren sich später',
				'Integriertes Wörterbuch, um neue Vokabeln ohne Umweg hinzuzufügen',
				'Mehrere Review-Modi, vom schnellen Wiedererkennen bis zum aktiven Abrufen',
				'Aussprache-Audio zu jedem Wort, erzeugt mit Text-to-Speech von Amazon Polly, Azure und IBM Watson',
				'Prognosediagramm für den Lernaufwand der nächsten Tage und Wochen',
				'Suche und Statistiken, die zeigen, welche Wörter immer wieder danebengehen',
				'Cloud-Architektur für Konten und geräteübergreifende Synchronisierung',
			],
			learned:
				'Offline-first klingt einfach, bis zwei Geräte unterschiedlicher Meinung sind, was man gelernt hat. Synchronisierung, lokale Speicherung und Konfliktbehandlung sauber hinzubekommen, war der lehrreichste Teil des Projekts. Und es hat bestätigt, was mir schon die Java-Version gezeigt hatte: Je mehr eine App kann, desto mehr Arbeit steckt darin, den Hauptweg durch sie kurz zu halten.',
		},
		'torii-srs-web-v1': {
			shortDescription:
				'Der webbasierte Nachfolger von Torii SRS. Funktioniert komplett offline, synchronisiert später und zeigt den Lernaufwand für die nächsten Wochen.',
			description:
				'Mit Torii SRS (Web v1) ist das Ganze ins Web übersiedelt. Die App installiert sich wie eine ganz normale App und funktioniert auch ohne Verbindung: Die Reviews landen lokal in IndexedDB und werden synchronisiert, sobald man wieder online ist. Es ist außerdem die Version, in der die App erwachsen geworden ist: ein integriertes Wörterbuch zum Hinzufügen neuer Wörter, mehrere Review-Modi, Audio zur Aussprache jedes einzelnen Worts, ein Prognosediagramm für die anstehende Lernlast und Statistiken, die zeigen, wo es wirklich hakt.',
			overview: [
				'Torii SRS (Web v1) nimmt alles aus der Java-App mit und übersiedelt es in den Browser. Gelernt wird in Fünf-Minuten-Lücken: in der U-Bahn, beim Warten auf den Kaffee. Also musste sich die App am Handy installieren lassen, sofort starten und auch dann weiterlaufen, wenn die Verbindung wegbricht.',
				'Die schwierigere Aufgabe war, mehr hineinzupacken, ohne dass es langsamer wird. Wörterbuch, Prognose und Statistiken sind da, wenn man sie braucht. Der tägliche Ablauf, also aufmachen, wiederholen, fertig, ist trotzdem der kürzeste Weg durch die App geblieben.',
			],
			features: [
				'Komplettes Offline-Lernen: Reviews liegen lokal in IndexedDB und synchronisieren sich später',
				'Integriertes Wörterbuch, um neue Vokabeln ohne Umweg hinzuzufügen',
				'Mehrere Review-Modi, vom schnellen Wiedererkennen bis zum aktiven Abrufen',
				'Aussprache-Audio zu jedem Wort, erzeugt mit Text-to-Speech von Amazon Polly, Azure und IBM Watson',
				'Prognosediagramm für den Lernaufwand der nächsten Tage und Wochen',
				'Suche und Statistiken, die zeigen, welche Wörter immer wieder danebengehen',
				'Cloud-Architektur für Konten und geräteübergreifende Synchronisierung',
			],
			learned:
				'Offline-first klingt einfach, bis zwei Geräte unterschiedlicher Meinung sind, was man gelernt hat. Synchronisierung, lokale Speicherung und Konfliktbehandlung sauber hinzubekommen, war der lehrreichste Teil des Projekts. Und es hat bestätigt, was mir schon die Java-Version gezeigt hatte: Je mehr eine App kann, desto mehr Arbeit steckt darin, den Hauptweg durch sie kurz zu halten.',
		},
		'torii-srs-java': {
			shortDescription:
				'Eine plattformübergreifende App zum Japanisch-Lernen, mit Spaced Repetition, fertigen JLPT-Listen, mehreren Review-Modi und Cloud-Sync.',
			description:
				'Torii SRS (Java) ist mein Versuch, japanische Vokabeln zu lernen, ohne vorher stundenlang Karteikarten anzulegen. Spaced Repetition übernimmt die Planung der Wiederholungen, fertige JLPT-Vokabellisten sind schon dabei, man kann also sofort loslegen. Dazu kommen Audio für die richtige Aussprache, mehrere Review-Modi, unterschiedliche Schriftvarianten der japanischen Zeichen, eine Fortschrittsanzeige und automatische Cloud-Synchronisierung. Egal ob unter Windows, macOS, Linux oder auf Android.',
			overview: [
				'Die erste vollständige Version von Torii SRS: eine App für Windows, macOS, Linux und Android.',
				'Die Idee dahinter war simpel: Japanisch lernen soll nicht schon an der Vorbereitung scheitern. Statt sich Vokabellisten mühsam im Internet zusammenzusuchen oder einen Abend lang ein klassisches Karteikarten-Programm einzurichten, sind geprüfte JLPT-Listen von Anfang an dabei. Eigene Wörter kann man trotzdem jederzeit ergänzen.',
			],
			features: [
				'Eine App für Windows, macOS, Linux und Android, gebaut mit Java und libGDX',
				'Spaced Repetition, das entscheidet, was wann wiederholt wird',
				'Fertige JLPT-Vokabellisten und Platz für eigene Wörter',
				'Audio für die richtige Aussprache, wechselnde Schriftvarianten und Fortschrittsanzeige',
				'Automatische Cloud-Synchronisierung über alle Geräte hinweg',
			],
			learned:
				'Am meisten mitgenommen habe ich, wie stark die Qualität eines Produkts von den Alltagsdetails abhängt. Schnelle und zuverlässige Synchronisierung, klares Feedback beim Lernen und Kleinigkeiten im Interface waren am Ende genauso wichtig wie der Algorithmus selbst. Genau das fällt den Leuten nämlich täglich auf.',
		},
		'torii-srs-landing-page': {
			shortDescription:
				'Die Marketing-Website für Torii SRS: was das Produkt kann, was es kostet, und eine Wissensdatenbank für den Fall der Fälle.',
			description:
				'Die öffentliche Eingangstür zu Torii SRS. Die App kann ziemlich viel, und genau das ist auf einer Landingpage das Problem: Niemand liest eine Feature-Liste, bevor er weiß, wofür das Ganze überhaupt gut ist. Die Seite fängt deshalb beim Wesentlichen an und liefert die Details erst danach, also Funktionen, Testimonials, Preise und eine Wissensdatenbank. Alles statisch mit Astro generiert und dadurch einfach sofort da.',
			overview: [
				'Torii SRS hatte mit der Zeit viele Funktionen bekommen, aber keinen richtigen öffentlichen Auftritt. Diese Seite ist genau das: Sie erklärt das Produkt jemandem, der noch nie davon gehört hat, und bietet einen einzigen, klaren Einstieg.',
				'Gebaut ist sie mit Astro, React-Komponenten, Tailwind CSS und shadcn/ui. Die Ausgabe ist statisch, es gibt also praktisch nichts zu laden, und dank der Komponentenstruktur ist ein neuer Abschnitt oder ein neuer Artikel in der Wissensdatenbank eine Sache von Minuten statt ein Refactoring.',
			],
			features: [
				'Statische, responsive Marketingseite mit Astro und React-Komponenten',
				'Aufgebaut nach dem, was ein neuer Besucher zuerst wissen muss',
				'Bereiche für Funktionen, Testimonials, Preise und eine Wissensdatenbank',
				'Einheitliches Design durch wiederverwendbare Tailwind-CSS- und shadcn/ui-Komponenten',
				'Kurze Ladezeiten und SEO-freundliches Markup für bessere Sichtbarkeit',
			],
			learned:
				'Produktseiten und App-Oberflächen sind fast gegensätzliche Aufgaben. In der App wissen die Leute schon, was sie wollen; auf einer Landingpage hat man ein paar Sekunden, um überhaupt zu erklären, warum sie sich dafür interessieren sollten. Zuerst den Nutzen zu zeigen statt der Feature-Liste war hier der wertvollste Teil. Und wie gut sich eine Seite anfühlt, die fast ohne JavaScript auskommt.',
		},
		'google-drive-pdf-downloader': {
			shortDescription:
				'Ein Browser-Tool, das aus Googles bildbasierter Vorschau wieder ein richtiges PDF macht, inklusive Text und Links.',
			description:
				'Manche PDFs werden in Google Drive nur zum Ansehen freigegeben: Lesen im Browser geht, Herunterladen und Drucken sind deaktiviert. Blöd, wenn es die eigenen Kursunterlagen sind und man sie offline braucht. Das Tool baut die Datei aus dem zusammen, was die Vorschau ohnehin schon anzeigt: Es geht die Seiten durch, erfasst jede einzelne und setzt daraus wieder ein PDF zusammen, auf Wunsch mit auswählbarem Text und funktionierenden Hyperlinks.',
			overview: [
				'Google rendert diese Dokumente als Bilder, Seite für Seite, und lädt immer nur das, was gerade sichtbar ist. Das Tool scrollt deshalb selbst durch das Dokument, wartet, bis jede Seite fertig gerendert ist, erfasst sie und fügt am Ende alles lokal zusammen. Hochgeladen wird dabei nichts.',
				'Es gibt zwei Varianten: ein Skript, das man bei Bedarf einmalig in die Browser-Konsole einfügt, und ein Userscript, das sich in Google Drive, Google Classroom und ähnlichen Viewern von selbst aktiviert. Dazu ein schneller und ein hochauflösender Modus, eine Fortschrittsanzeige und ein Abbrechen-Button für den Fall, dass ein Dokument länger ist als gedacht.',
			],
			features: [
				'Funktioniert mit Google Drive, Google Classroom und weiteren Google-Vorschauansichten',
				'Schneller und hochauflösender Modus mit einstellbarem Zoom',
				'Optionale Textebene: Das Ergebnis bleibt durchsuchbar und markierbar, Hyperlinks inklusive',
				'Verfügbar als einmaliges Konsolenskript oder als Userscript für Chrome und Firefox',
				'Läuft komplett im Browser, mit Fortschrittsanzeige und Abbruchmöglichkeit, ohne dass etwas den eigenen Rechner verlässt',
			],
			learned:
				'Dieses Projekt war eine Lektion darin, mit einer Seite zu arbeiten, die dafür nie vorgesehen war: auf den richtigen Moment im Render-Zyklus warten, mit Lazy Loading umgehen und Aufnahmequalität gegen Verarbeitungszeit und Dateigröße abwägen, und das alles clientseitig, wo jede Abkürzung an anderer Stelle wehtut. Dazu geht jedes Dokument auf seine eigene Art kaputt, und „bei dem einen PDF hat es funktioniert“ war als Definition von funktionieren ziemlich unbrauchbar.',
		},
		'iu-quiz-app': {
			shortDescription:
				'Eine Quizplattform, auf der Studierende Prüfungsfragen gemeinsam durchgehen statt allein durchackern.',
			description:
				'Ein Studienprojekt aus meiner Zeit an der IU Internationale Hochschule, entstanden aus einem Problem, das ich selbst hatte: Im Fernstudium bereitet man sich weitgehend allein auf Prüfungen vor. Diese App macht genau diesen Teil sozial. Studierende arbeiten fachspezifische Fragen in einem gemeinsamen Quizformat durch, inspiriert von den bekannten Quizspielen, allein oder gegeneinander. Das macht die dritte Runde durch denselben Stoff deutlich erträglicher.',
			overview: [
				'Ein Fernstudium ist flexibel, aber still. Da ist niemand, der einen am Abend vor der Prüfung abfragt, und keine Lerngruppe im Nebenraum. Die IU Quiz App füllt diese Lücke mit Fragensammlungen pro Fach, die Studierende gemeinsam durchgehen können.',
				'Technisch ist es eine Single-Page-App mit Nuxt, dahinter Firebase für Authentifizierung, Daten und Hosting. Dadurch ist aus einem Studienprojekt nicht nebenbei ein Backend-Projekt geworden. Ein Bericht zu Konzept und Umsetzung ist unten verlinkt.',
			],
			features: [
				'Gemeinsamer Quizablauf zum Lernen allein oder gegen andere Studierende',
				'Fragensammlungen nach Fach, ausgerichtet auf die echte Prüfungsvorbereitung',
				'Firebase für Authentifizierung, Daten und Hosting, ohne eigenes Backend zu warten',
				'Responsive Single-Page-Oberfläche mit Nuxt und Vuetify',
				'Ausführlicher Projektbericht zu Konzept, Architektur und Umsetzung',
			],
			learned:
				'Das Spannende war nicht der Code, sondern die Frage, was Leute dazu bringt, zu Stoff zurückzukommen, den sie langweilig finden. Sofortiges Feedback, ein bisschen Wettbewerb und kurze Runden haben dafür mehr gebracht als jedes zusätzliche Feature. Und es hat gezeigt, wie viel einem ein fertiges Backend abnimmt, wenn die eigentliche Einschränkung die Deadline ist.',
		},
		'menacing-blue': {
			shortDescription:
				'Ein 2D-RPG im Geist der klassischen Pokémon-Spiele, von Grund auf gebaut, mit rundenbasierten Kämpfen und Online-Multiplayer.',
			description:
				'Menacing Blue ist das Projekt, das ich rein aus Spaß gebaut habe: ein 2D-Rollenspiel im Geist der Pokémon-Titel, mit denen ich aufgewachsen bin. Animierte NPCs, interaktive Objekte, selbst gebaute Karten, rundenbasierte Kämpfe (auch online gegen andere Spieler), Sounddesign und mehrere Schwierigkeitsgrade. Darunter liegt keine Spiel-Engine: Von der Kartendarstellung bis zur Kampflogik sitzt alles direkt auf Java und libGDX.',
			overview: [
				'Angefangen hat das Ganze mit der Frage, ob ich ein komplettes Spiel hinbekomme und nicht nur eine Demo. Herausgekommen ist das abwechslungsreichste Projekt, an dem ich je gearbeitet habe: Bewegung und Kollision, Tile-Maps, Animation, Dialoge, ein rundenbasiertes Kampfsystem, Sound und Netzwerkcode mussten alle existieren, bevor überhaupt etwas davon Spaß gemacht hat.',
				'Die Karten entstehen in Tiled und werden zur Laufzeit geladen. Ein neues Gebiet ist damit eine Inhaltsfrage und keine Code-Frage. Kämpfe laufen über dasselbe System, egal ob der Gegner ein NPC oder ein anderer Spieler im Netzwerk ist. Eine spielbare Demo ist unten verlinkt.',
			],
			features: [
				'Von Grund auf in Java mit libGDX geschrieben, ohne Spiel-Engine',
				'Selbst gebaute Karten und interaktive Umgebungen mit Tiled',
				'Animierte NPCs, interaktive Objekte und ein rundenbasiertes Kampfsystem',
				'Online-Multiplayer für Kämpfe gegen andere Spieler',
				'Sounddesign und mehrere Schwierigkeitsgrade',
			],
			learned:
				'Bei einem Spiel lassen sich Architekturprobleme nicht ignorieren. State-Handling, Asset-Loading, Kollision, Eingaben und Feedback laufen alle in derselben Schleife, viele Male pro Sekunde. Ist eines davon schlampig, fühlt sich das ganze Spiel falsch an. Nicht kaputt, nur falsch. Kämpfe dazu zu bringen, gegen einen NPC und über eine Netzwerkverbindung identisch zu funktionieren, hat mir mehr über entkoppelte Systeme beigebracht als jede Theorie.',
		},
		'personal-website': {
			shortDescription:
				'Die Seite, auf der du gerade bist. Ein zweisprachiges Portfolio mit Astro, Tailwind CSS und fast ohne JavaScript im Browser.',
			description:
				'Das ist die Seite, auf der du gerade bist. Ich habe sie mit Astro neu gebaut, weil ein Portfolio hauptsächlich aus Text und Bildern besteht und es sich immer nach Overkill angefühlt hat, dafür ein ganzes Frontend-Framework auszuliefern. Alles wird beim Build als statisches HTML generiert, es gibt sie auf Deutsch und Englisch, und ein neues Projekt hinzuzufügen heißt: eine einzige Datei bearbeiten. Nur deshalb bleibt sie überhaupt aktuell.',
			overview: [
				'Die vierte Version meiner persönlichen Website und die erste ohne Frontend-Framework im Browser. Astro rendert die Seiten beim Build zu statischem HTML; das einzige JavaScript, das bei Besuchern ankommt, sind die paar Zeilen, die das Navigationsmenü und die Bildergalerie in den Projekten wirklich brauchen.',
				'Inhalt und Darstellung sind bewusst getrennt. Projekte und Skills liegen in typisierten Datendateien, die Übersetzungen gleich daneben, und beide Sprachversionen werden daraus generiert. Ein neues Projekt, ein neuer Skill oder eine weitere Sprache sind damit eine Inhaltsänderung und kein Umbau.',
			],
			features: [
				'Statische Website mit Astro, kein Frontend-Framework im Browser',
				'Vollständige deutsche und englische Version mit sprachabhängigem Routing',
				'Projekte und Skills in typisierten Datendateien, damit Inhalte an einem Ort liegen',
				'Responsives Layout mit Tailwind CSS und daisyUI',
				'Automatischer Build und Deployment auf GitHub Pages bei jedem Push',
			],
			learned:
				'Dieselbe Website zum vierten Mal zu bauen ist ein guter Weg, um zu merken, was sich über die Jahre wirklich ändert. Und das ist nie das Framework. Die Inhalte in typisierte Daten zu verschieben, statt sie über Templates zu verteilen, hat diese Seite endlich angenehm wartbar gemacht. Das ist inzwischen das Muster, zu dem ich greife, sobald eine Website mehr als eine Handvoll Seiten hat.',
		},
		'iu-gamer-app': {
			shortDescription:
				'Eine Android-App für Brettspielrunden: Termin finden, abstimmen, was gespielt wird, hinterher bewerten und den Chat an einem Ort haben.',
			description:
				'Noch ein Projekt aus meinem Studium an der IU Internationale Hochschule, für etwas, das jede Brettspielrunde kennt: Die Organisation dauert länger als das Spiel. Die App bündelt Terminplanung, Spielvorschläge, Abstimmungen, Erinnerungen, Bewertungen und Gruppenchat an einem Ort, damit sich die Planung nicht über drei verschiedene Messenger-Verläufe verteilt.',
			overview: [
				'Brettspielabende scheitern auf ziemlich vorhersehbare Weise: Niemand legt sich fest, was gespielt wird, die Hälfte vergisst den Termin, und die ganze Diskussion liegt in einem Gruppenchat, in dem zwei Tage später nichts mehr auffindbar ist.',
				'Die App ist natives Android in Java, dahinter Firebase für Authentifizierung, Daten und Chat. Am wichtigsten waren am Ende die Benachrichtigungen, denn eine Termin-App, die nicht zuverlässig erinnert, ist schlechter als gar keine App. Ein Projektbericht ist unten verlinkt.',
			],
			features: [
				'Native Android-App in Java',
				'Spielvorschläge und Abstimmungen, damit die Gruppe vor dem Abend entscheidet',
				'Zuverlässige Terminbenachrichtigungen und Erinnerungen',
				'Bewertungen vergangener Runden, um zu wissen, was gut angekommen ist',
				'Integrierter Gruppenchat und Datenspeicherung über Firebase',
			],
			learned:
				'Mobile Apps stehen und fallen mit Dingen, die man im UI nie sieht: Benachrichtigungen, die tatsächlich ankommen, Zustand, der überlebt, wenn das System die App abschießt, und Bildschirme, die sich einhändig bedienen lassen, während man in der anderen Hand eine Spieleschachtel hält. Die Feature-Liste war der einfache Teil.',
		},
		'leave-me-be': {
			shortDescription:
				'Ein World-of-Warcraft-Addon, das unerwünschte Flüsternachrichten still herausfiltert, mit automatischen Antworten, Ausnahmelisten und Blockieren, das sich beim Gruppenleiten selbst einschaltet.',
			description:
				'Leave Me Be ist aus einem Ärgernis entstanden: Sobald man in World of Warcraft eine Gruppe im Gruppenfinder inseriert, besteht der Chat nur noch aus Flüsternachrichten von Leuten, die man nie getroffen hat. Das Addon filtert sie heraus, bevor sie überhaupt am Bildschirm ankommen, schickt dem Absender eine freundliche automatische Antwort und lässt Freunde, Gildenmitglieder, Gruppenmitglieder und alle ab einem selbst gewählten Level ganz normal durch. Die Levelgrenze gibt es, weil die Nachrichten, die man wirklich loswerden will, also Goldverkäufer und Betrugslinks, fast ausnahmslos von frisch erstellten Charakteren auf niedriger Stufe kommen. Blockierte Nachrichten sind auch nicht verloren, sie werden protokolliert, damit man nach dem Spielen nachsehen kann, was man verpasst hat.',
			overview: [
				'Das Flüstersystem in WoW ist völlig in Ordnung, bis man für Fremde interessant wird. Der klassische Fall: Man leitet eine inserierte Gruppe, und über die nächsten Minuten sammelt sich ein Dutzend Anfragen an, während man eigentlich spielen möchte. Das Addon schaltet das Blockieren deshalb von selbst ein, solange man eine inserierte Gruppe leitet, und kurz danach wieder aus, ohne dass man an eines von beidem denken muss.',
				'Es ist ein kleines Lua-Addon mit bewusst wenig Umfang: vier Dateien, gespeicherte Variablen für die Einstellungen und das Nachrichtenprotokoll und ein Optionsbereich im Einstellungsmenü des Spiels statt eines weiteren eigenen Fensters. Gepackt und zu CurseForge hochgeladen werden die Releases von GitHub Actions, sobald ich eine Version tagge.',
			],
			features: [
				'Filtert unerwünschte Flüsternachrichten komplett aus dem Chat, statt sie anzuzeigen und nachträglich zu markieren',
				'Schaltet das Blockieren automatisch ein, solange man eine inserierte Gruppe im Gruppenfinder leitet, und danach wieder aus',
				'Anpassbare automatische Antwort, pro Spieler gedrosselt, damit niemand zurückgespammt wird',
				'Ausnahmen für Freunde, Gildenmitglieder, Gruppenmitglieder, bereits laufende Gespräche und alle ab einem selbst gewählten Level, was die Spam-Accounts auf niedriger Stufe draußen hält',
				'Eigene Allow- und Blockliste sowie ein Protokoll aller gefilterten Nachrichten',
				'Konfiguration über das Optionsmenü des Spiels oder eine Handvoll Chat-Befehle',
			],
			learned:
				'Das spannende Problem war eines, das einem das Spiel nicht abnimmt: Eine eingehende Flüsternachricht verrät fast nichts über den Absender, am wenigsten dessen Level. Um da heranzukommen, fügt man ihn kurz zur Freundesliste hinzu, liest den Wert aus und räumt danach wieder auf, inklusive Ton stummschalten und Systemmeldungen abfangen. Dazu kam die Messaging-Sperre in Midnight, bei der Chatdaten als Werte ankommen können, die man weder vergleichen noch ansehen darf. Der sichere Weg musste also heißen: durchlassen statt raten.',
		},
	} satisfies Record<string, ProjectTranslation>,
} satisfies Record<Exclude<Locale, 'en'>, Record<string, ProjectTranslation>>;

const buttonLabels: Record<Locale, Record<ProjectButtonType, string>> = {
	en: {
		website: 'Website',
		demo: 'Play Demo',
		github: 'Source Code',
		pdf: 'Project Report',
	},
	de: {
		website: 'Website',
		demo: 'Demo spielen',
		github: 'Source Code',
		pdf: 'Projektbericht',
	},
};

export const getProjectButtonLabel = (type: ProjectButtonType, locale: Locale = 'en') => buttonLabels[locale][type];

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
			aria: `${buttonLabels[locale][button.type]}: ${project.title}`,
		})),
	};
};

export const getLocalizedProjects = (locale: Locale = 'en') => projects.map((project) => getLocalizedProject(project, locale));

/**
 * The projects shown large, with a screenshot, at the top of the home page.
 * Everything else falls through to the compact "More Projects" index.
 */
export const featuredSlugs = [
	'torii-srs-web-v2',
	'torii-srs-java',
	'menacing-blue',
	'google-drive-pdf-downloader',
] as const;

export const getFeaturedProjects = (locale: Locale = 'en') =>
	featuredSlugs
		.map((slug) => projects.find((project) => project.slug === slug))
		.filter((project): project is Project => project !== undefined)
		.map((project) => getLocalizedProject(project, locale));

export const getMoreProjects = (locale: Locale = 'en') =>
	projects
		.filter((project) => !featuredSlugs.includes(project.slug as (typeof featuredSlugs)[number]))
		.map((project) => getLocalizedProject(project, locale));

/**
 * Column order for the quick-link grid in the "More Projects" index.
 * Types that none of the listed projects uses are dropped, so a column is
 * never entirely empty.
 */
export const quickLinkSlotOrder: ProjectButtonType[] = ['website', 'demo', 'github', 'pdf'];

export const getQuickLinkSlots = (visible: Project[]) =>
	quickLinkSlotOrder.filter((type) =>
		visible.some((project) => project.buttons.some((button) => button.type === type))
	);
