---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import CardHoverEffect from '$lib/aceternity-components/CardHoverEffect/CardHoverEffectDemo.svelte'

    let props = [
        {name: 'className', type: 'string | undefined', description: 'The class name of the child component.'},
        {name: 'items', type: 'Array<{title: string, description: string, link: string}>', description: 'Items that you can map through, passed as props to the HoverEffect component'}]
</script>

<DocsPreview>
<div slot='preview'>
<CardHoverEffect />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { CardHoverEffect } from '.';

	const projects = [
		{
			title: 'Stripe',
			description: 'A technology company that builds economic infrastructure for the internet.',
			link: 'https://stripe.com'
		},
		{
			title: 'Netflix',
			description:
				'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
			link: 'https://netflix.com'
		},
		{
			title: 'Google',
			description:
				'A multinational technology company that specializes in Internet-related services and products.',
			link: 'https://google.com'
		},
		{
			title: 'Meta',
			description:
				"A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
			link: 'https://meta.com'
		},
		{
			title: 'Amazon',
			description:
				'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
			link: 'https://amazon.com'
		},
		{
			title: 'Microsoft',
			description:
				'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
			link: 'https://microsoft.com'
		}
	];
</script>

<div class="mx-auto max-w-5xl px-8">
	<CardHoverEffect items={projects} />
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/CardHoverEffect/CardHoverEffect.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import { AnimatePresence, Motion } from 'svelte-motion';

	export let items: {
		title: string;
		description: string;
		link: string;
	}[];
	export let className: string | undefined = undefined;

	let hoveredIndex: number | null = null;
</script>

<div class={cn('grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3', className)}>
	{#each items as item, idx (item.link)}
		<a
			href={item?.link}
			class="group relative block h-full w-full p-2"
			on:mouseenter={() => (hoveredIndex = idx)}
			on:mouseleave={() => (hoveredIndex = null)}
		>
			<AnimatePresence>
				{#if hoveredIndex === idx}
					<Motion
						let:motion
						layoutId="hoverBackground"
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { duration: 0.15 }
						}}
						exit={{
							opacity: 0,
							transition: { duration: 0.15, delay: 0.2 }
						}}
					>
						<span
							use:motion
							class="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200 dark:bg-slate-800/[0.8]"
						/>
					</Motion>
				{/if}
			</AnimatePresence>
			<div
				class={cn(
					'relative z-50 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black p-4 group-hover:border-slate-700 dark:border-white/[0.2]',
					className
				)}
			>
				<div class="relative z-50">
					<div class="p-4">
						<h4 class={cn('mt-4 font-bold tracking-wide text-zinc-100', className)}>
							{item.title}
						</h4>
						<p class={cn('mt-8 text-sm leading-relaxed tracking-wide text-zinc-400', className)}>
							{item.description}
						</p>
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/CardHoverEffect/index.ts'>

```ts
import CardHoverEffect from './CardHoverEffect.svelte';

export { CardHoverEffect };
```

</CodeBlock>

## Props

<PropsTable path='CardHoverEffect' props={props} />
