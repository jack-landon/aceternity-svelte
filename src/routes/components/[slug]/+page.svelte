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

	export let data;

	// eslint-disable-next-line no-undef, @typescript-eslint/no-explicit-any
	type Component = $$Generic<typeof SvelteComponent<any, any, any>>;
	$: component = data.componentDetails as unknown as Component;
	$: details = data.componentDetails;
	// $: componentSource = data.metadata.source?.replace('default', $config.style ?? 'default');
	$: componentSource = data.metadata.source?.replace('default', $config.style ?? 'default');
</script>

<Seo
	title={details.name}
	description={details.description}
	authorName={'Jack Landon'}
	dateModified={details.dateModified}
	image={details.thumbnail}
/>

<main class="prose dark:prose-invert !max-w-full py-12">
	<h1 class="text-4xl font-bold">{details.name}</h1>
	<p class="mb-12 text-lg text-muted-foreground">{details.description}</p>

	<svelte:component this={data.content} />
</main>
