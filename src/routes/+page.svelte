<script>
	import AnimatedTooltipDemo from '@/aceternity-components/AnimatedTooltip/AnimatedTooltipDemo.svelte';
	import FollowingPointerDemo from '@/aceternity-components/FollowingPointer/FollowingPointerDemo.svelte';
	import GlowingStarsDemo from '@/aceternity-components/GlowingStars/GlowingStarsDemo.svelte';
	import TextRevealCardDemo from '@/aceternity-components/TextRevealCard/TextRevealCardDemo.svelte';
	import tailwindLogo from '$lib/assets/tailwind-logo-gray.svg';
	import svelteLogo from '$lib/assets/svelte-logo-gray.svg';
	import framerMotionLogo from '$lib/assets/framer-motion-logo-gray.svg';
</script>

<div class="grid gap-4 px-7 py-12 lg:grid-cols-2">
	<div class="mt-16 flex flex-col">
		<h1 class="w-4/5 text-7xl font-bold">Make your websites look 10x modern</h1>

		<p class="mb-6 mt-8 text-lg font-semibold text-gray-500">
			Copy paste the most trending components and use them in your websites without having to worry
			about styling and animations.
		</p>

		<div>
			<a
				href="/components"
				type="button"
				class="duration-400 transform rounded-lg border border-black bg-transparent px-6 py-4 font-bold text-black shadow-[0_0_0_3px_#000000_inset] transition hover:-translate-y-1 dark:border-white dark:text-white"
			>
				Browse Components
			</a>
		</div>

		<div class="mt-12 flex items-center space-x-4 font-semibold text-gray-500">
			<div class="flex items-center space-x-2">
				<img src={svelteLogo} alt="Svelte" class="h-8 w-8 stroke-white" />
				<p>Svelte</p>
			</div>
			<div class="flex items-center space-x-2">
				<img src={tailwindLogo} alt="TailwindCSS" class="h-8 w-8" />
				<p>TailwindCSS</p>
			</div>
			<div class="flex items-center space-x-2">
				<img src={framerMotionLogo} alt="Svelte Motion" class="h-8 w-8" />
				<p>Svelte Motion</p>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-4">
		<div class="flex items-end justify-end px-4">
			<AnimatedTooltipDemo />
		</div>
		<div class="flex items-center justify-center">
			<TextRevealCardDemo />
		</div>

		<div class="grid grid-cols-2 gap-4">
			<div class="h-full w-full">
				<FollowingPointerDemo showDescription={false} />
			</div>
			<div class="h-full w-full">
				<GlowingStarsDemo />
			</div>
		</div>
	</div>
</div>
