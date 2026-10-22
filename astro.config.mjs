// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://mihajlo25.github.io',
	// CSS is small; inlining it removes the render-blocking request.
	build: { inlineStylesheets: 'always' },
	// The CV doubles as the About page.
	redirects: {
		'/about': '/cv',
	},
});
