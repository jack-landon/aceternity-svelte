---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import TracingBeamDemo from '$lib/aceternity-components/TracingBeam/TracingBeamDemo.svelte'

    let props = [
        {name: 'className', type: 'string | undefined', description: 'The class name of the child component.'}]
</script>

<DocsPreview>
<div slot='preview'>
<TracingBeamDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import TracingBeam from './TracingBeam.svelte';

	const dummyContent = [
		{
			title: 'Lorem Ipsum Dolor Sit Amet',
			description: `
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
    `,
			badge: 'Svelte',
			image:
				'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'Lorem Ipsum Dolor Sit Amet',
			description: `
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      `,
			badge: 'Changelog',
			image:
				'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'Lorem Ipsum Dolor Sit Amet',
			description: `
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
    `,
			badge: 'Launch Week',
			image:
				'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		}
	];
</script>

<TracingBeam>
	<div class="relative mx-auto max-w-2xl pt-4 antialiased">
		{#each dummyContent as item, index (`content-${index}`)}
			<div class="mb-10">
				<h2 class="mb-4 w-fit rounded-full bg-black px-4 py-1 text-sm text-white">
					{item.badge}
				</h2>

				<p class={twMerge('mb-4 text-xl')}>
					{item.title}
				</p>

				<div class="prose prose-sm text-sm dark:prose-invert">
					{#if item?.image}
						<img
							src={item.image}
							alt="blog thumbnail"
							height="1000"
							width="1000"
							class="mb-10 rounded-lg object-cover"
						/>
					{/if}
					{@html item.description}
				</div>
			</div>
		{/each}
	</div>
</TracingBeam>
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

<CodeBlock path='src/lib/components/ui/TracingBeam/TracingBeam.svelte'>

```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let svgHeight = 0;
	let velo = 0;
	let y1 = tweened(50, { duration: 500, easing: cubicOut });
	let y2 = tweened(50, { duration: 500, easing: cubicOut });
	let scrollYProgress = 0;
	let scrollYProgressVelocity = 0;
	let ref: HTMLDivElement;
	let contentRef: HTMLDivElement;

	onMount(() => {
		if (typeof window !== 'undefined') {
			svgHeight = contentRef.offsetHeight;
			window.addEventListener('scroll', handleScroll);
		}
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', handleScroll);
			}
		};
	});

	$: {
		if (typeof window !== 'undefined') {
			scrollYProgress = window.scrollY / document.body.offsetHeight;
			scrollYProgressVelocity = scrollYProgress - scrollYProgressVelocity;
			velo = scrollYProgressVelocity;
			y1.set(scrollYProgress * (svgHeight - velo * 500));
			y2.set(scrollYProgress * (svgHeight - velo * 2000));
		}
	}

	let ticking = false;
	function handleScroll() {
		if (!ticking) {
			if (typeof window !== 'undefined') {
				window.requestAnimationFrame(() => {
					scrollYProgress = window.scrollY / document.body.offsetHeight;
					ticking = false;
				});
				ticking = true;
			}
		}
	}
</script>

<div bind:this={ref} class="relative mx-auto h-full w-full max-w-4xl">
	<div class="absolute -left-20 top-3">
		<div
			class="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
			style="box-shadow: {scrollYProgress > 0 ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}"
		>
			<div
				class="h-2 w-2 rounded-full border border-neutral-300 bg-white"
				style="background-color: {scrollYProgress > 0
					? 'white'
					: 'var(--emerald-500)'}; border-color: {scrollYProgress > 0
					? 'white'
					: 'var(--emerald-600)'}"
			/>
		</div>
		<svg
			viewBox={`0 0 20 ${svgHeight}`}
			width="20"
			height={svgHeight}
			class=" ml-4 hidden lg:block"
			aria-hidden="true"
		>
			<path
				d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
				fill="none"
				stroke="#9091A0"
				stroke-opacity="0.16"
			/>
			<path
				d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
				fill="none"
				stroke="url(#gradient)"
				stroke-width="4"
				class="motion-reduce:hidden"
			/>
			<defs>
				<linearGradient
					id="gradient"
					gradientUnits="userSpaceOnUse"
					x1="0"
					x2="0"
					y1={$y1}
					y2={$y2}
				>
					<stop stop-color="#18CCFC" stop-opacity="0"></stop>
					<stop stop-color="#18CCFC"></stop>
					<stop offset="0.325" stop-color="#6344F5"></stop>
					<stop offset="1" stop-color="#AE48FF" stop-opacity="0"></stop>
				</linearGradient>
			</defs>
		</svg>
	</div>
	<div bind:this={contentRef}>
		<slot />
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/TracingBeam/index.ts'>

```ts
import TracingBeam from './TracingBeam.svelte';

export { TracingBeam };
```

</CodeBlock>

## Props

<PropsTable path='TracingBeam' props={props} />
