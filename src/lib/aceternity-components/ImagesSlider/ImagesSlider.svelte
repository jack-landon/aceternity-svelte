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
