---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import GradientAnimationDemo from '$lib/aceternity-components/GradientAnimation/GradientAnimationDemo.svelte'

    let props = [
        {name: 'gradientBackgroundStart', type: 'string | null', description: 'Default: rgb(108, 0, 162). The starting color of the background gradient, specified as an RGB value.'},
        {name: 'gradientBackgroundEnd', type: 'string | null', description: 'Default: rgb(0, 17, 82). The ending color of the background gradient, specified as an RGB value.'},
		{name: 'firstColor', type: 'string | null', description: 'Default: 18, 113, 255. The first color used in the animation, specified as an RGB value without the rgb tag.'},
		{name: 'secondColor', type: 'string | null', description: 'Default: 221, 74, 255. The second color used in the animation, specified as an RGB value without the rgb tag.'},
		{name: 'thirdColor', type: 'string | null', description: 'Default: 100, 220, 255. The third color used in the animation, specified as an RGB value without the rgb tag.'},
		{name: 'fourthColor', type: 'string | null', description: 'Default: 200, 50, 50. The fourth color used in the animation, specified as an RGB value without the rgb tag.'},
		{name: 'fifthColor', type: 'string | null', description: 'Default: 180, 180, 50. The fifth color used in the animation, specified as an RGB value without the rgb tag.'},
		{name: 'pointerColor', type: 'string | null', description: 'Default: 140, 100, 255. The color of the pointer, specified as an RGB value without the rgb tag.'},
		{name: 'size', type: 'string | null', description: 'Default: 80%. The size of the animated elements.'},
		{name: 'blendingValue', type: 'string | null', description: 'Default: hard-light. The blending mode used for the animated elements.'},
		{name: 'className', type: 'string | undefined', description: 'Additional CSS class for styling.'},
		{name: 'interactive', type: 'boolean | undefined', description: 'Default: true. Determines if the animation is interactive or not.'},
		{name: 'containerClassName', type: 'string | undefined', description: 'Additional CSS class for the container.'}
		]
</script>

<DocsPreview>
<div slot='preview'>
<GradientAnimationDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import GradientAnimation from './GradientAnimation.svelte';
</script>

<GradientAnimation>
	<div
		class="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"
	>
		<p
			class="bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-transparent drop-shadow-2xl"
		>
			Gradients X Animations
		</p>
	</div>
