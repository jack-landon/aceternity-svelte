<script lang="ts">
	import type { ComponentItem, SidebarNavItem } from '$lib/types/nav';
	import { cn } from '$lib/utils';
	import DocsSidebarNavItems from './docs-sidebar-nav-items.svelte';

	export let items: ComponentItem[] = [];
</script>

{#if items.length}
	<div class="w-full">
		<div class={cn('pb-4')}>
			<h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Components</h4>
			<DocsSidebarNavItems {items} />
		</div>
	</div>
{/if}
