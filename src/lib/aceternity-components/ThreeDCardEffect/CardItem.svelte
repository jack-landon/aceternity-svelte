<script lang="ts">
	import { cn } from '@/utils';

	export let className: string | undefined;
	export let translateX: number | string | undefined = 0;
	export let translateY: number | string | undefined = 0;
	export let translateZ: number | string | undefined = 0;
	export let rotateX: number | string | undefined = 0;
	export let rotateY: number | string | undefined = 0;
	export let rotateZ: number | string | undefined = 0;

	let ref: HTMLDivElement;
	let isMouseEntered: boolean = false;
	$: isMouseEntered, handleAnimations;

	const handleAnimations = () => {
		if (!ref) return;
		if (isMouseEntered) {
			ref.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
		} else {
			ref.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
		}
	};
</script>

<div
	bind:this={ref}
	on:mouseenter={() => (isMouseEntered = true)}
	on:mousemove={() => (isMouseEntered = true)}
	on:mouseleave={() => (isMouseEntered = false)}
	class={cn('w-fit transition duration-200 ease-linear', className)}
	{...$$props}
>
	<slot />
</div>
