---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import BentoGrid from '$lib/aceternity-components/BentoGrid/BentoGridDemo.svelte'
	// import BentoGridDemoPopulatedWithHeaderAndContent from '$lib/aceternity-components/BentoGrid/BentoGridDemoPopulatedWithHeaderAndContent.svelte';
	import BentoGridDemoTwoColumnGrid from '$lib/aceternity-components/BentoGrid/BentoGridDemoTwoColumnGrid.svelte';

    let bentoGridProps = [
        {name: 'className', type: 'string | undefined', description: 'The class name of the child component.'}]

    let bentoGridItemProps = [
		{name: 'className', type: 'string | HTMLElement | undefined', description: 'Class name of item'},
        {name: 'title', type: 'string | HTMLElement | undefined', description: 'Heading for Item'},
        {name: 'description', type: 'string | HTMLElement | undefined', description: 'Text under heading'},
		{name: 'icon', type: 'HTMLElement | undefined', description: 'Add an icon to the item'},
		]
</script>

<DocsPreview>
<div slot='preview'>
<BentoGrid />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { BentoGrid, BentoGridItem } from '.';
	import { ClipboardCopy, File, FileSignature, Table, Waves, Box, Boxes } from 'lucide-svelte';

	let isSkeleton = true;

	const items = [
		{
			title: 'The Dawn of Innovation',
			description: 'Explore the birth of groundbreaking ideas and inventions.',
			icon: ClipboardCopy
		},
		{
			title: 'The Digital Revolution',
			description: 'Dive into the transformative power of technology.',
			icon: File
		},
		{
			title: 'The Art of Design',
			description: 'Discover the beauty of thoughtful and functional design.',
			icon: FileSignature
		},
		{
			title: 'The Power of Communication',
			description: 'Understand the impact of effective communication in our lives.',
			icon: Table
		},
		{
			title: 'The Pursuit of Knowledge',
			description: 'Join the quest for understanding and enlightenment.',
			icon: Waves
		},
		{
			title: 'The Joy of Creation',
			description: 'Experience the thrill of bringing ideas to life.',
			icon: Box
		},
		{
			title: 'The Spirit of Adventure',
			description: 'Embark on exciting journeys and thrilling discoveries.',
			icon: Boxes
		}
	];
</script>

<BentoGrid className="max-w-4xl mx-auto">
	{#each items as item, i (i)}
		<BentoGridItem
			title={item.title}
			description={item.description}
			className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
		>
			<div
				slot="header"
				class="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"
			></div>
			<svelte:component this={item.icon} slot="icon" class="h-4 w-4 text-neutral-500" />
		</BentoGridItem>
	{/each}
</BentoGrid>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/BentoGrid/BentoGrid.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';

	export let className: string | undefined = undefined;
</script>

<div
	class={cn(
		'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ',
		className
	)}
>
	<slot />
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/BentoGrid/BentoGridItem.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';

	export let className: string | undefined = undefined;
	export let title: string | HTMLElement | undefined = undefined;
	export let description: string | HTMLElement | undefined = undefined;
	export let icon: HTMLElement | undefined = undefined;
</script>

<div
	class={cn(
		'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
		className
	)}
>
	<slot name="header" />
	<div class="transition duration-200 group-hover/bento:translate-x-2">
		<slot name="icon" />
		<div class="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
			{title}
		</div>
		<div class="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
			{description}
		</div>
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/BentoGrid/index.ts'>

```ts
import BentoGrid from './BentoGrid.svelte';
import BentoGridItem from './BentoGridItem.svelte';

export { BentoGrid, BentoGridItem };
```

</CodeBlock>

## Examples

### 2 Column Grid

<DocsPreview>
<div slot='preview'>
<BentoGridDemoTwoColumnGrid />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { ClipboardCopy, File, FileSignature, Table } from 'lucide-svelte';
	import BentoGrid from './BentoGrid.svelte';
	import BentoGridItem from './BentoGridItem.svelte';

	const items = [
		{
			title: 'The Dawn of Innovation',
			description: 'Explore the birth of groundbreaking ideas and inventions.',
			className: 'md:col-span-2',
			icon: ClipboardCopy
		},
		{
			title: 'The Digital Revolution',
			description: 'Dive into the transformative power of technology.',
			className: 'md:col-span-1',
			icon: File
		},
		{
			title: 'The Art of Design',
			description: 'Discover the beauty of thoughtful and functional design.',
			className: 'md:col-span-1',
			icon: FileSignature
		},
		{
			title: 'The Power of Communication',
			description: 'Understand the impact of effective communication in our lives.',
			className: 'md:col-span-2',
			icon: Table
		}
	];
</script>

<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
	{#each items as item, i (i)}
		<BentoGridItem title={item.title} description={item.description} className={item.className}>
			<div
				slot="header"
				class="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
			></div>
			<svelte:component this={item.icon} slot="icon" class="h-4 w-4 text-neutral-500" />
		</BentoGridItem>
	{/each}
</BentoGrid>
```

</div>
</DocsPreview>

## Props

<PropsTable path='BentoGrid' props={bentoGridProps} />

<PropsTable path='BentoGridItem' props={bentoGridItemProps} />
