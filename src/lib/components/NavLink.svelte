<script>
	import { page } from '$app/stores';

	import Icon from './Icon.svelte';

	export let href = '';
	export let type = 'link';
	export let underline = false;
	export let ico = '';
	export let icoStyle = '';
	export let icoEnd = false;
	$: active = $page.url.pathname.startsWith(href);
</script>

<a {href} data-sveltekit-preload-data class={type} class:active class:underline on:click>
	{#if ico && !icoEnd}
		<Icon name={ico} style={icoStyle} />
	{/if}
	<slot />
	{#if ico && icoEnd}
		<Icon name={ico} style={icoStyle} />
	{/if}
</a>

<style>
	a.link {
		--at-apply: hover:text-slate-500 hover:underline transition-colors duration-200 flex gap-2 items-center;
	}
	a.link.active {
		--at-apply: text-slate-500;
	}

	a.navlink {
		--at-apply: h-8 flex items-center gap-2 px-4 rounded-full border-transparent hover:bg-slate-100 dark:(hover:bg-slate-800) transition-all duration-200;
	}

	a.navlink.active {
		--at-apply: bg-slate-700 dark:(bg-slate-300 text-slate-800) text-white;
	}

	a.dropdown-link {
		--at-apply: flex gap-2 items-center hover:bg-slate-100 p-3;
	}
	a.menu-link {
		--at-apply: flex items-center gap-2 h-12 border-b-2 text-sm text-slate-400 hover:(border-b-slate-400) flex-grow-0 border-transparent dark:(hover:bg-slate-800) transition-all duration-200 font-medium;
	}
	a.menu-link.active {
		--at-apply: border-b-2 border-b-indigo-600 text-indigo-600;
	}
</style>
