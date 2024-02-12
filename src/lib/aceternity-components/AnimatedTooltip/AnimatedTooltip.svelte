<script lang="ts">
	import {
		Motion,
		transform,
		useMotionValue,
		useSpring,
		useTransform,
		AnimatePresence
	} from 'svelte-motion';

	export let items: {
		id: number;
		name: string;
		designation: string;
		image: string;
	}[];

	let hoveredIndex: number | null = null;

	let springConfig = { stiffness: 100, damping: 5 };
	let x = useMotionValue(0); // going to set this value on mouse move
	// rotate the tooltip
	let rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
	// translate the tooltip
	let translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
	let handleMouseMove = (event: MouseEvent) => {
		if (!event.target) return;
		const halfWidth = event.target.offsetWidth / 2;
		console.log(halfWidth);
		const xToSet = event.offsetX - halfWidth;
		x.set(xToSet); // set the x value, which is then used in transform and rotate
		// x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
	};

	$: rotate, console.log(rotate);
	$: translateX, console.log(translateX);
</script>

{#each items as item, idx (item.name)}
	<div
		class="group relative -mr-4"
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
				>
					<div
						use:motion
						style={`translateX: ${translateX}; rotate: ${rotate}; white-space: nowrap;`}
						class="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
					>
						<div
							class="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
						/>
						<div
							class="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent"
						/>
						<div class="relative z-30 text-base font-bold text-white">
							{item.name}
						</div>
						<div class="text-xs text-white">{item.designation}</div>
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
