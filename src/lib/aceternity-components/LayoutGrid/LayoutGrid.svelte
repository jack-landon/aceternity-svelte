<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cn } from '$lib/utils';
	import BlurImage from './BlurImage.svelte';

	type Card = {
		id: number;
		content: HTMLElement | string;
		className: string;
		thumbnail: string;
	};

	export let cards: Card[] = [];

	let selected: Card | null = null;
	let lastSelected: Card | null = null;

	const handleClick = (card: Card) => {
		lastSelected = selected;
		selected = card;
	};

	const handleOutsideClick = () => {
		lastSelected = selected;
		selected = null;
	};
</script>

<div class="mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-4 p-10 md:grid-cols-3">
	{#each cards as card, i (i)}
		<div class={cn(card.className, '')}>
			<Motion let:motion layout>
				<div
					use:motion
					on:click={() => handleClick(card)}
					class={cn(
						card.className,
						'relative overflow-hidden',
						selected?.id === card.id
							? 'absolute inset-0 z-50 m-auto flex h-1/2 w-full cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2'
							: lastSelected?.id === card.id
								? 'z-40 h-full w-full rounded-xl bg-white'
								: 'h-full w-full rounded-xl bg-white'
					)}
				>
					{#if selected?.id === card.id}
						<div
							class="relative z-[60] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl"
						>
							<Motion
								let:motion
								initial={{
									opacity: 0
								}}
								animate={{
									opacity: 0.6
								}}
							>
								<div use:motion class="absolute inset-0 z-10 h-full w-full bg-black opacity-60" />
							</Motion>
							<Motion
								let:motion
								initial={{
									opacity: 0,
									y: 100
								}}
								animate={{
									opacity: 1,
									y: 0
								}}
								transition={{
									duration: 0.3,
									ease: 'easeInOut'
								}}
							>
								<div use:motion class="relative z-[70] px-8 pb-4">
									{@html selected?.content}
								</div>
							</Motion>
						</div>
					{/if}
					<BlurImage {card} />
				</div>
			</Motion>
		</div>
	{/each}

	<Motion let:motion animate={{ opacity: selected?.id ? 0.3 : 0 }}>
		<div
			use:motion
			on:click={handleOutsideClick}
			class={cn(
				'absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0',
				selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
			)}
		/>
	</Motion>
</div>
