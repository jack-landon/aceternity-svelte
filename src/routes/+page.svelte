<script>
	import AnimatedTooltipDemo from '@/aceternity-components/AnimatedTooltip/AnimatedTooltipDemo.svelte';
	import FollowingPointerDemo from '@/aceternity-components/FollowingPointer/FollowingPointerDemo.svelte';
	import GlowingStarsDemo from '@/aceternity-components/GlowingStars/GlowingStarsDemo.svelte';
	import TextRevealCardDemo from '@/aceternity-components/TextRevealCard/TextRevealCardDemo.svelte';
	import tailwindLogo from '$lib/assets/tailwind-logo-gray.svg';
	import svelteLogo from '$lib/assets/svelte-logo-gray.svg';
	import framerMotionLogo from '$lib/assets/framer-motion-logo-gray.svg';
	import { Metadata } from '$components/docs';
</script>

<Metadata title="Aceternity UI Svelte - Free Incredible Animated Components" />

<div class="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-7 md:py-12">
	<div class="mt-16 flex flex-col text-center sm:text-start">
		<h1 class="w-11/12 text-4xl font-bold lg:text-7xl">Make your Svelte app look 10x modern</h1>

		<p class="mb-4 mt-8 text-lg font-semibold text-gray-500">
			Copy paste the most trending components and use them in your websites without having to worry
			about styling and animations.
		</p>
		<p class="mb-6 text-sm font-semibold text-orange-600">
			This is an unofficial port of <a
				href="https://ui.aceternity.com/"
				target="_blank"
				class="font-bold hover:underline">Aceternity UI</a
			>
			to Svelte, and is not affiliated with
			<a href="https://twitter.com/mannupaaji" target="_blank" class="font-bold hover:underline"
				>@mannupaaji</a
			>.
		</p>

		<div class="self-center md:self-start">
			<a
				href="/components"
				type="button"
				class="duration-400 transform rounded-lg border border-black bg-transparent px-6 py-4 font-bold text-black shadow-[0_0_0_3px_#000000_inset] transition hover:-translate-y-1 dark:border-white dark:text-white"
			>
				Browse Components
			</a>
		</div>

		<div
			class="mt-12 grid grid-cols-1 items-center gap-2 self-center font-semibold text-gray-500 sm:flex sm:gap-4 sm:self-start"
		>
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
		<div class="flex items-end justify-center px-4 md:justify-end">
			<AnimatedTooltipDemo />
		</div>
		<div class="flex items-center justify-center">
			<TextRevealCardDemo />
		</div>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div class="h-full w-full">
				<FollowingPointerDemo showDescription={false} />
			</div>
			<div class="h-full w-full">
				<GlowingStarsDemo />
			</div>
		</div>
	</div>
</div>
