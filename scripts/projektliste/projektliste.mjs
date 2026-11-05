// Renders the one-page Projektliste for job applications from the German home
// page, so its sections, fonts and project data come from the site.
//
// To regenerate, with Chrome installed:
//
//   pnpm projektliste
//
// The PDF is written next to this script and isn't checked in.

import { fileURLToPath } from 'node:url';
import { dev } from 'astro';
import { chromium } from 'playwright-core';
import sharp from 'sharp';

const resolve = (path) => fileURLToPath(new URL(path, import.meta.url));

const SITE = 'https://mave.dev';
const OUTPUT = resolve('Manuel_Veigel_Projektliste.pdf');

const copy = {
	documentTitle: 'Digitale Projektliste, Manuel Veigel',
	headline: 'www.mave.dev',
	title: 'Digitale Projektliste',
	name: 'Manuel Veigel',
	skillsHeading: 'Kompetenzen',
	toriiAddition: 'Hunderte monatlich aktive Benutzer – seit 2018.',
	closing: 'Weitere Projekte auf der Website',
};

// The sheet is laid out 1280px wide at the A4 ratio. A4 is 794px wide at 96dpi.
const VIEWPORT = { width: 1280, height: 1810 };
const PDF_SCALE = 0.62;
const CONTENT_WIDTH = 1152;

// Screenshots print about 59mm wide, so 1000px is roughly 430ppi.
const IMAGE_WIDTH = 1000;
const JPEG_QUALITY = 82;

// Chromium stores WebP images losslessly in a PDF but embeds JPEGs as they are.
async function replaceWithJpeg(image) {
	const src = await image.evaluate((img) => img.src);
	const response = await fetch(src);
	if (!response.ok) throw new Error(`Could not fetch ${src}: ${response.status}`);

	const jpeg = await sharp(Buffer.from(await response.arrayBuffer()))
		.flatten({ background: '#f4f6f9' })
		.resize({ width: IMAGE_WIDTH, withoutEnlargement: true })
		.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, chromaSubsampling: '4:4:4' })
		.toBuffer();

	await image.evaluate(async (img, dataUrl) => {
		img.loading = 'eager';
		img.src = dataUrl;
		await img.decode();
	}, `data:image/jpeg;base64,${jpeg.toString('base64')}`);
}

async function composeSheet(page) {
	return page.evaluate(
		async ({ copy, site, contentWidth }) => {
			document.title = copy.documentTitle;

			const link = (text) => Object.assign(document.createElement('a'), { href: site, textContent: text });
			const span = (text) => Object.assign(document.createElement('span'), { textContent: text });

			const headline = link(copy.headline);
			headline.id = 'headline';
			const meta = document.createElement('div');
			meta.id = 'meta';
			meta.append(span(copy.title), span(copy.name));
			const masthead = document.createElement('section');
			masthead.id = 'masthead';
			masthead.append(headline, meta);

			const closing = document.createElement('section');
			closing.id = 'closing';
			closing.append(span(copy.closing), link(copy.headline));

			const main = document.querySelector('main');
			main.prepend(masthead);
			main.append(closing);

			document.querySelector('#what h2').lastChild.textContent = ` ${copy.skillsHeading}`;

			const torii = document.querySelector('#projects article:has(a[href$="/torii-srs-web-v2"]) .prose-serif');
			torii.textContent = `${torii.textContent.trim()} ${copy.toriiAddition}`;

			document.querySelectorAll('a[href^="/"]').forEach((anchor) => {
				anchor.href = site + anchor.getAttribute('href');
			});

			await document.fonts.ready;
			headline.style.fontSize = '100px';
			headline.style.fontSize = `${(100 * contentWidth) / headline.getBoundingClientRect().width}px`;

			// Room left between the longest project column and the closing line.
			const columnsEnd = Math.max(
				...[...document.querySelectorAll('#projects .tech-line')]
					.filter((line) => line.offsetParent)
					.map((line) => line.getBoundingClientRect().bottom),
			);
			return closing.getBoundingClientRect().top - columnsEnd;
		},
		{ copy, site: SITE, contentWidth: CONTENT_WIDTH },
	);
}

const server = await dev({
	root: resolve('../../'),
	logLevel: 'error',
	devToolbar: { enabled: false },
});

const browser = await chromium.launch({ channel: 'chrome' });

try {
	const context = await browser.newContext({ viewport: VIEWPORT, locale: 'de-DE' });
	const page = await context.newPage();
	await page.goto(`http://localhost:${server.address.port}/de/`, { waitUntil: 'networkidle' });
	await page.addStyleTag({ path: resolve('projektliste.css') });

	const images = await page.locator('#projects article:nth-of-type(-n + 3) .shot img').all();
	await Promise.all(images.map(replaceWithJpeg));

	const roomLeft = await composeSheet(page);
	if (roomLeft < 0) {
		throw new Error(`The projects overlap the closing line by ${Math.ceil(-roomLeft)}px`);
	}

	await page.emulateMedia({ media: 'screen' });
	await page.pdf({
		path: OUTPUT,
		width: '210mm',
		height: '297mm',
		scale: PDF_SCALE,
		printBackground: true,
		pageRanges: '1',
	});
	console.log(`Wrote ${OUTPUT}`);
} finally {
	await browser.close();
	await server.stop();
}
