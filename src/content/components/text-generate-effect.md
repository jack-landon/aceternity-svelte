---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import TextGenerateEffectDemo from '$lib/aceternity-components/TextGenerateEffect/TextGenerateEffectDemo.svelte'

    let props = [
        {name: 'className', type: 'string | undefined', description: 'The class name of the child component.'},
        {name: 'words', type: 'string', description: 'The word string that you want to animate'}]
</script>

<DocsPreview>
<div slot='preview'>
<TextGenerateEffectDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { TextGenerateEffect } from '.';

	const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;
</script>

<TextGenerateEffect {words} />
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/TextGenerateEffect/TextGenerateEffect.svelte'>

```svelte
<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cn } from '$lib/utils';

	export let words: string;
	export let className: string | undefined = undefined;

	const variants = {
		visible: (i: number) => ({
			opacity: 1,
			transition: {
				delay: i * 0.2,
				duration: 2
			}
		}),
		hidden: { opacity: 0 }
	};
</script>

<div class={cn('font-bold', className)}>
	<div class="mt-4">
		<div class=" text-2xl leading-snug tracking-wide text-black dark:text-white">
			<Motion let:motion custom={0} {variants} initial="hidden" animate={'visible'}>
				<div use:motion>
					{#each words.split(' ') as word, idx (`${word}${idx}`)}
						<Motion let:motion {variants} custom={idx + 1} initial="hidden" animate={'visible'}>
							<span use:motion class="text-black dark:text-white">
								{word}{' '}
							</span>
						</Motion>
					{/each}
				</div>
			</Motion>
		</div>
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/TextGenerateEffect/index.ts'>

```ts
import TextGenerateEffect from './TextGenerateEffect.svelte';

export { TextGenerateEffect };
```

</CodeBlock>

## Props

<PropsTable path='TextGenerateEffect' props={props} />
