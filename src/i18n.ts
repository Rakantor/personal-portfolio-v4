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
		},
		nav: {
			home: 'Home',
			stack: 'Stack',
			projects: 'Projects',
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
		},
		techStack: {
			title: 'Tech Stack',
			capabilities: {
				title: 'What I Do',
				fullStack: 'Full-stack Development',
				objectOriented: 'Object-oriented Programming',
				restApis: 'REST APIs',
				databaseDesign: 'Database Design',
				crossPlatform: 'Cross-platform Apps',
				deploymentHosting: 'Deployment and Hosting',
			},
			groups: {
				languages: 'Languages',
				frontend: 'Frontend',
				backend: 'Backend',
				databases: 'Databases',
				cloudHosting: 'Cloud & Hosting',
				buildDevops: 'Build & DevOps',
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
		},
		footer: {
			legal: 'Legal Notice',
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
		},
		nav: {
			home: 'Start',
			stack: 'Stack',
			projects: 'Projekte',
			open: 'Navigation öffnen',
			language: 'Sprache',
			main: 'Hauptnavigation',
			skip: 'Zum Inhalt springen',
		},
		hero: {
			titleTop: 'Hey, ich bin',
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
		},
		techStack: {
			title: 'Tech Stack',
			capabilities: {
				title: 'Was ich mache',
				fullStack: 'Full-Stack-Entwicklung',
				objectOriented: 'Objektorientierte Programmierung',
				restApis: 'REST-APIs',
				databaseDesign: 'Datenbankdesign',
				crossPlatform: 'Plattformübergreifende Apps',
				deploymentHosting: 'Deployment und Hosting',
			},
			groups: {
				languages: 'Programmiersprachen',
				frontend: 'Frontend',
				backend: 'Backend',
				databases: 'Datenbanken',
				cloudHosting: 'Cloud & Hosting',
				buildDevops: 'Build & DevOps',
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
		},
		footer: {
			legal: 'Impressum',
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
