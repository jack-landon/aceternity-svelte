<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	export let path: string | undefined = undefined;
	export let props: { name: string; type: string; description: string }[];
</script>

{#if path}
	<code class="mb-3">{path}</code>
{/if}
<Table.Root class="mb-14 mt-2">
	<!-- <Table.Caption>A list of your recent invoices.</Table.Caption> -->
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]">Prop</Table.Head>
			<Table.Head>Type</Table.Head>
			<Table.Head>Description</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each props as prop}
			<Table.Row>
				<Table.Cell><code>{prop.name}</code></Table.Cell>
				<Table.Cell>{prop.type}</Table.Cell>
				<Table.Cell>{prop.description}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
