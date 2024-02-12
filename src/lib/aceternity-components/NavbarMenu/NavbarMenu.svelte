<script lang="ts">
	export let active: string | null;

	const transition = {
		type: 'spring',
		mass: 0.5,
		damping: 11.5,
		stiffness: 100,
		restDelta: 0.001,
		restSpeed: 0.001
	};
</script>

<nav
	on:mouseleave={() => (active = null)}
	class="boder relative flex justify-center space-x-4 rounded-full border-transparent bg-white px-8 py-6 shadow-input dark:border-white/[0.2] dark:bg-black"
>
	<slot />
</nav>
