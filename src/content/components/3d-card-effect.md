---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import ThreeDCardEffect from '$lib/aceternity-components/ThreeDCardEffect/ThreeDCardEffectDemo.svelte'

    let containerProps = [
        {name: 'className', type: 'string | undefined', description: 'The CSS class to be applied to the container'},
        {name: 'containerClassName', type: 'string | undefined', description: 'The CSS class to be applied to the outer container'}]

    let bodyProps = [{name: 'className', type: 'string | undefined', description: 'The CSS class to be applied to the body'}]

    let itemProps = [
        {name: 'className', type: 'string | undefined', description: 'The CSS class to be applied to the item.'},
        {name: 'translateX', type: 'number | string | undefined', description: 'The X translation of the item.'},
		{name: 'translateY', type: 'number | string | undefined', description: 'The Y translation of the item.'},
        {name: 'translateZ', type: 'number | string | undefined', description: 'The Z translation of the item.'},
        {name: 'rotateX', type: 'number | string | undefined', description: 'The X rotation of the item.'},
        {name: 'rotateY', type: 'number | string | undefined', description: 'The Y rotation of the item.'},
        {name: 'rotateZ', type: 'number | string | undefined', description: 'The Z rotation of the item.'},
		]
</script>

<DocsPreview>
<div slot='preview'>
<ThreeDCardEffect />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { CardContainer, CardItem, CardBody } from '.';
</script>

<CardContainer className="inter-var">
	<CardBody
		className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
	>
		<CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
			Make things float in air
		</CardItem>
		<CardItem
			as="p"
			translateZ="60"
			className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
		>
			Hover over this card to unleash the power of CSS perspective
		</CardItem>
		<CardItem translateZ="100" className="w-full mt-4">
			<img
				src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="thumbnail"
				height="1000"
				width="1000"
				class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
			/>
		</CardItem>
		<div class="mt-20 flex items-center justify-between">
			<CardItem
				translateZ={20}
				as="button"
				className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
			>
				Try now →
			</CardItem>
			<CardItem
				translateZ={20}
				as="button"
				className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
			>
				Sign up
			</CardItem>
		</div>
	</CardBody>
</CardContainer>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/ThreeDCardEffect/CardContainer.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';

	export let className: string;
	export let containerClassName: string | undefined = '';

	let containerRef: HTMLDivElement;
	let isMouseEntered: boolean = false;

	const handleMouseMove = (e: MouseEvent) => {
		if (!containerRef) return;
		const { left, top, width, height } = containerRef.getBoundingClientRect();
		const x = (e.clientX - left - width / 2) / 25;
		const y = (e.clientY - top - height / 2) / 25;
		containerRef.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
	};

	const handleMouseEnter = (e: MouseEvent) => {
		isMouseEntered = true;
		if (!containerRef) return;
	};

	const handleMouseLeave = (e: MouseEvent) => {
		if (!containerRef) return;
		isMouseEntered = false;
		containerRef.style.transform = `rotateY(0deg) rotateX(0deg)`;
	};
</script>

<div
	class={cn('flex items-center justify-center py-4', containerClassName)}
	style="perspective: 1000px;"
>
	<div
		bind:this={containerRef}
		on:mouseenter={handleMouseEnter}
		on:mousemove={handleMouseMove}
		on:mouseleave={handleMouseLeave}
		class={cn(
			'relative flex items-center justify-center transition-all duration-200 ease-linear',
			className
		)}
		style="transform-style: preserve-3d;"
	>
		<slot />
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/ThreeDCardEffect/CardBody.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';

	export let className: string;
</script>

<div
	class={cn(
		'h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]',
		className
	)}
>
	<slot />
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/ThreeDCardEffect/CardItem.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';

	export let className: string | undefined;
	export let translateX: number | string | undefined = 0;
	export let translateY: number | string | undefined = 0;
	export let translateZ: number | string | undefined = 0;
	export let rotateX: number | string | undefined = 0;
	export let rotateY: number | string | undefined = 0;
	export let rotateZ: number | string | undefined = 0;

	let ref: HTMLDivElement;
	let isMouseEntered: boolean = false;
	$: isMouseEntered, handleAnimations;

	const handleAnimations = () => {
		if (!ref) return;
		if (isMouseEntered) {
			ref.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
		} else {
			ref.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
		}
	};
</script>

<div
	bind:this={ref}
	on:mouseenter={() => (isMouseEntered = true)}
	on:mousemove={() => (isMouseEntered = true)}
	on:mouseleave={() => (isMouseEntered = false)}
	class={cn('w-fit transition duration-200 ease-linear', className)}
	{...$$props}
>
	<slot />
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/ThreeDCardEffect/index.ts'>

```ts
import CardContainer from './CardContainer.svelte';
import CardBody from './CardBody.svelte';
import CardItem from './CardItem.svelte';

export { CardContainer, CardBody, CardItem };
```

</CodeBlock>

## Props

<PropsTable path='CardContainer' props={containerProps} />

<PropsTable path='CardBody' props={bodyProps} />

<PropsTable path='CardItem' props={itemProps} />
