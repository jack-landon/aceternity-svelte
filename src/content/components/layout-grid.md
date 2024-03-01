---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import LayoutGridDemo from '$lib/aceternity-components/LayoutGrid/LayoutGridDemo.svelte'

    let layoutGridProps = [
        {name: 'cards', type: '{id: number, content: HTMLElement | string, className: string, thumbnail: string}[]', description: 'An array of Card objects.'}]

	let blurImageProps = [
        {name: 'card', type: '{id: number, content: HTMLElement | string, className: string, thumbnail: string}', description: 'The card object.'}]
</script>

<DocsPreview>
<div slot='preview'>
<LayoutGridDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import LayoutGrid from './LayoutGrid.svelte';

	const cards = [
		{
			id: 1,
			content:
				'<div><p className="font-bold text-4xl text-white">House in the woods</p><p className="font-normal text-base text-white"></p><p className="font-normal text-base my-4 max-w-lg text-neutral-200">A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life.</p></div>',
			className: 'md:col-span-2',
			thumbnail:
				'https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			id: 2,
			content:
				'<div><p className="font-bold text-4xl text-white">House above the clouds</p><p className="font-normal text-base text-white"></p><p className="font-normal text-base my-4 max-w-lg text-neutral-200">Perched high above the world, this house offers breathtaking views and a unique living experience. It&apos;s a place where the sky meets home, and tranquility is a way of life.</p></div>',
			className: 'col-span-1',
			thumbnail:
				'https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			id: 3,
			content:
				'<div><p className="font-bold text-4xl text-white">Greens all over</p><p className="font-normal text-base text-white"></p><p className="font-normal text-base my-4 max-w-lg text-neutral-200">A house surrounded by greenery and nature&apos;s beauty. It&apos;s the perfect place to relax, unwind, and enjoy life.</p></div>',
			className: 'col-span-1',
			thumbnail:
				'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			id: 4,
			content:
				'<div><p className="font-bold text-4xl text-white">Rivers are serene</p><p className="font-normal text-base text-white"></p><p className="font-normal text-base my-4 max-w-lg text-neutral-200">A house by the river is a place of peace and tranquility. It&apos;s the perfect place to relax, unwind, and enjoy life.</p></div>',
			className: 'md:col-span-2',
			thumbnail:
				'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		}
	];
</script>

<div class="h-screen w-full py-20">
	<LayoutGrid {cards} />
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

<CodeBlock path='src/lib/components/ui/LayoutGrid/LayoutGrid.svelte'>

```svelte
<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cn } from '$lib/utils';
	import BlurImage from './BlurImage.svelte';

	type Card = {
		id: number;
		content: JSX.Element | React.ReactNode | string;
		className: string;
		thumbnail: string;
	};

	export let cards: Card[] = [];

	let selected: Card | null = null;
	let lastSelected: Card | null = null;

	const handleClick = (card: Card) => {
		lastSelected = selected;
		selected = card;
	};

	const handleOutsideClick = () => {
		lastSelected = selected;
		selected = null;
	};
</script>

<div class="mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-4 p-10 md:grid-cols-3">
	{#each cards as card, i (i)}
		<div class={cn(card.className, '')}>
			<Motion let:motion layout>
				<div
					use:motion
					on:click={() => handleClick(card)}
					class={cn(
						card.className,
						'relative overflow-hidden',
						selected?.id === card.id
							? 'absolute inset-0 z-50 m-auto flex h-1/2 w-full cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2'
							: lastSelected?.id === card.id
								? 'z-40 h-full w-full rounded-xl bg-white'
								: 'h-full w-full rounded-xl bg-white'
					)}
				>
					{#if selected?.id === card.id}
						<div
							class="relative z-[60] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl"
						>
							<Motion
								let:motion
								initial={{
									opacity: 0
								}}
								animate={{
									opacity: 0.6
								}}
							>
								<div use:motion class="absolute inset-0 z-10 h-full w-full bg-black opacity-60" />
							</Motion>
							<Motion
								let:motion
								initial={{
									opacity: 0,
									y: 100
								}}
								animate={{
									opacity: 1,
									y: 0
								}}
								transition={{
									duration: 0.3,
									ease: 'easeInOut'
								}}
							>
								<div use:motion class="relative z-[70] px-8 pb-4">
									{@html selected?.content}
								</div>
							</Motion>
						</div>
					{/if}
					<BlurImage {card} />
				</div>
			</Motion>
		</div>
	{/each}

	<Motion let:motion animate={{ opacity: selected?.id ? 0.3 : 0 }}>
		<div
			use:motion
			on:click={handleOutsideClick}
			class={cn(
				'absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0',
				selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
			)}
		/>
	</Motion>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/LayoutGrid/BlurImage.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';

	type Card = {
		id: number;
		content: any;
		className: string;
		thumbnail: string;
	};

	export let card: Card;
	let loaded = false;
</script>

<img
	src={card.thumbnail}
	height="500"
	width="500"
	on:load={() => (loaded = true)}
	class={cn(
		'absolute inset-0 h-full w-full object-cover object-top transition duration-200',
		loaded ? 'blur-none' : 'blur-md'
	)}
	alt="thumbnail"
/>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/LayoutGrid/index.ts'>

```ts
import LayoutGrid from './LayoutGrid.svelte';
import BlurImage from './BlurImage.svelte';

export { LayoutGrid, BlurImage };
```

</CodeBlock>

## Props

<PropsTable path='LayoutGrid' props={layoutGridProps} />

<PropsTable path='BlurImage' props={blurImageProps} />
