---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import SvgMaskEffectDemo from '$lib/aceternity-components/SvgMaskEffect/SvgMaskEffectDemo.svelte'

    let props = [
        {name: 'size', type: 'number | undefined', description: 'Size of the mask'},
        {name: 'revealSize', type: 'number | undefined', description: 'Hovered over size of the mask'},
		{name: 'className', type: 'string | undefined', description: 'The class name of the child component.'}
		]
</script>

<DocsPreview>
<div slot='preview'>
<SvgMaskEffectDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import SvgMaskEffect from './SvgMaskEffect.svelte';
</script>

<div class="flex h-[40rem] w-full items-center justify-center overflow-hidden">
	<SvgMaskEffect size={10} revealSize={700} className="h-[40rem] border rounded-md">
		<p slot="revealText" class="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800">
			The first rule of MRR Club is you do not talk about MRR Club. The second rule of MRR Club is
			you DO NOT talk about MRR Club.
		</p>
		The first rule of{' '}<span class="text-red-500">MRR Club</span> is you do not talk about MRR
		Club. The second rule of MRR Club is you DO NOT talk about{' '}<span class="text-red-500"
			>MRR Club</span
		>.
	</SvgMaskEffect>
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Add mask in `static` folder

<CodeBlock path='static/mask.svg'>

```svg
<svg
  width="1298"
  height="1298"
  viewBox="0 0 1298 1298"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="649" cy="649" r="649" fill="black" />
</svg>
```

</CodeBlock>

### Copy the source code

<CodeBlock path='src/lib/components/ui/SvgMaskEffect/SvgMaskEffect.svelte'>

```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import { Motion } from 'svelte-motion';
	import { cn } from '$lib/utils';

	export let size: number | undefined = 10;
	export let revealSize: number | undefined = 600;
	export let className: string | undefined = undefined;

	let isHovered = false;
	let mousePosition: { x: number | null; y: number | null } = { x: null, y: null };
	let containerRef: HTMLDivElement;
	const updateMousePosition = (e: any) => {
		const rect = containerRef.getBoundingClientRect();
		mousePosition = { x: e.clientX - rect.left, y: e.clientY - rect.top };
	};

	onMount(() => {
		containerRef.addEventListener('mousemove', updateMousePosition);
		return () => {
			if (containerRef) {
				containerRef.removeEventListener('mousemove', updateMousePosition);
			}
		};
	});

	$: maskSize = isHovered ? revealSize : size;
</script>

<Motion
	let:motion
	animate={{
		backgroundColor: isHovered ? 'var(--slate-900)' : 'var(--white)'
	}}
>
	<div use:motion bind:this={containerRef} class={cn('relative h-screen', className)}>
		<Motion
			let:motion
			animate={{
				WebkitMaskPosition:
					mousePosition.x &&
					mousePosition.y &&
					maskSize &&
					`${mousePosition?.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
				WebkitMaskSize: `${maskSize}px`
			}}
			transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
		>
			<div
				use:motion
				class="absolute flex h-full w-full items-center justify-center bg-black text-6xl text-white bg-grid-white/[0.2] [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
			>
				<div class="absolute inset-0 z-0 h-full w-full bg-black opacity-50" />
				<div
					on:mouseenter={() => {
						isHovered = true;
					}}
					on:mouseleave={() => {
						isHovered = false;
					}}
					class="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold text-white"
				>
					<slot />
				</div>
			</div>
		</Motion>

		<div class="flex h-full w-full items-center justify-center text-white">
			<slot name="revealText" />
		</div>
	</div>
</Motion>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/SvgMaskEffect/index.ts'>

```ts
import SvgMaskEffect from './SvgMaskEffect.svelte';

export { SvgMaskEffect };
```

</CodeBlock>

## Props

<PropsTable path='SvgMaskEffect' props={props} />
