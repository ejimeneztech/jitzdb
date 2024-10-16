<script>
	let title = '';
	let name = '';
	let steps = [{ order: 1, description: '' }];
	let errorMessage = '';

	function addStep() {
		steps = [...steps, { order: steps.length + 1, description: '' }];
	}

	function delStep(index) {
		if (steps.length > 1) {
			steps = steps.filter((_, i) => i !== index);
		}
	}
</script>

<h1>Add a Technique</h1>

<form method="post">
	<div>
		<label for="title">Technique Title:</label>
		<input id="title" name="title" type="text" bind:value={title} required /><br /><br />
		<label for="name">Category:</label>
		<input id="name" name="name" type="text" bind:value={name} required />
	</div>

	<div>
		<h2>Steps:</h2>
		{#each steps as step, index}
			<div class="step">
				<label for={`description-${index}`}>Step {index + 1}:</label>
				<textarea
					id={`description-${index}`}
					name={`steps[${index}][description]`}
					bind:value={step.description}
					required
				></textarea>
				<button type="button" on:click={() => delStep(index)}>Remove Step</button>
			</div>
		{/each}

		<button type="button" on:click={addStep}>Add Step</button>
	</div>

	<button type="submit">Submit</button>

	{#if errorMessage}
		<p>Error: {errorMessage}</p>
	{/if}
</form>

<style>
	h1 {
		text-align: center;
	}
	form {
		align-items: center;
		text-align: center;
	}
	label {
		width: 100%;
	}

	input {
		flex: 1;
	}
</style>
