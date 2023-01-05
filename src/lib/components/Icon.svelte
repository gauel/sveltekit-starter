<script>
	/* Navigation */
	import IconMagnifyingGlass from '~icons/fa6-solid/magnifying-glass';
	import IconPlus from '~icons/fa6-solid/plus';
	import IconBars from '~icons/fa6-solid/bars';

	/* Breadcrumbs */
	import IconHouse from '~icons/fa6-solid/house';
	import IconAngleRight from '~icons/fa6-solid/angle-right';

	/* Dialogs etc */
	import IconCircleExclamation from '~icons/fa6-solid/circle-exclamation';
	import IconTriangleExclamation from '~icons/fa6-solid/triangle-exclamation';
	import IconCircleCheck from '~icons/fa6-solid/circle-check';
	import IconCircleInfo from '~icons/fa6-solid/circle-info';
	import IconCookieBite from '~icons/fa6-solid/cookie-bite';

	/* Dropdown menus */
	import IconCaretDown from '~icons/fa6-solid/caret-down';
	import IconPen from '~icons/fa6-solid/pen';
	import IconFilePen from '~icons/fa6-solid/file-pen';
	import IconBoxArchive from '~icons/fa6-solid/box-archive';
	import IconAngleDown from '~icons/fa6-solid/angle-down';

	/* For inputs */
	import IconSpinner from '~icons/fa6-solid/spinner';

	/* For user menu */
	import IconRectangleList from '~icons/fa6-solid/rectangle-list';
	import IconStar from '~icons/fa6-solid/star';
	import IconKey from '~icons/fa6-solid/key';

	const icons = [
		{ name: 'magnifying-glass', component: IconMagnifyingGlass },
		{ name: 'plus', component: IconPlus },
		{ name: 'bars', component: IconBars },

		{ name: 'house', component: IconHouse },
		{ name: 'angle-right', component: IconAngleRight },

		{ name: 'err', component: IconCircleExclamation },
		{ name: 'warn', component: IconTriangleExclamation },
		{ name: 'ok', component: IconCircleCheck },
		{ name: 'info', component: IconCircleInfo },
		{ name: 'cookie', component: IconCookieBite },

		{ name: 'caret-down', component: IconCaretDown },
		{ name: 'angle-down', component: IconAngleDown },
		{ name: 'pen', component: IconPen },
		{ name: 'file-pen', component: IconFilePen },
		{ name: 'box-archive', component: IconBoxArchive },

		{ name: 'spinner', component: IconSpinner },

		{ name: 'rectangle-list', component: IconRectangleList },
		{ name: 'star', component: IconStar },
		{ name: 'key', component: IconKey }
	];

	export let name = 'house';
	export let style = '';

	let selected = icons.find((icon) => icon.name === name);
</script>

<svelte:component this={selected.component} class={style} />
