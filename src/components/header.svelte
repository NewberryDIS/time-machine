<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import NewberryN from './newberryn.svelte';
</script>

<header>
	<div class="newberry-links">
		<a href="https://www.newberry.org" target="_blank" class="newberrydotorg">
			<NewberryN />
		</a>
		{#if $page.params.storymap}
			<a href="{base}/" class="homelink">Time Machine</a>
		{/if}
	</div>
	<div class="twit-link">
		<a href="https://twitter.com/DigitalNewberry" target="_blank">
			<img src="{base}/images/twicon.png" alt="Twitter's Bird Logo" />
		</a>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	svg {
		fill: var(--granite);
	}
	.newberry-links,
	.twit-link {
		font-family: 'flecha-bold';
		font-size: 1.5rem;
		height: 56px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		transition: all 0.15s ease-in-out;
		box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
		border: 2px solid var(--granite);
		background: var(--mulberry);
	}
	.newberry-links {
		padding-inline: 12px;
		margin: 5px 7px;
	}
	.twit-link {
		width: 60px;
		margin: 7px;
		padding-top: 4px;
	}
	a {
		color: #eaebe7;
		transition: all 0.15s ease-in-out;
		text-decoration: none;
	}
	a:hover {
		filter: drop-shadow(0 0 0.25rem var(--granite));
	}
	.newberrydotorg,
	.twit-link img {
		width: 50px;
		padding-top: 4px;
	}
	.homelink {
		/* padding-block: 7px; */
		display: flex;
	}
</style>
