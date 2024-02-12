<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<SVGElement>;
</script>

<div
	class="relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-black text-sm text-white antialiased md:h-6 md:w-6"
>
	<div class="absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/[0.2] blur-xl"></div>
	<div class="relative z-20 text-sm text-emerald-500">
		<svg
			width="66"
			height="65"
			viewBox="0 0 66 65"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="h-3 w-3 text-orange-600"
			><path
				d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
				stroke="currentColor"
				stroke-width="15"
				stroke-miterlimit="3.86874"
				stroke-linecap="round"
				style="mix-blend-mode:darken"
			></path></svg
		>
	</div>
</div>
