---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import FollowingPointerDemo from '$lib/aceternity-components/FollowingPointer/FollowingPointerDemo.svelte'

    let props = [
        {name: 'className', type: 'string | undefined', description: 'The class name of the FollowerPointerCard component.'}]
</script>

<DocsPreview>
<div slot='preview'>
<FollowingPointerDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import FollowingPointer from './FollowingPointer.svelte';
	export let showDescription: boolean = true;
	const blogContent = {
		slug: 'amazing-tailwindcss-grid-layouts',
		author: 'Jack Landon',
		date: '14th February, 2024',
		title: 'Amazing Tailwindcss Grid Layout Examples',
		description:
			'Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.',
		image: 'https://ui.aceternity.com/_next/image?url=%2Fdemo%2Fthumbnail.png&w=640&q=75',
		authorAvatar:
			'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
	};
</script>

<div class="group w-full p-28">
	<FollowingPointer>
		<div slot="title" class="flex items-center space-x-2">
			<img
				src={blogContent.authorAvatar}
				alt="thumbnail"
				class="h-7 w-7 rounded-full border-2 border-white object-cover"
			/>
			<p>{blogContent.author}</p>
		</div>
		<div
			class="relative overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl"
		>
			<div
				class="aspect-h-10 aspect-w-16 relative w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100 xl:aspect-h-10 xl:aspect-w-16"
			>
				<img
					src={blogContent.image}
					alt="thumbnail"
					class={`transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl `}
				/>
			</div>
			<div class=" p-4">
				<h2 class="my-4 text-lg font-bold text-zinc-700">
					{blogContent.title}
				</h2>
				{#if showDescription}
					<h2 class="my-4 text-sm font-normal text-zinc-500">
						{blogContent.description}
					</h2>
				{/if}
				<div class="mt-10 flex flex-row items-center justify-between">
					<span class="text-sm text-gray-500">{blogContent.date}</span>
					<div
						class="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white"
					>
						Read More
					</div>
				</div>
			</div>
		</div>
	</FollowingPointer>
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

<CodeBlock path='src/lib/components/ui/FollowingPointer/FollowingPointer.svelte'>

```svelte
<script lang="ts">
	import { Motion, AnimatePresence, useMotionValue } from 'svelte-motion';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	export let className: string | undefined = undefined;

	let x = useMotionValue(0);
	let y = useMotionValue(0);
	let ref: HTMLDivElement;
	let rect: DOMRect | null = null;
	let isInside: boolean = false;

	const colors = [
		'bg-sky-500',
		'bg-neutral-500',
		'bg-teal-500',
		'bg-green-500',
		'bg-blue-500',
		'bg-red-500',
		'bg-yellow-500'
	];

	onMount(() => {
		if (ref) {
			rect = ref.getBoundingClientRect();
		}
	});

	const handleMouseMove = (e: MouseEvent) => {
		if (rect) {
			const scrollX = window.scrollX;
			const scrollY = window.scrollY;
			x.set(e.clientX - rect.left + scrollX);
			y.set(e.clientY - rect.top + scrollY);
		}
	};
	const handleMouseLeave = () => {
		isInside = false;
	};

	const handleMouseEnter = () => {
		isInside = true;
	};
</script>

<div
	on:mouseleave={handleMouseLeave}
	on:mouseenter={handleMouseEnter}
	on:mousemove={handleMouseMove}
	style="cursor: none;"
	bind:this={ref}
	class={cn('relative', className)}
>
	<AnimatePresence show={true}>
		{#if isInside}
			<Motion
				let:motion
				style={{
					top: y,
					left: x,
					pointerEvents: 'none'
				}}
				initial={{
					scale: 1,
					opacity: 1
				}}
				animate={{
					scale: 1,
					opacity: 1
				}}
				exit={{
					scale: 0,
					opacity: 0
				}}
			>
				<div use:motion class="absolute z-50 h-4 w-4 rounded-full">
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="1"
						viewBox="0 0 16 16"
						class="h-6 w-6 -translate-x-[12px] -rotate-[70deg] transform stroke-sky-600 text-sky-500"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
						></path>
					</svg>
					<Motion
						let:motion
						initial={{
							scale: 0.5,
							opacity: 0
						}}
						animate={{
							scale: 1,
							opacity: 1
						}}
						exit={{
							scale: 0.5,
							opacity: 0
						}}
					>
						<div
							use:motion
							class={`min-w-max whitespace-nowrap rounded-full bg-neutral-200 p-2 text-xs text-white ${colors[Math.floor(Math.random() * colors.length)]}`}
						>
							{#if $$slots.title}
								<slot name="title" />
							{:else}
								William Shakespeare
							{/if}
						</div>
					</Motion>
				</div>
			</Motion>
		{/if}
	</AnimatePresence>
	<slot />
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/FollowingPointer/index.ts'>

```ts
import FollowingPointer from './FollowingPointer.svelte';

export { FollowingPointer };
```

</CodeBlock>

## Props

<PropsTable path='FollowingPointer' props={props} />
