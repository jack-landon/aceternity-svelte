---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import MacbookScrollDemo from '$lib/aceternity-components/MacbookScroll/MacbookScrollDemo.svelte'

    let props = [
        {name: 'src', type: 'string | undefined', description: 'Image source for the macbook screen.'},
        {name: 'showGradient', type: 'boolean', description: 'Show/hide the gradient overlay.'},
        {name: 'title', type: 'slot (child)', description: 'A slot to add an element for the title displayed above the Macbook.'},
        {name: 'badge', type: 'slot (child)', description: 'An optional sticker displayed at the bottom left of the Macbook'},
        ]
</script>

<DocsPreview>
<div slot='preview'>
<MacbookScrollDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { MacbookScroll } from '.';
</script>

<div class="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
	<MacbookScroll src={`/linear.webp`} showGradient={false}>
		<span slot="title">
			This Macbook is built with Tailwindcss. <br /> No kidding.
		</span>

		<a slot="badge" href="https://sveltekit.io">
			<!-- Aceternity Svelte Logo -->
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 98.1 118"
				style="enable-background:new 0 0 98.1 118;"
				xml:space="preserve"
			>
				<style type="text/css">
					.st0 {
						fill: #ff3e00;
					}
					.st1 {
						fill: #ffffff;
					}
				</style>
				<path
					class="st0"
					d="M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3
	c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1
	c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"
				/>
				<path
					class="st1"
					d="M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1
	c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72
	c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7
	c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5
	c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1
	c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1
	c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5
	c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"
				/>
			</svg>
		</a>
	</MacbookScroll>
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

