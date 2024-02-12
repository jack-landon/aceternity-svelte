<script lang="ts">
	import { cn } from '@/utils';

	type Card = {
		id: number;
		content: any;
		className: string;
		thumbnail: string;
	};

	export let card: Card;
	let loaded = false;
</script>

<img
	src={card.thumbnail}
	height="500"
	width="500"
	on:load={() => (loaded = true)}
	class={cn(
		'absolute inset-0 h-full w-full object-cover object-top transition duration-200',
		loaded ? 'blur-none' : 'blur-md'
	)}
	alt="thumbnail"
/>
