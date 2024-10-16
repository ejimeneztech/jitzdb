import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();


        //extract title and name from form data
        const title = formData.get('title');
        const name = formData.get('name');


        //extract steps arrau from formData
        let steps = [];
        let index = 0;
        while (formData.get(`steps[${index}][description]`)) {
            steps.push({
                order: index + 1,
                description: formData.get(`steps[${index}][description]`)
            });
            index++;
        }



        //Build JSON Object
        const postData = {
            title,
            name,
            steps,
        };



        // Send POST request to API
        try {
            const res = await fetch('https://ejimenez90.pythonanywhere.com/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData),
            });

            if (!res.ok) {
                throw new Error('Failed to submit');
            }

            return {
                success: true
            }
        } catch (error) {
            return fail(500, { error: error.message });
        }


    }
}