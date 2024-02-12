<script lang="ts">
	import GradientAnimation from './GradientAnimation.svelte';
</script>

<GradientAnimation>
	<div
		class="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"
	>
		<p
			class="bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-transparent drop-shadow-2xl"
		>
			Gradients X Animations
		</p>
	</div>
</GradientAnimation>
