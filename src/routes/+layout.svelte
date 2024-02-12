<script lang="ts">
	import '../app.pcss';
	import { page } from '$app/stores';
	import { dev, browser } from '$app/environment';
	import { Metadata, SiteFooter, SiteHeader, TailwindIndicator } from '$components/docs';
	// import { updateTheme } from "@/utils";
	// import "../styles/globals.css";
	// import { config } from "@/stores";
	// import * as Fathom from "fathom-client";
	import { ModeWatcher } from 'mode-watcher';
	// import { Toaster } from '$lib/components/ui/sonner';
	import '$lib/assets/prism-vsc-dark-plus.css';
	import PageTransition from '$components/Transition.svelte';

	export let data;

	// $: updateTheme($config.theme, $page.url.pathname);
	// $: $page.url.pathname, browser && Fathom.trackPageview();
</script>

<ModeWatcher />
<Metadata />
<!-- <Toaster /> -->

<PageTransition url={data.url}>
	<div class="relative flex min-h-screen flex-col bg-background" id="page" data-vaul-drawer-wrapper>
		<SiteHeader />
		<div class="flex-1">
			<slot />
		</div>
		<SiteFooter />
		{#if dev}
			<TailwindIndicator />
		{/if}
	</div>
</PageTransition>
