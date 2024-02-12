---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import ThreeDPin from '$lib/aceternity-components/ThreeDPin/ThreeDPinDemo.svelte'

	let pinContainerProps = [
        {name: 'title', type: 'string | undefined', description: 'Title that shows up on hover'},
        {name: 'href', type: 'string | undefined', description: 'Link of the component that you want to redirect to'},
        {name: 'className', type: 'string | undefined', description: 'The class name of the child component.'},
        {name: 'containerClassName', type: 'string | undefined', description: 'The class name of the Container Component.'}]
</script>

<DocsPreview>
<div slot='preview'>
<ThreeDPin />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { PinContainer } from '.';
</script>

<div class="flex h-[40rem] w-full items-center justify-center">
	<PinContainer title="/aceternity.sveltekit.io" href="https://aceternity.sveltekit.io">
		<div
			class="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2"
		>
			<h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">Aceternity UI</h3>
			<div class="!m-0 !p-0 text-base font-normal">
				<span class="text-slate-500">
					Customizable Tailwind CSS and Framer Motion Components.
				</span>
			</div>
			<div
				class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
			/>
		</div>
	</PinContainer>
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

<CodeBlock path='src/lib/components/ui/ThreeDPin/PinContainer.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import PinPerspective from './PinPerspective.svelte';

	export let title: string | undefined;
	export let href: string | undefined;
	export let className: string | undefined = undefined;
	export let containerClassName: string | undefined = undefined;

	let transform = 'translate(-50%,-50%) rotateX(0deg)';

	const onMouseEnter = () => {
		transform = 'translate(-50%,-50%) rotateX(40deg) scale(0.8)';
	};
	const onMouseLeave = () => {
		transform = 'translate(-50%,-50%) rotateX(0deg) scale(1)';
	};
</script>

<div
	class={cn('group/pin relative z-50  cursor-pointer', containerClassName)}
	on:mouseenter={onMouseEnter}
	on:mouseleave={onMouseLeave}
>
	<div
		style="perspective: 1000px; translateZ(0);"
		class="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
	>
		<div
			style={`transform: ${transform};`}
			class="absolute left-1/2 top-1/2 flex items-start justify-start overflow-hidden rounded-2xl border border-white/[0.1] bg-black p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 group-hover/pin:border-white/[0.2]"
		>
			<div class={cn(' relative z-50 ', className)}><slot /></div>
		</div>
	</div>
	<PinPerspective {title} {href} />
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/ThreeDPin/PinPerspective.svelte'>

```svelte
<script lang="ts">
	import { M } from 'svelte-motion';
	import { Motion } from 'svelte-motion';

	export let title: string | undefined;
	export let href: string | undefined;
</script>

<Motion let:motion>
	<div
		use:motion
		class="pointer-events-none z-[60] flex h-80 w-96 items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100"
	>
		<div class=" inset-0 -mt-7 h-full w-full flex-none">
			<div class="absolute inset-x-0 top-0 flex justify-center">
				<a
					{href}
					target={'_blank'}
					class="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10"
				>
					<span class="relative z-20 inline-block py-0.5 text-xs font-bold text-white">
						{title}
					</span>

					<span
						class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"
					></span>
				</a>
			</div>

			<div
				style="perspective: 1000px; transform: rotateX(70deg) translateZ(0);"
				class="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
			>
				<Motion
					let:motion
					initial={{
						opacity: 0,
						scale: 0,
						x: '-50%',
						y: '-50%'
					}}
					animate={{
						opacity: [0, 1, 0.5, 0],
						scale: 1,

						z: 0
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						delay: 0
					}}
				>
					<div
						use:motion
						class="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
					></div>
				</Motion>
				<Motion
					let:motion
					initial={{
						opacity: 0,
						scale: 0,
						x: '-50%',
						y: '-50%'
					}}
					animate={{
						opacity: [0, 1, 0.5, 0],
						scale: 1,

						z: 0
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						delay: 2
					}}
				>
					<div
						use:motion
						class="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
					></div>
				</Motion>
				<Motion
					let:motion
					initial={{
						opacity: 0,
						scale: 0,
						x: '-50%',
						y: '-50%'
					}}
					animate={{
						opacity: [0, 1, 0.5, 0],
						scale: 1,

						z: 0
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						delay: 4
					}}
				>
					<div
						use:motion
						class="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
					></div>
				</Motion>
			</div>

			<Motion let:motion>
				<div
					use:motion
					class="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 blur-[2px] group-hover/pin:h-40"
				/>
			</Motion>
			<Motion let:motion>
				<div
					use:motion
					class="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 group-hover/pin:h-40"
				/>
			</Motion>
			<Motion let:motion>
				<div
					use:motion
					class="absolute bottom-1/2 right-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-cyan-600 blur-[3px]"
				/>
			</Motion>
			<Motion let:motion>
				<div
					use:motion
					class="absolute bottom-1/2 right-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-cyan-300"
				/>
			</Motion>
		</div>
	</div>
</Motion>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/ThreeDPin/index.ts'>

```ts
import PinContainer from './PinContainer.svelte';
import PinPerspective from './PinPerspective.svelte';

export { PinContainer, PinPerspective };
```

</CodeBlock>

## Props

<PropsTable path='PinContainer' props={pinContainerProps} />
