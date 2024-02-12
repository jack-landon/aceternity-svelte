<script lang="ts">
	import { DirectionAwareHover } from '.';

	const imageUrl =
		'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<div class="relative flex h-[40rem] items-center justify-center">
	<DirectionAwareHover {imageUrl}>
		<p class="text-xl font-bold">In the mountains</p>
		<p class="text-sm font-normal">$1299 / night</p>
	</DirectionAwareHover>
</div>
