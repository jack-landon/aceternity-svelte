---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import ImagesSliderDemo from '$lib/aceternity-components/ImagesSlider/ImagesSliderDemo.svelte'

    let props = [
        {name: 'images', type: 'string[]', description: 'An array of image URLs to be displayed in the slider.'},
        {name: 'overlay', type: 'boolean', description: 'Default: true. If true, an overlay will be displayed on the images.'},
		{name: 'overlayClassName', type: 'string | undefined', description: 'Default: undefined. The CSS class name to be applied to the overlay.'},
		{name: 'className', type: 'string | undefined', description: 'Default: undefined. The CSS class name to be applied to the slider.'},
		{name: 'autoplay', type: 'boolean | undefined', description: 'Default: true. If true, the slider will automatically move to the next image every 5 seconds.'},
		{name: 'direction', type: '"up" | "down" | undefined', description: 'Default: "up".The direction of the transition when changing images.'}
		]
</script>

<DocsPreview>
<div slot='preview'>
<ImagesSliderDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import ImagesSlider from './ImagesSlider.svelte';
	import { Motion } from 'svelte-motion';

	const images = [
		'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	];
</script>

<ImagesSlider className="h-[40rem]" {images}>
	<Motion
		let:motion
		initial={{
			opacity: 0,
			y: -80
		}}
		animate={{
			opacity: 1,
			y: 0
		}}
		transition={{
			duration: 0.6
		}}
	>
		<div use:motion class="z-50 flex flex-col items-center justify-center px-8">
			<Motion let:motion>
				<p
					use:motion
					class="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl"
				>
					The hero section slideshow <br /> nobody asked for
				</p>
			</Motion>
			<button
				class="relative mx-auto mt-4 rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-center text-white backdrop-blur-sm"
			>
				<span>Join now →</span>
				<div
					class="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
				/>
			</button>
		</div>
	</Motion>
</ImagesSlider>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock dependencies={['svelte-motion', 'clsx', 'tailwind-merge']} />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/ImagesSlider/ImagesSlider.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import { onMount } from 'svelte';
	import { Motion, AnimatePresence } from 'svelte-motion';

	export let images: string[];
	export let overlay = true;
	export let overlayClassName: string | undefined = undefined;
	export let className: string | undefined = undefined;
	export let autoplay: boolean | undefined = true;
	export let direction: 'up' | 'down' | undefined = 'up';

	let currentIndex = 0;
	let loading = false;
	let loadedImages: string[] = [];

	const variants = {
		initial: {
			scale: 0,
			opacity: 0,
			rotateX: 45
		},
		visible: {
			scale: 1,
			rotateX: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: [0.645, 0.045, 0.355, 1.0]
			}
		},
		upExit: {
			opacity: 1,
			y: '-150%',
			transition: {
				duration: 1
			}
		},
		downExit: {
			opacity: 1,
			y: '150%',
			transition: {
				duration: 1
			}
		}
	};
	const wrap = (a: number, l: number) => {
		const u = a % l;
		if (u < 0) {
			return u + l;
		}
		return u;
	};
	let c = 1;

	onMount(() => {
		loadImages();
	});

	const loadImages = () => {
		loading = true;
		const loadPromises = images.map((image) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.src = image;
				img.onload = () => resolve(image);
				img.onerror = reject;
			});
		});

		Promise.all(loadPromises)
			.then((loadedImagesFromPromise) => {
				loadedImages = loadedImagesFromPromise as string[];
				loading = false;
			})
			.catch((error) => console.error('Failed to load images', error));
	};

	onMount(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowRight') {
				handleNext();
			} else if (event.key === 'ArrowLeft') {
				handlePrevious();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		// autoplay
		let interval: any;
		if (autoplay) {
			interval = setInterval(() => {
				handleNext();
			}, 5000);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			clearInterval(interval);
		};
	});

	const handleNext = () => {
		currentIndex = currentIndex + 1 === images.length ? 0 : currentIndex + 1;
	};

	const handlePrevious = () => {
		currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
	};

	$: areImagesLoaded = loadedImages.length > 0;
</script>

<div
	class={cn('relative flex h-full w-full items-center justify-center overflow-hidden', className)}
	style="perspective: 1000px;"
>
	{#if areImagesLoaded}
		<slot />
	{/if}

	{#if areImagesLoaded && overlay}
		<div class={cn('absolute inset-0 z-40 bg-black/60', overlayClassName)} />
	{/if}

	<AnimatePresence
		list={[{ key: currentIndex, text: images[wrap(currentIndex, images.length)] }]}
		let:item
	>
		<Motion
			let:motion
			custom={c}
			{variants}
			initial="initial"
			animate="visible"
			exit={direction === 'up' ? 'upExit' : 'downExit'}
			transition={{
				x: { type: 'spring', stiffness: 300, damping: 30 },
				opacity: { duration: 0.2 }
			}}
		>
			<img
				use:motion
				src={item.text}
				alt="example"
				class="image absolute inset-0 h-full w-full object-cover object-center"
			/>
		</Motion>
	</AnimatePresence>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/ImagesSlider/index.ts'>

```ts
import ImagesSlider from './ImagesSlider.svelte';

export { ImagesSlider };
```

</CodeBlock>

## Props

<PropsTable path='ImagesSlider' props={props} />
