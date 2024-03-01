---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import GlowingStars from '$lib/aceternity-components/GlowingStars/GlowingStarsDemo.svelte'

    let glowProps = [
        {name: 'delay', type: 'number', description: 'Delay between glowing.'}]

    let glowingStarsBackgroundCardProps = [
        {name: 'className', type: 'string | undefined', description: 'The class applied to the background.'}]

    let glowingStarsDescriptionProps = [
        {name: 'className', type: 'string | undefined', description: 'The class applied to the description.'}]

    let glowingStarsTitleProps = [
        {name: 'className', type: 'string | undefined', description: 'The class applied to the title.'}]

    let illustrationProps = [
        {name: 'mouseEnter', type: 'boolean', description: 'Trigger true when the mouse enters.'}]

    let starProps = [
        {name: 'isGlowing', type: 'boolean', description: 'Set to true if the star should glow.'},
        {name: 'delay', type: 'number', description: 'The transition delay.'}]
</script>

<DocsPreview>
<div slot='preview'>
<GlowingStars />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from '.';
</script>

<GlowingStarsBackgroundCard>
	<GlowingStarsTitle>Svelte</GlowingStarsTitle>
	<div class="flex items-end justify-between">
		<GlowingStarsDescription>
			The power of full-stack to the frontend. Read the release notes.
		</GlowingStarsDescription>
		<div class="flex h-8 w-8 items-center justify-center rounded-full bg-[hsla(0,0%,100%,.1)]">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-4 w-4 stroke-2 text-white"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
				/>
			</svg>
		</div>
	</div>
</GlowingStarsBackgroundCard>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock dependencies={['svelte-motion', 'clsx', 'tailwind-merge']} />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/GlowingStars/Glow.svelte'>

```svelte
<script lang="ts">
	import { Motion } from 'svelte-motion';
	export let delay: number;
</script>

<Motion
	let:motion
	initial={{
		opacity: 0
	}}
	animate={{
		opacity: 1
	}}
	transition={{
		duration: 2,
		ease: 'easeInOut',
		delay: delay
	}}
	exit={{
		opacity: 0
	}}
>
	<div
		use:motion
		class="absolute left-1/2 z-10 h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-blue-500 shadow-2xl shadow-blue-400 blur-[1px]"
	/>
</Motion>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/GlowingStars/GlowingStarsBackgroundCard.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import Illustration from './Illustration.svelte';

	export let className: string | undefined = undefined;

	let mouseEnter = false;
</script>

<div
	on:mouseenter={() => (mouseEnter = true)}
	on:mouseleave={() => (mouseEnter = false)}
	class={cn(
		'h-full max-h-[20rem] w-full max-w-md rounded-xl border border-[#eaeaea] bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 dark:border-neutral-600',
		className
	)}
>
	<div class="flex items-center justify-center">
		<Illustration {mouseEnter} />
	</div>
	<div class="px-2 pb-6"><slot /></div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/GlowingStars/GlowingStarsDescription.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';

	export let className: string | undefined = undefined;
</script>

<p class={cn('max-w-[16rem] text-base text-white', className)}>
	<slot />
</p>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/GlowingStars/GlowingStarsTitle.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';

	export let className: string | undefined = undefined;
</script>

<h2 class={cn('text-2xl font-bold text-[#eaeaea]', className)}>
	<slot />
</h2>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/GlowingStars/Illustration.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import Glow from './Glow.svelte';
	import Star from './Star.svelte';
	import { AnimatePresence } from 'svelte-motion';
	import { onDestroy, onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let mouseEnter: boolean;

	const stars = 108;
	const columns = 18;
	let glowingStars: number[] = [];

	// const highlightedStars = useRef<number[]>([]);
	const highlightedStars = writable<number[]>([]);

	onMount(() => {
		const interval = setInterval(() => {
			$highlightedStars = Array.from({ length: 5 }, () => Math.floor(Math.random() * stars));
			glowingStars = [...$highlightedStars];
		}, 3000);

		return () => clearInterval(interval);
	});
</script>

<div
	class="h-48 w-full p-1"
	style={`display: grid; grid-template-columns: repeat(${columns}, 1fr); gap: 1px;`}
>
	{#each [...Array(stars)] as star, starIdx (`matrix-col-${starIdx}}`)}
		{@const isGlowing = glowingStars.includes(starIdx)}
		{@const delay = (starIdx % 10) * 0.1}
		{@const staticDelay = starIdx * 0.01}

		<div class="relative flex items-center justify-center">
			<Star isGlowing={mouseEnter ? true : isGlowing} delay={mouseEnter ? staticDelay : delay} />
			{#if mouseEnter}
				<Glow delay={staticDelay} />
			{/if}
			<AnimatePresence show={true}>
				{#if isGlowing}
					<Glow {delay} />
				{/if}
			</AnimatePresence>
		</div>
	{/each}
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/GlowingStars/Star.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import { Motion } from 'svelte-motion';

	export let isGlowing: boolean;
	export let delay: number;
</script>

<Motion
	let:motion
	initial={{
		scale: 1
	}}
	animate={{
		scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
		background: isGlowing ? '#fff' : '#666'
	}}
	transition={{
		duration: 2,
		ease: 'easeInOut',
		delay: delay
	}}
>
	<div use:motion class={cn('relative z-20 h-[1px] w-[1px] rounded-full bg-[#666]')}></div>
</Motion>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/GlowingStars/index.ts'>

```ts
import Glow from './Glow.svelte';
import GlowingStarsBackgroundCard from './GlowingStarsBackgroundCard.svelte';
import GlowingStarsDescription from './GlowingStarsDescription.svelte';
import GlowingStarsTitle from './GlowingStarsTitle.svelte';
import Illustration from './Illustration.svelte';
import Star from './Star.svelte';

export {
	Glow,
	GlowingStarsDescription,
	GlowingStarsBackgroundCard,
	GlowingStarsTitle,
	Illustration,
	Star
};
```

</CodeBlock>

## Props

<PropsTable path='Glow' props={glowProps} />

<PropsTable path='GlowingStarsBackgroundCard' props={glowingStarsBackgroundCardProps} />

<PropsTable path='GlowingStarsDescription' props={glowingStarsDescriptionProps} />

<PropsTable path='GlowingStarsTitle' props={glowingStarsTitleProps} />

<PropsTable path='Illustration' props={illustrationProps} />

<PropsTable path='Star' props={starProps} />
