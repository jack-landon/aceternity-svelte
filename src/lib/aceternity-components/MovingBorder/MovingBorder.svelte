<script lang="ts">
	import { cn } from '$lib/utils';
	import {
		Motion,
		useAnimation,
		useMotionTemplate,
		useMotionValue,
		useTransform,
		useCycle
	} from 'svelte-motion';

	export let borderRadius: string | undefined = '1.75rem';
	export let containerClassName: string | undefined = undefined;
	export let borderClassName: string | undefined = undefined;
	export let duration: number = 2000;
	export let className: string | undefined = undefined;

	let rx = '30%';
	let ry = '30%';

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

<button
	class={cn(
		'relative h-16 w-40  overflow-hidden bg-transparent p-[1px] text-xl ',
		containerClassName
	)}
	style={`border-radius: ${borderRadius};`}
	{...$$props}
>
	<div class="absolute inset-0" style={`border-radius: calc(${borderRadius} * 0.96);`}>
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
				<div
					class={cn(
						'h-20 w-20 bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)] opacity-[0.8]',
						borderClassName
					)}
				/>
			</div>
		</Motion>
	</div>

	<div
		class={cn(
			'relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl',
			className
		)}
		style={`border-radius: calc(${borderRadius} * 0.96);`}
	>
		<slot />
	</div>
</button>
