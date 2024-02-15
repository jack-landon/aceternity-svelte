<script lang="ts">
	import ImagesSlider from './ImagesSlider.svelte';
	import { Motion } from 'svelte-motion';

	const images = [
		'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	];
</script>

<ImagesSlider className="h-[40rem]" {images}>
	<Motion
		let:motion
		initial={{
			opacity: 0,
			y: -80
		}}
		animate={{
			opacity: 1,
			y: 0
		}}
		transition={{
			duration: 0.6
		}}
	>
		<div use:motion class="z-50 flex flex-col items-center justify-center px-8">
			<Motion let:motion>
				<p
					use:motion
					class="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl"
				>
					The hero section slideshow <br /> nobody asked for
				</p>
			</Motion>
			<button
				class="relative mx-auto mt-4 rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-center text-white backdrop-blur-sm"
			>
				<span>Join now →</span>
				<div
					class="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
				/>
			</button>
		</div>
	</Motion>
</ImagesSlider>
