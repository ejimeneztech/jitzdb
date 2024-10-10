<script>
	import { onMount } from 'svelte';

	let techs = [];
	let loading = true;
	let error = null;

	//Fetch API Data
	onMount(async () => {
		try {
            const res = await fetch('https://ejimenez90.pythonanywhere.com/techs');
            if(!res.ok){
                throw new Error("Failed to fetch data");
            }
            techs = await res.json();
		} catch (err){
            error = err.message;
		} finally {
            loading = false;
		}
	});
</script>


<!-- Display tech items as clickable cards -->
{#if loading}
  <p>Loading...</p>
{:else if error}
  <p>Error: {error}</p>
{:else}
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