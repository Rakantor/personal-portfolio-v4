// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://mave.dev',
	// The three Torii app entries were renamed from v1/v2/v3 to Java/Web v1/Web
	// v2. Their old detail pages are live and indexed, so each keeps a stub that
	// forwards to the new slug — a static build emits these as meta-refresh pages.
	redirects: {
		'/projects/torii-srs-v1': '/projects/torii-srs-java',
		'/projects/torii-srs-v2': '/projects/torii-srs-web-v1',
		'/de/projects/torii-srs-v1': '/de/projects/torii-srs-java',
		'/de/projects/torii-srs-v2': '/de/projects/torii-srs-web-v1',
	},
	integrations: [
		sitemap({
			// Locale keys are the path prefix, values the hreflang code emitted.
			// 'de' rather than 'de-AT' so the German pages target German speakers
			// everywhere, and so this matches the tags the pages themselves render.
			i18n: {
				defaultLocale: 'en',
				locales: { en: 'en', de: 'de' },
			},
		}),
	],
	image: {
		// Project screenshots live on CloudFront at full resolution. Allowing the
		// domain lets the build emit sized derivatives instead of shipping ~1MB of
		// originals to render a 96px thumbnail.
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
