<script lang="ts">
	import { IconSquareRoundedX } from '@tabler/icons-svelte';
	import MultiStepLoader from './MultiStepLoader.svelte';

	let loading = false;

	const loadingStates = [
		{
			text: 'Buying a condo'
		},
		{
			text: 'Travelling in a flight'
		},
		{
			text: 'Meeting Tyler Durden'
		},
		{
			text: 'He makes soap'
		},
		{
			text: 'We goto a bar'
		},
		{
			text: 'Start a fight'
		},
		{
			text: 'We like it'
		},
		{
			text: 'Welcome to F**** C***'
		}
	];
</script>

<div class="flex h-[60vh] w-full items-center justify-center">
	<!-- Core Loader Modal  -->
	<MultiStepLoader {loadingStates} {loading} duration={2000} />

	<!-- The buttons are for demo only, remove it in your actual code ⬇️ -->
	<button
		on:click={() => (loading = true)}
		class="mx-auto flex h-10 items-center justify-center rounded-lg bg-[#39C3EF] px-8 text-sm font-medium text-black transition duration-200 hover:bg-[#39C3EF]/90 md:text-base"
		style="box-shadow: 0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset;"
	>
		Click to load
	</button>

	{#if loading}
		<button
			class="fixed right-4 top-4 z-[120] text-black dark:text-white"
			on:click={() => (loading = false)}
		>
			<IconSquareRoundedX class="h-10 w-10" />
		</button>
	{/if}
</div>
