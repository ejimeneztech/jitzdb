<script>
	import { invalidate } from '$app/navigation';
	let title = '';
	let name = '';
	let steps = [{ order: 1, description: '' }];
	let errorMessage = '';

	function addStep() {
		steps = [...steps, { order: steps.length + 1,  description: '' }];
	}

	function delStep(index) {
		if (steps.length > 1) {
			steps = steps.filter((_, i) => i !== index);
		}
	}

	const handleSubmit = async (event) => {
		const form = event.target;
		const formData = new FormData(form);

		//add steps as JSON string to formData
		formData.set('steps', JSON.stringify(steps));

		await fetch('/add', {
			method: 'POST',
			body: formData
		});

		await invalidate();

		//Use this to debug JSON output
		// 	const jsonOutput = {
		//     name: formData.get('name'),  // Assuming you have a field for name
		//     title: formData.get('title'),  // Assuming you have a field for title
		//     steps: JSON.parse(formData.get('steps'))  // Parse the steps back into an array
		// };

		// // Log the JSON structure
		// console.log(JSON.stringify(jsonOutput, null, 2));
	};
</script>

<h1>Add a Technique</h1>

<form on:submit|preventDefault={handleSubmit}>
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
				<textarea id={`description-${index}`} bind:value={step.description} required></textarea>
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
