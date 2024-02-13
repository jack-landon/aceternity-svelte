<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { aceternityComponents } from '@/config/components';
	import ComponentCard from '$lib/components/ComponentCard.svelte';
	import { Metadata } from '$components/docs';
	import Seo from '$components/Seo.svelte';
</script>

<Metadata
	title="Components"
	description="Copy and Paste beautiful components with Svelte-Motion animations and TailwindCSS styles included."
/>

<div>
	<div
		class="relative z-40 grid grid-cols-1 items-start gap-20 py-8 pb-40 md:grid-cols-2 lg:grid-cols-2"
	>
		{#each aceternityComponents as { id, name, description, thumbnail, video }}
			<ComponentCard {name} {description} href={`/components/${id}`} {thumbnail} {video} />
		{/each}
	</div>
</div>
