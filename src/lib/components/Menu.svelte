<script>
	import { fly } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { clickOutside } from '$lib/js/clickOutside';

	let opened = false;
</script>

<div
	class="relative"
	use:clickOutside
	on:click_outside={() => {
		opened = false;
	}}
>
	<button
		on:click={() => {
			opened = !opened;
		}}
	>
		<slot name="toggle" />
	</button>
	<div class="relative">
		{#if opened}
			<button
				class="absolute right-0 z-80 mt-2 w-56 origin-top-right divide-y divide-slate-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-slate-100 overflow-hidden"
				transition:fly={{ y: 8, duration: 100, easing: quadOut }}
				on:click={() => {
					opened = false;
				}}
			>
				<slot />
			</button>
		{/if}
	</div>
</div>

<style>
</style>
