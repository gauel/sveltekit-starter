<script>
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
	import '$lib/style/global.css';
	import Navigation from '../lib/components/Navigation.svelte';
</script>

<Navigation />
<div class="container px-4 flex flex-col gap-8 mx-auto">
	<slot />
</div>
