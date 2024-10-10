<script>
	export let data;
</script>

{#if data.error}
	<p>Error: {data.error}</p>
{:else}
	<h1>{data.techDetails.title}</h1>

	<ol>
		{#each data.techDetails.steps as step}
			<li>{step.description}</li>
		{/each}
	</ol>
{/if}
