import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],

	vitePlugin: {
		inspector: true,
	},

	kit: {
		adapter: adapter(),
		files: {
			hooks: {
				client: "src/hooks/hooks.client",
				server: "src/hooks/hooks.server",
			},
			assets: "src/assets",
		},
		alias: {
			$supabase: "supabase",
		},
	},
};

export default config;
