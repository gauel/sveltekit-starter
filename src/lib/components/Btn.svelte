<script>
	// @ts-nocheck
	import Icon from '$lib/components/Icon.svelte';

	export let disabled = false; // bool
	export let text = ''; // String
	export let ico = ''; // String
	export let icoStyle = ''; // String
	export let icoOnly = false; // String
	export let href = '#'; //Link
	export let submit = false;
	export let style = '';
	export let icoEnd = false;

	let styles = `btn ${style} flex items-center justify-center rounded-lg gap-2 border border-transparent font-medium text-white shadow-sm focus:(outline-none ring-2 ring-slate-500 ring-offset-white ring-offset-2) transition-bg duration-200 text-sm
	${icoOnly ? 'w-[46px] justify-center' : 'px-4'}
	${ico && !icoOnly && icoEnd ? 'pr-4 pl-6' : 'pl-4 pr-6'}
	${disabled && 'opacity-30'}`;
</script>

{#if submit}
	<button type="submit" class={styles} on:click>
		{#if ico && !icoEnd}
			<Icon name={ico} style={icoStyle} />
		{/if}
		{#if text}
			<slot>
				{text}
			</slot>
		{/if}
		{#if ico && icoEnd}
			<Icon name={ico} style={icoStyle} />
		{/if}
	</button>
{:else}
	<a {href} class={styles} on:click>
		{#if ico && !icoEnd}
			<Icon name={ico} style={icoStyle} />
		{/if}
		{#if text}
			<slot>
				{text}
			</slot>
		{/if}
		{#if ico && icoEnd}
			<Icon name={ico} style={icoStyle} />
		{/if}
	</a>
{/if}

<style>
	.btn {
		--at-apply: bg-slate-700 hover:bg-slate-800 h-[40px] lg:h-[46px] max-h-[64px];
	}
	.btn.err {
		--at-apply: bg-red-500 hover:bg-red-600 text-white focus:ring-red-500;
	}
	.btn.warn {
		--at-apply: bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-500;
	}
	.btn.ok {
		--at-apply: bg-green-500 hover:bg-green-600 text-white focus:ring-green-500;
	}
	.btn.info {
		--at-apply: bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-500;
	}
	.btn.transparent {
		--at-apply: shadow-none bg-transparent hover:bg-slate-500/10 dark:hover:bg-slate-800;
	}
	.btn.bordered {
		--at-apply: bg-white hover:bg-slate-50 border-slate-200 text-slate-700 focus:ring-slate-400;
	}

	.btn.small {
		--at-apply: h-[30px] lg:h-[36px] max-h-[64px] px-3;
	}
</style>
