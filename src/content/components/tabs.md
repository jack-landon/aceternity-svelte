---
component: true
---

<script>
    import DocsPreview from '$lib/components/DocsPreview.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import PropsTable from '$lib/components/PropsTable.svelte'
    import InstallDependenciesCodeBlock from '$lib/components/InstallDependenciesCodeBlock.svelte'
    import AddCnUtilCodeBlock from '$lib/components/AddCnUtilCodeBlock.svelte'
    import TabsDemo from '$lib/aceternity-components/Tabs/TabsDemo.svelte'

   let tabsProps = [
        {name: 'propTabs', type: '{title: string, value: string, content?: string | any}[]', description: 'An array of Tab objects.'},
        {name: 'containerClassName', type: 'string | undefined', description: 'CSS class name for the container div.'},
		{name: 'activeTabClassName', type: 'string | undefined', description: 'CSS class name for the active tab.'},
		{name: 'tabClassName', type: 'string | undefined', description: 'CSS class name for the tab.'},
		{name: 'contentClassName', type: 'string | undefined', description: 'CSS class name for the content div.'}
		]

   let fadeInDivProps = [
        {name: 'className', type: 'string | undefined', description: 'CSS class name for the FadeInDiv.'},
        {name: 'tabs', type: '{title: string, value: string, content?: string | any}[]', description: 'An array of Tab objects. Each Tab object has title, value, and content properties.'},
		{name: 'active', type: '{title: string, value: string, content?: string | any}', description: 'The active tab.'},
		{name: 'hovering', type: 'boolean | undefined', description: 'Whether the mouse is hovering over the component.'}
		]
</script>

<DocsPreview>
<div slot='preview'>
<TabsDemo />
</div>

<div slot='code'>

```svelte
<script lang="ts">
	import Tabs from './Tabs.svelte';

	const tabs = [
		{
			title: 'Product',
			value: 'product',
			content:
				'<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"> <p>Product Tab</p> <img src="/linear.webp" alt="dummy image" width="1000" height="1000" class="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" /> </div>'
		},
		{
			title: 'Services',
			value: 'services',
			content:
				'<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"> <p>Services tab</p> <img src="/linear.webp" alt="dummy image" width="1000" height="1000" class="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" /> </div>'
		},
		{
			title: 'Playground',
			value: 'playground',
			content:
				'<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"> <p>Playground tab</p> <img src="/linear.webp" alt="dummy image" width="1000" height="1000" class="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" /> </div>'
		},
		{
			title: 'Content',
			value: 'content',
			content:
				'<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"> <p>Content tab</p> <img src="/linear.webp" alt="dummy image" width="1000" height="1000" class="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" /> </div>'
		},
		{
			title: 'Random',
			value: 'random',
			content:
				'<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"> <p>Random tab</p> <img src="/linear.webp" alt="dummy image" width="1000" height="1000" class="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" /> </div>'
		}
	];
</script>

<div
	class="relative mx-auto mb-24 flex h-[20rem] w-[80vw] max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem] lg:w-[60vw]"
>
	<Tabs
		propTabs={tabs}
		contentClassName="rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold md:text-4xl mt-24"
	/>
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

<CodeBlock path='src/lib/components/ui/Tabs/Tabs.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import { AnimatePresence, Motion } from 'svelte-motion';
	import FadeInDiv from './FadeInDiv.svelte';

	type Tab = {
		title: string;
		value: string;
		content?: string | any;
	};

	export let propTabs: Tab[];
	export let containerClassName: string | undefined = undefined;
	export let activeTabClassName: string | undefined = undefined;
	export let tabClassName: string | undefined = undefined;
	export let contentClassName: string | undefined = undefined;

	let active: Tab = propTabs[0];
	let tabs: Tab[] = propTabs;

	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		tabs = newTabs;
		active = newTabs[0];
	};

	let hovering = false;
</script>

<div
	class={cn(
		'no-visible-scrollbar relative flex w-full max-w-full flex-row items-center justify-start overflow-auto [perspective:1000px] sm:overflow-visible',
		containerClassName
	)}
>
	{#each propTabs as tab, idx (tab.title)}
		<button
			on:click={() => {
				moveSelectedTabToTop(idx);
			}}
			on:mouseenter={() => (hovering = true)}
			on:mouseleave={() => (hovering = false)}
			class={cn('relative rounded-full px-4 py-2', tabClassName)}
			style="transform-style: preserve-3d;"
		>
			{#if active.value === tab.value}
				<Motion
					let:motion
					layoutId="clickedbutton"
					transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
				>
					<div
						use:motion
						class={cn(
							'absolute inset-0 rounded-full bg-gray-200 dark:bg-zinc-800 ',
							activeTabClassName
						)}
					/>
				</Motion>
			{/if}

			<span class="relative block text-black dark:text-white">
				{tab.title}
			</span>
		</button>
	{/each}
</div>
<FadeInDiv {tabs} {hovering} className={cn('', contentClassName)} />
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/Tabs/FadeInDiv.svelte'>

```svelte
<script lang="ts">
	import { cn } from '@/utils';
	import { Motion } from 'svelte-motion';

	type Tab = {
		title: string;
		value: string;
		content?: any | undefined;
	};

	export let className: string | undefined = undefined;
	export let tabs: Tab[];
	export let hovering: boolean | undefined;

	const isActive = (tab: Tab) => {
		return tab.value === tabs[0].value;
	};
</script>

<div class="relative h-full w-full">
	{#each tabs as tab, idx (tab.value)}
		<Motion
			let:motion
			layoutId={tab.value}
			animate={{
				y: isActive(tab) ? [0, 40, 0] : 0
			}}
		>
			<div
				use:motion
				style={`scale: ${1 - idx * 0.1}; top: ${hovering ? `${idx * -60}px` : 0}; z-index: ${-idx}; opacity: ${idx < 3 ? 1 - idx * 0.1 : 0};`}
				class={cn('absolute left-0 top-0 h-full w-full overflow-hidden', className)}
			>
				{@html tab.content}
			</div>
		</Motion>
	{/each}
</div>
```

</CodeBlock>

## Copy to `app.pcss` to hide scrollbar (optional)

<CodeBlock path='src/app.pcss'>

```css
.no-visible-scrollbar {
	scrollbar-width: none;
	-ms-overflow-style: none;
	-webkit-overflow-scrolling: touch;
}

.no-visible-scrollbar::-webkit-scrollbar {
	display: none;
}
```

</CodeBlock>

<CodeBlock path='src/lib/components/ui/Tabs/index.ts'>

```ts
import Tabs from './Tabs.svelte';
import FadeInDiv from './FadeInDiv.svelte';

export { Tabs, FadeInDiv };
```

</CodeBlock>

## Props

<PropsTable path='Tabs' props={tabsProps} />

<PropsTable path='FadeInDiv' props={fadeInDivProps} />
