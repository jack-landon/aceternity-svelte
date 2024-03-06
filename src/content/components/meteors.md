---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import Meteors from '$lib/aceternity-components/Meteors/MeteorsDemo.svelte'

    let props = [
        {name: 'number', type: 'number | undefined', description: 'The number of meteors you want in the card'},
        {name: 'className', type: 'string | undefined', description: 'The class name of the child component.'}]
</script>

<DocsPreview>
<div slot='preview'>
<Meteors />
</div>

<div slot='code'>

```svelte
<script>
	import { Meteors } from '.';
</script>

<div class="">
	<div class=" relative h-3/4 w-3/4 max-w-sm md:h-1/2">
		<div
			class="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl"
		/>
		<div
			class="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl"
		>
			<div
				class="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-2 w-2 text-gray-300"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
					/>
				</svg>
			</div>

			<h2 class="relative z-50 mb-4 text-xl font-bold text-white">
				Meteors because they&apos;re cool
			</h2>

			<p class="relative z-50 mb-4 text-base font-normal text-slate-500">
				Make something awesome with this super cool meteor effect. It will make people happy when
				they see it. It might even make their day. Just try it eh.
			</p>

			<button class="rounded-lg border border-gray-500 px-4 py-1 text-gray-300"> Explore </button>

			<Meteors number={20} />
		</div>
	</div>
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock dependencies={['svelte-motion', 'clsx', 'tailwind-merge']} />

### Add util file

<AddCnUtilCodeBlock />

### Add this into your `tailwind.config.ts` file

<CodeBlock path='tailwind.config.ts'>

```ts
const config = {
	// ... other properties
	theme: {
		extend: {
			animation: {
				// ...other animations
				'meteor-effect': 'meteor 5s linear infinite'
			},
			keyframes: {
				// ... other keyframes
				meteor: {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
					'70%': { opacity: 1 },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: 0
					}
				}
			}
		}
	}
};
```

</CodeBlock>

### Copy the source code

<CodeBlock path='src/lib/components/ui/Meteors/Meteors.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';

	export let number: number | undefined = undefined;
	export let className: string | undefined = undefined;

	const meteors = new Array(number || 20).fill(true);
</script>

{#each meteors as meteor, idx (`meteor ${idx}`)}
	<span
		class={cn(
			'absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
			"before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
			className
		)}
		style={`top: 0; left: ${Math.floor(Math.random() * (400 - -400) + -400) + 'px'}; animationDelay: ${Math.random() * (0.8 - 0.2) + 0.2 + 's'}; animationDuration: ${Math.floor(Math.random() * (10 - 2) + 2) + 's'}`}
	></span>
{/each}
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/Meteors/index.ts'>

```ts
import Meteors from './Meteors.svelte';

export { Meteors };
```

</CodeBlock>

## Props

<PropsTable path='Meteors' props={props} />
