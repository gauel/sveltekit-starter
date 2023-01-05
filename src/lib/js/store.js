import { get, writable } from "svelte/store";
import { browser } from '$app/environment';
import { quadOut } from 'svelte/easing';

/* Store factory */
export function store(name, data, save = false) {
	const str = writable(data);
	const { subscribe, set } = str;

	browser && save && (localStorage[name] ? set(JSON.parse(localStorage[name])) : localStorage[name] = JSON.stringify(data));

	return {
		subscribe,
		set: item => {
			browser && save && (localStorage[name] = JSON.stringify(item));
			set(item);
		},
		update: item => {
			const updatedStore = item(get(str));
			browser && save && (localStorage[name] = JSON.stringify(updatedStore));
			set(updatedStore);
		}
	};
}

/* These settings are saved to a local storage */
const settingsDefault = {
	"dark": null,
	"cookies": true
}

/* These settings are global variables that resets with every page refresh */
const globDefault = {
	"debug": false,
	"animOptions": { duration: 200, easing: quadOut },
	"animDelay": { delay: 200 }
}

export const settings = store("settings", settingsDefault, true);
export const glob = store("glob", globDefault);