export const locales = ['en', 'de'] as const;
export const defaultLocale = 'en';

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
	en: 'English',
	de: 'Deutsch',
};

export const htmlLang: Record<Locale, string> = {
	en: 'en',
	de: 'de-AT',
};

export const ui = {
	en: {
		meta: {
			homeTitle: 'Manuel Veigel | Software Developer',
			homeDescription:
				'Portfolio of Manuel Veigel, a software developer from Vienna building web and desktop apps, from Japanese learning platforms to browser tools and games.',
			ogImageAlt: 'Manuel Veigel, software developer from Vienna, beside a portrait illustration on a blueprint grid',
		},
		nav: {
			home: 'Home',
			stack: 'Stack',
			projects: 'Projects',
			contact: 'Contact',
			open: 'Open navigation',
			language: 'Language',
			main: 'Main navigation',
			skip: 'Skip to content',
		},
		hero: {
			// Split across two lines deliberately rather than left to wrap.
			titleTop: "Hey, I'm",
			titleBottom: 'Manuel.',
			description:
				'Software developer from Vienna. I build web and desktop apps, and I care most about the small details that decide whether people keep using them.',
			projects: 'View Projects',
			contact: 'Contact',
			avatarAlt: 'Portrait illustration of Manuel',
		},
		projects: {
			title: 'Featured Projects',
			more: 'More Projects',
			readMore: 'View project',
			slots: {
				website: 'Site',
				demo: 'Demo',
				github: 'Code',
				pdf: 'PDF',
			},
			buttons: {
				website: 'Website',
				demo: 'Play Demo',
				github: 'Source Code',
				pdf: 'Project Report',
			},
		},
		techStack: {
			title: 'Tech Stack',
			yearOne: '1 year',
			yearsMany: '{n} years',
			yearLess: '< 1 year',
			projectOne: '1 project',
			projectsMany: '{n} projects',
			levels: {
				5: 'Expert',
				4: 'Advanced',
				3: 'Proficient',
				2: 'Familiar',
				1: 'Basics',
			},
			capabilities: {
				title: 'What I Do',
				lead: 'What I bring to a team and the projects that show it.',
				seenIn: 'Seen in',
				fullStack: {
					title: 'Full-stack Development',
					text: 'I build frontends and backends and bring them together into complete applications. My current go-to technologies are Vue and Nuxt, alongside Node.js, Spring Boot, or PHP.',
				},
				objectOriented: {
					title: 'Object-oriented Programming',
					text: "I've been developing with Java since 2010. I break down complex functionality into classes with clear responsibilities, making the code easier to understand and extend.",
				},
				restApis: {
					title: 'REST APIs',
					text: 'I build APIs for exchanging data between apps and servers. This also includes syncing locally stored changes when an offline app reconnects.',
				},
				databaseDesign: {
					title: 'Database Design',
					text: 'I design data models for relational (SQL) and NoSQL databases. I also store structured data locally in the browser so applications can work offline.',
				},
				crossPlatform: {
					title: 'Cross-platform Apps',
					text: 'I build applications for desktop, web, and Android, adapting the interface and interactions to each platform.',
				},
				deploymentHosting: {
					title: 'Deployment & CI/CD',
					text: 'I deploy and run my projects on platforms including AWS, Cloudflare, and GitHub Pages. I build CI/CD pipelines with GitHub Actions to automate builds, tests, and deployments.',
				},
			},
			groups: {
				languages: 'Languages',
				frontend: 'Frontend',
				backend: 'Backend',
				databases: 'Databases',
				cloudHosting: 'Cloud & Hosting',
				buildDevops: 'Build & DevOps',
				design: 'Design',
			},
		},
		projectDetail: {
			next: 'Next project',
			links: 'Project Links',
			tech: 'Built With',
			years: 'Primary development',
			overview: 'Overview',
			features: 'Key Features',
			learned: 'What I Learned',
			previousImage: 'Previous image',
			nextImage: 'Next image',
			goToImage: 'Go to image',
			fullscreen: 'View fullscreen',
			close: 'Close',
			// Image alt text is "<project title> <screenshot> <n>".
			screenshot: 'screenshot',
		},
		footer: {
			legal: 'Legal Notice',
			title: 'Contact',
			// Two sentences, set on a line each.
			lead: ['Got a role or a project in mind?', "I'd like to hear about it."],
			copy: 'Copy email address',
			copied: 'Copied to clipboard',
			email: 'Write an email',
		},
		notFound: {
			title: 'Page not found | Manuel Veigel',
			eyebrow: 'Error 404',
			heading: 'This page does not exist.',
			description: 'The link may be out of date, or the page has moved since it was last shared.',
			home: 'Back to the home page',
		},
	},
	de: {
		meta: {
			homeTitle: 'Manuel Veigel | Softwareentwickler',
			homeDescription:
				'Portfolio von Manuel Veigel, Softwareentwickler aus Wien. Web- und Desktop-Apps, von Sprachlernplattformen über Browser-Tools bis hin zu Spielen.',
			ogImageAlt: 'Manuel Veigel, Softwareentwickler aus Wien, neben einer Portrait-Illustration auf einem Blueprint-Raster',
		},
		nav: {
			home: 'Start',
			stack: 'Stack',
			projects: 'Projekte',
			contact: 'Kontakt',
			open: 'Navigation öffnen',
			language: 'Sprache',
			main: 'Hauptnavigation',
			skip: 'Zum Inhalt springen',
		},
		hero: {
			// Non-breaking space: where the line has to wrap, it breaks after
			// "Hey," rather than stranding "bin" on a line of its own.
			titleTop: 'Hey, ich bin',
			titleBottom: 'Manuel.',
			description:
				'Softwareentwickler aus Wien. Ich entwickle Web- und Desktop-Apps – am wichtigsten sind mir dabei die kleinen Details, die darüber entscheiden, ob man eine App gerne benutzt.',
			projects: 'Projekte ansehen',
			contact: 'Kontakt',
			avatarAlt: 'Portrait-Illustration von Manuel',
		},
		projects: {
			title: 'Ausgewählte Projekte',
			more: 'Weitere Projekte',
			readMore: 'Projekt ansehen',
			slots: {
				website: 'Seite',
				demo: 'Demo',
				github: 'Code',
				pdf: 'PDF',
			},
			buttons: {
				website: 'Website',
				demo: 'Demo spielen',
				github: 'Source Code',
				pdf: 'Projektbericht',
			},
		},
		techStack: {
			title: 'Tech Stack',
			yearOne: '1 Jahr',
			yearsMany: '{n} Jahre',
			yearLess: '< 1 Jahr',
			projectOne: '1 Projekt',
			projectsMany: '{n} Projekte',
			levels: {
				5: 'Experte',
				4: 'Fortgeschritten',
				3: 'Sicher',
				2: 'Vertraut',
				1: 'Grundlagen',
			},
			capabilities: {
				title: 'Was ich mache',
				lead: 'Was ich in ein Team einbringe und welche Projekte das zeigen.',
				seenIn: 'Beispiele',
				fullStack: {
					title: 'Full-Stack-Entwicklung',
					text: 'Ich entwickle Frontend und Backend und verbinde beides zu einer vollständigen Anwendung. Dafür nutze ich derzeit bevorzugt Vue und Nuxt sowie Node.js, Spring Boot oder PHP.',
				},
				objectOriented: {
					title: 'Objektorientierte Programmierung',
					text: 'Seit 2010 entwickle ich mit Java. Ich teile komplexe Funktionen in Klassen mit klaren Aufgaben auf, damit sich der Code leichter verstehen und erweitern lässt.',
				},
				restApis: {
					title: 'REST-APIs',
					text: 'Ich entwickle Schnittstellen für den Datenaustausch zwischen App und Server. Dazu gehört auch der Abgleich lokal gespeicherter Änderungen, sobald eine Offline-App wieder eine Verbindung hat.',
				},
				databaseDesign: {
					title: 'Datenbankdesign',
					text: 'Ich entwerfe Datenmodelle für relationale Datenbanken (SQL) und NoSQL-Datenbanken. Für die Nutzung ohne Internetverbindung speichere ich Daten auch strukturiert lokal im Browser.',
				},
				crossPlatform: {
					title: 'Plattformübergreifende Apps',
					text: 'Ich entwickle Anwendungen für Desktop, Web und Android. Oberfläche und Bedienung passe ich an die jeweilige Plattform an.',
				},
				deploymentHosting: {
					title: 'Deployment & CI/CD',
					text: 'Ich veröffentliche und betreibe meine Projekte unter anderem auf AWS, Cloudflare und GitHub Pages. Mit GitHub Actions automatisiere ich Builds, Tests und Deployments in CI/CD-Pipelines.',
				},
			},
			groups: {
				languages: 'Programmiersprachen',
				frontend: 'Frontend',
				backend: 'Backend',
				databases: 'Datenbanken',
				cloudHosting: 'Cloud & Hosting',
				buildDevops: 'Build & DevOps',
				design: 'Design',
			},
		},
		projectDetail: {
			next: 'Nächstes Projekt',
			links: 'Projektlinks',
			tech: 'Umgesetzt mit',
			years: 'Hauptentwicklungszeitraum',
			overview: 'Überblick',
			features: 'Die wichtigsten Funktionen',
			learned: 'Was ich gelernt habe',
			previousImage: 'Vorheriges Bild',
			nextImage: 'Nächstes Bild',
			goToImage: 'Zu Bild',
			fullscreen: 'Vollbildansicht öffnen',
			close: 'Schließen',
			screenshot: 'Screenshot',
		},
		footer: {
			legal: 'Impressum',
			title: 'Kontakt',
			lead: ['Eine offene Stelle oder ein Projekt in Planung?', 'Ich freue mich über eine Nachricht.'],
			copy: 'E-Mail-Adresse kopieren',
			copied: 'In die Zwischenablage kopiert',
			email: 'E-Mail schreiben',
		},
		notFound: {
			title: 'Seite nicht gefunden | Manuel Veigel',
			eyebrow: 'Fehler 404',
			heading: 'Diese Seite gibt es nicht.',
			description: 'Vielleicht ist der Link veraltet, oder die Seite ist seit dem Teilen umgezogen.',
			home: 'Zurück zur Startseite',
		},
	},
} as const;

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export const getLocaleFromPathname = (pathname: string): Locale => {
	const segment = pathname.split('/').filter(Boolean)[0];
	return segment && isLocale(segment) ? segment : defaultLocale;
};

export const stripLocaleFromPathname = (pathname: string) => {
	const segments = pathname.split('/').filter(Boolean);
	if (segments[0] && isLocale(segments[0])) {
		segments.shift();
	}

	return `/${segments.join('/')}`.replace(/\/$/, '') || '/';
};

export const localePath = (locale: Locale, path = '/') => {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	const pathWithoutTrailingSlash = normalizedPath.replace(/\/$/, '') || '/';

	if (locale === defaultLocale) {
		return pathWithoutTrailingSlash;
	}

	return pathWithoutTrailingSlash === '/' ? `/${locale}` : `/${locale}${pathWithoutTrailingSlash}`;
};

export const localizedPathFor = (pathname: string, locale: Locale) => localePath(locale, stripLocaleFromPathname(pathname));
