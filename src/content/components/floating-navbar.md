---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import FloatingNavbarDemo from '$lib/aceternity-components/FloatingNavbar/FloatingNavbarDemo.svelte'

    let props = [
        {name: 'navItems', type: 'Array<{name: string, link: string, icon?: ComponentType}>', description: 'The navigation items you want to render in the navbar.'},
        {name: 'className', type: 'string | undefined', description: 'The class name of the child component.'}]
</script>

<DocsPreview>
<div slot='preview'>
<FloatingNavbarDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { Home, MessageCircle, User } from 'lucide-svelte';
	import FloatingNavbar from './FloatingNavbar.svelte';

	const navItems = [
		{
			name: 'Home',
			link: '/',
			icon: Home
		},
		{
			name: 'About',
			link: '/',
			icon: User
		},
		{
			name: 'Contact',
			link: '/',
			icon: MessageCircle
		}
	];
</script>

<div class="relative w-full">
	<FloatingNavbar {navItems} />
	<div
		class="relative grid h-full w-full grid-cols-1 rounded-md border border-neutral-200 bg-white dark:border-white/[0.2] dark:bg-black"
	>
		<p class="p-40 text-center text-4xl font-bold text-neutral-600 dark:text-white">
			Scroll back up to reveal Navbar
		</p>
		<div class="absolute inset-0 bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
	</div>
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/FloatingNavbar/FloatingNavbar.svelte'>

```svelte
<script lang="ts">
	import { Motion, AnimatePresence, useViewportScroll, useMotionValue } from 'svelte-motion';
	import { cn } from '@/utils';
	import type { ComponentType } from 'svelte';

	export let navItems: {
		name: string;
		link: string;
		icon?: ComponentType;
	}[];
	export let className: string | undefined = undefined;

	// const { scrollYProgress } = useScroll();
	const { scrollYProgress } = useViewportScroll();

	let visible = false;

	$: $scrollYProgress, updateDirection();

	function updateDirection() {
		console.log($scrollYProgress);

		let direction = $scrollYProgress - scrollYProgress.getPrevious();
		console.log(direction);

		if (scrollYProgress.get() < 0.05) {
			visible = false;
		} else {
			if (direction < 0) {
				visible = true;
			} else {
				visible = false;
			}
		}
	}
</script>

<AnimatePresence show={true}>
	<Motion
		let:motion
		initial={{
			opacity: 1,
			y: -100
		}}
		animate={{
			y: visible ? 0 : -100,
			opacity: visible ? 1 : 0
		}}
		transition={{
			duration: 0.2
		}}
	>
		<div
			use:motion
			class={cn(
				'fixed inset-x-0  top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black',
				className
			)}
		>
			{#each navItems as navItem, idx (`link=${idx}`)}
				<a
					href={navItem.link}
					class={cn(
						'relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300'
					)}
				>
					<svelte:component
						this={navItem.icon}
						class="block h-4 w-4 text-neutral-500 dark:text-white sm:hidden"
					/>
					<span class="block h-4 w-4 text-neutral-500 dark:text-white sm:hidden"
						>{navItem.icon}</span
					>
					<span class="hidden text-sm sm:block">{navItem.name}</span>
				</a>
			{/each}
			<button
				class="relative rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white"
			>
				<span>Login</span>
				<span
					class="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
				/>
			</button>
		</div>
	</Motion>
</AnimatePresence>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/FloatingNavbar/index.ts'>

```ts
import FloatingNavbar from './FloatingNavbar.svelte';

export { FloatingNavbar };
```

</CodeBlock>

## Props

<PropsTable path='FloatingNavbar' props={props} />
