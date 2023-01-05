<script>
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
	import '$lib/global.css';

	import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	export let data;
</script>

<div class="max-w-[980px] px-4 md:px-8 mx-auto md:py-18 py-12 flex flex-col gap-8 md:gap-16 items-center md:items-start">
	<img src="images/kenshow_logo_white.svg" loading="lazy" alt="" class="h-14" />
	
	<div class="footer text-center items-center justify-center text-slate-500 w-full font-semibold text-sm">
		Copyright 2023 &copy; Kensho s.r.o.
	</div>
</div>
