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
   <div class="form-section">
	   <div class="form-group">
		   <label for="title">Technique Title</label>
		   <input id="title" name="title" type="text" bind:value={title} required />
	   </div>
	   <div class="form-group">
		   <label for="name">Category</label>
		   <input id="name" name="name" type="text" bind:value={name} required />
	   </div>
   </div>

   <div class="form-section">
	   <h2>Steps</h2>
	   {#each steps as step, index}
		   <div class="step-group">
			   <label for={`description-${index}`}>Step {index + 1}</label>
			   <textarea
				   id={`description-${index}`}
				   name={`steps[${index}][description]`}
				   bind:value={step.description}
				   required
			   ></textarea>
			   <button class="remove-step" type="button" on:click={() => delStep(index)}>Remove</button>
		   </div>
	   {/each}
	   <button class="add-step" type="button" on:click={addStep}>Add Step</button>
   </div>

   <button class="submit-btn" type="submit">Submit</button>

   {#if errorMessage}
	   <p class="error">Error: {errorMessage}</p>
   {/if}
</form>

<style>
   h1 {
	   text-align: center;
	   margin-bottom: 2rem;
   }
   form {
	   max-width: 420px;
	   margin: 0 auto;
	   background: #fff;
	   padding: 2rem 2rem 1.5rem 2rem;
	   border-radius: 16px;
	   box-shadow: 0 2px 16px rgba(0,0,0,0.08);
	   display: flex;
	   flex-direction: column;
	   gap: 2rem;
   }
   .form-section {
	   display: flex;
	   flex-direction: column;
	   gap: 1.5rem;
   }
   .form-section h2 {
	   font-weight: 800;
	   color: #222;
	   margin-bottom: 0.5rem;
   }
   .form-group {
	   display: flex;
	   flex-direction: column;
	   gap: 0.5rem;
   }
   label {
	   font-weight: 700;
	   color: #222;
	   margin-bottom: 0.2rem;
	   text-align: left;
   }
   .step-group label {
	   font-weight: 700;
	   color: #222;
   }
   input, textarea {
	   padding: 0.6rem 0.8rem;
	   border: 1px solid #ccc;
	   border-radius: 8px;
	   font-size: 1rem;
	   width: 100%;
	   box-sizing: border-box;
	   transition: border-color 0.2s;
   }
   input:focus, textarea:focus {
	   border-color: #0077ff;
	   outline: none;
   }
   .step-group {
	   display: flex;
	   flex-direction: column;
	   gap: 0.5rem;
	   margin-bottom: 1rem;
	   background: #f7f7f7;
	   padding: 1rem;
	   border-radius: 8px;
   }
   .remove-step {
	   align-self: flex-end;
	   background: #ffeded;
	   color: #d00;
	   border: none;
	   border-radius: 6px;
	   padding: 0.3rem 0.8rem;
	   cursor: pointer;
	   font-size: 0.95rem;
	   margin-top: 0.2rem;
	   transition: background 0.2s;
   }
   .remove-step:hover {
	   background: #ffd6d6;
   }
   .add-step {
	   background: #e6f7ff;
	   color: #0077ff;
	   border: none;
	   border-radius: 6px;
	   padding: 0.5rem 1.2rem;
	   cursor: pointer;
	   font-size: 1rem;
	   margin-top: 0.5rem;
	   transition: background 0.2s;
   }
   .add-step:hover {
	   background: #cceeff;
   }
   .submit-btn {
	   background: #0077ff;
	   color: #fff;
	   border: none;
	   border-radius: 8px;
	   padding: 0.7rem 1.5rem;
	   font-size: 1.1rem;
	   cursor: pointer;
	   margin-top: 1rem;
	   transition: background 0.2s;
   }
   .submit-btn:hover {
	   background: #005fcc;
   }
   .error {
	   color: #d00;
	   margin-top: 1rem;
   }
</style>
