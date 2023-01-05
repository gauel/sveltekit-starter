<script>
	import Icon from '$lib/components/Icon.svelte';

	export let label = '';
	export let type = 'text';
	export let name = '';
	export let value = '';
	export let placeholder = '';
	export let error = null;
	export let required = false;
	export let loading = false;
	export let min = 0;
	export let max = 64;
	export let pattern = null;
	export let ok = false;
	export let autocomplete = 'on';
	export let validate = false;
	export let rounded = 'rounded-lg';
	let validateForm = false;
</script>

<div class="input-wrapper">
	<label
		for="input-{name}"
		class:text-red-600={error}
		class="label
		absolute top-[1px] left-2 z-10 -mt-px inline-block px-1 text-xs font-medium text-slate-500 dark:text-slate-400 peer-invalid:text-red-600 peer-valid:text-green-600 transition-color duration-200"
	>
		{label}
	</label>
	<input
		{type}
		{name}
		{placeholder}
		{required}
		minlength={min}
		maxlength={max}
		id="input-{name}"
		{value}
		{pattern}
		{autocomplete}
		on:click={() => {
			validate ? (validateForm = true) : '';
		}}
		class="{error
			? 'border-red-300 focus:border-red-600 focus:ring-red-600'
			: 'border-slate-300 focus:border-sky-600 focus:ring-sky-600'} {rounded} border w-full dark:(bg-slate-800 border-slate-700 text-slate-300) px-3 h-[40px] lg:h-[46px] text-slate-900 sm:text-sm placeholder-slate-300 dark:placeholder-slate-600 peer shadow-sm transition-all duration-200
		{validateForm &&
			validate &&
			'invalid:border-red-300 dark:invalid:border-red-600 invalid:focus:border-red-800/10 invalid:focus:ring-red-600'}
		{validateForm &&
			validate &&
			'valid:(focus:border-green-600 focus:ring-green-600 border-green-500)'}"
	/>
	<Icon name="ok" style="input-ico text-green-500 opacity-0 {ok && 'peer-valid:opacity-100'}" />
	{#if loading}
		<Icon name="spinner" style="input-ico text-blue-500 animate-spin" />
	{/if}
	{#if error}
		<p class="text-sm text-red-600 mt-2 hidden peer-invalid:block">{error}</p>
	{/if}
</div>

<style global>
	.input-wrapper {
		--at-apply: relative w-full pt-2 pb-1;
	}
	.input-wrapper label::after {
		content: " ";
		--at-apply: bg-white dark:bg-slate-800 absolute;
		z-index: -1;
		width: 100%;
		height: 3px;
		left: 0px;
		top: 6px;
	}
</style>
