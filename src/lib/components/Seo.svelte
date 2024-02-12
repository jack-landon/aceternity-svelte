<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let authorName: string;
	export let dateModified: string;
	export let image: string | undefined;
	// export let properties: ('article' | 'breadcrumbs' | 'organization')[]

	$: url = $page.url.href;
</script>

<svelte:head>
	<title>{title} - {authorName}</title>
	<meta name="description" content={description} />
	<meta name="author" content={authorName} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={$page.url.origin} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
