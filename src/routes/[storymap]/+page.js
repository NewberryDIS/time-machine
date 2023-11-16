import * as ppl from "/src/data/data";

export async function load({ params, fetch }) {
  const name = params.storymap;
  // console.log(name);
  const nuklUrl = ppl[name].storymapurl.replace("index.html", "published.json");
  console.log(nuklUrl);
  const mapjson = await fetch(nuklUrl).then((j) => j.json());
  // const mapjson = await import(`../../data/${name}.json`).then((j) => j.default);
  // console.log(mapjson);
  const personjson = ppl[name];
  // console.log(mapjson);
  return { storymapData: mapjson, person: personjson };
}
