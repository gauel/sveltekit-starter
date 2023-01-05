export const load = async ({ fetch }) => {
	const res = await fetch(
		'https://kenshow.cz/api/podcasts?populate=img,hosts,hosts.photo&sort[1]=id%3Adesc&filters[status][$eq]=public'
	);
	const data = await res.json();
	return {
		podcasts: data
	};
};
