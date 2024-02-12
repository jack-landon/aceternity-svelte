<script lang="ts">
	import CodeBlock from './CodeBlock.svelte';

	export let dependencies: string[] = ['framer-motion', 'clsx', 'tailwind-merge'];
</script>

<CodeBlock>
	<pre class="language-bash"><code class="language-bash"
			><span class="token function">npm</span> <span class="hljs-selector-tag">i</span><span
				>{dependencies.map((dep) => ` ${dep}`).join('')}</span
			>
</code></pre>
</CodeBlock>
