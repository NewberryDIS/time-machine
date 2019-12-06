import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import witm from '../images/witm-sq.jpg';
import { OutboundLink } from "gatsby-plugin-google-analytics";

const FooterSection = styled.div`
    margin: 5px;
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    & a {
        color: black;
        font-weight: 900;
        text-decoration: none;
        // background-image: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75));
        background-image: linear-gradient(to bottom, transparent 1px, black 2px); 
        background-position: 0% 105%;
        background-repeat: no-repeat;
        background-size: 0% 2px;
        transition: background-size .2s;
        &:hover {
            &.smlink {
                background-size: 100% 2px;
            }
            &.lglink {
                background-size: 100% 4px;
            }
        }
    }
    padding: 15px 30px;
    border-radius: 6px; 
    &.middle, &.right, &.left p {
        font-size: 0.65rem;
    }
    &.left {
        flex: 1;
    }
    &.middle {
        flex: 2;
    }
    &.right {
        flex: 2;
    }
    .emphasis {
        color: black;
        font-weight: 900;
    }
    .witmimg {
        margin-bottom: 0;
        max-width: 200px;
        padding: 5px;
        float: left;
    }
    .witmbox {
        // padding: 5px;
        margin-bottom: 5px;
    }
`
// data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7

const FooterWrapper = styled.div`
    background: white;
    -moz-box-shadow:    inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow:         inset 0 0 10px #000000;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 700px) {
        flex-direction: column;
    }
`
const Footer = (props) => {
    return (
        <FooterWrapper width={props.width}>
            <FooterSection className="left">
                <p className="witmbox">
                    Part of <OutboundLink className="smlink" target="_blank" rel="noopener noreferrer" href="https://www.newberry.org/what-is-the-midwest-exhibition">What Is the Midwest</OutboundLink>, a multidisciplinary project funded by The Andrew W. Mellon Foundation
                </p>
                <OutboundLink className="lglink" target="_blank" rel="noopener noreferrer" href="https://www.newberry.org/contact-librarian">
                    Contact Us
                </OutboundLink>
            </FooterSection>
            <FooterSection className="middle">
                Except where otherwise noted, contextual content on this site is made available under a &nbsp;
                <OutboundLink className="smlink" target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                    Creative Commons Public Domain license. &nbsp;
                </OutboundLink>
                Digitized images and other media from the Newberry's collections are made available for any lawful purpose, commercial or non-commercial, without licensing or permission fees to the library, subject to the following terms and conditions:&nbsp;
                <OutboundLink className="smlink" target="_blank" rel="noopener noreferrer" href="https://www.newberry.org/rights-and-reproductions">
                    Newberry Rights and Reproductions Policy. 
                </OutboundLink>
            </FooterSection>
            <FooterSection className="right">
                <p>Edited by <OutboundLink className="smlink" href="https://www.newberry.org/staff-biographies#wolfe" target="_blank" rel="noopener noreferrer">Jen Wolfe</OutboundLink> and developed by <span className="emphasis">Nick White</span> of the Newberry’s Digital Initiatives and Services department. 
                Code is available for repurposing: <OutboundLink className="smlink" target="_blank" rel="noopener noreferrer" href="https://github.com/newberrydis/time-machine">Midwest Time Machine repository</OutboundLink>.  
                Interactive maps created using the open-source software <OutboundLink className="smlink" href="https://storymap.knightlab.com/" target="_blank" rel="noopener noreferrer">StoryMapJS</OutboundLink>. 
                Grateful acknowledgement to &nbsp;<OutboundLink className="smlink" target="_blank" rel="noopener noreferrer" href="https://www.wbez.org/shows/curious-city/7b79e16d-f3a9-4156-9b27-4d2cc6ce351e?_ga=2.28540796.1753639261.1569526664-1089342726.1568933062">WBEZ’s Curious City&nbsp;</OutboundLink>and the inspiration from their site &nbsp;<OutboundLink className="smlink" target="_blank" rel="noopener noreferrer" href="http://interactive.wbez.org/curiouscity/1910train/">If you toured Chicago in 1910, what would you do?</OutboundLink></p>
            </FooterSection>
        </FooterWrapper>
    )
}
export default Footer