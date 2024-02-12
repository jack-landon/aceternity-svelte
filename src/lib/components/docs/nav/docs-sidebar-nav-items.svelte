<script lang="ts">
	import type { ComponentItem, SidebarNavItem } from '$lib/types/nav';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';

	export let items: ComponentItem[] = [];
	$: $page.url.pathname, console.log($page.url.pathname);
	$: items, console.log(items);
</script>

{#if items.length}
	<div class="grid grid-flow-row auto-rows-max text-sm">
		{#each items as item, index (index)}
			{#if item.id}
				<a
					href={`/components/${item.id}`}
					class={cn(
						'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
						item.disabled && 'cursor-not-allowed opacity-60',
						$page.url.pathname.replace('/components/', '') === item.id
							? 'font-medium text-foreground'
							: 'text-muted-foreground'
					)}
				>
					{item.name}
					<!-- {#if item.label}
						<span
							class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline"
						>
							{item.label}
						</span>
					{/if} -->
				</a>
			{:else}
				<span
					class="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
				>
					{item.name}
				</span>
			{/if}
		{/each}
	</div>
{/if}
