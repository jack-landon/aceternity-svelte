---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import HeroParallaxDemo from '$lib/aceternity-components/HeroParallax/HeroParallaxDemo.svelte'

    let heroParallaxProps = [
        {name: 'products', type: 'Array<{title: string, link: string, thumbnail: string}>', description: 'An array of product objects.'}]

    let productCardProps = [
        {name: 'product', type: '{title: string, link: string, thumbnail: string}', description: 'An object representing a product.'},
        {name: 'translate', type: 'MotionValue<number>', description: 'A type of props'}]
</script>

<DocsPreview>
<div slot='preview'>
<HeroParallaxDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import HeroParallax from './HeroParallax.svelte';

	const products = [
		{
			title: 'Moonbeam',
			link: 'https://gomoonbeam.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/moonbeam.png'
		},
		{
			title: 'Cursor',
			link: 'https://cursor.so',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cursor.png'
		},
		{
			title: 'Rogue',
			link: 'https://userogue.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/rogue.png'
		},

		{
			title: 'Editorially',
			link: 'https://editorially.org',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editorially.png'
		},
		{
			title: 'Editrix AI',
			link: 'https://editrix.ai',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editrix.png'
		},
		{
			title: 'Pixel Perfect',
			link: 'https://app.pixelperfect.quest',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png'
		},

		{
			title: 'Algochurn',
			link: 'https://algochurn.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/algochurn.png'
		},
		{
			title: 'Aceternity UI',
			link: 'https://ui.aceternity.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/aceternityui.png'
		},
		{
			title: 'Tailwind Master Kit',
			link: 'https://tailwindmasterkit.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png'
		},
		{
			title: 'SmartBridge',
			link: 'https://smartbridgetech.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/smartbridge.png'
		},
		{
			title: 'Renderwork Studio',
			link: 'https://renderwork.studio',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/renderwork.png'
		},

		{
			title: 'Creme Digital',
			link: 'https://cremedigital.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cremedigital.png'
		},
		{
			title: 'Golden Bells Academy',
			link: 'https://goldenbellsacademy.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png'
		},
		{
			title: 'Invoker Labs',
			link: 'https://invoker.lol',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/invoker.png'
		},
		{
			title: 'E Free Invoice',
			link: 'https://efreeinvoice.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png'
		}
	];
</script>

<div class="container mx-auto w-[80vw] lg:w-[60vw]">
	<HeroParallax {products} />
</div>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock dependencies={['svelte-motion', 'clsx', 'tailwind-merge']} />

### Add util file

<AddCnUtilCodeBlock />

### Copy the source code

<CodeBlock path='src/lib/components/ui/HeroParallax/HeroParallax.svelte'>

```svelte
<script lang="ts">
	export let products: {
		title: string;
		link: string;
		thumbnail: string;
	}[];

	import { Motion, useTransform, useSpring, useViewportScroll } from 'svelte-motion';
	import ProductCard from './ProductCard.svelte';

	const firstRow = products.slice(0, 5);
	const secondRow = products.slice(5, 10);
	const thirdRow = products.slice(10, 15);
	let ref: HTMLDivElement | null = null;

	const { scrollYProgress } = useViewportScroll();

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig
	);
	const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
	const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
	const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
	const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
</script>

<div
	bind:this={ref}
	class="relative flex h-[300vh] flex-col self-auto overflow-hidden py-4 antialiased [perspective:1000px] [transform-style:preserve-3d]"
>
	<div class="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-8 md:py-4">
		<h2 class="text-2xl font-bold dark:text-white md:text-7xl">
			The Ultimate <br /> development studio
		</h2>
		<p class="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
			We build beautiful products with the latest technologies and frameworks. We are a team of
			passionate developers and designers that love to build amazing products.
		</p>
	</div>
	<Motion
		let:motion
		style={{
			rotateX,
			rotateZ,
			translateY,
			opacity
		}}
	>
		<div use:motion>
			<Motion let:motion>
				<div use:motion class="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
					{#each firstRow as product (product.title)}
						<ProductCard {product} translate={translateX} />
					{/each}
				</div>
			</Motion>
			<Motion let:motion>
				<div use:motion class="mb-20 flex flex-row space-x-20">
					{#each secondRow as product (product.title)}
						<ProductCard {product} translate={translateXReverse} />
					{/each}
				</div>
			</Motion>
			<Motion let:motion>
				<div use:motion class="flex flex-row-reverse space-x-20 space-x-reverse">
					{#each thirdRow as product (product.title)}
						<ProductCard {product} translate={translateX} />
					{/each}
				</div>
			</Motion>
		</div>
	</Motion>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/HeroParallax/ProductCard.svelte'>

```svelte
<script lang="ts">
	import { Motion, MotionValue } from 'svelte-motion';

	export let product: {
		title: string;
		link: string;
		thumbnail: string;
	};
	export let translate: MotionValue<number>;
</script>

<Motion
	let:motion
	style={{
		x: translate
	}}
	whileHover={{
		y: -20
	}}
>
	<div use:motion class="group/product relative h-96 w-[30rem] flex-shrink-0">
		<a href={product.link} class="block group-hover/product:shadow-2xl">
			<img
				src={product.thumbnail}
				height="600"
				width="600"
				class="absolute inset-0 h-full w-full object-cover object-left-top"
				alt={product.title}
			/>
		</a>
		<div
			class="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80"
		></div>
		<h2 class="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100">
			{product.title}
		</h2>
	</div>
</Motion>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/HeroParallax/index.ts'>

```ts
import HeroParallax from './HeroParallax.svelte';
import ProductCard from './ProductCard.svelte';

export { HeroParallax, ProductCard };
```

</CodeBlock>

## Props

<PropsTable path='HeroParallax' props={heroParallaxProps} />

<PropsTable path='ProductCard' props={productCardProps} />
