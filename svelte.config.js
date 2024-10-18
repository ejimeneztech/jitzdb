import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'  // This will serve index.html for dynamic routes
		}),
		// Enable prerender for all static routes
		prerender: {
			entries: ['*']  // Prerender all static routes
		}
	}
};

export default config;
