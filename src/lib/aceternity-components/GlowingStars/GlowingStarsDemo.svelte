<script lang="ts">
	import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from '.';
</script>

<GlowingStarsBackgroundCard>
	<GlowingStarsTitle>Svelte</GlowingStarsTitle>
	<div class="flex items-end justify-between">
		<GlowingStarsDescription>
			The power of full-stack to the frontend. Read the release notes.
		</GlowingStarsDescription>
		<div class="flex h-8 w-8 items-center justify-center rounded-full bg-[hsla(0,0%,100%,.1)]">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-4 w-4 stroke-2 text-white"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
				/>
			</svg>
		</div>
	</div>
</GlowingStarsBackgroundCard>
