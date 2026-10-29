import { type Locale, ui } from '../i18n';

export type ProjectButtonType = 'website' | 'play' | 'demo' | 'github' | 'pdf';

/** The kinds of project the tags name. Their labels live in `ui[locale].projects.tags`. */
export type ProjectTag =
	| 'website'
	| 'webApp'
	| 'desktopApp'
	| 'androidApp'
	| 'game'
	| 'userscript'
	| 'officeAddIn'
	| 'gameAddon';

export type ProjectButton = {
	href: string;
	type: ProjectButtonType;
};

export type ProjectImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

/** The copy that differs per language. */
export type ProjectText = {
	shortDescription: string;
	description: string;
	overview: string[];
	features: string[];
	learned: string;
};

/**
 * A project as authored: the language-independent data plus its copy in every
 * locale. `text` is keyed by `Locale`, so adding a locale or a project without
 * all of its translations is a type error rather than a silent fallback.
 */
export type ProjectEntry = {
	slug: string;
	title: string;
	/** Primary development year or range, e.g. "2022" or "2022–2024". */
	years: string;
	text: Record<Locale, ProjectText>;
	tech: string[];
	image: string;
	images: Omit<ProjectImage, 'alt'>[];
	buttons: ProjectButton[];
	/** What kind of thing it is, most telling first, e.g. a game before the platforms it runs on. */
	tags: ProjectTag[];
	/** Kept in the source but left off the site: no page, no listing, no "next project" link. */
	hidden?: boolean;
};

/** A project resolved to one locale, which is what the components render. */
export type Project = Omit<ProjectEntry, 'text' | 'images'> & ProjectText & { images: ProjectImage[] };

const projectScreenshotBaseUrl = 'https://d29l6egdxvgg9c.cloudfront.net';
const projectScreenshot = (fileName: string) => `${projectScreenshotBaseUrl}/${fileName}`;

/**
 * `[fileName, width, height]`. The screenshots are served from CloudFront rather
 * than bundled, so their intrinsic size cannot be read at build time — carrying
 * it here is what lets the gallery reserve the right box before the first image
 * arrives instead of reflowing the page under it.
 */
type ProjectImageSource = [fileName: string, width: number, height: number];

const projectImages = (sources: ProjectImageSource[]): ProjectEntry['images'] =>
	sources.map(([fileName, width, height]) => ({
		src: projectScreenshot(fileName),
		width,
		height,
	}));

