---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import AnimatedTooltip from '$lib/aceternity-components/AnimatedTooltip/AnimatedTooltipDemo.svelte'

    let props = [
        {name: 'items', type: 'Array<{id: number, name: string, designation: string, image: string}>', description: 'An array of objects, each representing an item. Each object in the array should have the following properties: id, name, designation, image'}]
</script>

<DocsPreview>
<div slot='preview'>
<AnimatedTooltip />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import AnimatedTooltip from './AnimatedTooltip.svelte';

	const people = [
		{
			id: 1,
			name: 'John Doe',
			designation: 'Software Engineer',
			image:
				'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80'
		},
		{
			id: 2,
			name: 'Robert Johnson',
			designation: 'Product Manager',
			image:
				'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 3,
			name: 'Jane Smith',
			designation: 'Data Scientist',
			image:
				'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 4,
			name: 'Emily Davis',
			designation: 'UX Designer',
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 5,
			name: 'Tyler Durden',
			designation: 'Soap Developer',
			image:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'
		},
		{
			id: 6,
			name: 'Dora',
			designation: 'The Explorer',
			image:
				'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80'
		}
	];
</script>

<AnimatedTooltip items={people} />
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/AnimatedTooltip/AnimatedTooltip.svelte'>

```svelte
<script lang="ts">
	import { Motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'svelte-motion';

	export let items: {
		id: number;
		name: string;
		designation: string;
		image: string;
	}[];

	let hoveredIndex: number | null = null;
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useMotionValue(0); // going to set this value on mouse move
	// rotate the tooltip
	const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
	// translate the tooltip
	const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
	const handleMouseMove = (event: MouseEvent) => {
		// @ts-ignore
		const halfWidth = event.target?.offsetWidth / 2;
		x.set(event.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
	};
</script>

<div class="group flex flex-row">
	{#each items as item, idx (item.name)}
		<div
			class="relative -mr-4"
			on:mouseenter={() => (hoveredIndex = item.id)}
			on:mouseleave={() => (hoveredIndex = null)}
		>
			<AnimatePresence show={true}>
				{#if hoveredIndex === item.id}
					<Motion
						let:motion
						initial={{ opacity: 0, y: 20, scale: 0.6 }}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1,
							transition: {
								type: 'spring',
								stiffness: 260,
								damping: 10
							}
						}}
						exit={{ opacity: 0, y: 20, scale: 0.6 }}
						style={{
							translateX: translateX,
							rotate: rotate,
							whiteSpace: 'nowrap'
						}}
					>
						<div
							use:motion
							class="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
						>
							<div
								class="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
							/>
							<div
								class="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent"
							/>
							<div class="relative z-30 whitespace-nowrap text-base font-bold text-white">
								{item.name}
							</div>
							<div class="whitespace-nowrap text-xs text-white">{item.designation}</div>
						</div>
					</Motion>
				{/if}
			</AnimatePresence>
			<img
				on:mousemove={handleMouseMove}
				height={100}
				width={100}
				src={item.image}
				alt={item.name}
				class="relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
			/>
		</div>
	{/each}
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/AnimatedTooltip/index.ts'>

```ts
import AnimatedTooltip from './AnimatedTooltip.svelte';

export { AnimatedTooltip };
```

</CodeBlock>

## Props

<PropsTable path='AnimatedTooltip' props={props} />
