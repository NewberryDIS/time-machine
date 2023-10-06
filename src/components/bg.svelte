<script>
	import { base } from '$app/paths';
</script>

<div class="bg">
	<img
		src="{base}/images/time-machine-splash-background.jpg"
		alt="old postcards, diary pages, and passports"
	/>
</div>

<style>
	.bg {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		z-index: 0;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
