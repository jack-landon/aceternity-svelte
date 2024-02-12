<script lang="ts">
	import { cn } from '@/utils';
	import { Motion } from 'svelte-motion';

	type Tab = {
		title: string;
		value: string;
		content?: string | any;
	};

	export let className: string | undefined = undefined;
	export let tabs: Tab[];
	export let active: Tab;
	export let hovering: boolean | undefined = undefined;

	const isActive = (tab: Tab) => {
		return tab.value === tabs[0].value;
	};
</script>

<div class="relative h-full w-full">
	{#each tabs as tab, idx (tab.value)}
		<Motion
			let:motion
			layoutId={tab.value}
			style={{
				scale: 1 - idx * 0.1,
				top: hovering ? idx * -50 : 0,
				zIndex: -idx,
				opacity: idx < 3 ? 1 - idx * 0.1 : 0
			}}
			animate={{
				y: isActive(tab) ? [0, 40, 0] : 0
			}}
		>
			<div use:motion class={cn('absolute left-0 top-0 h-full w-full', className)}>
				{@html tab.content}
			</div>
		</Motion>
	{/each}
</div>
