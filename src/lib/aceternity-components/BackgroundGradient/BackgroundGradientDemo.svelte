<script lang="ts">
	import { BackgroundGradient } from '.';
</script>

<div>
	<BackgroundGradient
		animate={true}
		className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
	>
		<img
			src="https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=828&q=75"
			height="400"
			width="400"
			alt="jordans"
			class="object-contain"
		/>
		<p class="mb-2 mt-4 text-base text-black dark:text-neutral-200 sm:text-xl">
			Air Jordan 4 Retro Reimagined
		</p>

		<p class="text-sm text-neutral-600 dark:text-neutral-400">
			The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best
			opportunity to get these right now is by entering raffles and waiting for the official
			releases.
		</p>
		<button
			class="mt-4 flex items-center space-x-1 rounded-full bg-black py-1 pl-4 pr-1 text-xs font-bold text-white dark:bg-zinc-800"
		>
			<span>Buy now </span>
			<span class="rounded-full bg-zinc-700 px-2 py-0 text-[0.6rem] text-white"> $100 </span>
		</button>
	</BackgroundGradient>
</div>
