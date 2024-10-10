// src/routes/techs/[slug]/+page.server.js

export async function load({ params }) {
    const { slug } = params;  // Extract the slug (id) from the URL
    
    try {
        const res = await fetch(`https://ejimenez90.pythonanywhere.com/techs/${slug}`);
        if (!res.ok) {
            throw new Error('Failed to fetch tech details');
        }

        const techDetails = await res.json();  // Fetch the tech details using the slug
        return {
            techDetails  // Return the fetched data to be used in +page.svelte
        };
    } catch (error) {
        return {
            error: error.message
        };
    }
}
