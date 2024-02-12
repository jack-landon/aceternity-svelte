<script lang="ts">
	import CopyButton from './CopyButton.svelte';

	export let path: string | undefined = undefined;
	let codeString: string;

	function copyCodeToClipboard(node: HTMLElement) {
		codeString = node.innerText ?? '';
	}
</script>

{#if path}
	<code>{path}</code>
{/if}
<div class="relative mb-12 w-full rounded-md [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
	<CopyButton value={codeString} class="absolute right-4 top-4" />
	<div use:copyCodeToClipboard>
		<slot />
	</div>
</div>
