---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import MultiStepLoaderDemo from '$lib/aceternity-components/MultiStepLoader/MultiStepLoaderDemo.svelte'

    let multiStepLoaderProps = [
        {name: 'loadingStates', type: '{text: string}[]', description: 'An array of objects, each with a text property displaying the current load state message.'},
        {name: 'loading', type: 'boolean | undefined', description: 'A boolean to control whether the loader is active. Default: undefined.'},
        {name: 'duration', type: 'number', description: 'The milliseconds between transitioning to the next loading state. Default: 2000.'},
        {name: 'loop', type: 'boolean', description: 'A boolean to determine whether the loading state will loop. Default: true.'}]

    let loaderCoreProps = [
        {name: 'value', type: 'number | undefined', description: 'The current index of the loading state eing displayed. Default: 0.'}
        ]
</script>

<DocsPreview>
<div slot='preview'>
<MultiStepLoaderDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { IconSquareRoundedX } from '@tabler/icons-svelte';
	import MultiStepLoader from './MultiStepLoader.svelte';

	let loading = false;

	const loadingStates = [
		{
			text: 'Buying a condo'
		},
		{
			text: 'Travelling in a flight'
		},
		{
			text: 'Meeting Tyler Durden'
		},
		{
			text: 'He makes soap'
		},
		{
			text: 'We goto a bar'
		},
		{
			text: 'Start a fight'
		},
		{
			text: 'We like it'
		},
		{
			text: 'Welcome to F**** C***'
		}
	];
</script>

<div class="flex h-[60vh] w-full items-center justify-center">
	<!-- Core Loader Modal  -->
	<MultiStepLoader {loadingStates} {loading} duration={2000} />

	<!-- The buttons are for demo only, remove it in your actual code ⬇️ -->
	<button
		on:click={() => (loading = true)}
		class="mx-auto flex h-10 items-center justify-center rounded-lg bg-[#39C3EF] px-8 text-sm font-medium text-black transition duration-200 hover:bg-[#39C3EF]/90 md:text-base"
		style="box-shadow: 0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset;"
	>
		Click to load
	</button>

	{#if loading}
		<button
			class="fixed right-4 top-4 z-[120] text-black dark:text-white"
			on:click={() => (loading = false)}
		>
			<IconSquareRoundedX class="h-10 w-10" />
		</button>
	{/if}
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock dependencies={['svelte-motion', 'clsx', 'tailwind-merge', '@tabler/icons-svelte']} />

### Add util file

<AddCnUtilCodeBlock />

### Add the following code in `tailwind.config.ts` file

<CodeBlock path='tailwind.config.ts'>

```ts
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
// other imports...

const config = {
	// ... other properties
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		// rest of theme code
	},
	plugins: [addVariablesForColors]
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}
```

</CodeBlock>

### Copy the source code

<CodeBlock path='src/lib/components/ui/MultiStepLoader/MultiStepLoader.svelte'>

```svelte
<script lang="ts">
	import { AnimatePresence, Motion } from 'svelte-motion';
	import LoaderCore from './LoaderCore.svelte';

	type LoadingState = {
		text: string;
	};

	export let loadingStates: LoadingState[];
	export let loading: boolean | undefined = undefined;
	export let duration: number = 2000;
	export let loop: boolean = true;

	let currentState = 0;

	function updateState() {
		if (!loading) {
			currentState = 0;
			return;
		}
		const timeout = setTimeout(() => {
			currentState = loop
				? currentState === loadingStates.length - 1
					? 0
					: currentState + 1
				: Math.min(currentState + 1, loadingStates.length - 1);
		}, duration);

		return () => clearTimeout(timeout);
	}

	$: currentState || loading, updateState();
</script>

<AnimatePresence show={true}>
	{#if loading}
		<Motion
			let:motion
			initial={{
				opacity: 0
			}}
			animate={{
				opacity: 1
			}}
			exit={{
				opacity: 0
			}}
		>
			<div
				use:motion
				class="fixed inset-0 z-[100] flex h-full w-full items-center justify-center backdrop-blur-2xl"
			>
				<div class="relative h-96">
					<LoaderCore value={currentState} {loadingStates} />
				</div>

				<div
					class="absolute inset-x-0 bottom-0 z-20 h-full bg-white bg-gradient-to-t [mask-image:radial-gradient(900px_at_center,transparent_30%,white)] dark:bg-black"
				/>
			</div>
		</Motion>
	{/if}
</AnimatePresence>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/MultiStepLoader/LoaderCore.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import { Motion } from 'svelte-motion';

	type LoadingState = {
		text: string;
	};

	export let loadingStates: LoadingState[];
	export let value: number = 0;
</script>

<div class="relative mx-auto mt-40 flex max-w-xl flex-col justify-start">
	{#each loadingStates as loadingState, index (index)}
		{@const distance = Math.abs(index - value)}
		<!-- Minimum opacity is 0, keep it 0.2 if you're sane. -->
		{@const opacity = Math.max(1 - distance * 0.2, 0)}

		<Motion
			let:motion
			initial={{ opacity: 0, y: -(value * 40) }}
			animate={{ opacity: opacity, y: -(value * 40) }}
			transition={{ duration: 0.5 }}
		>
			<div use:motion class={cn('mb-4 flex gap-2 text-left')}>
				<div>
					{#if index > value}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width={1.5}
							stroke="currentColor"
							class={cn('h-6 w-6 text-black dark:text-white')}
						>
							<path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
						</svg>
					{/if}

					{#if index <= value}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class={cn(
								'h-6 w-6 ',
								cn(
									'text-black dark:text-white',
									value === index && 'text-black opacity-100 dark:text-lime-500'
								)
							)}
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
								clip-rule="evenodd"
							/>
						</svg>
					{/if}
				</div>
				<span
					class={cn(
						'text-black dark:text-white',
						value === index && 'text-black opacity-100 dark:text-lime-500'
					)}
				>
					{loadingState.text}
				</span>
			</div>
		</Motion>
	{/each}
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/MultiStepLoader/index.ts'>

```ts
import MultiStepLoader from './MultiStepLoader.svelte';
import LoaderCore from './LoaderCore.svelte';

export { MultiStepLoader, LoaderCore };
```

</CodeBlock>

## Props

<PropsTable path='MultiStepLoader.svelte' props={multiStepLoaderProps} />

<PropsTable path='LoaderCore.svelte' props={loaderCoreProps} />