</GradientAnimation>
```

</div>
</DocsPreview>

## Installation

### Install Dependencies

<InstallDependenciesCodeBlock />

### Add util file

<AddCnUtilCodeBlock />

### Add these animations and keyframes to your `tailwind.config.ts` file

<CodeBlock path='tailwind.config.ts'>

```ts
const config = {
	// ... other properties
	theme: {
		extend: {
			animation: {
				// ...other animations
				first: 'moveVertical 30s ease infinite',
				second: 'moveInCircle 20s reverse infinite',
				third: 'moveInCircle 40s linear infinite',
				fourth: 'moveHorizontal 40s ease infinite',
				fifth: 'moveInCircle 20s ease infinite'
			},
			keyframes: {
				// ... other keyframes
				moveHorizontal: {
					'0%': {
						transform: 'translateX(-50%) translateY(-10%)'
					},
					'50%': {
						transform: 'translateX(50%) translateY(10%)'
					},
					'100%': {
						transform: 'translateX(-50%) translateY(-10%)'
					}
				},
				moveInCircle: {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'50%': {
						transform: 'rotate(180deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				moveVertical: {
					'0%': {
						transform: 'translateY(-50%)'
					},
					'50%': {
						transform: 'translateY(50%)'
					},
					'100%': {
						transform: 'translateY(-50%)'
					}
				}
			}
		}
	}
};
```

</CodeBlock>

### Copy the source code

<CodeBlock path='src/lib/components/ui/GradientAnimation/GradientAnimation.svelte'>

```svelte
<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	export let gradientBackgroundStart: string | null = 'rgb(108, 0, 162)';
	export let gradientBackgroundEnd: string | null = 'rgb(0, 17, 82)';
	export let firstColor: string | null = '18, 113, 255';
	export let secondColor: string | null = '221, 74, 255';
	export let thirdColor: string | null = '100, 220, 255';
	export let fourthColor: string | null = '200, 50, 50';
	export let fifthColor: string | null = '180, 180, 50';
	export let pointerColor: string | null = '140, 100, 255';
	export let size: string | null = '80%';
	export let blendingValue: string | null = 'hard-light';
	export let className: string | undefined = undefined;
	export let interactive: boolean | undefined = true;
	export let containerClassName: string | undefined = undefined;

	let interactiveRef: HTMLDivElement;

	let curX = 0;
	let curY = 0;
	let tgX = 0;
	let tgY = 0;

	$: tgX || tgY, updateGradient();

	onMount(() => {
		document.body.style.setProperty('--gradient-background-start', gradientBackgroundStart);
		document.body.style.setProperty('--gradient-background-end', gradientBackgroundEnd);
		document.body.style.setProperty('--first-color', firstColor);
		document.body.style.setProperty('--second-color', secondColor);
		document.body.style.setProperty('--third-color', thirdColor);
		document.body.style.setProperty('--fourth-color', fourthColor);
		document.body.style.setProperty('--fifth-color', fifthColor);
		document.body.style.setProperty('--pointer-color', pointerColor);
		document.body.style.setProperty('--size', size);
		document.body.style.setProperty('--blending-value', blendingValue);
	});

	function updateGradient() {
		if (!interactiveRef) {
			return;
		}
		curX = curX + (tgX - curX) / 20;
		curY = curY + (tgY - curY) / 20;
		interactiveRef.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
	}

	const handleMouseMove = (event: MouseEvent) => {
		if (interactiveRef) {
			const rect = interactiveRef.getBoundingClientRect();
			tgX = event.clientX - rect.left;
			tgY = event.clientY - rect.top;
		}
	};
</script>

<div
	class={cn(
		'relative left-0 top-0 h-96 w-[50vw] overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]',
		containerClassName
	)}
>
	<svg class="hidden">
		<defs>
			<filter id="blurMe">
				<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
				<feColorMatrix
					in="blur"
					mode="matrix"
					values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
					result="goo"
				/>
				<feBlend in="SourceGraphic" in2="goo" />
			</filter>
		</defs>
	</svg>
	<div class={cn('', className)}><slot /></div>
	<div class="gradients-container h-full w-full [filter:url(#blurMe)_blur(40px)]">
		<div
			class={cn(
				`absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
				`left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
				`[transform-origin:center_center]`,
				`animate-first`,
				`opacity-100`
			)}
		></div>
		<div
			class={cn(
				`absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
				`left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
				`[transform-origin:calc(50%-400px)]`,
				`animate-second`,
				`opacity-100`
			)}
		></div>
		<div
			class={cn(
				`absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
				`left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
				`[transform-origin:calc(50%+400px)]`,
				`animate-third`,
				`opacity-100`
			)}
		></div>
		<div
			class={cn(
				`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
				`left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
				`[transform-origin:calc(50%-200px)]`,
				`animate-fourth`,
				`opacity-70`
			)}
		></div>
		<div
			class={cn(
				`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
				`left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
				`[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
				`animate-fifth`,
				`opacity-100`
			)}
		></div>

		{#if interactive}
			<div
				bind:this={interactiveRef}
				on:mousemove={handleMouseMove}
				class={cn(
					`absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
					`-left-1/2 -top-1/2 h-full w-full [mix-blend-mode:var(--blending-value)]`,
					`opacity-70`
				)}
			></div>
		{/if}
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/GradientAnimation/index.ts'>

```ts
import GradientAnimation from './GradientAnimation.svelte';

export { GradientAnimation };
```

</CodeBlock>

## Props

<PropsTable path='GradientAnimation' props={props} />
