<script lang="ts">
	import { Motion, useTransform, useElementScroll, useVelocity, useSpring } from 'svelte-motion';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	export let className: string | undefined = undefined;

	const { scrollYProgress } = useElementScroll({});

	// track velocity of scroll to increase or decrease distance between svg gradient y coordinates.
	const scrollYProgressVelocity = useVelocity(scrollYProgress);
	let velo = 0;

	let contentRef: HTMLDivElement;

	let svgHeight = 0;

	onMount(() => {
		if (contentRef) {
			svgHeight = contentRef.offsetHeight;
		}
	});

	onMount(() => {
		return scrollYProgressVelocity.onChange((latestVelocity) => {
			velo = latestVelocity;
		});
	});

	const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight - velo * 500]), {
		stiffness: 500,
		damping: 90
	});
	const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - velo * 2000]), {
		stiffness: 500,
		damping: 90
	});
</script>

<Motion let:motion>
	<div use:motion class={cn('relative mx-auto h-full w-full max-w-4xl', className)}>
		<div class="absolute -left-20 top-3">
			<Motion
				let:motion
				transition={{
					duration: 0.2,
					delay: 0.5
				}}
				animate={{
					boxShadow: scrollYProgress.get() > 0 ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
				}}
			>
				<div
					use:motion
					class="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
				>
					<Motion
						let:motion
						transition={{
							duration: 0.2,
							delay: 0.5
						}}
						animate={{
							backgroundColor: scrollYProgress.get() > 0 ? 'white' : 'var(--emerald-500)',
							borderColor: scrollYProgress.get() > 0 ? 'white' : 'var(--emerald-600)'
						}}
					>
						<div use:motion class="h-2 w-2 rounded-full border border-neutral-300 bg-white" />
					</Motion>
				</div>
			</Motion>
			<svg
				viewBox={`0 0 20 ${svgHeight}`}
				width="20"
				height={svgHeight}
				class=" ml-4 hidden lg:block"
				aria-hidden="true"
			>
				<Motion
					let:motion
					isSVG
					transition={{
						duration: 10
					}}
				>
					<path
						use:motion
						d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
						fill="none"
						stroke="#9091A0"
						stroke-opacity="0.16"
					></path>
				</Motion>
				<Motion
					let:motion
					isSVG
					transition={{
						duration: 10
					}}
				>
					<path
						use:motion
						d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
						fill="none"
						stroke="url(#gradient)"
						stroke-width="1.25"
						class="motion-reduce:hidden"
					></path>
				</Motion>
				<defs>
					<Motion let:motion isSVG>
						<linearGradient
							use:motion
							id="gradient"
							gradientUnits="userSpaceOnUse"
							x1="0"
							x2="0"
							{y1}
							{y2}
						>
							<stop stop-color="#18CCFC" stop-opacity="0"></stop>
							<stop stop-color="#18CCFC"></stop>
							<stop offset="0.325" stop-color="#6344F5"></stop>
							<stop offset="1" stop-color="#AE48FF" stop-opacity="0"></stop>
						</linearGradient>
					</Motion>
				</defs>
			</svg>
		</div>
		<div bind:this={contentRef}><slot /></div>
	</div>
</Motion>
