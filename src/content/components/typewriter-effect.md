---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import TypewriterEffectDemo from '$lib/aceternity-components/TypewriterEffect/TypewriterEffectDemo.svelte'
	import TypewriterEffectSmoothDemo from '$lib/aceternity-components/TypewriterEffect/TypewriterEffectSmoothDemo.svelte'

    let props = [
        {name: 'words', type: '{text: string, className?: string}', description: 'Every word with a className that you can define'},
        {name: 'className', type: 'string | undefined', description: 'The class name of the container component.'},
		{name: 'cursorClassName', type: 'string | undefined', description: 'The className of the cursor component'}
		]
</script>

<DocsPreview>
<div slot='preview'>
<TypewriterEffectSmoothDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import TypewriterEffectSmooth from './TypewriterEffectSmooth.svelte';

	const words = [
		{
			text: 'Build'
		},
		{
			text: 'awesome'
		},
		{
			text: 'apps'
		},
		{
			text: 'with'
		},
		{
			text: 'Aceternity.',
			className: 'text-blue-500 dark:text-blue-500'
		}
	];
</script>

<div class="flex h-[40rem] flex-col items-center justify-center">
	<p class="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base">
		The road to freedom starts from here
	</p>
	<TypewriterEffectSmooth {words} />
	<div class="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
		<button
			class="h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white dark:border-white"
		>
			Join now
		</button>
		<button class="h-10 w-40 rounded-xl border border-black bg-white text-sm text-black">
			Signup
		</button>
	</div>
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock dependencies={['svelte-motion', 'clsx', 'tailwind-merge', 'svelte-inview']} />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/TypewriterEffect/TypewriterEffect.svelte'>

```svelte
<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion } from 'svelte-motion';

	export let words: {
		text: string;
		className?: string;
	}[];
	export let className: string | undefined = undefined;
	export let cursorClassName: string | undefined = undefined;

	const wordsArray = words.map((word) => {
		return {
			...word,
			text: word.text.split('')
		};
	});
</script>

<div class={cn('text-center text-base font-bold sm:text-xl md:text-3xl lg:text-5xl', className)}>
	<Motion
		let:motion
		animate={{
			display: 'inline-block',
			opacity: 1
		}}
		transition={{
			duration: 0.3,
			delay: 0.1,
			ease: 'easeInOut',
			staggerChildren: 0.1
		}}
	>
		<div use:motion class="inline">
			{#each wordsArray as word, idx (`word-${idx}`)}
				<div class="inline-block">
					{#each word.text as char, index (`char-${index}`)}
						<Motion let:motion initial={{}}>
							<span
								use:motion
								class={cn(`hidden text-black opacity-0 dark:text-white`, word.className)}
							>
								{char}
							</span>
						</Motion>
					{/each}
					&nbsp;
				</div>
			{/each}
		</div>
	</Motion>
	<Motion
		let:motion
		initial={{
			opacity: 0
		}}
		animate={{
			opacity: 1
		}}
		transition={{
			duration: 0.8,
			repeat: Infinity,
			repeatType: 'reverse'
		}}
	>
		<span
			use:motion
			class={cn('inline-block h-4 w-[4px] rounded-sm bg-blue-500 md:h-6 lg:h-10', cursorClassName)}
		></span>
	</Motion>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/TypewriterEffect/TypewriterEffectSmooth.svelte'>

```svelte
<script lang="ts">
	import { cn } from '$lib/utils';
	import { text } from '@sveltejs/kit';
	import { Motion } from 'svelte-motion';

	export let words: {
		text: string;
		className?: string;
	}[];
	export let className: string | undefined = undefined;
	export let cursorClassName: string | undefined = undefined;

	const wordsArray = words.map((word) => {
		return {
			...word,
			text: word.text.split('')
		};
	});
</script>

<div class={cn('my-6 flex space-x-1', className)}>
	<Motion
		let:motion
		style={{
			width: 'fit-content'
		}}
		initial={{
			width: '0%'
		}}
		transition={{
			duration: 2,
			ease: 'linear',
			delay: 1
		}}
	>
		<div use:motion class="overflow-hidden">
			<div
				class="lg:text:3xl text-xs font-bold sm:text-base md:text-xl xl:text-5xl"
				style="white-space: nowrap;"
			>
				<div>
					{#each wordsArray as word, idx (`word-${idx}`)}
						<div class="inline-block">
							{#each word.text as char, index (`char-${index}`)}
								<span class={cn(`text-black dark:text-white `, word.className)}>
									{char}
								</span>
							{/each}
							&nbsp;
						</div>
					{/each}
				</div>
				{' '}
			</div>
			{' '}
		</div>
	</Motion>
	<Motion
		let:motion
		initial={{
			opacity: 0
		}}
		animate={{
			opacity: 1
		}}
		transition={{
			duration: 0.8,

			repeat: Infinity,
			repeatType: 'reverse'
		}}
	>
		<span
			use:motion
			class={cn('block h-4 w-[4px]  rounded-sm bg-blue-500 sm:h-6 xl:h-12', cursorClassName)}
		></span>
	</Motion>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/TypewriterEffect/index.ts'>

```ts
import TypewriterEffect from './TypewriterEffect.svelte';
import TypewriterEffectSmooth from './TypewriterEffectSmooth.svelte';

export { TypewriterEffect, TypewriterEffectSmooth };
```

</CodeBlock>

## Props

<PropsTable path='TypewriterEffect' props={props} />
