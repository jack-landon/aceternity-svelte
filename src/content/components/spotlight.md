---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import Spotlight from '$lib/aceternity-components/Spotlight/SpotlightDemo.svelte'

    let props = [
        {name: 'className', type: 'string | undefined', description: 'The class name of the spotlight component.'},
        {name: 'fill', type: 'string | undefined', description: 'Hex color for the spotlight fill.'}]
</script>

<DocsPreview>
<div slot='preview'>
<Spotlight />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { Spotlight } from '.';
</script>

<div
	class="relative flex h-[40rem] overflow-hidden rounded-md bg-black/[0.96] px-16 antialiased bg-grid-white/[0.02] md:items-center md:justify-center lg:px-32"
>
	<Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
	<div class=" relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
		<h1
			class="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
		>
			Spotlight <br /> is the new trend.
		</h1>
		<p class="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
			Spotlight effect is a great way to draw attention to a specific part of the page. Here, we are
			drawing the attention towards the text section of the page. I don&apos;t know why but I&apos;m
			running out of copy.
		</p>
	</div>
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Copy the highlighted `spotlight` animation into `tailwind.config.ts` file

<CodeBlock path='tailwind.config.ts'>

```ts
const config = {
	// ... other properties
	theme: {
		extend: {
			animation: {
				// ...other animations
				spotlight: 'spotlight 2s ease .75s 1 forwards'
			},
			keyframes: {
				// ... other keyframes
				spotlight: {
					'0%': {
						opacity: 0,
						transform: 'translate(-72%, -62%) scale(0.5)'
					},
					'100%': {
						opacity: 1,
						transform: 'translate(-50%,-40%) scale(1)'
					}
				}
			}
		}
	}
};
```

</CodeBlock>

### Copy the source code

<CodeBlock path='src/lib/components/ui/Spotlight/Spotlight.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';

	export let className: string | undefined = undefined;
	export let fill: string | undefined = undefined;
</script>

<svg
	class={cn(
		'pointer-events-none absolute z-[1] h-[169%]  w-[138%] animate-spotlight opacity-0 lg:w-[84%]',
		className
	)}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 3787 2842"
	fill="none"
>
	<g filter="url(#filter)">
		<ellipse
			cx="1924.71"
			cy="273.501"
			rx="1924.71"
			ry="273.501"
			transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
			fill={fill || 'white'}
			fill-opacity="0.21"
		></ellipse>
	</g>
	<defs>
		<filter
			id="filter"
			x="0.860352"
			y="0.838989"
			width="3785.16"
			height="2840.26"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
			<feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur>
		</filter>
	</defs>
</svg>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/Spotlight/index.ts'>

```ts
import Spotlight from './Spotlight.svelte';

export { Spotlight };
```

</CodeBlock>

## Props

<PropsTable path='Spotlight' props={props} />
