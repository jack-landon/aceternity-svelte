---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import TextRevealCardDemo from '$lib/aceternity-components/TextRevealCard/TextRevealCardDemo.svelte'

    let textRevealCardProps = [
        {name: 'text', type: 'string', description: 'Piece of text that stays on the card'},
        {name: 'revealText', type: 'string', description: 'Text that reveals when hovered over the card'},
		{name: 'className', type: 'string | undefined', description: 'The class name of the TextReveal component.'}
		]

    let textRevealCardTitleProps = [
        {name: 'className', type: 'string | undefined', description: 'CSS class name for the title.'}]

    let textRevealCardDescriptionProps = [
        {name: 'className', type: 'string | undefined', description: 'CSS class name for the description.'}]
</script>

<DocsPreview>
<div slot='preview'>
<TextRevealCardDemo />
</div>

<div slot='code'>
<p>Code</p>

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/TextRevealCard/Stars.svelte'>

```svelte
<script lang="ts">
	import { Motion } from 'svelte-motion';
	let randomMove = () => Math.random() * 4 - 2;
</script>

<div class="absolute inset-0 z-40">
	{#each [...Array(140)] as _, i (`star-${i}`)}
		<Motion
			let:motion
			animate={{
				top: `calc(${Math.random() * 100}% + ${randomMove()}px)`,
				left: `calc(${Math.random() * 100}% + ${randomMove()}px)`,
				opacity: Math.random(),
				scale: [1, 1.2, 0]
			}}
			transition={{
				duration: Math.random() * 10 + 20,
				repeat: Infinity,
				ease: 'linear'
			}}
		>
			<span
				use:motion
				class="z-50 inline-block"
				style={`position: absolute; width: 2px; height: 2px; background-color: white; border-radius: 50%; top: ${Math.random() * 100}%; left: ${Math.random() * 100}%; z-index: 1;`}
			></span>
		</Motion>
	{/each}
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/TextRevealCard/TextRevealCard.svelte'>

```svelte
<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import Stars from './Stars.svelte';

	export let text: string;
	export let revealText: string;
	export let className: string | undefined = undefined;

	let widthPercentage = 0;
	let cardRef: HTMLDivElement;
	let left = 0;
	let localWidth = 0;
	let isMouseOver = false;

	onMount(() => {
		if (cardRef) {
			const { left: newLeft, width: newLocalWidth } = cardRef.getBoundingClientRect();
			left = newLeft;
			localWidth = newLocalWidth;
		}
	});

	function mouseMoveHandler(event: any) {
		event.preventDefault();

		const { clientX } = event;
		if (cardRef) {
			const relativeX = clientX - left;
			widthPercentage = (relativeX / localWidth) * 100;
		}
	}

	function mouseLeaveHandler() {
		isMouseOver = false;
		widthPercentage = 0;
	}
	function mouseEnterHandler() {
		isMouseOver = true;
	}

	const rotateDeg = (widthPercentage - 50) * 0.1;
</script>

<div
	on:mouseenter={mouseEnterHandler}
	on:mouseleave={mouseLeaveHandler}
	on:mousemove={mouseMoveHandler}
	bind:this={cardRef}
	class={cn(
		'relative w-[40rem] overflow-hidden rounded-lg border border-white/[0.08] bg-[#1d1c20] p-8',
		className
	)}
>
	<slot />

	<div class="relative flex h-40 items-center overflow-hidden">
		<Motion
			let:motion
			style={{
				width: '100%'
			}}
			animate={isMouseOver
				? {
						opacity: widthPercentage > 0 ? 1 : 0,
						clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`
					}
				: {
						clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`
					}}
			transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
		>
			<div use:motion class="absolute z-20 bg-[#1d1c20] will-change-transform">
				<p
					style="text-shadow: 4px 4px 15px rgba(0,0,0,0.5);"
					class="bg-gradient-to-b from-white to-neutral-300 bg-clip-text py-10 text-base font-bold text-transparent text-white sm:text-[3rem]"
				>
					{revealText}
				</p>
			</div>
		</Motion>
		<Motion
			let:motion
			animate={{
				left: `${widthPercentage}%`,
				rotate: `${rotateDeg}deg`,
				opacity: widthPercentage > 0 ? 1 : 0
			}}
			transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
		>
			<div
				use:motion
				class="absolute z-50 h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent will-change-transform"
			></div>
		</Motion>

		<div
			class=" overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
		>
			<p
				class="bg-[#323238] bg-clip-text py-10 text-base font-bold text-transparent sm:text-[3rem]"
			>
				{text}
			</p>
			<Stars />
		</div>
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/TextRevealCard/TextRevealCardDescription.svelte'>

```svelte
<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let className: string | undefined = undefined;
</script>

<p class={twMerge('text-sm text-[#a9a9a9]', className)}><slot /></p>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/TextRevealCard/TextRevealCardTitle.svelte'>

```svelte
<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let className: string | undefined = undefined;
</script>

<h2 class={twMerge('mb-2 text-lg text-white', className)}>
	<slot />
</h2>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/TextRevealCard/index.ts'>

```ts
import TextRevealCard from './TextRevealCard.svelte';
import TextRevealCardTitle from './TextRevealCardTitle.svelte';
import TextRevealCardDescription from './TextRevealCardDescription.svelte';
import Stars from './Stars.svelte';

export { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription, Stars };
```

</CodeBlock>

## Props

<PropsTable path='TextRevealCard' props={textRevealCardProps} />

<PropsTable path='TextRevealCardTitle' props={textRevealCardTitleProps} />

<PropsTable path='TextRevealCardDescription' props={textRevealCardDescriptionProps} />
