<script>
    import '../app.css'
    import Header from '$comps/header.svelte';
    import Background from '$comps/bg.svelte'
</script>

<Background />

<div class="the-website">
    <Header />

    <slot />

</div>
<style>
    .the-website {

        height: 100%;
        position: relative;
        z-index: 2;
    }
</style>
