---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import LampEffect from '$lib/aceternity-components/LampEffect/LampEffectDemo.svelte'

    let props = [
        {name: 'className', type: 'string | undefined', description: 'Classname for the container'}]
</script>

<DocsPreview>
<div slot='preview'>
<LampEffect />
</div>

<div slot='code'>

```svelte
<script>
	import { Motion } from 'svelte-motion';
	import { LampEffect } from '.';
</script>

<LampEffect>
	<Motion
		let:motion
		initial={{ opacity: 0.5, y: 100 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{
			delay: 0.3,
			duration: 0.8,
			ease: 'easeInOut'
		}}
	>
		<h1
			use:motion
			class="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
		>
			Build lamps <br /> the right way
		</h1>
	</Motion>
</LampEffect>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/LampEffect/LampEffect.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import { Motion } from 'svelte-motion';

	export let className: string | undefined = undefined;
</script>

<div
	class={cn(
		'relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-slate-950',
		className
	)}
>
	<div class="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
		<Motion
			let:motion
			initial={{ opacity: 0.5, width: '15rem' }}
			whileInView={{ opacity: 1, width: '30rem' }}
			transition={{
				delay: 0.3,
				duration: 0.8,
				ease: 'easeInOut'
			}}
			style={{
				backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`
			}}
		>
			<div
				use:motion
				class="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
			>
				<div
					class="absolute bottom-0 left-0 z-20 h-40 w-[100%] bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"
				/>
				<div
					class="absolute bottom-0 left-0 z-20 h-[100%] w-40 bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]"
				/>
			</div>
		</Motion>
		<Motion
			let:motion
			initial={{ opacity: 0.5, width: '15rem' }}
			whileInView={{ opacity: 1, width: '30rem' }}
			transition={{
				delay: 0.3,
				duration: 0.8,
				ease: 'easeInOut'
			}}
			style={{
				backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`
			}}
		>
			<div
				use:motion
				style="background-image: conic-gradient(var(--conic-position), var(--tw-gradient-stops));"
				class="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
			>
				<div
					class="absolute bottom-0 right-0 z-20 h-[100%] w-40 bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]"
				/>
				<div
					class="absolute bottom-0 right-0 z-20 h-40 w-[100%] bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"
				/>
			</div>
		</Motion>
		<div
			class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"
		></div>
		<div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
		<div
			class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"
		></div>
		<Motion
			let:motion
			initial={{ width: '8rem' }}
			whileInView={{ width: '16rem' }}
			transition={{
				delay: 0.3,
				duration: 0.8,
				ease: 'easeInOut'
			}}
		>
			<div
				use:motion
				class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
			></div>
		</Motion>
		<Motion
			let:motion
			initial={{ width: '15rem' }}
			whileInView={{ width: '30rem' }}
			transition={{
				delay: 0.3,
				duration: 0.8,
				ease: 'easeInOut'
			}}
		>
			<div
				use:motion
				class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
			></div>
		</Motion>

		<div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
	</div>

	<div class="relative z-50 flex -translate-y-80 flex-col items-center px-5">
		<slot />
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/LampEffect/index.ts'>

```ts
import LampEffect from './LampEffect.svelte';

export { LampEffect };
```

</CodeBlock>

## Props

<PropsTable path='LampEffect' props={props} />
