<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	export let name: string = 'Card Title';
	export let description: string = 'Card Description';
	export let thumbnail: string = 'https://via.placeholder.com/150';
	export let video: string;
	export let href: string = '#';
</script>

<a {href} class="antialiased">
	<div class="group relative overflow-hidden rounded-lg dark:border dark:border-white/[0.1]">
		<enhanced:img
			src={thumbnail}
			alt={name}
			loading="lazy"
			decoding="async"
			data-nimg="1"
			class="aspect-video rounded-md object-cover blur-0 transition duration-300"
			style="color: transparent;"
		>
			<!-- <video autoplay={true} loop={true} class="group-hover:block absolute inset-0 rounded-md object-cover" style="height: 100%; width: 100%; opacity: 1;">
      <source src="https://assets.aceternity.com/cloudinary_bkp/Screen_Recording_2023-11-22_at_8.47.40_PM_oncrfe.mov" type="video/mov" />
    </video> -->
		</enhanced:img>
	</div>

	<p class="mb-2 mt-4 text-xl font-bold text-neutral-700 dark:text-neutral-100">{name}</p>
	<p class="mt-2 text-sm font-normal text-neutral-500 dark:text-neutral-300">{description}</p>
</a>
