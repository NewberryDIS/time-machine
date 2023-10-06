<footer>
    <div class="left">
        <p>
            Part of <a class="llines" target="_blank" rel="noopener noreferrer" href="https://www.newberry.org/whatisthemidwest">What Is the Midwest</a>, a multidisciplinary project funded by The Andrew W. Mellon Foundation
        </p>
        <p>
            <a class="lglink llines" target="_blank" rel="noopener noreferrer" href="https://www.newberry.org/contact-librarian">Contact Us</a>
        </p>
    </div>
    <div class="mid">
        <p>
            Except where otherwise noted, contextual content on this site is made available under a &nbsp;<a class="llines" target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/share-your-work/public-domain/cc0/">Creative Commons Public Domain license.</a>&nbsp; Digitized images and other media from the Newberry's collections are made available for any lawful purpose, commercial or non-commercial, without licensing or permission fees to the library, subject to the following terms and conditions:&nbsp;<a class="llines" target="_blank" rel="noopener noreferrer" href="https://www.newberry.org/rights-and-reproductions">Newberry Rights and Reproductions Policy.</a>
        </p>
    </div>
    <div class="right">
        <p>
Edited by <b>Jen Wolfe</b> and developed by <b>Nick White</b> of the Newberry’s Digital Initiatives and Services department. Code is available for repurposing: <a class="llines" target="_blank" rel="noopener noreferrer" href="https://github.com/newberrydis/time-machine">Midwest Time Machine repository</a>. Interactive maps created using the open-source software <a class="llines" href="https://storymap.knightlab.com/" target="_blank" rel="noopener noreferrer">StoryMapJS</a>. Grateful acknowledgement to &nbsp;<a class="llines" target="_blank" rel="noopener noreferrer" href="https://www.wbez.org/shows/curious-city/7b79e16d-f3a9-4156-9b27-4d2cc6ce351e?_ga=2.28540796.1753639261.1569526664-1089342726.1568933062">WBEZ’s Curious City</a> and the inspiration from their site &nbsp;<a class="llines" target="_blank" rel="noopener noreferrer" href="http://interactive.wbez.org/curiouscity/1910train/">If you toured Chicago in 1910, what would you do?</a>
        </p>
    </div>
</footer>

<style>
    footer {
        font-size: 0.77rem;
        padding-inline: 16px;
        background-color: var(--granite);
        box-shadow: inset 0 0 10px var(--midnight);
        display: flex;
        color: var(--midnight);
    }
    .lglink {
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
    .left p {
        margin: 0;
        padding: 0;
    }
    .left {
        padding-block: 1em;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    @media screen and (max-width: 699px) {
        footer {

        flex-direction: column;
        }
    }
    @media screen and (min-width: 700px) {
        footer {

        flex-direction: row;
        }
    }
    .mid {
        flex: 2;
    }
    .right {
        flex: 3;
    }
    .left, .mid, .right {
        padding: 1rem;
    }
</style>
