<script lang="ts">
	import FollowingPointer from './FollowingPointer.svelte';
	export let showDescription: boolean = true;
	const blogContent = {
		slug: 'amazing-tailwindcss-grid-layouts',
		author: 'Manu Arora',
		date: '28th March, 2023',
		title: 'Amazing Tailwindcss Grid Layout Examples',
		description:
			'Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.',
		image: 'https://ui.aceternity.com/_next/image?url=%2Fdemo%2Fthumbnail.png&w=640&q=75',
		authorAvatar:
			'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
	};
</script>

<FollowingPointer>
	<div slot="title" class="flex items-center space-x-2">
		<img
			src={blogContent.authorAvatar}
			height="20"
			width="20"
			alt="thumbnail"
			class="h-5 w-5 rounded-full border-2 border-white object-cover"
		/>
		<p>{blogContent.author}</p>
	</div>
	<div
		class="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl"
	>
		<div
			class="aspect-h-10 aspect-w-16 relative w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100 xl:aspect-h-10 xl:aspect-w-16"
		>
			<img
				src={blogContent.image}
				alt="thumbnail"
				class={`transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl `}
			/>
		</div>
		<div class=" p-4">
			<h2 class="my-4 text-lg font-bold text-zinc-700">
				{blogContent.title}
			</h2>
			{#if showDescription}
				<h2 class="my-4 text-sm font-normal text-zinc-500">
					{blogContent.description}
				</h2>
			{/if}
			<div class="mt-10 flex flex-row items-center justify-between">
				<span class="text-sm text-gray-500">{blogContent.date}</span>
				<div class="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
					Read More
				</div>
			</div>
		</div>
	</div>
</FollowingPointer>
