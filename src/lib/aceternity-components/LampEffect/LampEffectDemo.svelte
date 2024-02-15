<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { LampEffect } from '.';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
</script>

<div
	use:inview={{}}
	on:inview_change={(event) => {
		const { inView, entry, scrollDirection, observer, node } = event.detail;
		isInView = inView;
	}}
	on:inview_enter={(event) => {
		const { inView, entry, scrollDirection, observer, node } = event.detail;
		isInView = inView;
	}}
	on:inview_leave={(event) => {
		const { inView, entry, scrollDirection, observer, node } = event.detail;
		isInView = inView;
	}}
	on:inview_init={(event) => {
		const { observer, node } = event.detail;
	}}
>
	<LampEffect className="w-[80vw] lg:w-[60vw]">
		<Motion
			let:motion
			initial={{ opacity: 0.5, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.3,
				duration: 0.8,
				ease: 'easeInOut'
			}}
		>
			<h1
				use:motion
				class="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
			>
				Build lamps <br /> the right way
			</h1>
		</Motion>
	</LampEffect>
</div>