const config = {
	// ... other properties
	plugins: [
		// ...other plugins
		addVariablesForColors
	]
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
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

<CodeBlock path='src/lib/components/ui/MacbookScroll/MacbookScroll.svelte'>

```svelte
<script lang="ts">
	import { Motion, useViewportScroll, useTransform } from 'svelte-motion';
	import Lid from './Lid.svelte';
	import Keypad from './Keypad.svelte';
	import { onMount } from 'svelte';

	export let src: string | undefined = undefined;
	export let showGradient: boolean | undefined = undefined;

	let ref: HTMLDivElement;

	const { scrollYProgress } = useViewportScroll();

	let isMobile = false;

	onMount(() => {
		if (window && window.innerWidth < 768) {
			isMobile = true;
		}
	});

	const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5]);
	const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.3, isMobile ? 1 : 1.5]);
	const translate = useTransform(scrollYProgress, [0, 1], [-80, 1500]);
	const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
	const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
	const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
</script>

<div
	bind:this={ref}
	class="flex min-h-[60vh] min-w-[42rem] flex-shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 [perspective:800px] sm:scale-50 md:scale-100 md:pb-60 md:pt-28"
>
	<Motion
		let:motion
		style={{
			translateY: textTransform,
			opacity: textOpacity
		}}
	>
		<h2 use:motion class="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white">
			<slot name="title">
				<span>
					This Macbook is built with Tailwindcss. <br /> No kidding.
				</span>
			</slot>
		</h2>
	</Motion>
	<Lid {src} {scaleX} {scaleY} {rotate} {translate} />
	<!-- Base Area -->
	<div
		class="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]"
	>
		<!-- above keyboard bar -->
		<div class="relative h-10 w-full">
			<div class="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
		</div>
		<div class="relative flex">
			<div class="mx-auto h-full w-[10%] overflow-hidden">
				<div
					class="mt-2 flex h-40 gap-[2px] px-[0.5px]"
					style="background-image: radial-gradient(circle, #08080A 0.5px, transparent 0.5px); background-size: 3px 3px;"
				></div>
			</div>
			<div class="mx-auto h-full w-[80%]">
				<Keypad />
			</div>
			<div class="mx-auto h-full w-[10%] overflow-hidden">
				<div
					class="mt-2 flex h-40 gap-[2px] px-[0.5px]"
					style="background-image: radial-gradient(circle, #08080A 0.5px, transparent 0.5px); background-size: 3px 3px;"
				></div>
			</div>
		</div>
		<div
			class="mx-auto my-1 h-32 w-[40%] rounded-xl"
			style="box-shadow: 0px 0px 1px 1px #00000020 inset;"
		></div>
		<div
			class="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]"
		/>
		{#if showGradient}
			<div
				class="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"
			></div>
		{/if}

		<div class="absolute bottom-4 left-4">
			<slot name="badge" />
		</div>
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/MacbookScroll/Lid.svelte'>

```svelte
<script lang="ts">
	import { Motion, MotionValue } from 'svelte-motion';

	export let scaleX: MotionValue<number>;
	export let scaleY: MotionValue<number>;
	export let rotate: MotionValue<number>;
	export let translate: MotionValue<number>;
	export let src: string | undefined = undefined;
</script>

<div class="relative [perspective:800px]">
	<div
		style="transform: perspective(800px) rotateX(-25deg) translateZ(0px); transform-origin: bottom; transform-style: preserve-3d;"
		class="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
	>
		<div
			style="box-shadow: 0px 2px 0px 2px var(--neutral-900) inset;"
			class="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
		>
			<span class="text-white">
				<!-- Aceternity Logo -->
				<svg
					width="65"
					height="65"
					viewBox="0 0 65 65"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style="background:black; padding:5px"
					class="h-7 w-7"
					><path
						d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
						stroke="#EA580C"
						stroke-width="15"
						stroke-miterlimit="3.86874"
						stroke-linecap="round"
					></path></svg
				>
			</span>
		</div>
	</div>
	<Motion
		let:motion
		style={{
			scaleX: scaleX,
			scaleY: scaleY,
			rotateX: rotate,
			translateY: translate,
			transformStyle: 'preserve-3d',
			transformOrigin: 'top'
		}}
	>
		<div use:motion class="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2">
			<div class="absolute inset-0 rounded-lg bg-[#272729]" />
			{#if src}
				<img
					{src}
					alt="Aceternity Svelte Logo"
					class="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
				/>
			{/if}
		</div>
	</Motion>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/MacbookScroll/KBtn.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';

	export let className: string | undefined = undefined;
	export let childrenClassName: string | undefined = undefined;
	export let backlit: boolean = true;
</script>

<div class={cn('rounded-[4px] p-[0.5px]', backlit && 'bg-white/[0.2] shadow-xl shadow-white')}>
	<div
		class={cn('flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]', className)}
		style="box-shadow: 0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset;"
	>
		<div
			class={cn(
				'flex w-full flex-col items-center justify-center text-[5px] text-neutral-200',
				childrenClassName,
				backlit && 'text-white'
			)}
		>
			<slot />
		</div>
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/MacbookScroll/Keypad.svelte'>

```svelte
<script>
	import KBtn from './KBtn.svelte';

	import {
		IconBrightnessDown,
		IconBrightnessUp,
		IconCaretRightFilled,
		IconCaretUpFilled,
		IconChevronUp,
		IconMicrophone,
		IconMoon,
		IconPlayerSkipForward,
		IconPlayerTrackNext,
		IconPlayerTrackPrev,
		IconTable,
		IconVolume,
		IconVolume2,
		IconVolume3,
		IconSearch,
		IconWorld,
		IconCommand,
		IconCaretLeftFilled,
		IconCaretDownFilled
	} from '@tabler/icons-svelte';
</script>

<div class="mx-1 h-full rounded-md bg-[#050505] p-1">
	<!-- First Row -->
	<div class="mb-[2px] flex w-full flex-shrink-0 gap-[2px]">
		<KBtn
			className="w-10 items-end justify-start pl-[4px] pb-[2px]"
			childrenClassName="items-start"
		>
			esc
		</KBtn>
		<KBtn>
			<IconBrightnessDown class="h-[6px] w-[6px]" />
			<span class="mt-1 inline-block">F1</span>
		</KBtn>

		<KBtn>
			<IconBrightnessUp class="h-[6px] w-[6px]" />
			<span class="mt-1 inline-block">F2</span>
		</KBtn>
		<KBtn>
			<IconTable class="h-[6px] w-[6px]" />
			<span class="mt-1 inline-block">F3</span>
		</KBtn>
		<KBtn>
			<IconSearch class="h-[6px] w-[6px]" />
			<span class="mt-1 inline-block">F4</span>
		</KBtn>
		<KBtn>
			<IconMicrophone class="h-[6px] w-[6px]" />
			<span class="mt-1 inline-block">F5</span>
		</KBtn>
		<KBtn>
			<IconMoon class="h-[6px] w-[6px]" />
			<span class="mt-1 inline-block">F6</span>
		</KBtn>
		<KBtn>
			<IconPlayerTrackPrev class="h-[6px] w-[6px]" />
			<span class="mt-1 inline-block">F7</span>
		</KBtn>
		<KBtn>
			<IconPlayerSkipForward class="h-[6px] w-[6px]" />
			<span class="mt-1 inline-block">F8</span>
		</KBtn>
		<KBtn>
			<IconPlayerTrackNext class="h-[6px] w-[6px]" />
			<span class="mt-1 inline-block">F8</span>
		</KBtn>
		<KBtn>
			<IconVolume3 class="h-[6px] w-[6px]" />
			<span class="mt-1 inline-block">F10</span>
		</KBtn>
		<KBtn>
			<IconVolume2 class="h-[6px] w-[6px]" />
			<span class="mt-1 inline-block">F11</span>
		</KBtn>
		<KBtn>
			<IconVolume class="h-[6px] w-[6px]" />
			<span class="mt-1 inline-block">F12</span>
		</KBtn>
		<KBtn>
			<div
				class="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px"
			>
				<div class="h-full w-full rounded-full bg-black" />
			</div>
		</KBtn>
	</div>

	<!-- Second row -->
	<div class="mb-[2px] flex w-full flex-shrink-0 gap-[2px]">
		<KBtn>
			<span class="block">~</span>
			<span class="mt-1 block">`</span>
		</KBtn>

		<KBtn>
			<span class="block">!</span>
			<span class="block">1</span>
		</KBtn>
		<KBtn>
			<span class="block">@</span>
			<span class="block">2</span>
		</KBtn>
		<KBtn>
			<span class="block">#</span>
			<span class="block">3</span>
		</KBtn>
		<KBtn>
			<span class="block">$</span>
			<span class="block">4</span>
		</KBtn>
		<KBtn>
			<span class="block">%</span>
			<span class="block">5</span>
		</KBtn>
		<KBtn>
			<span class="block">^</span>
			<span class="block">6</span>
		</KBtn>
		<KBtn>
			<span class="block">&</span>
			<span class="block">7</span>
		</KBtn>
		<KBtn>
			<span class="block">*</span>
			<span class="block">8</span>
		</KBtn>
		<KBtn>
			<span class="block">(</span>
			<span class="block">9</span>
		</KBtn>
		<KBtn>
			<span class="block">)</span>
			<span class="block">0</span>
		</KBtn>
		<KBtn>
			<span class="block">&mdash;</span>
			<span class="block">_</span>
		</KBtn>
		<KBtn>
			<span class="block">+</span>
			<span class="block"> = </span>
		</KBtn>
		<KBtn className="w-10 items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
			delete
		</KBtn>
	</div>

	<!-- Third row -->
	<div class="mb-[2px] flex w-full flex-shrink-0 gap-[2px]">
		<KBtn
			className="w-10 items-end justify-start pl-[4px] pb-[2px]"
			childrenClassName="items-start"
		>
			tab
		</KBtn>
		<KBtn>
			<span class="block">Q</span>
		</KBtn>

		<KBtn>
			<span class="block">W</span>
		</KBtn>
		<KBtn>
			<span class="block">E</span>
		</KBtn>
		<KBtn>
			<span class="block">R</span>
		</KBtn>
		<KBtn>
			<span class="block">T</span>
		</KBtn>
		<KBtn>
			<span class="block">Y</span>
		</KBtn>
		<KBtn>
			<span class="block">U</span>
		</KBtn>
		<KBtn>
			<span class="block">I</span>
		</KBtn>
		<KBtn>
			<span class="block">O</span>
		</KBtn>
		<KBtn>
			<span class="block">P</span>
		</KBtn>
		<KBtn>
			<span class="block">{`{`}</span>
			<span class="block">{`[`}</span>
		</KBtn>
		<KBtn>
			<span class="block">{`}`}</span>
			<span class="block">{`]`}</span>
		</KBtn>
		<KBtn>
			<span class="block">{`|`}</span>
			<span class="block">{`\\`}</span>
		</KBtn>
	</div>

	<!-- Fourth Row -->
	<div class="mb-[2px] flex w-full flex-shrink-0 gap-[2px]">
		<KBtn
			className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]"
			childrenClassName="items-start"
		>
			caps lock
		</KBtn>
		<KBtn>
			<span class="block">A</span>
		</KBtn>

		<KBtn>
			<span class="block">S</span>
		</KBtn>
		<KBtn>
			<span class="block">D</span>
		</KBtn>
		<KBtn>
			<span class="block">F</span>
		</KBtn>
		<KBtn>
			<span class="block">G</span>
		</KBtn>
		<KBtn>
			<span class="block">H</span>
		</KBtn>
		<KBtn>
			<span class="block">J</span>
		</KBtn>
		<KBtn>
			<span class="block">K</span>
		</KBtn>
		<KBtn>
			<span class="block">L</span>
		</KBtn>
		<KBtn>
			<span class="block">{`:`}</span>
			<span class="block">{`;`}</span>
		</KBtn>
		<KBtn>
			<span class="block">{`"`}</span>
			<span class="block">{`'`}</span>
		</KBtn>
		<KBtn
			className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
			childrenClassName="items-end"
		>
			return
		</KBtn>
	</div>

	<!-- Fifth Row -->
	<div class="mb-[2px] flex w-full flex-shrink-0 gap-[2px]">
		<KBtn
			className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]"
			childrenClassName="items-start"
		>
			shift
		</KBtn>
		<KBtn>
			<span class="block">Z</span>
		</KBtn>
		<KBtn>
			<span class="block">X</span>
		</KBtn>
		<KBtn>
			<span class="block">C</span>
		</KBtn>
		<KBtn>
			<span class="block">V</span>
		</KBtn>
		<KBtn>
			<span class="block">B</span>
		</KBtn>
		<KBtn>
			<span class="block">N</span>
		</KBtn>
		<KBtn>
			<span class="block">M</span>
		</KBtn>
		<KBtn>
			<span class="block">{`<`}</span>
			<span class="block">{`,`}</span>
		</KBtn>
		<KBtn>
			<span class="block">{`>`}</span>
			<span class="block">{`.`}</span>
		</KBtn>{' '}
		<KBtn>
			<span class="block">{`?`}</span>
			<span class="block">{`/`}</span>
		</KBtn>
		<KBtn
			className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
			childrenClassName="items-end"
		>
			shift
		</KBtn>
	</div>

	<!-- Sixth Row -->
	<div class="mb-[2px] flex w-full flex-shrink-0 gap-[2px]">
		<KBtn className="" childrenClassName="h-full justify-between py-[4px]">
			<div class="flex w-full justify-end pr-1">
				<span class="block">fn</span>
			</div>
			<div class="flex w-full justify-start pl-1">
				<IconWorld class="h-[6px] w-[6px]" />
			</div>
		</KBtn>
		<KBtn className="" childrenClassName="h-full justify-between py-[4px]">
			<div class="flex w-full justify-end pr-1">
				<IconChevronUp class="h-[6px] w-[6px]" />
			</div>
			<div class="flex w-full justify-start pl-1">
				<span class="block">control</span>
			</div>
		</KBtn>
		<KBtn className="" childrenClassName="h-full justify-between py-[4px]">
			<div class="flex w-full justify-end pr-1">
				<svg
					fill="none"
					version="1.1"
					id="icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 32 32"
					class="h-[6px] w-[6px]"
				>
					<rect stroke="currentColor" stroke-width={2} x="18" y="5" width="10" height="2" />
					<polygon
						stroke="currentColor"
						stroke-width={2}
						points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
					/>
					<rect id="_Transparent_Rectangle_" class="st0" width="32" height="32" stroke="none" />
				</svg>
			</div>
			<div class="flex w-full justify-start pl-1">
				<span class="block">option</span>
			</div>
		</KBtn>
		<KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
			<div class="flex w-full justify-end pr-1">
				<IconCommand class="h-[6px] w-[6px]" />
			</div>
			<div class="flex w-full justify-start pl-1">
				<span class="block">command</span>
			</div>
		</KBtn>
		<KBtn className="w-[8.2rem]"></KBtn>
		<KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
			<div class="flex w-full justify-start pl-1">
				<IconCommand class="h-[6px] w-[6px]" />
			</div>
			<div class="flex w-full justify-start pl-1">
				<span class="block">command</span>
			</div>
		</KBtn>
		<KBtn className="" childrenClassName="h-full justify-between py-[4px]">
			<div class="flex w-full justify-start pl-1">
				<svg
					fill="none"
					version="1.1"
					id="icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 32 32"
					class="h-[6px] w-[6px]"
				>
					<rect stroke="currentColor" stroke-width={2} x="18" y="5" width="10" height="2" />
					<polygon
						stroke="currentColor"
						stroke-width={2}
						points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
					/>
					<rect id="_Transparent_Rectangle_" class="st0" width="32" height="32" stroke="none" />
				</svg>
			</div>
			<div class="flex w-full justify-start pl-1">
				<span class="block">option</span>
			</div>
		</KBtn>
		<div
			class="mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]"
		>
			<KBtn className="w-6 h-3">
				<IconCaretUpFilled class="h-[6px] w-[6px]" />
			</KBtn>
			<div class="flex">
				<KBtn className="w-6 h-3">
					<IconCaretLeftFilled class="h-[6px] w-[6px]" />
				</KBtn>
				<KBtn className="w-6 h-3">
					<IconCaretDownFilled class="h-[6px] w-[6px]" />
				</KBtn>
				<KBtn className="w-6 h-3">
					<IconCaretRightFilled class="h-[6px] w-[6px]" />
				</KBtn>
			</div>
		</div>
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/MacbookScroll/index.ts'>

```ts
import MacbookScroll from './MacbookScroll.svelte';
import MacbookScrollDemo from './MacbookScrollDemo.svelte';
import Keypad from './Keypad.svelte';
import KBtn from './KBtn.svelte';
import Lid from './Lid.svelte';

export { MacbookScroll, MacbookScrollDemo, Keypad, KBtn, Lid };
```

</CodeBlock>

## Props

<PropsTable path='MacbookScroll' props={props} />