const projectEntries: ProjectEntry[] = [
	{
		slug: 'torii-srs-web-v2',
		years: '2025–2026',
		title: 'Torii SRS (Web v2)',
		tags: ['webApp'],
		text: {
			en: {
				shortDescription:
					'The current web version of Torii SRS, rebuilt from the ground up. Works fully offline, syncs when you reconnect, and shows what your review workload looks like weeks ahead.',
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
			},
			de: {
				shortDescription:
					'Die aktuelle Version von Torii SRS: eine komplett neu entwickelte Web-App zum Japanischlernen, mit Offline-Modus, Cloud-Sync und Lernprognosen.',
				description:
					'Torii SRS (Web v2) ist die aktuelle Version meines Vokabeltrainers, komplett neu entwickelt und technisch auf den neuesten Stand gebracht. Die App lässt sich installieren, funktioniert offline und synchronisiert deinen Lernfortschritt automatisch zwischen deinen Geräten. Mit dabei sind fertige JLPT-Wortlisten, ein integriertes Wörterbuch, verschiedene Übungsmodi, Aussprache-Audio und ausführliche Lernstatistiken. Eine Lernprognose zeigt dir außerdem, wie viele Wiederholungen in den nächsten Tagen und Wochen auf dich zukommen.',
				overview: [
					'Nach einigen Jahren war es Zeit, Torii SRS technisch und optisch grundlegend zu überarbeiten. Die bisherige Webversion hatte sich bewährt, aber ihre Codebasis machte neue Funktionen und größere Änderungen zunehmend aufwendig. Statt immer weiter darauf aufzubauen, habe ich mich deshalb für eine vollständige Neuentwicklung entschieden.',
					'Aus Vue 2 wurde Vue 3, aus Vue CLI wurde Nuxt und Vuex wurde durch Pinia ersetzt. Auch die Options API habe ich durch die Composition API abgelöst und die Oberfläche mit Vuetify 4 komplett neu gestaltet. Dabei konnte ich viele alte Probleme beheben und die Struktur der Anwendung deutlich vereinfachen.',
					'Am eigentlichen Konzept hat sich dagegen wenig geändert: Torii SRS soll das tägliche Lernen so unkompliziert wie möglich machen. Die App startet schnell, funktioniert auch ohne Internet und bietet Wörterbuch, Statistiken und Lernprognosen genau dort, wo man sie braucht. Trotz der vielen Funktionen bleibt das Wichtigste weiterhin im Mittelpunkt: Vokabeln lernen.',
				],
				features: [
					'Komplett neu entwickelt mit Vue 3, Nuxt, Pinia und Vuetify 4',
					'Vollständig offline nutzbar, mit lokaler Speicherung in IndexedDB und automatischer Synchronisierung',
					'Integriertes Wörterbuch zum schnellen Nachschlagen und Hinzufügen neuer Vokabeln',
					'Verschiedene Übungsmodi, vom Wiedererkennen bis zum aktiven Abrufen',
					'Aussprache-Audio für jedes Wort, erzeugt mit Amazon Polly, Azure und IBM Watson',
					'Lernprognosen für die nächsten Tage und Wochen sowie ausführliche Fortschrittsstatistiken',
					'Cloud-Konten für einen nahtlosen Wechsel zwischen mehreren Geräten',
				],
				learned:
					'Eine bestehende Anwendung komplett neu zu entwickeln, ist eine gute Gelegenheit, alte Entscheidungen zu hinterfragen. Manche Dinge würde ich heute ganz anders lösen, andere haben sich über die Jahre bewährt. Besonders interessant fand ich, wie viel einfacher sich viele Funktionen mit einer saubereren Architektur umsetzen lassen. Gleichzeitig hat mich das Projekt daran erinnert, dass ein moderner Tech-Stack allein noch keine bessere App macht. Entscheidend ist, dass sich das Ergebnis für die Nutzer tatsächlich besser anfühlt.',
			},
		},
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
		images: projectImages([
			['torii-v3-01.webp', 1440, 1024],
			['torii-v3-02.webp', 1440, 1024],
			['torii-v3-03.webp', 1440, 1024],
			['torii-v3-04.webp', 1440, 1024],
			['torii-v3-08.webp', 1440, 1024],
			['torii-v3-05.webp', 1440, 1024],
			['torii-v3-06.webp', 1440, 1024],
			['torii-v3-07.webp', 1440, 1024],
		]),
		buttons: [
			{
				href: 'https://app.torii-srs.com',
				type: 'website',
			},
		],
	},
	{
		slug: 'torii-srs-java',
		years: '2018–2020',
		title: 'Torii SRS (Java)',
		tags: ['desktopApp', 'androidApp'],
		text: {
			en: {
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
			},
			de: {
				shortDescription:
					'Japanische Vokabeln lernen mit Spaced Repetition, fertigen JLPT-Wortlisten und verschiedenen Übungsmodi. Für Windows, macOS, Linux und Android.',
				description:
					'Mit Torii SRS wollte ich das Lernen japanischer Vokabeln so einfach wie möglich machen. Statt erst mühsam Karteikarten anzulegen, kannst du direkt mit den enthaltenen JLPT-Wortlisten loslegen. Spaced Repetition sorgt dafür, dass du Wörter genau dann wiederholst, wenn es sinnvoll ist. Dazu gibt es Aussprache-Audio, verschiedene Übungsmodi, japanische Schriftarten, Lernstatistiken und eine automatische Cloud-Synchronisierung. Und das alles auf Windows, macOS, Linux und Android.',
				overview: [
					'Torii SRS begann als Java-App für Windows, macOS, Linux und Android. Es war die erste vollständige Version meines Vokabeltrainers und die Grundlage für alle späteren Versionen.',
					'Die Idee dahinter war einfach: Wer Japanisch lernen möchte, sollte nicht erst Stunden damit verbringen müssen, Vokabellisten zusammenzusuchen oder Karteikarten einzurichten. Deshalb bringt Torii SRS fertige, geprüfte JLPT-Wortlisten mit. Du kannst sofort anfangen und bei Bedarf jederzeit eigene Wörter hinzufügen.',
				],
				features: [
					'Läuft auf Windows, macOS, Linux und Android, entwickelt mit Java und libGDX',
					'Spaced Repetition für Wiederholungen zum richtigen Zeitpunkt',
					'Fertige JLPT-Wortlisten, die sich jederzeit um eigene Vokabeln erweitern lassen',
					'Aussprache-Audio, verschiedene japanische Schriftarten und ausführliche Lernstatistiken',
					'Automatische Cloud-Synchronisierung für einen nahtlosen Wechsel zwischen Geräten',
				],
				learned:
					'Bei Torii SRS habe ich gelernt, wie wichtig die kleinen Dinge sind, die man im Alltag oft gar nicht bewusst wahrnimmt. Eine zuverlässige Synchronisierung, verständliches Feedback beim Lernen und eine Oberfläche, die einem nicht im Weg steht, machen mindestens genauso viel aus wie ein guter Lernalgorithmus. Schließlich sind es genau diese Details, mit denen man jeden Tag zu tun hat.',
			},
		},
		tech: ['Java', 'libGDX', 'MySQL', 'PHP', 'Amazon Web Services', 'WordPress'],
		image: projectScreenshot('torii-v1-1.jpg'),
		images: projectImages([
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
				type: 'website',
			},
		],
	},
	{
		slug: 'turnip-tycoon',
		years: '2026',
		title: 'Turnip Tycoon',
		tags: ['webApp'],
		text: {
			en: {
				shortDescription:
					'A turnip price forecaster for Animal Crossing: New Horizons that you share with friends, so everyone knows whose island to sell on.',
				description:
					'In Animal Crossing, turnip prices change twice a day and differ from island to island, so the best price of the week is usually on someone else\'s. Turnip Tycoon forecasts where your prices are heading, and groups put your friends\' prices and forecasts right next to yours. There is no sign-up: you open it, type in your prices, and share a group code with whoever you play with.',
				overview: [
					'Turnip calculators already exist, but they only know about your own island. The whole point of the turnip market is that a friend\'s island might be paying twice as much this afternoon. So the app is built around groups: create one, send the code to your friends, and everyone\'s week shows up on one board.',
					'Forecasts run in the browser on the prediction engine behind Turnip Prophet. Prices are stored locally and synced through Cloudflare Workers backed by PostgreSQL, so the app keeps working offline and catches up once you reconnect.',
				],
				features: [
					'Groups that show everyone\'s prices and forecasts side by side, joined with a single shareable code',
					'Price forecasts with possible ranges and the probability of each selling pattern',
					'No account or login: a profile is created silently the first time you enter a price',
					'Device pairing and optional recovery codes, so your island follows you to another phone',
					'Installable app that keeps working offline and syncs your edits when you reconnect',
				],
				learned:
					'Identity without accounts. Creating a profile silently, pairing devices and recovering access without an email address took more care than the forecasts did.',
			},
			de: {
				shortDescription:
					'Rübenpreise in Animal Crossing: New Horizons vorhersagen und mit Freunden vergleichen, damit niemand den besten Verkaufspreis verpasst.',
				description:
					'In Animal Crossing ändern sich die Rübenpreise zweimal täglich und fallen auf jeder Insel anders aus. Wer seine Rüben möglichst teuer verkaufen will, sollte deshalb auch die Preise seiner Freunde im Blick behalten. Turnip Tycoon hilft dir dabei: Die App berechnet, wie sich deine Rübenpreise im Laufe der Woche entwickeln könnten, und zeigt dir die Preise und Prognosen deiner Freunde direkt zum Vergleich. Ganz ohne Registrierung: App öffnen, Preise eintragen und den Gruppencode mit deinen Freunden teilen.',
				overview: [
					'Rübenrechner gibt es bereits einige, aber die meisten konzentrieren sich auf die eigene Insel. Dabei wird der Rübenhandel erst richtig interessant, wenn man die Preise seiner Freunde mit einbezieht. Vielleicht bekommt man auf einer anderen Insel gerade doppelt so viele Sternis für seine Rüben. Deshalb stehen bei Turnip Tycoon die Gruppen im Mittelpunkt: Einfach eine Gruppe erstellen, den Code teilen und schon können alle ihre Preise und Prognosen miteinander vergleichen.',
					'Die Preisprognosen werden direkt im Browser mit der Vorhersage-Engine von Turnip Prophet berechnet. Eingegebene Preise werden lokal gespeichert und über Cloudflare Workers mit einer PostgreSQL-Datenbank synchronisiert. So lässt sich die App auch ohne Internetverbindung nutzen. Sobald du wieder online bist, werden ausstehende Änderungen automatisch abgeglichen.',
				],
				features: [
					'Gemeinsame Gruppen, in denen du die Rübenpreise und Prognosen deiner Freunde auf einen Blick vergleichen kannst',
					'Preisprognosen mit möglichen Preisspannen und Wahrscheinlichkeiten für die verschiedenen Preisverläufe',
					'Keine Registrierung nötig: Dein Profil wird automatisch angelegt, sobald du deinen ersten Preis einträgst',
					'Geräte verknüpfen und den Zugang bei Bedarf mit einem Wiederherstellungscode auf einem neuen Gerät einrichten',
					'Installierbare Web-App, die auch offline funktioniert und deine Änderungen später automatisch synchronisiert',
				],
				learned:
					'Eine App ohne klassische Benutzerkonten zu entwickeln war schwieriger als gedacht. Profile automatisch anzulegen, mehrere Geräte miteinander zu verknüpfen und den Zugang auch ohne E-Mail-Adresse wiederherstellen zu können, hat am Ende mehr Überlegung und Arbeit gebraucht als die eigentlichen Preisprognosen.',
			},
		},
		tech: [
			'TypeScript',
			'React',
			'PostgreSQL',
			'Vitest',
			'Supabase',
			'Cloudflare',
		],
		image: projectScreenshot('turnip-tycoon-1.webp'),
		images: projectImages([
			['turnip-tycoon-1.webp', 1536, 1024],
			['turnip-tycoon-2.webp', 1536, 1024],
			['turnip-tycoon-3.webp', 1536, 1024],
			['turnip-tycoon-4.webp', 1536, 1024],
		]),
		buttons: [
			{
				href: 'https://turniptycoon.app',
				type: 'website',
			},
			{
				href: 'https://github.com/Rakantor/turnip-tycoon',
				type: 'github',
			},
		],
	},
	{
		slug: 'sabaku',
		years: '2026',
		title: 'Sabaku',
		tags: ['game', 'webApp', 'androidApp'],
		text: {
			en: {
				shortDescription:
					'A cozy logic puzzle about placing bombs: one in every row, column and color patch, and none of them touching. Plays in the browser and on Android.',
				description:
					'Sabaku is a logic puzzle about placing bombs: exactly one in every row, every column and every color patch, and no two may touch, not even at the corners. Fennix, a fennec fox who digs his dens with explosives, walks you through the first one and explains any hint in plain words when you get stuck. Every den has exactly one solution you can reach without guessing, there is a new daily den every day, and once the last bomb is in place, the whole board goes up in one chain reaction.',
				overview: [
					'Sabaku may be a mobile game first, but underneath it is still a web app: Angular on top of a pure TypeScript engine that owns the rules, the solver and the puzzle generator. Capacitor wraps the same build into an Android app and adds what a phone game needs on top: haptics, a streak reminder, and ads with a purchase to remove them.',
					'All levels are generated ahead of time and shipped with the game, so every player gets the same boards. Hints come from the same solver: instead of revealing a tile, it finds the next step a person could take, and Fennix explains why it has to be that way.',
				],
				features: [
					'5,000 levels with exactly one solution each, plus a new daily den every day',
					'Three themes, each with its own board, effects, sounds and version of Fennix, with every sound synthesized live',
					'Hints from the solver itself, explained in plain words instead of just revealing a tile',
					'Streaks, a daily ladder, and portraits and frames to earn for your profile',
					'Installable web app that works offline, and an Android app built from the same code',
				],
				learned:
					'This is the first mobile game I have made, so the store side was almost entirely new: ads that ask for consent first and stay out of the way, a one-time purchase that removes them, and a pipeline that sends every build to Google Play\'s release tracks. Building the game was the fun part. Finding out how much it takes to ship one through a store was the useful one.',
			},
			de: {
				shortDescription:
					'Ein entspanntes Logikrätsel... mit Bomben: Eine pro Zeile, Spalte und Farbbereich, ohne dass sich zwei berühren. Im Browser und auf Android spielbar.',
				description:
					'In Sabaku musst du Bomben platzieren: genau eine pro Zeile, Spalte und Farbbereich. Dabei dürfen sich keine zwei Bomben berühren, auch nicht diagonal. Fennix, ein Fennek, der seine Baue am liebsten mit Sprengstoff gräbt, zeigt dir im ersten Level, wie es geht. Wenn du mal feststeckst, hilft er dir mit Tipps und erklärt, wie du auf den nächsten Schritt kommst. Jedes Rätsel hat genau eine Lösung, die du allein durch logisches Denken finden kannst. Dazu gibt es jeden Tag ein neues Tagesrätsel. Und wenn die letzte Bombe sitzt, fliegt das gesamte Spielfeld in einer einzigen Kettenreaktion in die Luft.',
				overview: [
					'Sabaku ist vor allem fürs Handy gedacht, basiert technisch aber auf einer Web-App. Die Oberfläche läuft mit Angular, während eine eigenständige TypeScript-Engine die Spielregeln, das Lösen und das Generieren der Rätsel übernimmt. Mit Capacitor wird daraus auch eine Android-App, inklusive Vibrationsfeedback, Erinnerungen an laufende Serien und Werbung, die sich durch einen einmaligen Kauf entfernen lässt. Die Browser-Version ist komplett werbefrei.',
					'Die 5.000 Level werden vorab generiert und direkt mit dem Spiel ausgeliefert. So bekommen alle dieselben Rätsel. Auch das Tippsystem greift auf den Solver zurück: Er verrät nicht einfach ein Feld, sondern findet den nächsten logisch nachvollziehbaren Schritt. Fennix erklärt dann, wie man selbst darauf kommen kann.',
				],
				features: [
					'5.000 Rätsel mit jeweils genau einer Lösung und jeden Tag ein neues Tagesrätsel',
					'Drei Themes mit eigenen Spielfeldern, Effekten und Sounds, die in Echtzeit erzeugt werden',
					'Ein Tippsystem, das dir den nächsten logischen Schritt erklärt, statt einfach die Lösung zu verraten',
					'Siegesserien, eine tägliche Rangliste und freischaltbare Profilbilder und Rahmen',
					'Offline spielbare Web-App und Android-Version auf derselben Codebasis',
				],
				learned:
					'Sabaku ist mein erstes Spiel fürs Handy. Vor allem die Veröffentlichung im Play Store war Neuland für mich: Werbung mit Einwilligungsabfrage, die beim Spielen nicht stört, ein einmaliger Kauf zum Entfernen der Werbung und eine Pipeline, die neue Builds automatisch in den Release-Channel von Google Play hochlädt. Das eigentliche Spiel zu entwickeln hat am meisten Spaß gemacht. Wie viel Arbeit allerdings noch zwischen einem fertigen Spiel und der Veröffentlichung im Store steckt, war für mich die größte Lernerfahrung.',
			},
		},
		tech: [
			'TypeScript',
			'C#',
			'Angular',
			'.NET',
			'PostgreSQL',
			'Android',
			'Capacitor',
			'PixiJS',
			'Google AdMob',
			'Vitest',
		],
		image: projectScreenshot('sabaku-1.webp'),
		images: projectImages([
			['sabaku-1.webp', 1536, 1024],
			['sabaku-2.webp', 1536, 1024],
			['sabaku-3.webp', 1536, 1024],
			['sabaku-4.webp', 1536, 1024],
		]),
		buttons: [
			{
				href: 'https://sabaku.app',
				type: 'play',
			},
		],
	},
	{
		slug: 'torii-srs-web-v1',
		years: '2021–2022',
		title: 'Torii SRS (Web v1)',
		tags: ['webApp'],
		text: {
			en: {
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
			},
			de: {
				shortDescription:
					'Torii SRS als installierbare Web-App: offline Vokabeln lernen, Fortschritte synchronisieren und sehen, wie viel Lernstoff in den nächsten Wochen ansteht.',
				description:
					'Mit Torii SRS (Web v1) habe ich meinen Vokabeltrainer in den Browser gebracht. Die App lässt sich installieren und funktioniert auch ohne Internetverbindung. Deine Wiederholungen werden lokal gespeichert und automatisch synchronisiert, sobald du wieder online bist. Neu dazugekommen sind unter anderem ein integriertes Wörterbuch, verschiedene Übungsmodi, Aussprache-Audio und eine Vorschau auf das Lernpensum der nächsten Wochen. Ausführliche Statistiken helfen dir außerdem dabei, herauszufinden, welche Wörter dir noch Schwierigkeiten machen.',
				overview: [
					'Die erste Webversion sollte alles können, was bereits mit der Java-App möglich war, aber deutlich flexibler sein. Schließlich lernt man Vokabeln oft zwischendurch: ein paar Minuten in der Bahn, beim Warten oder einfach dann, wenn gerade Zeit ist. Deshalb sollte sich Torii SRS wie eine normale App installieren lassen, schnell starten und auch ohne Internet zuverlässig funktionieren.',
					'Mit der Webversion kamen auch viele neue Funktionen dazu. Die Herausforderung war, das Ganze trotzdem übersichtlich und schnell zu halten. Wörterbuch, Lernprognosen und Statistiken sollten leicht erreichbar sein, ohne vom eigentlichen Lernen abzulenken. Der wichtigste Ablauf blieb deshalb bewusst einfach: App öffnen, Vokabeln wiederholen, fertig.',
				],
				features: [
					'Vollständig offline nutzbar, mit lokaler Speicherung in IndexedDB und automatischer Synchronisierung',
					'Integriertes Wörterbuch, mit dem du neue Vokabeln direkt beim Lernen hinzufügen kannst',
					'Verschiedene Übungsmodi, vom Wiedererkennen bis zum aktiven Abrufen',
					'Aussprache-Audio für jedes Wort, erzeugt mit Amazon Polly, Azure und IBM Watson',
					'Lernprognose, die zeigt, wie viele Wiederholungen in den nächsten Tagen und Wochen anstehen',
					'Vokabelsuche und ausführliche Statistiken, um schwierige Wörter gezielt zu erkennen',
					'Cloud-Konten für die Synchronisierung des Lernfortschritts zwischen mehreren Geräten',
				],
				learned:
					'Eine App offline nutzbar zu machen, ist eine Sache. Dafür zu sorgen, dass nachher auf allen Geräten wieder derselbe Lernstand angezeigt wird, eine ganz andere. Besonders die Synchronisierung und der Umgang mit widersprüchlichen Daten haben mich einiges gelehrt. Gleichzeitig musste ich darauf achten, dass die vielen neuen Funktionen das Lernen nicht unnötig kompliziert machen. Denn am Ende möchte man einfach nur seine Vokabeln wiederholen und nicht erst durch die halbe App navigieren.',
			},
		},
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
		images: projectImages([
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
				type: 'website',
			},
		],
	},
	{
		slug: 'menacing-blue',
		years: '2013–2017',
		title: 'Menacing Blue',
		tags: ['game', 'desktopApp'],
		text: {
			en: {
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
			},
			de: {
				shortDescription:
					'Ein selbst entwickeltes 2D-Rollenspiel im Stil klassischer Pokémon-Spiele, mit rundenbasierten Kämpfen und Online-Multiplayer.',
				description:
					'Menacing Blue ist aus meiner Begeisterung für die klassischen Pokémon-Spiele entstanden, mit denen ich aufgewachsen bin. Ich wollte wissen, ob ich selbst ein vergleichbares 2D-Rollenspiel entwickeln kann, und habe einfach angefangen. Entstanden ist ein Spiel mit eigenen Karten, animierten NPCs, interaktiven Umgebungen, rundenbasierten Kämpfen und Online-Multiplayer. Auch Sounds und verschiedene Schwierigkeitsgrade sind dabei. Das Ganze läuft auf Java und libGDX, ohne eine fertige Spiel-Engine.',
				overview: [
					'Am Anfang stand die Frage, ob ich es schaffen würde, ein vollständiges Spiel zu entwickeln, statt bei einer kleinen Demo stehenzubleiben. Daraus wurde eines meiner vielseitigsten Projekte. Von der Spielfigur und ihren Bewegungen über Kollisionen, Animationen und Dialoge bis hin zum Kampfsystem, Sound und Netzwerkcode musste ich mich mit fast jedem Bereich der Spieleentwicklung beschäftigen.',
					'Die Spielwelt besteht aus Karten, die ich mit Tiled erstelle und zur Laufzeit lade. Dadurch lassen sich neue Gebiete hinzufügen, ohne dafür jedes Mal den Code anpassen zu müssen. Auch das Kampfsystem ist so aufgebaut, dass Kämpfe gegen NPCs und andere Spieler über dieselbe Logik laufen. Eine spielbare Demo findest du weiter unten.',
				],
				features: [
					'Komplett mit Java und libGDX entwickelt, ohne fertige Spiel-Engine',
					'Eigene Spielwelt mit Karten aus Tiled und interaktiven Umgebungen',
					'Animierte NPCs, Dialoge und Gegenstände, mit denen man interagieren kann',
					'Rundenbasiertes Kampfsystem mit mehreren Schwierigkeitsgraden',
					'Online-Multiplayer für Kämpfe gegen andere Spieler',
					'Eigenes Sounddesign und Animationen',
				],
				learned:
					'Bei kaum einem anderen Projekt habe ich so viele unterschiedliche Bereiche der Softwareentwicklung kennengelernt. In einem Spiel muss schließlich alles zusammenspielen: Eingaben, Animationen, Kollisionen, Sound und Spiellogik. Wenn eine Kleinigkeit nicht richtig funktioniert, merkt man das oft sofort. Besonders das Kampfsystem war eine interessante Herausforderung, weil Kämpfe gegen NPCs und andere Spieler möglichst dieselbe Logik verwenden sollten. Dabei habe ich viel darüber gelernt, wie wichtig eine klare Trennung der einzelnen Komponenten ist.',
			},
		},
		tech: ['Java', 'libGDX', 'Tiled'],
		image: projectScreenshot('pmb-0.webp'),
		images: projectImages([
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
		slug: 'google-drive-pdf-downloader',
		years: '2026',
		title: 'GDrive PDF Downloader',
		tags: ['userscript'],
		text: {
			en: {
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
			},
			de: {
				shortDescription:
					'Ein Browser-Tool, das aus der Google-Drive-Vorschau eine PDF-Datei erstellt - nicht nur Screenshots, sondern mit durchsuchbarem Text und klickbaren Links.',
				description:
					'Manche PDFs lassen sich in Google Drive zwar anschauen, aber weder herunterladen noch ausdrucken. Gerade bei Kursunterlagen, die man auch offline lesen möchte, kann das ziemlich nervig sein. Deshalb habe ich ein Tool entwickelt, das aus der angezeigten Vorschau wieder eine PDF-Datei erstellt. Es erfasst die einzelnen Seiten und setzt sie zu einem Dokument zusammen, auf Wunsch auch mit durchsuchbarem Text und funktionierenden Links. Alles passiert direkt im Browser, ohne dass Daten irgendwo hochgeladen werden.',
				overview: [
					'Google Drive zeigt solche Dokumente nicht als vollständige PDF-Datei an, sondern rendert die Seiten einzeln als Bilder. Dabei werden immer nur die Seiten geladen, die gerade benötigt werden. Mein Tool scrollt deshalb automatisch durch das Dokument, wartet auf die fertig gerenderten Seiten und fügt sie anschließend lokal zu einer neuen PDF-Datei zusammen.',
					'Es gibt zwei Möglichkeiten, das Tool zu verwenden: als Skript, das man direkt in die Browser-Konsole einfügt, oder als Userscript, das sich in Google Drive, Google Classroom und ähnlichen Ansichten automatisch aktiviert. Für die Erfassung stehen ein schneller und ein hochauflösender Modus zur Verfügung. Eine Fortschrittsanzeige zeigt, wie weit die Verarbeitung ist, und bei Bedarf lässt sich der Vorgang jederzeit abbrechen.',
				],
				features: [
					'Unterstützt PDF-Vorschauen in Google Drive, Google Classroom und ähnlichen Google-Diensten',
					'Schneller und hochauflösender Modus mit einstellbarer Zoomstufe',
					'Optionale Textebene für durchsuchbare, markierbare Inhalte und klickbare Links',
					'Als Konsolenskript oder automatisch startendes Userscript für Chrome und Firefox nutzbar',
					'Fortschrittsanzeige und Möglichkeit, die Verarbeitung jederzeit abzubrechen',
					'Vollständig lokale Verarbeitung im Browser, ohne Uploads an externe Server',
				],
				learned:
					'Die größte Herausforderung war, mit einer Website zu arbeiten, über deren interne Abläufe ich keine Kontrolle hatte. Seiten werden erst bei Bedarf geladen, Bilder brauchen unterschiedlich lange zum Rendern und nicht jedes Dokument verhält sich gleich. Ich musste deshalb viel ausprobieren, um die Seiten zuverlässig und in guter Qualität zu erfassen, ohne unnötig Zeit oder Speicher zu verbrauchen. Vor allem habe ich gelernt, dass ein Tool nicht schon deshalb zuverlässig funktioniert, weil es bei den ersten drei Testdateien geklappt hat.',
			},
		},
		tech: ['TypeScript', 'Vitest'],
		image: projectScreenshot('gdrive-pdf-2.webp'),
		images: projectImages([
			['gdrive-pdf-1.webp', 1536, 1024],
			['gdrive-pdf-2.webp', 1560, 1008],
		]),
		buttons: [
			{
				href: 'https://github.com/Rakantor/google-drive-pdf-downloader',
				type: 'github',
			},
		],
	},
	{
		slug: 'word-better-pdf-export',
		years: '2026',
		title: 'Word: Better PDF Export',
		tags: ['officeAddIn'],
		text: {
			en: {
				shortDescription:
					'A Word add-in that exports to PDF the normal way, then puts the original, uncompressed pictures back into the file.',
				description:
					'Word recompresses every picture when it exports a PDF, and no setting fully turns that off. Better PDF Export lets Word do the export, then goes through the resulting PDF and swaps each picture for the original that is still stored inside the .docx. Layout, text and vector graphics stay exactly as Word drew them; only the picture data changes. It runs as a task pane inside Word, nothing leaves your machine, and afterwards it tells you which pictures were restored, which were skipped, and why.',
				overview: [
					'It started with a familiar frustration: a document full of sharp photos comes out of Word\'s PDF export looking soft, while the originals are still sitting untouched in the document package. So instead of fighting Word\'s exporter, the add-in uses it and repairs the result afterwards.',
					'Under the hood it collects the embedded images from the .docx along with their crop and effect settings, walks the images in the PDF, and matches the two sides visually. Uncropped JPEGs keep their exact original bytes, PNGs go in losslessly, and cropped pictures are cut from the original at full resolution. Anything Word applied an effect to at render time is left alone rather than guessed at.',
					'The pipeline has no Office dependency, so the same code also runs as a command-line tool and in an automated test suite against real Word exports. The add-in is a thin Office.js task pane on top, served from GitHub Pages together with its landing page.',
				],
				features: [
					'Uses Word\'s own PDF exporter, then restores the original pictures at full resolution',
					'Cropped pictures are restored from the original; pictures with render-time effects are skipped rather than guessed',
					'Visual matching between PDF and document, with a per-picture report of what was replaced, skipped or left unmatched',
					'Runs entirely inside Word\'s task pane, so documents are never uploaded anywhere',
					'Office-independent core that also runs as a CLI and in an automated test suite',
				],
				learned:
					'This was my first Office add-in, so a lot of the learning was simply how that world works: the manifest, sideloading, the task pane, and getting Word to hand over its own PDF export. The matching was the more interesting part, and it also taught me when to stop: a picture Word has visibly altered is better left alone than replaced with a sharper, wrong one.',
			},
			de: {
				shortDescription:
					'Ein Word-Add-in, das beim PDF-Export die Originalqualität eingebetteter Bilder erhält, ohne das Layout des Dokuments zu verändern.',
				description:
					'Wer schon einmal ein Word-Dokument mit hochauflösenden Bildern als PDF exportiert hat, kennt das Problem: Die Bilder sehen hinterher oft deutlich schlechter aus als im Original. Better PDF Export behebt genau das. Das Add-in lässt Word zunächst ganz normal ein PDF erstellen und ersetzt anschließend die komprimierten Bilder durch die Originale aus dem Word-Dokument. Texte, Layout und Vektorgrafiken bleiben dabei unverändert. Alles läuft direkt in Word, ohne dass Dokumente hochgeladen werden müssen.',
				overview: [
					'Die Idee entstand aus einem einfachen Ärgernis: Word komprimiert Bilder beim PDF-Export erneut, selbst wenn die Originaldateien in voller Qualität im Dokument liegen. Statt einen eigenen PDF-Exporter zu entwickeln, wollte ich deshalb Words bestehende Exportfunktion nutzen und nur dort eingreifen, wo tatsächlich Qualität verloren geht.',
					'Dafür liest das Tool die eingebetteten Bilder samt Zuschnitten und Effekten aus der DOCX-Datei aus und vergleicht sie mit den Bildern im exportierten PDF. Anhand ihres Aussehens werden die passenden Originale zugeordnet. JPEGs ohne Zuschnitt lassen sich direkt mit ihren ursprünglichen Bilddaten einsetzen, PNGs werden verlustfrei eingebettet und zugeschnittene Bilder aus den hochauflösenden Originalen neu erstellt. Wenn Word ein Bild durch Effekte sichtbar verändert hat, bleibt es sicherheitshalber unangetastet.',
					'Die eigentliche Verarbeitung ist unabhängig von Word umgesetzt. Dadurch kann ich denselben Code auch als Kommandozeilentool verwenden und mit automatisierten Tests gegen echte Word-Exporte prüfen. Das Add-in selbst stellt lediglich die Oberfläche über Office.js bereit. Veröffentlicht wird es zusammen mit der Projektwebsite über GitHub Pages.',
				],
				features: [
					'Verbessert die Bildqualität von PDFs, ohne Words Layout oder Textdarstellung zu verändern',
					'Stellt zugeschnittene Bilder aus den hochauflösenden Originaldateien wieder her',
					'Ordnet PDF-Bilder automatisch den passenden Bildern im Word-Dokument zu',
					'Verarbeitet Dokumente vollständig lokal, ohne sie auf einen Server hochzuladen',
					'Unabhängiger Verarbeitungskern, der auch als CLI und in automatisierten Tests genutzt wird',
				],
				learned:
					'Better PDF Export war mein erstes Office-Add-in, und schon die Integration in Word war eine eigene Herausforderung. Ich musste mich erst mit Office.js, Add-in-Manifests, Sideloading und den Möglichkeiten des PDF-Exports vertraut machen. Am interessantesten war aber die automatische Zuordnung der Bilder. Dabei habe ich gelernt, dass ein zuverlässiges Tool auch erkennen muss, wann es besser nichts verändert. Ein Bild in höherer Auflösung bringt schließlich wenig, wenn es dafür nicht mehr so aussieht wie im Originaldokument.',
			},
		},
		tech: ['TypeScript', 'Webpack', 'GitHub Pages'],
		image: projectScreenshot('word-pdf-1.webp'),
		images: projectImages([
			['word-pdf-1.webp', 2423, 1440],
			['word-pdf-2.webp', 2423, 1440],
			['word-pdf-3.webp', 878, 1440],
			['word-pdf-4.webp', 1800, 751],
		]),
		buttons: [
			{
				href: 'https://rakantor.github.io/word-better-pdf-export/',
				type: 'website',
			},
			{
				href: 'https://github.com/Rakantor/word-better-pdf-export',
				type: 'github',
			},
		],
	},
	{
		slug: 'leave-me-be',
		years: '2026',
		title: 'Leave Me Be',
		tags: ['gameAddon'],
		text: {
			en: {
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
			},
			de: {
				shortDescription:
					'Ein World-of-Warcraft-Addon, das unerwünschte Whispers automatisch blockiert, Spam herausfiltert und bei Bedarf selbstständig aktiv wird.',
				description:
					'Wer in World of Warcraft schon einmal eine Gruppe über die Gruppensuche organisiert hat, kennt das Problem: Ständig kommen Flüsternachrichten von fremden Spielern, Goldverkäufern oder Spam-Accounts. Leave Me Be schafft Abhilfe. Das Addon filtert unerwünschte Nachrichten direkt aus dem Chat und kann automatisch eine freundliche Antwort verschicken. Freunde, Gildenmitglieder und andere vertrauenswürdige Spieler bleiben davon ausgenommen. Besonders praktisch: Wenn du eine Gruppe leitest, schaltet sich der Schutz auf Wunsch automatisch ein und danach wieder aus. Gefilterte Nachrichten werden protokolliert, damit du später nachsehen kannst, ob etwas Wichtiges dabei war.',
				overview: [
					'Die Idee entstand beim Spielen von World of Warcraft. Sobald man eine Gruppe in der Gruppensuche einträgt, können sich die Flüsternachrichten schnell häufen. Manche sind berechtigt, andere einfach nur störend. Ich wollte eine Möglichkeit schaffen, den Chat ruhig zu halten, ohne wichtige Nachrichten von Freunden oder Mitspielern zu verpassen.',
					'Leave Me Be erkennt deshalb, wenn du eine eingetragene Gruppe leitest, und aktiviert den Filter automatisch. Sobald du die Gruppe nicht mehr leitest, wird er wieder deaktiviert. Über Ausnahmeregeln kannst du festlegen, welche Spieler dich weiterhin erreichen dürfen. Dazu gehören Freunde, Gilden- und Gruppenmitglieder sowie Charaktere ab einer bestimmten Stufe. Gerade Spam-Nachrichten kommen häufig von neu erstellten Charakteren mit niedriger Stufe.',
					'Technisch ist das Addon bewusst schlank gehalten. Es besteht aus nur vier Lua-Dateien und nutzt die vorhandenen Einstellungen von World of Warcraft, statt ein eigenes Interface mitzubringen. Einstellungen und gefilterte Nachrichten werden über SavedVariables gespeichert. Neue Versionen werden automatisch über GitHub Actions erstellt und auf CurseForge veröffentlicht.',
				],
				features: [
					'Blockiert unerwünschte Flüsternachrichten, bevor sie im Chat erscheinen',
					'Aktiviert und deaktiviert den Schutz automatisch, wenn du eine Gruppe in der Gruppensuche leitest',
					'Frei anpassbare automatische Antworten mit Schutz vor wiederholten Nachrichten an denselben Spieler',
					'Ausnahmen für Freunde, Gildenmitglieder, Gruppenmitglieder, laufende Gespräche und Charaktere ab einer bestimmten Stufe',
					'Eigene Erlaubnis- und Blocklisten sowie ein Protokoll gefilterter Nachrichten',
					'Einstellungen direkt im WoW-Optionsmenü oder über Chatbefehle',
				],
				learned:
					'Die größte Herausforderung war, zuverlässig herauszufinden, von wem eine Nachricht kommt. World of Warcraft liefert bei Flüsternachrichten nur wenige Informationen über den Absender. Um beispielsweise die Charakterstufe zu ermitteln, muss das Addon den Spieler kurz zur Freundesliste hinzufügen, die Daten auslesen und anschließend alles wieder aufräumen, ohne den Chat mit Systemmeldungen zu füllen. Mit Midnight kamen zusätzliche Einschränkungen bei der Verarbeitung von Chatdaten dazu. Dabei war mir besonders wichtig, im Zweifelsfall eine Nachricht lieber durchzulassen, als versehentlich jemanden zu blockieren.',
			},
		},
		tech: ['Lua', 'World of Warcraft API', 'GitHub Actions'],
		image: projectScreenshot('lmb-1.webp'),
		images: projectImages([['lmb-1.webp', 1536, 1024]]),
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
		slug: 'torii-srs-landing-page',
		years: '2026',
		title: 'Torii SRS Landing Page',
		tags: ['website'],
		text: {
			en: {
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
			},
			de: {
				shortDescription:
					'Die offizielle Website von Torii SRS, mit Informationen zur App, Funktionen, Preisen und einer Wissensdatenbank.',
				description:
					'Torii SRS kann mittlerweile ziemlich viel. Das alles auf einer Website verständlich zu erklären, ist allerdings gar nicht so einfach. Deshalb habe ich eine eigene Produktwebsite entwickelt, die nicht einfach nur Funktionen aufzählt, sondern zuerst zeigt, wie Torii SRS beim Japanischlernen hilft. Danach folgen die wichtigsten Features, Erfahrungsberichte, Preise und eine Wissensdatenbank mit Antworten auf häufige Fragen. Die Seite ist mit Astro umgesetzt und wird vollständig als statisches HTML ausgeliefert, damit sie schnell lädt und ohne unnötiges JavaScript auskommt.',
				overview: [
					'Mit der Zeit hatte Torii SRS immer mehr Funktionen bekommen, aber noch keine richtige Website, auf der sich Interessierte einen Überblick verschaffen konnten. Das wollte ich ändern. Die Seite sollte auch Menschen ansprechen, die Torii SRS noch nicht kennen, und ihnen möglichst schnell zeigen, was die App bietet und warum sie nützlich sein könnte.',
					'Für die Umsetzung habe ich Astro mit React-Komponenten, Tailwind CSS und shadcn/ui kombiniert. Die Seiten werden bereits beim Build als HTML erzeugt, was die Ladezeiten kurz hält. Dank der wiederverwendbaren Komponenten lassen sich neue Abschnitte und Artikel für die Wissensdatenbank hinzufügen, ohne jedes Mal größere Änderungen am Layout vornehmen zu müssen.',
				],
				features: [
					'Responsive Produktwebsite mit Astro und wiederverwendbaren React-Komponenten',
					'Übersichtlicher Aufbau, der neue Besucher Schritt für Schritt durch das Angebot führt',
					'Bereiche für Funktionen, Erfahrungsberichte, Preise und eine Wissensdatenbank',
					'Einheitliches Design mit Tailwind CSS und shadcn/ui',
					'Statisch generierte Seiten mit kurzen Ladezeiten und suchmaschinenfreundlicher Struktur',
				],
				learned:
					'Eine Produktwebsite zu entwickeln, ist etwas ganz anderes als die eigentliche App. Während Nutzer in der App bereits wissen, was sie machen möchten, muss eine Website erst einmal erklären, warum sich jemand für das Produkt interessieren sollte. Ich habe dabei gelernt, wie wichtig es ist, den Nutzen verständlich zu vermitteln, statt Besucher direkt mit einer langen Liste von Funktionen zu überfordern. Und ganz nebenbei hat mir das Projekt gezeigt, wie angenehm sich mit Astro schnelle Websites entwickeln lassen, die kaum JavaScript benötigen.',
			},
		},
		tech: ['TypeScript', 'Astro', 'React', 'Tailwind CSS', 'shadcn/ui'],
		image: projectScreenshot('torii-srs-site-1.jpg'),
		images: projectImages([['torii-srs-site-1.jpg', 1440, 1100]]),
		buttons: [
			{
				href: 'https://beta.torii-srs.com',
				type: 'website',
			},
			{
				href: 'https://github.com/Rakantor/torii-srs-site',
				type: 'github',
			},
		],
	},
	{
		slug: 'personal-website',
		years: '2024',
		title: 'Personal Website',
		tags: ['website'],
		text: {
			en: {
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
			},
			de: {
				shortDescription:
					'Die Website, auf der du gerade bist: mein zweisprachiges Portfolio, entwickelt mit Astro und Tailwind CSS, mit möglichst wenig JavaScript.',
				description:
					'Willkommen auf meinem Portfolio! Das hier ist mittlerweile die vierte Version meiner persönlichen Website. Diesmal habe ich sie mit Astro umgesetzt, weil ich für eine Seite, die hauptsächlich aus Texten und Bildern besteht, kein großes Frontend-Framework brauche. Die Inhalte werden beim Build zu statischem HTML, die Website gibt es auf Deutsch und Englisch und neue Projekte lassen sich ohne großen Aufwand hinzufügen. So bleibt endlich mehr Zeit für die Projekte selbst, statt ständig an der eigenen Website herumzubasteln.',
				overview: [
					'Nach drei vorherigen Versionen wollte ich mein Portfolio diesmal bewusst einfacher halten. Astro erzeugt die Seiten bereits beim Build als statisches HTML. Im Browser läuft deshalb nur dort JavaScript, wo es tatsächlich gebraucht wird, etwa für die Navigation und die Bildergalerien der einzelnen Projekte.',
					'Auch die Pflege der Inhalte wollte ich vereinfachen. Projekte, Skills und Übersetzungen liegen deshalb in typisierten Datendateien, getrennt vom eigentlichen Layout. Aus diesen Daten werden die deutsche und die englische Version automatisch generiert. Neue Projekte oder weitere Sprachen lassen sich so ergänzen, ohne dafür die Seitenstruktur umbauen zu müssen.',
				],
				features: [
					'Statisch generierte Website mit Astro, ganz ohne Frontend-Framework im Browser',
					'Vollständige deutsche und englische Version mit eigener URL-Struktur pro Sprache',
					'Projekte und Skills in typisierten Datendateien für eine einfache Pflege',
					'Responsives Design mit Tailwind CSS und daisyUI',
					'Automatischer Build und Deployment auf GitHub Pages bei jedem Push',
				],
				learned:
					'Wenn man seine eigene Website zum vierten Mal neu baut, merkt man irgendwann, dass nicht immer das neueste Framework die Lösung ist. Diesmal war die größte Verbesserung, Inhalte und Darstellung sauber voneinander zu trennen. Statt Projektdaten und Übersetzungen über verschiedene Komponenten zu verteilen, liegt jetzt alles übersichtlich an einem Ort. Das macht die Website deutlich einfacher zu pflegen und ist inzwischen auch bei anderen Projekten meine bevorzugte Herangehensweise.',
			},
		},
		tech: ['TypeScript', 'Astro', 'Tailwind CSS', 'daisyUI', 'GitHub Pages'],
		image: projectScreenshot('personal-website-1.webp'),
		images: projectImages([['personal-website-1.webp', 1920, 1118]]),
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
		slug: 'iu-quiz-app',
		years: '2022',
		title: 'IU Quiz App',
		tags: ['webApp'],
		text: {
			en: {
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
			},
			de: {
				shortDescription:
					'Eine Quiz-App für Studierende, mit der die Prüfungsvorbereitung allein oder gemeinsam mit anderen etwas mehr Spaß macht.',
				description:
					'Die IU Quiz App ist während meines Studiums an der IU Internationalen Hochschule entstanden. Im Fernstudium lernt man oft allein, und gerade die Vorbereitung auf Prüfungen kann ziemlich eintönig werden. Deshalb wollte ich eine Möglichkeit schaffen, den Lernstoff etwas abwechslungsreicher zu gestalten. Die App bietet Quizfragen zu verschiedenen Studienfächern, die du allein oder im Wettbewerb mit anderen Studierenden beantworten kannst. So wird aus dem wiederholten Durcharbeiten von Prüfungsstoff eine kleine Herausforderung, die im besten Fall sogar Spaß macht.',
				overview: [
					'Ein Fernstudium bietet viel Flexibilität, aber der Austausch mit anderen Studierenden kommt dabei manchmal zu kurz. Gerade beim Lernen für Prüfungen fehlt oft die Möglichkeit, sich gegenseitig abzufragen oder gemeinsam den Stoff durchzugehen. Die IU Quiz App sollte genau hier ansetzen und die Prüfungsvorbereitung etwas interaktiver machen.',
					'Technisch habe ich das Projekt als Single-Page-App mit Nuxt und Vuetify umgesetzt. Für Benutzerkonten, Datenbank und Hosting kommt Firebase zum Einsatz. Dadurch konnte ich mich auf die eigentliche Anwendung konzentrieren, statt zusätzlich ein eigenes Backend entwickeln und betreiben zu müssen. Einen ausführlichen Bericht über die Planung und Umsetzung findest du weiter unten.',
				],
				features: [
					'Quizfragen allein beantworten oder gegen andere Studierende antreten',
					'Fragensammlungen für verschiedene Studienfächer zur gezielten Prüfungsvorbereitung',
					'Firebase für Benutzerkonten, Datenspeicherung und Hosting',
					'Responsive Single-Page-App mit Nuxt und Vuetify',
					'Ausführlicher Projektbericht mit Konzept, Architektur und Umsetzung',
				],
				learned:
					'Bei diesem Projekt ging es nicht nur darum, eine funktionierende App zu entwickeln, sondern auch darum, Lernen etwas motivierender zu gestalten. Ich habe mich damit beschäftigt, wie direktes Feedback, kurze Quizrunden und ein bisschen Wettbewerb dabei helfen können, sich auch mit weniger spannendem Lernstoff zu beschäftigen. Technisch war Firebase eine gute Erfahrung, weil ich damit viele typische Backend-Aufgaben abgeben und mich stärker auf die eigentliche Anwendung konzentrieren konnte. Gerade bei einem Studienprojekt mit fester Deadline war das viel wert.',
			},
		},
		tech: ['JavaScript', 'Vue.js', 'Nuxt', 'Vuetify', 'Firebase'],
		image: projectScreenshot('iu-quiz-app-2.jpg'),
		images: projectImages([['iu-quiz-app-2.jpg', 1000, 1000]]),
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
		slug: 'iu-gamer-app',
		hidden: true,
		years: '2021',
		title: 'IU Gamer App',
		tags: ['androidApp'],
		text: {
			en: {
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
			},
			de: {
				shortDescription:
					'Eine Android-App für Brettspielrunden: Termin finden, abstimmen, was gespielt wird, hinterher bewerten und den Chat an einem Ort haben.',
				description:
					'Noch ein Projekt aus meinem Studium an der IU Internationale Hochschule, für etwas, das jede Brettspielrunde kennt: Die Organisation dauert länger als das Spiel. Die App bündelt Terminplanung, Spielvorschläge, Abstimmungen, Erinnerungen, Bewertungen und Gruppenchat an einem Ort, damit sich die Planung nicht über drei Messenger-Chats verteilt.',
				overview: [
					'Brettspielabende scheitern ziemlich vorhersehbar: Niemand legt sich fest, was gespielt wird, die Hälfte vergisst den Termin, und die ganze Diskussion steckt in einem Gruppenchat, in dem zwei Tage später nichts mehr zu finden ist.',
					'Die App ist nativ in Java für Android geschrieben, dahinter Firebase für Authentifizierung, Daten und Chat. Am wichtigsten waren am Ende die Benachrichtigungen: Eine Termin-App, die nicht zuverlässig erinnert, ist schlechter als gar keine. Ein Projektbericht ist unten verlinkt.',
				],
				features: [
					'Native Android-App in Java',
					'Spielvorschläge und Abstimmungen, damit die Gruppe vor dem Abend entscheidet',
					'Zuverlässige Terminbenachrichtigungen und Erinnerungen',
					'Bewertungen vergangener Abende, damit man weiß, was gut angekommen ist',
					'Integrierter Gruppenchat und Datenspeicherung über Firebase',
				],
				learned:
					'Mobile Apps stehen und fallen mit Dingen, die man im UI nie sieht: Benachrichtigungen, die tatsächlich ankommen, Zustand, der es überlebt, wenn das System die App abschießt, und Ansichten, die sich einhändig bedienen lassen, während man in der anderen Hand eine Spieleschachtel hält. Die Feature-Liste war der einfache Teil.',
			},
		},
		tech: ['Java', 'Android', 'Firebase'],
		image: projectScreenshot('iu-gamer-app-1.jpg'),
		images: projectImages([
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

/** Every project the site shows, in display order: the featured ones first, then "More Projects". */
export const projects = projectEntries.filter((project) => !project.hidden);

export const getLocalizedProject = ({ text, ...entry }: ProjectEntry, locale: Locale): Project => ({
	...entry,
	...text[locale],
	images: entry.images.map((image, index) => ({
		...image,
		alt: `${entry.title} ${ui[locale].projectDetail.screenshot} ${index + 1}`,
	})),
});

export const getLocalizedProjects = (locale: Locale = 'en') => projects.map((project) => getLocalizedProject(project, locale));

/**
 * The projects shown large, with a screenshot, at the top of the home page.
 * Everything else falls through to the compact "More Projects" index.
 */
export const featuredSlugs = [
	'torii-srs-web-v2',
	'torii-srs-java',
	'sabaku',
	'turnip-tycoon',
] as const;

export const getFeaturedProjects = (locale: Locale = 'en') =>
	featuredSlugs
		.map((slug) => projects.find((project) => project.slug === slug))
		.filter((project): project is ProjectEntry => project !== undefined)
		.map((project) => getLocalizedProject(project, locale));

export const getMoreProjects = (locale: Locale = 'en') =>
	projects
		.filter((project) => !featuredSlugs.includes(project.slug as (typeof featuredSlugs)[number]))
		.map((project) => getLocalizedProject(project, locale));

/** A column of the quick-link grid in the "More Projects" index. */
export type QuickLinkSlot = 'website' | 'github' | 'pdf';

/**
 * The column each button type sits in. A project's live link goes under "Site"
 * whether it is a website, a game or a demo, so those never add columns.
 */
const quickLinkSlotOf: Record<ProjectButtonType, QuickLinkSlot> = {
	website: 'website',
	play: 'website',
	demo: 'website',
	github: 'github',
	pdf: 'pdf',
};

/**
 * Column order for the quick-link grid in the "More Projects" index.
 * Columns that none of the listed projects has a link for are dropped, so a
 * column is never entirely empty.
 */
export const quickLinkSlotOrder: QuickLinkSlot[] = ['website', 'github', 'pdf'];

/** The project's link for a quick-link column, if it has one. */
export const getQuickLink = (project: Project, slot: QuickLinkSlot) =>
	project.buttons.find((button) => quickLinkSlotOf[button.type] === slot);

export const getQuickLinkSlots = (visible: Project[]) =>
	quickLinkSlotOrder.filter((slot) => visible.some((project) => getQuickLink(project, slot)));
