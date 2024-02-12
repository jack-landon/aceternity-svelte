---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import BackgroundGradient from '$lib/aceternity-components/BackgroundGradient/BackgroundGradientDemo.svelte'

    let props = [
        {name: 'className', type: 'string | undefined', description: 'The CSS class to be applied to the inner div.'},
        {name: 'containerClassName', type: 'string | undefined', description: 'The CSS class to be applied to the outermost div.'},
		{name: 'animate', type: 'boolean', description: 'Default: true. Determines whether the gradient background should animate. If false, the gradient background will be static.'}]
</script>

<DocsPreview>
<div slot='preview'>
<BackgroundGradient />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { BackgroundGradient } from '.';
</script>

<div>
	<BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
		<img
			src="https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75"
			height="400"
			width="400"
			alt="jordans"
			class="object-contain"
		/>
		<p class="mb-2 mt-4 text-base text-black dark:text-neutral-200 sm:text-xl">
			Air Jordan 4 Retro Reimagined
		</p>

		<p class="text-sm text-neutral-600 dark:text-neutral-400">
			The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best
			opportunity to get these right now is by entering raffles and waiting for the official
			releases.
		</p>
		<button
			class="mt-4 flex items-center space-x-1 rounded-full bg-black py-1 pl-4 pr-1 text-xs font-bold text-white dark:bg-zinc-800"
		>
			<span>Buy now </span>
			<span class="rounded-full bg-zinc-700 px-2 py-0 text-[0.6rem] text-white"> $100 </span>
		</button>
	</BackgroundGradient>
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

<CodeBlock path='src/lib/components/ui/BackgroundGradient/BackgroundGradient.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import { Motion } from 'svelte-motion';

	export let className: string | undefined = undefined;
	export let containerClassName: string | undefined = undefined;
	export let animate: boolean | undefined = true;

	const variants = {
		initial: {
			backgroundPosition: '0 50%'
		},
		animate: {
			backgroundPosition: ['0, 50%', '100% 50%', '0 50%']
		}
	};
</script>

<div class={cn('group relative p-[4px]', containerClassName)}>
	<Motion
		let:motion
		variants={animate ? variants : undefined}
		initial={animate ? 'initial' : undefined}
		animate={animate ? 'animate' : undefined}
		transition={animate
			? {
					duration: 5,
					repeat: Infinity,
					repeatType: 'reverse'
				}
			: undefined}
		style={{
			backgroundSize: animate ? '400% 400%' : undefined
		}}
	>
		<div
			use:motion
			class={cn(
				'absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition  duration-500 group-hover:opacity-100',
				' bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
			)}
		/>
	</Motion>

	<Motion
		let:motion
		variants={animate ? variants : undefined}
		initial={animate ? 'initial' : undefined}
		animate={animate ? 'animate' : undefined}
		transition={animate
			? {
					duration: 5,
					repeat: Infinity,
					repeatType: 'reverse'
				}
			: undefined}
		style={{
			backgroundSize: animate ? '400% 400%' : undefined
		}}
	>
		<div
			use:motion
			class={cn(
				'absolute inset-0 z-[1] rounded-3xl',
				'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
			)}
		/>
	</Motion>

	<div class={cn('relative z-10', className)}><slot /></div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/BackgroundGradient/index.ts'>

```ts
import BackgroundGradient from './BackgroundGradient.svelte';

export { BackgroundGradient };
```

</CodeBlock>

## Props

<PropsTable path='BackgroundGradient' props={props} />
