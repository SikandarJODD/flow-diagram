<script lang="ts">
	import * as Flow from '$lib/components/flow';
</script>

<Flow.Root align="center">
	<Flow.Node render={line}></Flow.Node>
	<Flow.Node>my-worker</Flow.Node>
	<Flow.Node render={tallerNode}></Flow.Node>
</Flow.Root>

{#snippet line()}
	<li class="bg-kumo-hairline size-4 rounded-full"></li>
{/snippet}

{#snippet tallerNode()}
	<li class="bg-kumo-base ring-kumo-hairline rounded-md px-3 py-6 shadow ring">Taller node</li>
{/snippet}
