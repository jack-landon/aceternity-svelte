<script lang="ts">
	import { cn } from '@/utils';

	export let className: string | undefined = undefined;
</script>

<p class={cn('mb-0 mt-0 max-w-[16rem] text-base text-white', className)}>
	<slot />
</p>
