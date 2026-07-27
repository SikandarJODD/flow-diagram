<script lang="ts">
	import { examples } from '$lib/examples/examples';
</script>

<div class="grid grid-cols-1 gap-4 p-10 md:grid-cols-2">
	{#each examples as example}
		{let ExampleComponent = example.component}
		<div class="rounded-md border border-dashed border-muted-foreground/50 p-4">
			<ExampleComponent />
		</div>
	{/each}
</div>
