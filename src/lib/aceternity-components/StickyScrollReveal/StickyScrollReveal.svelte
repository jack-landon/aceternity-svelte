<script lang="ts">
	import { useElementScroll, Motion } from 'svelte-motion';

	export let content: { title: string; description: string }[] = [];

	let activeCard = 0;
	let ref: HTMLDivElement | null = null;
	const { scrollYProgress } = useElementScroll({
		arguments: {
			container: ref,
			offset: ['start start', 'end start']
		}
	});
	const cardLength = content.length;

	scrollYProgress.onChange((latest) => {
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		cardsBreakpoints.forEach((breakpoint, index) => {
			if (latest > breakpoint - 0.2 && latest <= breakpoint) {
				activeCard = index;
			}
		});
	});

	// useMotionValueEvent(scrollYProgress, 'change', (latest) => {
	// 	const cardsBreakpoints = content.map((_, index) => index / cardLength);
	// 	cardsBreakpoints.forEach((breakpoint, index) => {
	// 		if (latest > breakpoint - 0.2 && latest <= breakpoint) {
	// 			activeCard = index;
	// 		}
	// 	});
	// });

	const backgroundColors = ['var(--slate-900)', 'var(--black)', 'var(--neutral-900)'];
	const linearGradients = [
		'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
		'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
		'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))'
	];
</script>

<Motion
	let:motion
	animate={{
		backgroundColor: backgroundColors[activeCard % backgroundColors.length]
	}}
>
	<div
		use:motion
		class="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
		bind:this={ref}
	>
		<div class="div relative flex items-start px-4">
			<div class="max-w-2xl">
				{#each content as item, index (`${item.title}${index}`)}
					<div class="my-20">
						<Motion
							let:motion
							initial={{
								opacity: 0
							}}
							animate={{
								opacity: activeCard === index ? 1 : 0.3
							}}
						>
							<h2 use:motion class="text-2xl font-bold text-slate-100">
								{item.title}
							</h2>
						</Motion>
						<Motion
							let:motion
							initial={{
								opacity: 0
							}}
							animate={{
								opacity: activeCard === index ? 1 : 0.3
							}}
						>
							<p use:motion class="text-kg mt-10 max-w-sm text-slate-300">
								{item.description}
							</p>
						</Motion>
					</div>
				{/each}
				<div class="h-40" />
			</div>
		</div>
		<Motion
			let:motion
			animate={{
				background: linearGradients[activeCard % linearGradients.length]
			}}
		>
			<div
				use:motion
				class="sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block"
			></div>
		</Motion>
	</div>
</Motion>
