<script lang="ts">
	import CodeBlock from './CodeBlock.svelte';
</script>

<CodeBlock path="src/lib/utils/cn.ts">
	<pre class="language-ts"><code class="language-ts"
			><span class="hljs-meta"
				><span class="token keyword">import</span> <span class="token punctuation">&#123;</span
				> <span class="token keyword">type</span> <span class="token class-name">ClassValue</span
				>, clsx <span class="token punctuation">&#125;</span> <span class="token keyword">from</span
				> 'clsx'<span class="token punctuation">;</span></span
			>
<span class="hljs-meta"
				><span class="token keyword">import</span> <span class="token punctuation">&#123;</span
				> twMerge <span class="token punctuation">&#125;</span> <span class="token keyword"
					>from</span
				> 'tailwind-merge'<span class="token punctuation">;</span></span
			>
        
<span class="token keyword">export</span> <span class="hljs-function"
				><span class="token keyword">function</span> <span class="token function">cn</span><span
					class="hljs-params"
					><span class="token punctuation">(</span><span class="token operator">...</span
					>inputs<span class="token operator">:</span> ClassValue<span class="token punctuation"
						>[</span
					><span class="token punctuation">]</span><span class="token punctuation">)</span></span
				> </span><span class="token punctuation">&#123;</span>
    <span class="hljs-keyword"><span class="token keyword">return</span></span> <span
				class="token function">twMerge</span
			><span class="token punctuation">(</span><span class="token function">clsx</span><span
				class="token punctuation">(</span
			>inputs<span class="token punctuation">)</span><span class="token punctuation">)</span><span
				class="token punctuation">;</span
			>
<span class="token punctuation">&#125;</span></code
		></pre>
</CodeBlock>
