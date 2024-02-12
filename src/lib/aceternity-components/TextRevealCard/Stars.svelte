<script lang="ts">
	import { Motion } from 'svelte-motion';
	const randomMove = () => Math.random() * 4 - 2;
	const randomOpacity = () => Math.random();
	const random = () => Math.random();
</script>

<div class="absolute inset-0">
	{#each [...Array(140)] as _, i (`star-${i}`)}
		<Motion
			let:motion
			animate={{
				top: `calc(${random() * 100}% + ${randomMove()}px)`,
				left: `calc(${random() * 100}% + ${randomMove()}px)`,
				opacity: randomOpacity(),
				scale: [1, 1.2, 0]
			}}
			transition={{
				duration: random() * 10 + 20,
				repeat: Infinity,
				ease: 'linear'
			}}
			style={{
				position: 'absolute',
				top: `${random() * 100}%`,
				left: `${random() * 100}%`,
				width: `2px`,
				height: `2px`,
				backgroundColor: 'white',
				borderRadius: '50%',
				zIndex: 1
			}}
		>
			<span use:motion class="inline-block"></span>
		</Motion>
	{/each}
</div>
