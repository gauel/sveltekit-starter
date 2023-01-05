<script>
	import { fade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

	import Icon from '$lib/components/Icon.svelte';

	export let open = false;
	export let modal = false;
	export let title = '';
	export let desc = '';
	export let type = '';
</script>

{#if open}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="dialog fixed {type} {modal
			? 'modal z-80 left-4 bottom-4'
			: 'z-90 flex items-center justify-center w-full h-full left-0 top-0'}"
		on:load
		transition:fade={{ duration: 200, easing: quadInOut }}
	>
		<!-- Overlay -->
		{#if !modal}
			<div
				class="z-80 fixed left-0 top-0 bg-slate-900/60 transition-opacity w-full h-full"
				on:click={() => {
					open = false;
				}}
			/>
		{/if}

		<!-- Dialog -->
		<div
			class="dialog-container relative z-90 transform overflow-hidden rounded-lg bg-white dark:bg-slate-400 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
		>
			<div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
					<div
						class="icon-wrapper mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"
					>
						<slot name="icon">
							<Icon name={type} style="h-6 w-6" />
						</slot>
					</div>
					<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
						<h3 class="text-lg font-medium leading-6 text-slate-900" id="modal-title">{title}</h3>
						<div class="mt-2">
							<p class="text-sm text-slate-500">{desc}</p>
						</div>
					</div>
				</div>
			</div>
			{#if $$slots.buttons}
				<div
					class="buttons-wrapper gap-4 bg-slate-100 dark:bg-slate-500 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
				>
					<slot name="buttons" />
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.dialog .icon-wrapper {
		--at-apply: bg-sky-100 text-sky-500;
	}
	.dialog.err .icon-wrapper {
		--at-apply: bg-red-100 text-red-500;
	}
	.dialog.warn .icon-wrapper {
		--at-apply: bg-orange-100 text-orange-500;
	}
	.dialog.ok .icon-wrapper {
		--at-apply: bg-green-100 text-green-500;
	}
	.dialog.cookie .icon-wrapper {
		--at-apply: bg-amber-100 text-amber-800;
	}

	.dialog.modal .dialog-container {
		--at-apply: border border-slate-500/20 dark:border-slate-700 shadow-xl;
	}
</style>
