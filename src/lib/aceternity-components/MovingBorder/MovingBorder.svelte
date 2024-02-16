<script lang="ts">
	import { onMount } from 'svelte';
	import { Motion, useMotionTemplate, useMotionValue, useTransform } from 'svelte-motion';
	import { writable } from 'svelte/store';

	export let duration: number = 2000;
	export let rx: string | undefined = undefined;
	export let ry: string | undefined = undefined;

	let pathRef: SVGPathElement;

	let progress = useMotionValue<number>(0);

	$: $progress, console.log($progress);

	progress.onChange((time: number) => {
		const length = pathRef.getTotalLength();
		if (length) {
			const pxPerMillisecond = length / duration;
			progress.set((time * pxPerMillisecond) % length);
		}
	});

	let x = useTransform(progress, (val) => pathRef?.getPointAtLength(val).x);
	let y = useTransform(progress, (val) => pathRef?.getPointAtLength(val).y);

	const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="none"
	class="absolute h-full w-full"
	width="100%"
	height="100%"
	{...$$props}
>
	<rect fill="none" width="100%" height="100%" {rx} {ry} bind:this={pathRef} />
</svg>
<Motion
	let:motion
	style={{
		position: 'absolute',
		top: 0,
		left: 0,
		display: 'inline-block',
		transform
	}}
>
	<div use:motion>
		<slot />
	</div>
</Motion>
