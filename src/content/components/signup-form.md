---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import SignupFormDemo from '$lib/aceternity-components/SignupForm/SignupFormDemo.svelte'

    let inputProps = [
        {name: 'className', type: 'string | undefined', description: 'Additional CSS classes to add to the Input Component'},
        {name: 'type', type: 'string | undefined', description: 'Specifies the type of input (e.g. "text", "password", "email". Inherits all standard HTML input types.'}]

    let labelProps = [
        {name: 'className', type: 'string | undefined', description: 'Additional CSS classes to add to the Label Component'}
        ]
</script>

<DocsPreview>
<div slot='preview'>
<SignupFormDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from '@tabler/icons-svelte';
	import Input from './Input.svelte';
	import Label from './Label.svelte';

	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault();
		console.log('Form submitted');
	};
</script>

<div
	class="mx-auto w-full max-w-md rounded-none border border-gray-300 bg-white p-4 shadow dark:border-gray-800 dark:bg-black md:rounded-2xl md:p-8"
>
	<h2 class="text-xl font-bold text-neutral-800 dark:text-neutral-200">Welcome to Aceternity</h2>
	<p class="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
		Login to aceternity if you can because we don&apos;t have a login flow yet
	</p>

	<form class="my-8" on:submit={handleSubmit}>
		<div class="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
			<div class={'flex w-full flex-col space-y-2'}>
				<Label htmlFor="firstname">First name</Label>
				<Input id="firstname" placeholder="Tyler" type="text" />
			</div>
			<div class={'flex w-full flex-col space-y-2'}>
				<Label htmlFor="lastname">Last name</Label>
				<Input id="lastname" placeholder="Durden" type="text" />
			</div>
		</div>
		<div class={'mb-4 flex w-full flex-col space-y-2'}>
			<Label htmlFor="email">Email Address</Label>
			<Input id="email" placeholder="projectmayhem@fc.com" type="email" />
		</div>
		<div class={cn('mb-4 flex w-full flex-col space-y-2')}>
			<Label htmlFor="password">Password</Label>
			<Input id="password" placeholder="••••••••" type="password" />
		</div>
		<div class={cn('mb-8 flex w-full flex-col space-y-2')}>
			<Label htmlFor="twitterpassword">Your twitter password</Label>
			<Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
		</div>

		<button
			class="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
			type="submit"
		>
			Sign up &rarr;
			<span
				class="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100"
			/>
			<span
				class="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"
			/>
		</button>

		<div
			class="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
		/>

		<div class="flex flex-col space-y-4">
			<button
				class=" group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
				type="submit"
			>
				<IconBrandGithub class="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
				<span class="text-sm text-neutral-700 dark:text-neutral-300"> GitHub </span>
				<span
					class="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100"
				/>
				<span
					class="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"
				/>
			</button>
			<button
				class=" group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
				type="submit"
			>
				<IconBrandGoogle class="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
				<span class="text-sm text-neutral-700 dark:text-neutral-300"> Google </span>
				<span
					class="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100"
				/>
				<span
					class="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"
				/>
			</button>
			<button
				class=" group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
				type="submit"
			>
				<IconBrandOnlyfans class="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
				<span class="text-sm text-neutral-700 dark:text-neutral-300"> OnlyFans </span>
				<span
					class="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100"
				/>
				<span
					class="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"
				/>
			</button>
		</div>
	</form>
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock dependencies={['svelte-motion', 'clsx', 'tailwind-merge', '@tabler/icons-svelte']} />

### Add util file

<AddCnUtilCodeBlock />

### Copy the highlighted `spotlight` animation into `tailwind.config.ts` file

<CodeBlock path='tailwind.config.ts'>

```ts
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
// other imports...

const config = {
	// ... other properties
	theme: {
		extend: {
			boxShadow: {
				input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`
			}
		}
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

<CodeBlock path='src/lib/components/ui/SignupForm/Input.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import { useMotionTemplate, useMotionValue, Motion, MotionValue } from 'svelte-motion';

	export let className: string | undefined = undefined;
	export let type: string = 'text';

	let visible = false;

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: any) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
</script>

<Motion
	let:motion
	style={{
		background: visible
			? useMotionTemplate`
  radial-gradient(
    100px circle at ${mouseX}px ${mouseY}px, 
    var(--blue-500),
    transparent 80%
  )
`
			: useMotionTemplate`
  radial-gradient(
    '0px' circle at ${mouseX}px ${mouseY}px,
    var(--blue-500),
    transparent 80%
  )
`
	}}
>
	<div
		use:motion
		on:mousemove={handleMouseMove}
		on:mouseenter={() => (visible = true)}
		on:mouseleave={() => (visible = false)}
		class="group/input rounded-lg p-[2px] transition duration-300"
	>
		<input
			{type}
			class={cn(
				`dark:placeholder-text-neutral-600 duration-400 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black shadow-input  transition file:border-0 
        file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 
        focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 disabled:cursor-not-allowed
         disabled:opacity-50 group-hover/input:shadow-none
         dark:bg-zinc-800
         dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600
         `,
				className
			)}
			{...$$restProps}
		/>
	</div>
</Motion>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/SignupForm/Label.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';

	export let className: string | undefined = undefined;
</script>

<label
	class={cn(
		'text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white',
		className
	)}
	{...$$restProps}
>
	<slot />
</label>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/SignupForm/index.ts'>

```ts
import Input from './Input.svelte';
import Label from './Label.svelte';

export { Input, Label };
```

</CodeBlock>

## Props

<PropsTable path='Input.svelte' props={inputProps} />

<PropsTable path='Label.svelte' props={labelProps} />
