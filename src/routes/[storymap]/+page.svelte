<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	// import '$sm/storymap.css';

	export let data;
	let storymapData = data.storymapData;
	let person = data.person;

	let storymap,
		astorymapData,
		storymapOptions = {},
		mounted = false;

	// function smLoad(){
	//     if (mounted){
	//         console.log("asdfasdf")
	//     }
	// }

	onMount(async () => {
		const { KLStoryMap } = await import('$sm/storymap-min.js');
		storymap = new KLStoryMap.StoryMap('mapdiv', storymapData, storymapOptions);
		// mounted = true
	});
</script>

<div class="page">
	<div class="left" id="storymap-left">
		<img src="{base}/images/tm-{person.image}.png" alt="" />
		<h2 class="name">{person.name}</h2>
		<div class="btn">
			<a href="{base}/#choose" class="btn-link"> Swap Traveler </a>
		</div>
	</div>
	<div class="right" id="mapdiv" />
</div>

<style>
@media only screen and (max-width: 900px) {
    #storymap-left {
            display: none;
    }
        }
	.page {
		display: flex;
		height: 100%;
	}
	.left {
		background: var(--midnight);
		width: 250px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.left img {
		width: 175px;
	}
	.right {
		z-index: 5;
		flex: 1;
		width: 100%;
		height: 100%;
	}
	.name {
		text-align: center;
		margin: 32px;
	}
</style>
