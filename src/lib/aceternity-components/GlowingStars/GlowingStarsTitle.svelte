<script lang="ts">
	import { cn } from '@/utils';

	export let className: string | undefined = undefined;
</script>

<h2 class={cn('mb-0 mt-0 text-2xl font-bold text-[#eaeaea]', className)}>
	<slot />
</h2>
