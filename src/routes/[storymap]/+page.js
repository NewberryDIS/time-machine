import * as ppl from '/src/data/data';

export async function load({ params }) {
	const name = params.storymap;
	// console.log(name);
	const mapjson = await import(`../../data/${name}.json`).then((j) => j.default);
	const personjson = ppl[name];
	// console.log(mapjson);
	return { storymapData: mapjson, person: personjson };
}
