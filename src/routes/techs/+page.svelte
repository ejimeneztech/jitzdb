<script>
	export let data; // This holds the techs data
	let loading = true;

	// Access the techs array from the `data` prop
	const { techs } = data;

	// Simulate loading after onMount to show "Loading..." text for a brief moment
	import { onMount } from 'svelte';
	onMount(() => {
		loading = false; // Set loading to false once component is mounted
	});
</script>

<!-- Display tech items as clickable cards -->
{#if loading}
	<p>Loading...</p>
{:else}
	<h1>Tech List</h1>
	<ul class="tech-list">
		{#each techs as tech}
			<li>
				<a href={`/techs/${tech.id}`}>
					<div class="card">
						<h2>{tech.title}</h2>
						<!-- Add any other data to display in the card -->
					</div>
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		margin: 10px 0;
	}

	.card {
		background-color: #f4f4f4;
		padding: 20px;
		border-radius: 5px;
		cursor: pointer;
		transition: transform 0.2s;
	}

	.card:hover {
		transform: scale(1.05);
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
