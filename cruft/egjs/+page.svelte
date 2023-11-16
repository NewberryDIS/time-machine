
<script>
import { MasonryGrid } from "@egjs/svelte-grid";
import { base } from '$app/paths';
import * as data from '$data/data';
import Footer from '$comps/footer.svelte';
const content = Object.values(data)
.map((d) => d)
.filter((f) => {
    if (f.inactive) {
        return false;
    } else if (f.type === 'seasonal') {
        let now = new Date();
        return (f.image === 'xmas' && now.getMonth() === 11) ||
                (f.image === 'thx' && now.getMonth() === 10)
    } else {
        return true;
    }
});
// console.log("content", Object.values(data).filter(f=> f.capcolor).map(c => c.capcolor))
console.log(content)
</script>

<div class="jumbo">
    <h1 class="upper-title">Midwest</h1>
    <h1 class="lower-title">Time Machine</h1>
    <p>
        Travel to the past via first-hand accounts from letters, diaries, and rare books in the
        Newberry's collections
    </p>
    <p>
        Witness the Chicago Fire, join the Lewis and Clark expedition, and marvel at the World's Fair
        through manuscripts transcribed by our online volunteers!
    </p>
    <a href="#choose" class="btn-link">Choose your time traveler</a>
</div>
<MasonryGrid
    class="cards"
    gap={5}
    align="center"
    column={0}
    columnSizeRatio={0}
>
    {#each content as card}
        <div class="card">
            <a href="{base}/{card.image}">
                <div class="top">
                    <div
                        class="cap"
                        style="background-color: var(--{card.capcolor ? card.capcolor : 'mulberry'});"
                        >
                        <div class="dest">Destination:</div>
                        <div class="time">{card.dest}</div>
                    </div>
                    <img src="{base}/images/tm-{card.image}.png" alt={card.name} />
                    <h2 class="name">{card.name}</h2>
                    <p class="blurb">{card.desc}</p>
                </div>
                <div class="btn-link">Begin Your Journey</div>
            </a>
        </div>
    {/each}
</MasonryGrid>
<!-- <div class="card"> -->
<!--       <a href="https://digital.newberry.org/transcribe" target="_blank"> -->
<!-- 		<div class="top"> -->
<!-- 			<div -->
<!-- 				class="cap" -->
<!-- 				style="background-color: var(--sapphire);" -->
<!-- 			> -->
<!-- 				<div class="dest">Destination:</div> -->
<!-- 				<div class="time">???</div> -->
<!-- 			</div> -->
<!-- 			<img src="{base}/images/tm-noone.png" alt="generic avatar" /> -->
<!-- 			<h2 class="name">Discover a new journey!</h2> -->
<!--                   <p class="blurb">Help scholars and learn about history by transcribing documents from the Newberry’s collections</p> -->
<!-- 		</div> -->
<!-- 		<div class="btn-link">Transcribe now!</div> -->
<!-- 	</a> -->
<!-- </div> -->
<Footer />

<style>
    :global(.cards) {
        position: relative;
        width: 60%;
        margin: 16px auto;
        /* overflow: hidden; */
        /* display: grid; */
        /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
        /* gap: 1rem; */
    }
    .card {
        width: 250px;
        height: auto;
        background: rgba(var(--granite-rgb), 0.75);
        color: var(--midnight);
        border: 2px solid var(--midnight);
        border-radius: 6px;
        /* position: relative; */
        transition: all 0.15s ease-in-out;
    }
    .card:hover {
        background: rgba(var(--granite-rgb), 1);
    }
    .card .top {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .card a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        text-decoration: none;
    }
    .card h2,
    .card p {
        color: var(--midnight);
        text-align: center;
    }
    .card img {
        width: 75%;
        margin: 8px;
        filter: drop-shadow(0 0 0.75rem #000);
    }
    .cap {
        box-sizing: border-box;
        font-family: 'styrene';
        margin: 0;
        padding: 8px;
        line-height: 1.25rem;
        width: 100%;
        font-size: 1.25rem;
        text-align: center;
        color: var(--granite);
    }
    .card .btn-link {
        margin: 25px;
    }
    .card .blurb, .card .name {
        margin-inline: 25px;
    }
    .jumbo {
        margin: 60px auto;
        padding: 30px;
        width: 60%;
        border-radius: 3px;
        border: 2px solid rgba(0, 0, 0, 1);
        background: rgba(255, 255, 255, 0.85);
        box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
        position: relative;
        color: var(--midnight);
    }
    h1 {
        font-family: 'Hepta Slab', serif;
        font-weight: 900;
        filter: drop-shadow(0 0 0.25rem var(--midnight));
        color: var(--granite);
        text-shadow: -1px -1px 0 var(--midnight), 1px -1px 0 var(--midnight), -1px 1px 0 var(--midnight),
            1px 1px 0 var(--midnight);
        margin: 0;
    }
    .upper-title {
        font-size: calc(7vw + 20px);
        line-height: calc(5vw);
    }
    .lower-title {
        font-size: calc(4vw + 12px);
        margin: 0 0 10px 0;
        line-height: calc(4vw + 12px);
    }
    .jumbo p {
        font-size: 1.25rem;
    }
</style>
