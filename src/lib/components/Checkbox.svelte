<script>
	export let name = null;
	export let text = null;
	export let desc = null;
</script>

<div class="relative flex items-start">
	<div class="flex h-5 items-center">
		<input
			aria-describedby="comments-description"
			id="checkbox-{name}"
			{name}
			type="checkbox"
			class="h-4 w-4 rounded border-slate-300 text-sky-500 ring-offset-rose-800 dark:(bg-slate-800 border-slate-700)"
		/>
	</div>
	{#if text || desc}
		<div class="ml-3 text-sm">
			{#if text}
				<label for="checkbox-{name}" class="font-medium">{text}</label>
			{/if}
			{#if desc}
				<p class="text-slate-500">{desc}</p>
			{/if}
		</div>
	{/if}
</div>
