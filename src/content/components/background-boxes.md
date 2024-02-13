---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import BackgroundBoxes from '$lib/aceternity-components/BackgroundBoxes/BackgroundBoxesDemo.svelte'

    let props = [
        {name: 'className', type: 'string | undefined', description: 'The class name of the Boxes component.'}]
</script>

<DocsPreview>
<div slot='preview'>
<BackgroundBoxes />
</div>

<div slot='code'>

```svelte
<script>
	import { cn } from '@/utils';
	import { BackgroundBoxes } from '.';
</script>

<div
	class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900 p-60"
>
	<div
		class="pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]"
	/>

	<BackgroundBoxes />
	<h1 class={cn('relative z-20 text-xl text-white md:text-4xl')}>Tailwind is Awesome</h1>
	<p class="relative z-20 mt-2 text-center text-neutral-300">
		Framer motion is the best animation library ngl
	</p>
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Add the following code in `tailwind.config.ts` file

<CodeBlock path='tailwind.config.ts'>

```ts
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config = {
	// ... other properties
	plugins: [
		// ...other plugins
		addVariablesForColors
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

<CodeBlock path='src/lib/components/ui/BackgroundBoxes/BackgroundBoxes.svelte'>

```svelte
<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cn } from '$lib/utils';

	export let className: string | undefined = undefined;

	const rows = new Array(150).fill(1);
	const cols = new Array(100).fill(1);
	let colors = [
		'--sky-300',
		'--pink-300',
		'--green-300',
		'--yellow-300',
		'--red-300',
		'--purple-300',
		'--blue-300',
		'--indigo-300',
		'--violet-300'
	];
	const getRandomColor = () => {
		return colors[Math.floor(Math.random() * colors.length)];
	};
</script>

<div
	style="transform: translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)"
	class={cn(
		'absolute -top-1/4 left-1/4 z-0 flex  h-full w-full -translate-x-1/2 -translate-y-1/2 p-4 ',
		className
	)}
	{...$$props}
>
	{#each rows as _, i (`row ${i}`)}
		<Motion let:motion>
			<div use:motion class="relative h-8 w-16 border-l border-slate-700">
				{#each cols as _, j (`col ${j}`)}
					<Motion
						let:motion
						whileHover={{
							backgroundColor: `var(${getRandomColor()})`,
							transition: { duration: 0 }
						}}
						animate={{
							transition: { duration: 2 }
						}}
					>
						<div use:motion class="relative h-8 w-16 border-r border-t border-slate-700">
							{#if j % 2 === 0 && i % 2 === 0}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 stroke-[1px] text-slate-700"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
								</svg>
							{/if}
						</div>
					</Motion>
				{/each}
			</div>
		</Motion>
	{/each}
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/BackgroundBoxes/index.ts'>

```ts
import BackgroundBoxes from './BackgroundBoxes.svelte';

export { BackgroundBoxes };
```

</CodeBlock>

## Props

<PropsTable path='BackgroundBoxes' props={props} />
