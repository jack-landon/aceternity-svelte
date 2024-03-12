import adapter from '@sveltejs/adapter-auto';
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
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
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
