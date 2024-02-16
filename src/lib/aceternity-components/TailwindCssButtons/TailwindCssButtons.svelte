<script lang="ts">
	import { cn } from '@/utils';
	import { Clipboard } from 'lucide-svelte';

	export let className: string | undefined = undefined;
	export let onClick: (() => void) | undefined = undefined;
	export let component: string;
</script>

<div
	on:click={onClick}
	class={cn(
		'group/btn relative flex h-60 w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-100 bg-white hover:border-neutral-200 dark:border-white/[0.2] dark:bg-black',
		className
	)}
>
	<div class="absolute inset-0 bg-dot-black/[0.1] dark:bg-dot-white/[0.1]" />
	<Clipboard
		on:click={onClick}
		class="absolute right-2 top-2 hidden h-9 w-9 cursor-pointer rounded-full p-2 text-neutral-300 transition duration-200 ease-in-out hover:bg-gray-600 group-hover/btn:block"
	/>
	<div class="relative z-50 flex items-center justify-center">{@html component}</div>
</div>
