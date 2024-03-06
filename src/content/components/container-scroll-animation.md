---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import ContainerScrollAnimation from '$lib/aceternity-components/ContainerScrollAnimation/ContainerScrollAnimationDemo.svelte'

    let props = [
        {name: 'users', type: 'Array<{name: string, designation: string, image: string, badge?: string}>', description: 'List of users passed into the scroll header component'}]
</script>

<DocsPreview>
<div slot='preview'>
<ContainerScrollAnimation />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import { ContainerScrollAnimation } from '.';

	export const users = [
		{
			name: 'Manu Arora',
			designation: 'Founder, Algochurn',
			image: 'https://picsum.photos/id/10/300/300',
			badge: 'Mentor'
		},
		{
			name: 'Sarah Singh',
			designation: "Founder, Sarah's Kitchen",
			image: 'https://picsum.photos/id/11/300/300',
			badge: 'Mentor'
		},
		{
			name: 'John Doe',
			designation: 'Software Engineer, Tech Corp',
			image: 'https://picsum.photos/id/12/300/300',
			badge: 'Mentor'
		},
		{
			name: 'Jane Smith',
			designation: 'Product Manager, Innovate Inc',
			image: 'https://picsum.photos/id/13/300/300',
			badge: 'Mentor'
		},
		{
			name: 'Robert Johnson',
			designation: 'Data Scientist, DataWorks',
			image: 'https://picsum.photos/id/14/300/300',
			badge: 'Mentor'
		},
		{
			name: 'Emily Davis',
			designation: 'UX Designer, DesignHub',
			image: 'https://picsum.photos/id/15/300/300',
			badge: 'Mentor'
		},
		{
			name: 'Michael Miller',
			designation: 'CTO, FutureTech',
			image: 'https://picsum.photos/id/16/300/300',
			badge: 'Mentor'
		},
		{
			name: 'Sarah Brown',
			designation: 'CEO, StartUp',
			image: 'https://picsum.photos/id/17/300/300'
		},
		{
			name: 'James Wilson',
			designation: 'DevOps Engineer, CloudNet',
			image: 'https://picsum.photos/id/18/300/300',
			badge: 'Something'
		},
		{
			name: 'Patricia Moore',
			designation: 'Marketing Manager, MarketGrowth',
			image: 'https://picsum.photos/id/19/300/300',
			badge: 'Mentor'
		},
		{
			name: 'Richard Taylor',
			designation: 'Frontend Developer, WebSolutions',
			image: 'https://picsum.photos/id/20/300/300'
		},
		{
			name: 'Linda Anderson',
			designation: 'Backend Developer, ServerSecure',
			image: 'https://picsum.photos/id/21/300/300'
		},
		{
			name: 'William Thomas',
			designation: 'Full Stack Developer, FullStack',
			image: 'https://picsum.photos/id/22/300/300',
			badge: 'Badger'
		},
		{
			name: 'Elizabeth Jackson',
			designation: 'Project Manager, ProManage',
			image: 'https://picsum.photos/id/23/300/300',
			badge: 'Mentor'
		},
		{
			name: 'David White',
			designation: 'Database Administrator, DataSafe',
			image: 'https://picsum.photos/id/24/300/300',
			badge: 'Advocate'
		},
		{
			name: 'Jennifer Harris',
			designation: 'Network Engineer, NetConnect',
			image: 'https://picsum.photos/id/25/300/300'
		},
		{
			name: 'Charles Clark',
			designation: 'Security Analyst, SecureIT',
			image: 'https://picsum.photos/id/26/300/300'
		},
		{
			name: 'Susan Lewis',
			designation: 'Systems Analyst, SysAnalyse',
			image: 'https://picsum.photos/id/27/300/300'
		},
		{
			name: 'Joseph Young',
			designation: 'Mobile Developer, AppDev',
			image: 'https://picsum.photos/id/28/300/300',
			badge: 'Mentor'
		},
		{
			name: 'Margaret Hall',
			designation: 'Quality Assurance, BugFree',
			image: 'https://picsum.photos/id/29/300/300',
			badge: 'Developer'
		}
	];
</script>

<div class="flex flex-col overflow-hidden">
	<ContainerScrollAnimation {users}>
		<h2 slot="titleComponent" class="text-4xl font-semibold text-black dark:text-white">
			Unleash the power of <br />
			<span class="mt-1 text-4xl font-bold leading-none md:text-[6rem]"> Scroll Animations </span>
		</h2>
	</ContainerScrollAnimation>
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

<CodeBlock path='src/lib/components/ui/ContainerScrollAnimation/ContainerScrollAnimation.svelte'>

```svelte
<script lang="ts">
	import { useTransform, Motion, useViewportScroll } from 'svelte-motion';
	import { onMount } from 'svelte';

	export let users: {
		name: string;
		designation: string;
		image: string;
		badge?: string;
	}[];

	let containerRef: HTMLDivElement;
	let { scrollYProgress } = useViewportScroll();

	let isMobile: boolean = false;

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth <= 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});

	const scaleDimensions = () => {
		return isMobile ? [0.7, 0.9] : [1.05, 1];
	};

	$: rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
	$: scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
	$: translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
</script>

<div class="relative flex items-center justify-center px-16" bind:this={containerRef}>
	<div class="relative w-full py-40" style="perspective: 1000px;">
		<Motion
			let:motion
			style={{
				translateY: translate
			}}
		>
			<div use:motion class="div mx-auto max-w-5xl text-center">
				<slot name="titleComponent" />
			</div>
		</Motion>
		<Motion
			let:motion
			style={{
				rotateX: rotate, // rotate in X-axis
				scale,
				boxShadow:
					'0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003'
			}}
		>
			<div
				use:motion
				class="mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] border-4 border-[#6C6C6C] bg-[#222222] p-6 shadow-2xl md:h-[40rem]"
			>
				<div
					class="grid h-full w-full grid-cols-1 gap-4 overflow-hidden rounded-2xl bg-gray-100 p-4 md:grid-cols-3 lg:grid-cols-5"
				>
					{#each users as user, idx (`user-${idx}`)}
						<Motion
							let:motion
							style={{ translateY: translate }}
							whileHover={{
								boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
							}}
						>
							<div use:motion class="relative cursor-pointer rounded-md bg-white">
								<div
									class="absolute right-2 top-2 rounded-full bg-white px-2 py-1 text-xs font-bold"
								>
									{user.badge}
								</div>
								<img src={user.image} class="rounded-tl-md rounded-tr-md text-sm" alt="thumbnail" />
								<div class="p-4">
									<h2 class="text-sm font-semibold">{user.name}</h2>
									<h3 class=" text-xs text-gray-500">{user.designation}</h3>
								</div>
							</div>
						</Motion>
					{/each}
				</div>
			</div>
		</Motion>
	</div>
</div>
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/ContainerScrollAnimation/index.ts'>

```ts
import ContainerScrollAnimation from './ContainerScrollAnimation.svelte';

export { ContainerScrollAnimation };
```

</CodeBlock>

## Props

<PropsTable path='ContainerScrollAnimation' props={props} />
