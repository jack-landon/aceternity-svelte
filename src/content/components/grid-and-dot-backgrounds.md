---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import GridAndDotBackgroundsDemo from '$lib/aceternity-components/GridAndDotBackgrounds/GridAndDotBackgroundsDemo.svelte'
</script>

<DocsPreview>
<div slot='preview'>
<GridAndDotBackgroundsDemo />
</div>

<div slot='code'>

```svelte
<script>
	import GridAndDotBackgrounds from './GridAndDotBackgrounds.svelte';
</script>

<GridAndDotBackgrounds>
	<p
		class="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"
	>
		Backgrounds
	</p>
</GridAndDotBackgrounds>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Add Tailwind CSS plugin for backgrounds

<CodeBlock path='tailwind.config.ts'>

```ts
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import aspectRatio from '@tailwindcss/aspect-ratio';
import svgToDataUri from 'mini-svg-data-uri';

const config = {
	// ... other properties
	plugins: [
		// ...other plugins
		aspectRatio,
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					'bg-grid': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`
					}),
					'bg-grid-small': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`
					}),
					'bg-dot': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`
					})
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			);
		}
	]
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}
```

</CodeBlock>

### Copy the source code

<CodeBlock path='src/lib/components/ui/GridAndDotBackground/GridAndDotBackgrounds.svelte'>

```svelte
<div
	class="relative flex h-[50rem] w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]"
>
	<!-- Radial gradient for the container to give a faded look -->
	<div
		class="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"
	></div>
	<slot />
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/GridAndDotBackground/GridAndDotBackgroundsSmallGrid.svelte'>

```svelte
<div
	class="relative flex h-[50rem] w-full items-center justify-center bg-white bg-grid-small-black/[0.2] dark:bg-black dark:bg-grid-small-white/[0.2]"
>
	<!-- Radial gradient for the container to give a faded look -->
	<div
		class="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"
	></div>
	<slot />
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/GridAndDotBackgrounds/index.ts'>

```ts
import GridAndDotBackgrounds from './GridAndDotBackgrounds.svelte';
import GridAndDotBackgroundsSmallGrid from './GridAndDotBackgroundsSmallGrid.svelte';

export { GridAndDotBackgrounds, GridAndDotBackgroundsSmallGrid };
```

</CodeBlock>
