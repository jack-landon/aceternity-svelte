<script lang="ts">
	import { Motion, AnimatePresence, useMotionValue } from 'svelte-motion';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	export let className: string | undefined = undefined;

	let x = useMotionValue(0);
	let y = useMotionValue(0);
	let ref: HTMLDivElement;
	let rect: DOMRect | null = null;
	let isInside: boolean = false;

	const colors = [
		'bg-sky-500',
		'bg-neutral-500',
		'bg-teal-500',
		'bg-green-500',
		'bg-blue-500',
		'bg-red-500',
		'bg-yellow-500'
	];

	onMount(() => {
		if (ref) {
			rect = ref.getBoundingClientRect();
		}
	});

	const handleMouseMove = (e: MouseEvent) => {
		if (rect) {
			const scrollX = window.scrollX;
			const scrollY = window.scrollY;
			x.set(e.clientX - rect.left + scrollX);
			y.set(e.clientY - rect.top + scrollY);
		}
	};
	const handleMouseLeave = () => {
		isInside = false;
	};

	const handleMouseEnter = () => {
		isInside = true;
	};
</script>

<div
	on:mouseleave={handleMouseLeave}
	on:mouseenter={handleMouseEnter}
	on:mousemove={handleMouseMove}
	style="cursor: none;"
	bind:this={ref}
	class={cn('relative', className)}
>
	<AnimatePresence show={true}>
		{#if isInside}
			<Motion
				let:motion
				style={{
					top: y,
					left: x,
					pointerEvents: 'none'
				}}
				initial={{
					scale: 1,
					opacity: 1
				}}
				animate={{
					scale: 1,
					opacity: 1
				}}
				exit={{
					scale: 0,
					opacity: 0
				}}
			>
				<div use:motion class="absolute z-50 h-4 w-4 rounded-full">
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="1"
						viewBox="0 0 16 16"
						class="h-6 w-6 -translate-x-[12px] -rotate-[70deg] transform stroke-sky-600 text-sky-500"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
						></path>
					</svg>
					<Motion
						let:motion
						initial={{
							scale: 0.5,
							opacity: 0
						}}
						animate={{
							scale: 1,
							opacity: 1
						}}
						exit={{
							scale: 0.5,
							opacity: 0
						}}
					>
						<div
							use:motion
							class={`min-w-max whitespace-nowrap rounded-full bg-neutral-200 p-2 text-xs text-white ${colors[Math.floor(Math.random() * colors.length)]}`}
						>
							{#if $$slots.title}
								<slot name="title" />
							{:else}
								William Shakespeare
							{/if}
						</div>
					</Motion>
				</div>
			</Motion>
		{/if}
	</AnimatePresence>
	<slot />
</div>
