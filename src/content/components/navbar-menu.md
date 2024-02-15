---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import NavbarMenuDemo from '$lib/aceternity-components/NavbarMenu/NavbarMenuDemo.svelte'

    let menuItemProps = [
		{name: 'active', type: 'string | null', description: 'Set the active menu item'},
        {name: 'item', type: 'string', description: 'The name of the menu item'}]

	let navbarMenuProps = [
		{name: 'active', type: 'string | null', description: 'Set the active menu item'}]

    let productItemProps = [
        {name: 'title', type: 'string', description: 'The title of the product'},
        {name: 'description', type: 'string', description: 'The description of the product'},
		{name: 'href', type: 'string', description: 'The link to the product'},
		{name: 'src', type: 'string', description: 'The image source of the product'}
		]
</script>

<DocsPreview>
<div slot='preview'>
<NavbarMenuDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from '.';

	let active: string | null = null;
</script>

<div class="relative flex w-full items-center justify-center">
	<div class={'fixed inset-x-0 top-12 z-50 mx-auto max-w-2xl'}>
		<NavbarMenu>
			<MenuItem {active} item="Services">
				<div class="flex flex-col space-y-4 text-sm">
					<HoveredLink href="#">Web Development</HoveredLink>
					<HoveredLink href="#">Interface Design</HoveredLink>
					<HoveredLink href="#">Search Engine Optimization</HoveredLink>
					<HoveredLink href="#">Branding</HoveredLink>
				</div>
			</MenuItem>
			<MenuItem {active} item="Products">
				<div class="  grid grid-cols-2 gap-10 p-4 text-sm">
					<ProductItem
						title="Algochurn"
						href="#"
						src="https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Prepare for tech interviews like never before."
					/>
					<ProductItem
						title="Tailwind Master Kit"
						href="#"
						src="https://images.pexels.com/photos/733071/pexels-photo-733071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Production ready Tailwind css components for your next project"
					/>
					<ProductItem
						title="Moonbeam"
						href="#"
						src="https://images.pexels.com/photos/730424/pexels-photo-730424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Never write from scratch again. Go from idea to blog in minutes."
					/>
					<ProductItem
						title="Rogue"
						href="#"
						src="https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
					/>
				</div>
			</MenuItem>
			<MenuItem {active} item="Pricing">
				<div class="flex flex-col space-y-4 text-sm">
					<HoveredLink href="#">Hobby</HoveredLink>
					<HoveredLink href="#">Individual</HoveredLink>
					<HoveredLink href="#">Team</HoveredLink>
					<HoveredLink href="#">Enterprise</HoveredLink>
				</div>
			</MenuItem>
		</NavbarMenu>
	</div>
	<p class="text-black dark:text-white">The Navbar will show on top of the page</p>
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

<CodeBlock path='src/lib/components/ui/NavbarMenu/HoveredLink.svelte'>

```svelte
<a class="text-neutral-700 hover:text-black dark:text-neutral-200" {...$$props}>
	<slot />
</a>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/NavbarMenu/MenuItem.svelte'>

```svelte
<script lang="ts">
	import { Motion } from 'svelte-motion';

	const transition = {
		type: 'spring',
		mass: 0.5,
		damping: 11.5,
		stiffness: 100,
		restDelta: 0.001,
		restSpeed: 0.001
	};

	export let active: string | null;
	export let item: string;
</script>

<div on:mouseenter={() => (active = item)} on:mouseleave={() => (active = null)} class="relative">
	<Motion let:motion transition={{ duration: 0.3 }}>
		<p use:motion class="cursor-pointer text-black hover:opacity-[0.9] dark:text-white">
			{item}
		</p>
	</Motion>
	{#if active !== null}
		<Motion
			let:motion
			initial={{ opacity: 0, scale: 0.85, y: 0 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			{transition}
		>
			<div use:motion>
				{#if active === item}
					<div class="absolute left-1/2 -translate-x-1/2 transform pt-4">
						<Motion let:motion {transition} layoutId="active">
							<div
								use:motion
								class="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black"
							>
								<Motion let:motion layout>
									<div use:motion class="h-full w-max p-4">
										<slot />
									</div>
								</Motion>
							</div>
						</Motion>
					</div>
				{/if}
			</div>
		</Motion>
	{/if}
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/NavbarMenu/NavbarMenu.svelte'>

```svelte
<nav
	class="boder relative flex justify-center space-x-4 rounded-full bg-black px-8 py-6 shadow-input dark:border-white/[0.2]"
>
	<slot />
</nav>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/NavbarMenu/ProductItem.svelte'>

```svelte
<script lang="ts">
	export let title: string;
	export let description: string;
	export let href: string;
	export let src: string;
</script>

<a {href} class="flex space-x-2">
	<img {src} width={140} height={70} alt={title} class="flex-shrink-0 rounded-md shadow-2xl" />
	<div>
		<h4 class="mb-1 text-xl font-bold text-black dark:text-white">
			{title}
		</h4>
		<p class="max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300">
			{description}
		</p>
	</div>
</a>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/NavbarMenu/index.ts'>

```ts
import NavbarMenu from './NavbarMenu.svelte';
import HoveredLink from './HoveredLink.svelte';
import MenuItem from './MenuItem.svelte';
import ProductItem from './ProductItem.svelte';

export { NavbarMenu, HoveredLink, MenuItem, ProductItem };
```

</CodeBlock>

## Props

<PropsTable path='MenuItem' props={menuItemProps} />

<PropsTable path='NavbarMenu' props={navbarMenuProps} />

<PropsTable path='ProductItem' props={productItemProps} />
