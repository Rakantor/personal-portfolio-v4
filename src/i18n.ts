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
			homeDescription: 'Portfolio of Manuel Veigel, a software developer building clean and useful digital products.',
		},
		nav: {
			home: 'Home',
			projects: 'Projects',
			open: 'Open navigation',
			language: 'Language',
		},
		hero: {
			title: "Hey, I'm Manuel.",
			description:
				"I'm a Software Developer based in Vienna, Austria. I love building things that people enjoy using and that impact their lives in a positive way.",
			projects: 'View Projects',
			contact: 'Contact',
			avatarAlt: 'Portrait illustration of Manuel',
		},
		projects: {
			title: 'My Work',
			description: "A collection of projects I've worked on.",
			readMore: 'Read more',
			viewDetails: 'View details for',
			imageAlt: 'screenshot',
		},
		techStack: {
			title: 'Tech Stack',
		},
		projectDetail: {
			back: 'Back to projects',
			links: 'Project Links',
			tech: 'Tech Used',
			overview: 'Overview',
			features: 'Key Features',
			learned: 'What I Learned',
			previousImage: 'Previous image',
			nextImage: 'Next image',
			goToImage: 'Go to image',
		},
		footer: {
			rights: 'All rights reserved.',
			legal: 'Impressum',
		},
	},
	de: {
		meta: {
			homeTitle: 'Manuel Veigel | Softwareentwickler',
			homeDescription:
				'Portfolio von Manuel Veigel, einem Softwareentwickler aus Wien, der klare und hilfreiche digitale Produkte baut.',
		},
		nav: {
			home: 'Start',
			projects: 'Projekte',
			open: 'Navigation öffnen',
			language: 'Sprache',
		},
		hero: {
			title: 'Hey, ich bin Manuel.',
			description:
				'Ich bin Softwareentwickler aus Wien. Ich baue gern digitale Produkte, die angenehm zu benutzen sind und Menschen im Alltag wirklich weiterhelfen.',
			projects: 'Projekte ansehen',
			contact: 'Kontakt',
			avatarAlt: 'Portrait-Illustration von Manuel',
		},
		projects: {
			title: 'Meine Arbeit',
			description: 'Eine Auswahl an Projekten, an denen ich gearbeitet habe.',
			readMore: 'Mehr lesen',
			viewDetails: 'Details ansehen zu',
			imageAlt: 'Screenshot',
		},
		techStack: {
			title: 'Tech Stack',
		},
		projectDetail: {
			back: 'Zurück zu den Projekten',
			links: 'Projektlinks',
			tech: 'Verwendete Technologien',
			overview: 'Überblick',
			features: 'Zentrale Funktionen',
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
