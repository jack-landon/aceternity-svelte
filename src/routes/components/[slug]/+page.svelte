<script lang="ts">
	import Seo from '$components/Seo.svelte';

	import { aceternityComponents } from '@/config/components.js';

	import { ChevronRight, Code, ExternalLink } from 'lucide-svelte';

	import { config } from '@/stores';
	import type { SvelteComponent } from 'svelte';
	// import { ChevronRight, Code, ExternalLink } from "radix-icons-svelte";
	// import Balancer from "svelte-wrap-balancer";
	import { page } from '$app/stores';
	// import { DocsPager, TableOfContents } from "$components/docs";
	import { badgeVariants } from '@/registry/new-york/ui/badge';
	import { cn } from '$lib/utils';
	import Badge from '$components/ui/badge/badge.svelte';

	export let data;

	// eslint-disable-next-line no-undef, @typescript-eslint/no-explicit-any
	type Component = $$Generic<typeof SvelteComponent<any, any, any>>;
	$: component = data.componentDetails as unknown as Component;
	$: details = data.componentDetails;
	// $: componentSource = data.metadata.source?.replace('default', $config.style ?? 'default');
	$: componentSource = data.metadata.source?.replace('default', $config.style ?? 'default');
	$: details.thumbnail, console.log(details.thumbnail);
</script>

<Seo
	title={`${details.name} Component - Aceternity UI Svelte (Free Source Code)`}
	description={`${details.description} Add this premium animated component to your Svelte app for free! 😎`}
	authorName={'Jack Landon'}
	dateModified={details.dateModified}
	image={`https://aceternity.sveltekit.io${details.thumbnail.img.src}`}
/>

<main class="prose !max-w-full py-12 dark:prose-invert">
	<h1 class="text-4xl font-bold">{details.name}</h1>
	<p class="mb-12 text-lg text-muted-foreground">
		{#if details.wip}
			<Badge variant="destructive">Work in progress</Badge>
		{/if}
		{details.description}
	</p>

	<svelte:component this={data.content} />
</main>
