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
			skills: 'Skills',
			projects: 'Projects',
			open: 'Open navigation',
			language: 'Language',
		},
		hero: {
			title: "Hey, I'm Manuel.",
			description:
				'Software developer from Vienna. I build web and desktop apps, and I care most about the small details that decide whether people keep using them.',
			projects: 'View Projects',
			contact: 'Contact',
			avatarAlt: 'Portrait illustration of Manuel',
		},
		projects: {
			title: 'Featured Projects',
			readMore: 'View project',
			viewDetails: 'View details for',
			imageAlt: 'screenshot',
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
				buildTools: 'Build Tools',
				cloudHosting: 'Cloud & Hosting',
				devops: 'DevOps',
			},
		},
		projectDetail: {
			back: 'Back to projects',
			links: 'Project Links',
			tech: 'Built With',
			overview: 'Overview',
			features: 'Key Features',
			learned: 'What I Learned',
			previousImage: 'Previous image',
			nextImage: 'Next image',
			goToImage: 'Go to image',
		},
		footer: {
			rights: 'All rights reserved.',
			legal: 'Legal Notice',
		},
	},
	de: {
		meta: {
			homeTitle: 'Manuel Veigel | Softwareentwickler',
			homeDescription:
				'Portfolio von Manuel Veigel, Softwareentwickler aus Wien. Web- und Desktop-Apps, von Lernplattformen über Browser-Tools bis hin zu Spielen.',
		},
		nav: {
			home: 'Start',
			skills: 'Skills',
			projects: 'Projekte',
			open: 'Navigation öffnen',
			language: 'Sprache',
		},
		hero: {
			title: 'Hey, ich bin Manuel.',
			description:
				'Softwareentwickler aus Wien. Ich baue Web- und Desktop-Apps und kümmere mich am liebsten um die kleinen Details, die entscheiden, ob Leute dranbleiben.',
			projects: 'Projekte ansehen',
			contact: 'Kontakt',
			avatarAlt: 'Portrait-Illustration von Manuel',
		},
		projects: {
			title: 'Ausgewählte Projekte',
			readMore: 'Projekt ansehen',
			viewDetails: 'Details ansehen zu',
			imageAlt: 'Screenshot',
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
				buildTools: 'Build-Tools',
				cloudHosting: 'Cloud & Hosting',
				devops: 'DevOps',
			},
		},
		projectDetail: {
			back: 'Zurück zu den Projekten',
			links: 'Projektlinks',
			tech: 'Gebaut mit',
			overview: 'Überblick',
			features: 'Die wichtigsten Funktionen',
			learned: 'Was ich gelernt habe',
			previousImage: 'Vorheriges Bild',
			nextImage: 'Nächstes Bild',
			goToImage: 'Zu Bild',
		},
		footer: {
			rights: 'Alle Rechte vorbehalten.',
			legal: 'Impressum',
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
