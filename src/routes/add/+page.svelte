<h1>Add a Technique</h1>

<script>
    const handleSubmit = () => {
        console.log("This worked.");
    }
</script>


<form on:submit|preventDefault={handleSubmit}>
	<label>
		Description:
		<input
			name="description"
			autocomplete="off"
		/>
	</label>
</form>


<style>
	

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	
</style>