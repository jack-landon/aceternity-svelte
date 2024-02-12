<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cn } from '$lib/utils';

	export let words: string;
	export let className: string | undefined = undefined;
</script>

<div class={cn('font-bold', className)}>
	<div class="mt-4">
		<div class=" text-2xl leading-snug tracking-wide text-black dark:text-white">
			<Motion
				let:motion
				animate={{
					opacity: 1
				}}
				transition={{
					duration: 2,
					staggerChildren: 0.2
				}}
				initial={{
					opacity: 0
				}}
			>
				<div use:motion>
					{#each words.split(' ') as word, idx (`${word}${idx}`)}
						<Motion let:motion>
							<span use:motion class="text-black dark:text-white">
								{word}{' '}
							</span>
						</Motion>
					{/each}
				</div>
			</Motion>
		</div>
	</div>
</div>
