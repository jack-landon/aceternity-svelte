import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
	// layout: {
	// 	_: './src/Mdsvex.svelte'
	// }
	// remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }], headings],
	// rehypePlugins: [
	// 	rehypeSlug,
	// 	[
	// 		autolinkHeadings,
	// 		{
	// 			behavior: 'wrap'
	// 		}
	// 	]
	// ]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [mdsvex(mdsvexOptions), vitePreprocess({})],

	kit: {
		// Every page is prerendered (see src/routes/+layout.ts), so the site is plain static files in build/,
		// served by a static-assets-only Cloudflare Worker (see wrangler.jsonc).
		adapter: adapter({ fallback: '404.html' }),
		alias: {
			$components: 'src/lib/components',
			'$components/*': 'src/lib/components/*',
			$primitives: 'src/lib/primitives',
			'$primitives/*': 'src/lib/primitives/*',
			'@': 'src/lib',
			'@/*': 'src/lib/*'
		}
	}
};

export default config;
