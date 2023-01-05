<script>
	import Btn from "$lib/components/Btn.svelte";
	import NavLink from "$lib/components/NavLink.svelte";
</script>

<nav
	class="navigation-wrapper flex w-full sticky flex-col h-18 items-center justify-between top-0 z-40 bg-white dark:bg-slate-900 shadow-sm dark:(border-b border-slate-800 shadow-none)"
>
	<div
		class="xl-container justify-between gap-8 h-18 items-center"
	>
		<a href="/" class="text-2xl font-bold hover:opacity-80">
			logo
		</a>
		<div class="w-full justify-center items-center xl:gap-6 hidden lg:flex">
			<NavLink href="/" type="navlink">
				Home
			</NavLink>
			<NavLink href="/" type="navlink">Page 1</NavLink>
			<NavLink href="/" type="navlink">Page 2</NavLink>
			<NavLink href="/" type="navlink">Page 3</NavLink>
		</div>
		<div class="gap-8 xl:gap-14 items-center hidden lg:flex">
			<NavLink href="/">Link 1</NavLink>
			<Btn text="CTA" href="/" ico="plus" />
		</div>
		<Btn style="transparent lg:hidden" icoOnly ico="bars" icoStyle="w-6 h-6" />
	</div>
</nav>