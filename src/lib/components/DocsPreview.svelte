<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import { GridAndDotBackgroundsSmallGrid } from '@/aceternity-components/GridAndDotBackgrounds';
	import { AppWindow, Code } from 'lucide-svelte';
	import CodeBlock from './CodeBlock.svelte';
</script>

<Tabs.Root value="preview" class="prose-unprose">
	<Tabs.List>
		<Tabs.Trigger value="preview"><AppWindow class="mr-2 h-4 w-4" />Preview</Tabs.Trigger>
		<Tabs.Trigger value="code"><Code class="mr-2 h-4 w-4" />Code</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="preview">
		<div class="rounded-lg border-[1px] border-gray-800 p-1">
			<GridAndDotBackgroundsSmallGrid showFade={false}>
				<slot name="preview" />
			</GridAndDotBackgroundsSmallGrid>
		</div>
	</Tabs.Content>
	<Tabs.Content value="code">
		<CodeBlock>
			<slot name="code" />
		</CodeBlock>
	</Tabs.Content>
</Tabs.Root>
