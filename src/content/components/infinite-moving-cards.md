---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import InfiniteMovingCardsDemo from '$lib/aceternity-components/InfiniteMovingCards/InfiniteMovingCardsDemo.svelte'

    let props = [
        {name: 'items', type: '{quote: string, name: string, title: string}[]', description: 'An array of objects, each containing a quote, name, and title.'},
        {name: 'direction', type: '"left" | "right" | undefined', description: 'Default: "left". The direction of the animation.'},
		{name: 'speed', type: '"fast" | "normal" | "slow" | undefined', description: 'Default: "fast". The speed of the animation.'},
		{name: 'pauseOnHover', type: 'boolean | undefined', description: 'Default: true. Whether to pause the animation when the mouse hovers over the component.'},
		{name: 'className', type: 'string | undefined', description: 'A class name to apply to the component.'}
		]
</script>

<DocsPreview>
<div slot='preview'>
<InfiniteMovingCardsDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import InfiniteMovingCards from './InfiniteMovingCards.svelte';

	const testimonials = [
		{
			quote:
				'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
			name: 'Charles Dickens',
			title: 'A Tale of Two Cities'
		},
		{
			quote:
				"To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
			name: 'William Shakespeare',
			title: 'Hamlet'
		},
		{
			quote: 'All that we see or seem is but a dream within a dream.',
			name: 'Edgar Allan Poe',
			title: 'A Dream Within a Dream'
		},
		{
			quote:
				'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
			name: 'Jane Austen',
			title: 'Pride and Prejudice'
		},
		{
			quote:
				'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
			name: 'Herman Melville',
			title: 'Moby-Dick'
		}
	];
</script>

<div
	class="relative flex h-[40rem] flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black dark:bg-grid-white/[0.05]"
>
	<InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Add Tailwind CSS plugin for variable classes

<CodeBlock path='tailwind.config.ts'>

```ts
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config = {
	// ... other properties
	theme: {
		extend: {
			animation: {
				// ...other animations
				scroll:
					'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite'
			},
			keyframes: {
				// ... other keyframes
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))'
					}
				}
			}
		}
	}
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

<CodeBlock path='src/lib/components/ui/InfiniteMovingCards/InfiniteMovingCards.svelte'>

```svelte
<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	export let items: {
		quote: string;
		name: string;
		title: string;
	}[];
	export let direction: 'left' | 'right' | undefined = 'left';
	export let speed: 'fast' | 'normal' | 'slow' | undefined = 'fast';
	export let pauseOnHover: boolean | undefined = true;
	export let className: string | undefined = undefined;

	let containerRef: HTMLDivElement;
	let scrollerRef: HTMLUListElement;

	onMount(() => {
		addAnimation();
	});

	let start = false;

	function addAnimation() {
		if (containerRef && scrollerRef) {
			const scrollerContent = Array.from(scrollerRef.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef) {
					scrollerRef.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			start = true;
		}
	}
	const getDirection = () => {
		if (containerRef) {
			if (direction === 'left') {
				containerRef.style.setProperty('--animation-direction', 'forwards');
			} else {
				containerRef.style.setProperty('--animation-direction', 'reverse');
			}
		}
	};
	const getSpeed = () => {
		if (containerRef) {
			if (speed === 'fast') {
				containerRef.style.setProperty('--animation-duration', '20s');
			} else if (speed === 'normal') {
				containerRef.style.setProperty('--animation-duration', '40s');
			} else {
				containerRef.style.setProperty('--animation-duration', '80s');
			}
		}
	};
</script>

<div
	bind:this={containerRef}
	class={cn(
		'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
		className
	)}
>
	<ul
		bind:this={scrollerRef}
		class={cn(
			' flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
			start && 'animate-scroll ',
			pauseOnHover && 'hover:[animation-play-state:paused]'
		)}
	>
		{#each items as item, idx (item.name)}
			<li
				class="relative w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px]"
				style="background: linear-gradient(180deg, var(--slate-800), var(--slate-900));"
			>
				<blockquote>
					<div
						aria-hidden="true"
						class="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
					></div>
					<span class=" relative z-20 text-sm font-normal leading-[1.6] text-gray-100">
						{item.quote}
					</span>
					<div class="relative z-20 mt-6 flex flex-row items-center">
						<span class="flex flex-col gap-1">
							<span class=" text-sm font-normal leading-[1.6] text-gray-400">
								{item.name}
							</span>
							<span class=" text-sm font-normal leading-[1.6] text-gray-400">
								{item.title}
							</span>
						</span>
					</div>
				</blockquote>
			</li>
		{/each}
	</ul>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/InfiniteMovingCards/index.ts'>

```ts
import InfiniteMovingCards from './InfiniteMovingCards.svelte';

export { InfiniteMovingCards };
```

</CodeBlock>

## Props

<PropsTable path='InfiniteMovingCards' props={props} />
