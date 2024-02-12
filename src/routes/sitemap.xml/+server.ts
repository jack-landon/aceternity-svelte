import { aceternityComponents } from '$lib/config/components';
import dayjs from 'dayjs';
type Component = {
	id: string;
	name: string;
	description: string;
	thumbnail: any;
	video: string;
	file: string;
	disabled: boolean;
	dependencies: string[];
	props: { name: string; type: string; description: string }[];
	dateModified: string;
};

const pages: string[] = ['components']; //list of pages as a string ex. ["about", "blog", "contact"]

const site = 'https://aceternity.sveltekit.io';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const body = sitemap(aceternityComponents, pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (
	components: Component[],
	pages: string[]
) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  `
		)
		.join('')}
  ${components
		.map((component) =>
			component.disabled
				? null
				: `
  <url>
    <loc>${site}/components/${component.id}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${dayjs(component.dateModified).format('YYYY-MM-DD')}</lastmod>
    <priority>0.5</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;
