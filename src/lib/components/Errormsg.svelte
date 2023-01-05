<script>
	import Btn from '$lib/components/Btn.svelte';

	import { glob } from '$lib/js/store';
	import { fly } from 'svelte/transition';

	export let status = 0;
	export let title = '';
	export let msg = '';
	export let btn = '';
	export let href = '';
</script>

<div
	class="m-container justify-center items-center"
	in:fly={{ ...$glob.animOptions }}
	out:fly={{ duration: 0 }}
>
	<div class="flex flex-col items-center">
		<h1 class="text-center text-8xl leading-none">{status}</h1>
		<h2 class="text-center text-4xl font-semibold text-slate-700 leading-none">{title}</h2>
		<p class="text-center text-base text-slate-500 leading-none my-8">{msg}</p>
		<Btn text={btn} {href} />
	</div>
</div>
