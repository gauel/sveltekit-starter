import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		UnoCSS(),
		sveltekit({
			experimental: {
				inspector: true
			}
		}),
		Icons({
			compiler: 'svelte',
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;