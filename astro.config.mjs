// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://mave.dev',
	// Old Torii slugs that are still indexed. The static build turns these into
	// meta-refresh pages.
	redirects: {
		'/projects/torii-srs-v1': '/projects/torii-srs-java',
		'/projects/torii-srs-v2': '/projects/torii-srs-web-v1',
		'/de/projects/torii-srs-v1': '/de/projects/torii-srs-java',
		'/de/projects/torii-srs-v2': '/de/projects/torii-srs-web-v1',
	},
	integrations: [
		sitemap({
			// Path prefix to hreflang code. Plain 'de', same as the alternate links
			// in Layout.astro.
			i18n: {
				defaultLocale: 'en',
				locales: { en: 'en', de: 'de' },
			},
		}),
	],
	image: {
		// Lets the build resize the project screenshots, which are served from CloudFront.
		domains: ['d29l6egdxvgg9c.cloudfront.net'],
	},
	i18n: {
		locales: ['en', 'de'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
