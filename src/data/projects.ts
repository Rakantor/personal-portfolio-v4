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
const projectImages = (title: string, fileNames: string[]): ProjectImage[] =>
	fileNames.map((fileName, index) => ({
		src: projectScreenshot(fileName),
		alt: `${title} screenshot ${index + 1}`,
	}));

export const projects: Project[] = [
	{
		slug: 'torii-srs-v2',
		title: 'Torii SRS (v2)',
		shortDescription:
			'The web-based successor to Torii SRS. Works fully offline, syncs when you reconnect, and shows what your review workload looks like weeks ahead.',
		description:
			'Torii SRS (v2) is where the whole thing moved to the web. It installs like a normal app, and it keeps working without a connection: reviews are stored locally in IndexedDB and sync back up once you\'re online again. It\'s also the version where the app grew up: a built-in dictionary for adding words on the fly, several review modes, spoken audio for every single word, a forecast chart showing how much work is coming your way, and statistics that point out where you\'re actually struggling.',
		overview: [
			'Torii SRS (v2) takes everything the first version did and moves it into the browser. Studying happens in five-minute gaps: on the train, waiting for a coffee. So the app had to install on a phone, start instantly, and keep going when the connection drops.',
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
			'Offline-first sounds simple until two devices disagree about what you studied. Getting synchronization, local persistence and conflict handling right was the most instructive part of this project. It also confirmed something v1 had already taught me: the more an app can do, the more work it takes to keep the main path through it short.',
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
				href: 'https://app.torii-srs.com',
				aria: 'Torii SRS v2 website',
				type: 'website',
			},
		],
	},
	{
		slug: 'torii-srs-v1',
		title: 'Torii SRS (v1)',
		shortDescription:
			'A cross-platform app for learning Japanese vocabulary, with spaced repetition, ready-made JLPT lists, several review modes, and cloud sync.',
		description:
			'Torii SRS (v1) is my take on learning Japanese vocabulary without the busywork that usually comes with it. Spaced repetition takes care of scheduling your reviews, and ready-made JLPT word lists are built in, so you can start studying right away instead of building decks first. On top of that: audio for pronunciation, several review modes, different Japanese typefaces, progress stats, and automatic cloud sync, all on Windows, macOS, Linux, and Android.',
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
				href: 'https://torii-srs.com',
				aria: 'Torii SRS v1 website',
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
		images: projectImages('Torii SRS Landing Page', ['torii-srs-site-1.jpg']),
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
			'gdrive-pdf-1.webp',
			'gdrive-pdf-2.webp',
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
			'A quiz platform that lets fellow distance-learning students work through exam questions together instead of grinding through them alone.',
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
		images: projectImages('IU Quiz App', ['iu-quiz-app-2.jpg']),
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
			'pmb-0.webp',
			'pmb-6.png',
			'pmb-1.png',
			'pmb-2.png',
			'pmb-3.png',
			'pmb-4.png',
			'pmb-5.png',
		]),
		buttons: [
			{
				href: 'https://pmb-demo.mave.dev',
				type: 'demo',
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
			'The fourth version of my personal site, and the first one without a frontend framework running in the browser. Astro renders the pages to static HTML at build time; the only JavaScript that reaches visitors is what the project image gallery genuinely needs.',
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
		image: projectScreenshot('personal-website-1.jpg'),
		images: projectImages('Personal Website', ['personal-website-1.jpg']),
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
		images: projectImages('IU Gamer App', ['iu-gamer-app-1.jpg', 'iu-gamer-app-2.jpg']),
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
		'torii-srs-v2': {
			shortDescription:
				'Der webbasierte Nachfolger von Torii SRS. Funktioniert komplett offline, synchronisiert später und zeigt den Lernaufwand für die nächsten Wochen.',
			description:
				'Mit Torii SRS (v2) ist das Ganze ins Web übersiedelt. Die App installiert sich wie eine ganz normale App und funktioniert auch ohne Verbindung: Die Reviews landen lokal in IndexedDB und werden synchronisiert, sobald man wieder online ist. Es ist außerdem die Version, in der die App erwachsen geworden ist: ein integriertes Wörterbuch zum Hinzufügen neuer Wörter, mehrere Review-Modi, Audio zur Aussprache jedes einzelnen Worts, ein Prognosediagramm für die anstehende Lernlast und Statistiken, die zeigen, wo es wirklich hakt.',
			overview: [
				'Torii SRS (v2) nimmt alles aus der ersten Version mit und übersiedelt es in den Browser. Gelernt wird in Fünf-Minuten-Lücken: in der U-Bahn, beim Warten auf den Kaffee. Also musste sich die App am Handy installieren lassen, sofort starten und auch dann weiterlaufen, wenn die Verbindung wegbricht.',
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
				'Offline-first klingt einfach, bis zwei Geräte unterschiedlicher Meinung sind, was man gelernt hat. Synchronisierung, lokale Speicherung und Konfliktbehandlung sauber hinzubekommen, war der lehrreichste Teil des Projekts. Und es hat bestätigt, was mir schon v1 gezeigt hatte: Je mehr eine App kann, desto mehr Arbeit steckt darin, den Hauptweg durch sie kurz zu halten.',
		},
		'torii-srs-v1': {
			shortDescription:
				'Eine plattformübergreifende App zum Japanisch-Lernen, mit Spaced Repetition, fertigen JLPT-Listen, mehreren Review-Modi und Cloud-Sync.',
			description:
				'Torii SRS (v1) ist mein Versuch, japanische Vokabeln zu lernen, ohne vorher stundenlang Karteikarten anzulegen. Spaced Repetition übernimmt die Planung der Wiederholungen, fertige JLPT-Vokabellisten sind schon dabei, man kann also sofort loslegen. Dazu kommen Audio für die richtige Aussprache, mehrere Review-Modi, unterschiedliche Schriftvarianten der japanischen Zeichen, eine Fortschrittsanzeige und automatische Cloud-Synchronisierung. Egal ob unter Windows, macOS, Linux oder auf Android.',
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
				'Eine Quizplattform, auf der Mitstudierende im Fernstudium Prüfungsfragen gemeinsam durchgehen statt allein durchackern.',
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
				'Die vierte Version meiner persönlichen Website und die erste ohne Frontend-Framework im Browser. Astro rendert die Seiten beim Build zu statischem HTML; das einzige JavaScript, das bei Besuchern ankommt, ist das, was die Bildergalerie in den Projekten wirklich braucht.',
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
	'torii-srs-v2',
	'torii-srs-v1',
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
