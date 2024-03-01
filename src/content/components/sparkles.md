---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import SparklesDemo from '$lib/aceternity-components/Sparkles/SparklesDemo.svelte'

    let props = [
        {name: 'id', type: 'string | undefined', description: 'The id of the sparkles component.'},
        {name: 'className', type: 'string | undefined', description: 'The class name of the sparkles component.'},
		{name: 'background', type: 'string | undefined', description: 'The background color of the sparkles component.'},
		{name: 'particleSize', type: 'number | undefined', description: 'The size of the particles.'},
		{name: 'minSize', type: 'number | undefined', description: 'The minimum size of the particles.'},
		{name: 'maxSize', type: 'number | undefined', description: 'The maximum size of the particles.'},
		{name: 'speed', type: 'number | undefined', description: 'The speed of the particles.'},
		{name: 'particleColor', type: 'string | undefined', description: 'The color of the particles.'},
		{name: 'particleDensity', type: 'number | undefined', description: 'The density of the particles.'}
		]
</script>

<DocsPreview>
<div slot='preview'>
<SparklesDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import Sparkles from './Sparkles.svelte';
</script>

<div
	class="flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black"
>
	<h1 class="relative z-20 text-center text-3xl font-bold text-white md:text-7xl lg:text-9xl">
		Aceternity
	</h1>
	<div class="relative h-40 w-[40rem]">
		<!-- Gradients -->
		<div
			class="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
		/>
		<div
			class="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
		/>
		<div
			class="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm"
		/>
		<div
			class="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
		/>

		<!-- Core component -->
		<Sparkles
			minSize={0.8}
			maxSize={2}
			particleDensity={300}
			className="w-full h-full"
			particleColor="#FFFFFF"
		/>

		<!-- Radial Gradient to prevent sharp edges -->
		<div
			class="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"
		></div>
	</div>
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock dependencies={['svelte-motion', 'clsx', 'tailwind-merge']} />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/Sparkles/Sparkles.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import { Motion } from 'svelte-motion';
	let randomMove = () => Math.random() * 4 - 2;

	export let minSize: number = 0.6;
	export let maxSize: number = 1.5;
	export let speed: number = 3;
	export let particleColor: string = '#ffffff';
	export let particleDensity: number | undefined = 200;
	export let className: string | undefined = undefined;

	function getRandomValue() {
		return minSize + Math.random() * (maxSize - minSize);
	}
</script>

<div class={cn('relative h-48', className)}>
	<div class="absolute inset-0">
		{#each [...Array(particleDensity)] as _, i (`star-${i}`)}
			<Motion
				let:motion
				animate={{
					top: `calc(${Math.random() * 100}% + ${randomMove()}px)`,
					left: `calc(${Math.random() * 100}% + ${randomMove()}px)`,
					opacity: Math.random(),
					scale: [1, 1.2, 0]
				}}
				transition={{
					duration: Math.random() * 10 + speed,
					repeat: Infinity,
					ease: 'linear'
				}}
			>
				<span
					use:motion
					class="inline-block"
					style={`position: absolute; width: ${getRandomValue()}px; height: ${getRandomValue()}px; background-color: ${particleColor}; border-radius: 50%; top: ${Math.random() * 100}%; left: ${Math.random() * 100}%;`}
				></span>
			</Motion>
		{/each}
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/Sparkles/index.ts'>

```ts
import Sparkles from './Sparkles.svelte';

export { Sparkles };
```

</CodeBlock>

## Props

<PropsTable path='Sparkles' props={props} />
