---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import StickyScrollRevealDemo from '$lib/aceternity-components/StickyScrollReveal/StickyScrollRevealDemo.svelte'

    let props = [
        {name: 'content', type: '{ title: string, description: string }[]', description: 'The content blocks to be displayed'}]
</script>

<DocsPreview>
<div slot='preview'>
<StickyScrollRevealDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import StickyScrollReveal from './StickyScrollReveal.svelte';

	const content = [
		{
			title: 'Collaborative Editing',
			description:
				'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.'
		},
		{
			title: 'Real time changes',
			description:
				'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.'
		},
		{
			title: 'Version control',
			description:
				"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions."
		},
		{
			title: 'Running out of content',
			description:
				"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions."
		}
	];
</script>

<div class="p-10">
	<StickyScrollReveal {content} />
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock dependencies={['svelte-motion', 'clsx', 'tailwind-merge']} />

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

<CodeBlock path='src/lib/components/ui/StickyScrollReveal/StickyScrollReveal.svelte'>

```svelte
<script lang="ts">
	import { onMount } from 'svelte';

	let activeCard = 0;
	let backgroundColors = ['var(--slate-900)', 'var(--black)', 'var(--neutral-900)'];
	let linearGradients = [
		'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
		'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
		'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))'
	];
	let scrollYProgress = 0;

	export let content: { title: string; description: string }[] = [
		{ title: 'Title 1', description: 'Description 1' },
		{ title: 'Title 2', description: 'Description 2' }
		// Add more items as needed
	];

	let ref: HTMLDivElement;

	onMount(() => {
		const handleScroll = (event: Event) => {
			const target = event.target as HTMLElement;
			scrollYProgress = target.scrollTop / target.scrollHeight;
			const cardsBreakpoints = content.map((_, index) => index / content.length);

			cardsBreakpoints.forEach((breakpoint, index) => {
				if (scrollYProgress > breakpoint - 0.2 && scrollYProgress <= breakpoint) {
					activeCard = index;
				}
			});
		};

		ref.addEventListener('scroll', handleScroll);

		return () => {
			ref.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div
	bind:this={ref}
	style="background-color: {backgroundColors[activeCard % backgroundColors.length]}"
	class="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 transition ease-in-out"
>
	<div class="div relative flex items-start px-4">
		<div class="max-w-2xl">
			{#each content as item, index (item.title + index)}
				<div class="my-20">
					<h2
						style="opacity: {activeCard === index ? 1 : 0.3}"
						class="text-2xl font-bold text-slate-100"
					>
						{item.title}
					</h2>
					<p
						style="opacity: {activeCard === index ? 1 : 0.3}"
						class="text-kg mt-10 max-w-sm text-slate-300"
					>
						{item.description}
					</p>
				</div>
			{/each}
			<div class="h-40" />
		</div>
	</div>
	<div
		style="background: {linearGradients[activeCard % linearGradients.length]}"
		class="sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block"
	></div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/StickyScrollReveal/index.ts'>

```ts
import StickyScrollReveal from './StickyScrollReveal.svelte';

export { StickyScrollReveal };
```

</CodeBlock>

## Props

<PropsTable path='StickyScrollReveal' props={props} />
