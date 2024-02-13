---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import DirectionAwareHover from '$lib/aceternity-components/DirectionAwareHover/DirectionAwareHoverDemo.svelte'

    let props = [
        {name: 'imageUrl', type: 'string', description: 'The URL of the image to be displayed.'},
        {name: 'childrenClassName', type: 'string | undefined', description: 'The CSS class to be applied to the children.'},
		{name: 'imageClassName', type: 'string | undefined', description: 'The CSS class to be applied to the image.'},
		{name: 'className', type: 'string | undefined', description: 'The CSS class to be applied to the component.'}
		]
</script>

<DocsPreview>
<div slot='preview'>
<DirectionAwareHover />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { DirectionAwareHover } from '.';

	const imageUrl =
		'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<div class="relative flex items-center justify-center">
	<DirectionAwareHover {imageUrl}>
		<p class="text-xl font-bold">In the mountains</p>
		<p class="text-sm font-normal">$1299 / night</p>
	</DirectionAwareHover>
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

<CodeBlock path='src/lib/components/ui/DirectionAwareHover/DirectionAwareHover.svelte'>

```svelte
<script lang="ts">
	import { AnimatePresence, Motion } from 'svelte-motion';
	import { cn } from '@/utils';

	export let imageUrl: string;
	export let childrenClassName: string | undefined = undefined;
	export let imageClassName: string | undefined = undefined;
	export let className: string | undefined = undefined;

	let ref: HTMLDivElement;

	let direction: 'top' | 'bottom' | 'left' | 'right' | string = 'left';

	const handleMouseEnter = (event: MouseEvent) => {
		if (!ref) return;

		const fetchedDirection = getDirection(event, ref);
		switch (fetchedDirection) {
			case 0:
				direction = 'top';
				break;
			case 1:
				direction = 'right';
				break;
			case 2:
				direction = 'bottom';
				break;
			case 3:
				direction = 'left';
				break;
			default:
				direction = 'left';
				break;
		}
	};

	const getDirection = (ev: MouseEvent, obj: HTMLElement) => {
		const { width: w, height: h, left, top } = obj.getBoundingClientRect();
		const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
		const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
		const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
		return d;
	};

	const variants = {
		initial: {
			x: 0
		},

		exit: {
			x: 0,
			y: 0
		},
		top: {
			y: 20
		},
		bottom: {
			y: -20
		},
		left: {
			x: 20
		},
		right: {
			x: -20
		}
	};

	const textVariants = {
		initial: {
			y: 0,
			x: 0,
			opacity: 0
		},
		exit: {
			y: 0,
			x: 0,
			opacity: 0
		},
		top: {
			y: -20,
			opacity: 1
		},
		bottom: {
			y: 2,
			opacity: 1
		},
		left: {
			x: -2,
			opacity: 1
		},
		right: {
			x: 20,
			opacity: 1
		}
	};
</script>

<Motion let:motion>
	<div
		use:motion
		on:mouseenter={handleMouseEnter}
		bind:this={ref}
		class={cn(
			'group/card relative h-60 w-60 overflow-hidden rounded-lg bg-transparent md:h-96 md:w-96',
			className
		)}
	>
		<AnimatePresence show={true}>
			<Motion let:motion initial="initial" whileHover={direction} exit="exit">
				<div use:motion class="h-full w-full">
					<Motion let:motion>
						<div
							use:motion
							class="absolute inset-0 z-10 hidden h-full w-full bg-black/40 transition duration-500 group-hover/card:block"
						/>
					</Motion>
					<Motion
						let:motion
						transition={{
							duration: 0.2,
							ease: 'easeOut'
						}}
						{variants}
					>
						<div use:motion class="relative h-full w-full bg-gray-50 dark:bg-black">
							<img
								src={imageUrl}
								alt="image"
								class={cn('h-full w-full scale-150 object-cover', imageClassName)}
								width="1000"
								height="1000"
							/>
						</div>
					</Motion>
					<Motion
						let:motion
						variants={textVariants}
						transition={{
							duration: 0.5,
							ease: 'easeOut'
						}}
					>
						<div
							use:motion
							class={cn('absolute bottom-4 left-4 z-40 text-white', childrenClassName)}
						>
							<slot />
						</div>
					</Motion>
				</div>
			</Motion>
		</AnimatePresence>
	</div>
</Motion>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/DirectionAwareHover/index.ts'>

```ts
import DirectionAwareHover from './DirectionAwareHover.svelte';

export { DirectionAwareHover };
```

</CodeBlock>

## Props

<PropsTable path='DirectionAwareHover' props={props} />
