---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import CardStack from '$lib/aceternity-components/CardStack/CardStackDemo.svelte'

    let props = [
        {name: 'className', type: 'string | undefined', description: 'The class name of the child component.'},
        {name: 'items', type: 'Array<{id: number; name: string; designation: string; content: HTMLElement;}>', description: 'The cards that you want to render in the stack effect'},
		{name: 'offset', type: 'number | undefined', description: 'The offset by which you want the cards to stack'},
		{name: 'scaleFactor', type: 'number | undefined', description: 'The scale by which you want the cards to stack'},
		]
</script>

<DocsPreview>
<div slot='preview'>
<CardStack />
</div>

<div slot='code'>

```svelte
<script>
	import { CardStack } from '.';

	const CARDS = [
		{
			id: 0,
			name: 'Manu Arora',
			designation: 'Senior Software Engineer',
			content:
				"These cards are amazing, <span class='bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500'>I want to use them</span> in my project. Framer motion is a godsend ngl tbh fam 🙏"
		},
		{
			id: 1,
			name: 'Elon Musk',
			designation: 'Senior Shitposter',
			content:
				"I dont like this Twitter thing, <span class='bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500'>deleting it right away</span> because yolo. Instead, I would like to call it <span class='bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500'>X.com</span> so that it can easily be confused with adult sites."
		},
		{
			id: 2,
			name: 'Tyler Durden',
			designation: 'Manager Project Mayhem',
			content:
				"The first rule of <span class='bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500'>Fight Club</span> is that you do not talk about fight club. The second rule of <span class='bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500'>Fight club</span> is that you DO NOT TALK about fight club."
		}
	];
</script>

<div class="flex w-full items-center justify-center">
	<CardStack items={CARDS} />
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

<CodeBlock path='src/lib/components/ui/CardStack/CardStack.svelte'>

```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import { Motion } from 'svelte-motion';

	type Card = {
		id: number;
		name: string;
		designation: string;
		content: string;
	};

	export let items: Card[];
	export let offset: number | undefined = undefined;
	export let scaleFactor: number | undefined = undefined;

	let interval: any;
	const CARD_OFFSET = offset || 16;
	const SCALE_FACTOR = scaleFactor || 0.06;
	let cards: Card[] = items;

	onMount(() => {
		startFlipping();
	});

	const startFlipping = () => {
		interval = setInterval(() => {
			const newArray = [...cards]; // create a copy of the array
			newArray.unshift(newArray.pop()!); // move the last element to the front
			cards = newArray;
		}, 5000);

		return () => clearInterval(interval);
	};
</script>

<div class="relative h-60 w-60 md:h-60 md:w-96">
	{#each cards as card, index (card.id)}
		<Motion
			let:motion
			style={{
				transformOrigin: 'top center'
			}}
			animate={{
				top: index * -CARD_OFFSET,
				scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
				zIndex: cards.length - index //  decrease z-index for the cards that are behind
			}}
		>
			<div
				use:motion
				class="absolute flex h-60 w-60 flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-4 shadow-xl shadow-black/[0.1] dark:border-white/[0.1] dark:bg-black dark:shadow-white/[0.05] md:h-60 md:w-96"
			>
				<div class="font-normal text-neutral-700 dark:text-neutral-200">
					{@html card.content}
				</div>
				<div>
					<p class="font-medium text-neutral-500 dark:text-white">
						{card.name}
					</p>
					<p class="font-normal text-neutral-400 dark:text-neutral-200">
						{card.designation}
					</p>
				</div>
			</div>
		</Motion>
	{/each}
</div>

<style>
	.highlight {
		@apply bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500;
	}
</style>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/CardStack/index.ts'>

```ts
import CardStack from './CardStack.svelte';

export { CardStack };
```

</CodeBlock>

## Props

<PropsTable path='CardStack' props={props} />
