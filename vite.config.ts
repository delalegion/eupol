import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	return {
		// vite config
		plugins: [enhancedImages(), sveltekit()],
		server: {
			host: true
		},
		define: {
		  __APP_ENV__: JSON.stringify(env.APP_ENV),
		},
	 }
});
