---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import EvervaultCard from '$lib/aceternity-components/EvervaultCard/EvervaultCard.svelte'

    let evervaultCardProps = [
        {name: 'text', type: 'string | undefined', description: 'The text that stays on the card'},
        {name: 'className', type: 'string | undefined', description: 'The class name of the child component.'}]

    let iconProps = [
        {name: 'className', type: 'string | undefined', description: 'The class name of the icon.'}]
</script>

<DocsPreview>
<div slot='preview'>
<EvervaultCard />
</div>

<div slot='code'>

```svelte
<script>
	import { EvervaultCard, Icon } from '.';
</script>

<div
	class="relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]"
>
	<Icon class="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
	<Icon class="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
	<Icon class="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
	<Icon class="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

	<EvervaultCard text="hover" />

	<h2 class="mt-4 text-sm font-light text-black dark:text-white">
		Hover over this card to reveal an awesome effect. Running out of copy here.
	</h2>
	<p
		class="mt-4 rounded-full border border-black/[0.2] px-2 py-0.5 text-sm font-light text-black dark:border-white/[0.2] dark:text-white"
	>
		Watch me hover
	</p>
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

<CodeBlock path='src/lib/components/ui/EvervaultCard/EvervaultCard.svelte'>

```svelte
<script lang="ts">
	import { useMotionTemplate, useMotionValue, Motion } from 'svelte-motion';
	import { cn } from '@/utils';
	import { onMount } from 'svelte';

	export let text: string | undefined = undefined;
	export let className: string | undefined = undefined;

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	let randomString = '';

	onMount(() => {
		let str = generateRandomString(1500);
		randomString = str;
	});

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		let { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);

		const str = generateRandomString(1500);
		randomString = str;
	}

	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const generateRandomString = (length: number) => {
		let result = '';
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		return result;
	};

	let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
	let style = { maskImage, WebkitMaskImage: maskImage };
</script>

<div
	class={cn(
		'aspect-square  relative flex  h-full w-full items-center justify-center bg-transparent p-0.5',
		className
	)}
>
	<div
		on:mousemove={onMouseMove}
		class="group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent"
	>
		<div class="pointer-events-none">
			<div
				class="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"
			></div>
			<Motion let:motion {style}>
				<div
					use:motion
					class="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 backdrop-blur-xl transition duration-500 group-hover/card:opacity-100"
				/>
			</Motion>
			<Motion let:motion {style}>
				<div
					use:motion
					class="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
				>
					<p
						class="absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs font-bold text-white transition duration-500"
					>
						{randomString}
					</p>
				</div>
			</Motion>
		</div>
		<div class="relative z-10 flex items-center justify-center">
			<div
				class="relative flex h-44 w-44 items-center justify-center rounded-full text-4xl font-bold text-white"
			>
				<div
					class="absolute h-full w-full rounded-full bg-white/[0.8] blur-sm dark:bg-black/[0.8]"
				/>
				<span class="z-20 text-black dark:text-white">{text}</span>
			</div>
		</div>
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/EvervaultCard/Icon.svelte'>

```svelte
<script lang="ts">
	export let className: string | undefined = undefined;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class={className}
	{...$$props}
>
	<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
</svg>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/EvervaultCard/index.ts'>

```ts
import EvervaultCard from './EvervaultCard.svelte';
import Icon from './Icon.svelte';

export { EvervaultCard, Icon };
```

</CodeBlock>

## Props

<PropsTable path='EvervaultCard' props={evervaultCardProps} />

<PropsTable path='Icon' props={iconProps} />
