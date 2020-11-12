import { graphql, Link } from 'gatsby';
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import styled from "@emotion/styled";
import { Helmet } from "react-helmet"

import Navbar from '../components/navbar';

import debordpic from '../images/debord.png';
import deleuzepic from '../images/deleuze.png';
import amyWingreenpic from '../images/tm-amyWingreen.png';
import blackHawkpic from '../images/tm-blackHawk.png';
import errettGrahampic from '../images/tm-errettGraham.png';
import josephWhitehousepic from '../images/tm-josephWhitehouse.png';
import juliaNewberrypic from '../images/tm-juliaNewberry.png';
import wolfejpic from '../images/wolfej.png';
import jhMageepic from '../images/tm-jhMagee.png';
import eraBellThompsonpic from '../images/tm-eraBellThompson.png';
import rasterpic from '../images/tm-raster.png';
import cgPearce from '../images/tm-cgPearce.png';
import thxpic from '../images/tm-thx.png';

// const colors = {
//     green: {
//         dark: '#27452B',
//         darkrgba: '39,69,43', 
//         light: '#D6D7B5',
//         lightrgba: '214,215,181'
//     },
//     bandw: {
//         dark: '#000',
//         darkrgba: '0,0,0', 
//         light: '#fff',
//         lightrgba: '255,255,255'
//     }
// }

const images = {
    'juliaNewberry': juliaNewberrypic,
    'blackHawk': blackHawkpic,
    'errettGraham': errettGrahampic,
    'amyWingreen': amyWingreenpic,
    'josephWhitehouse': josephWhitehousepic,
    'wolfej': wolfejpic,
    'deleuze': deleuzepic,
    'debord': debordpic,
    'jhMagee': jhMageepic,
    'eraBellThompson': eraBellThompsonpic,
    'cgPearce': cgPearce,
    'raster': rasterpic,
    'thx': thxpic,
}
const Maparea = styled.div` 
    position: sticky;
    height:100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
`
const Leftpanel = ( props ) => (
    <div className="leftPanel" css={css`

            @media only screen and (max-width: 900px) {
                display: none;
            }

            padding-top: 65px;
        // position: fixed;
        overflow-y: auto;
        flex-basis: 20%;
        background: #333;
        color: #e8e9ca;
        align-content: space-between;
        // display: flex;
        // flex-direction: column;
        background-size: 100%;
        background-attachment: fixed;
    `}>
        <div css={css`width: 80%; margin: 15% auto; flex-grow: 1;`} >
            <img css={css`display: block; margin: auto; max-width: 150px; filter: drop-shadow(0 0 0.25rem black);`} src={images[props.image]} alt="" />
            <p css={css`padding-top: 35px; font-size: calc(12px + 1vw); line-height: 2.25rem;font-family: 'Hepta Slab',serif; text-align: center;`} >{props.title}</p>
        <Link css={css`
                margin: 20px auto;
                font-family: 'Hepta Slab',serif;
                font-weight: 100;
                font-size: calc(10px + 0.5vw);
                color: white;
                display: block;
                text-decoration: none;
                padding: 15px 30px ;
                width: 100%;
                border: 0;
                &:hover {
                    background-color: white;
                    -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
                    box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
                    color: black;
                }
                background: rgba(0,0,0,0.15);
                border-radius: 6px; 
                flex-basis: 1rem;
                text-align: center;
                flex-shrink: 0;
        `} to="/choose">Swap Traveler</Link>
        </div>

    </div>
)
export default function Template({
    data, location // this prop will be injected by the GraphQL query below.
    }) {
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { frontmatter } = markdownRemark

    return (
        <div css={css`
            display: flex;
            align-items: stretch;
        `} >
        <Navbar location={location} />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Newberry's Midwest Time Machine</title>
            </Helmet>
            <Global styles={css`
                @import url('https://fonts.googleapis.com/css?family=Bitter|Lato:100i,300i,400|Libre+Baskerville|BioRhyme:700|Hepta+Slab:400,700|Ultra:400,700&display=swap');
                * {
                    transition: all .15s ease-in-out;
                }
                body {
                    margin: 0 !important;
                }
            `} />
            <Leftpanel image={frontmatter.image} text={frontmatter.shorttext} title={frontmatter.title} />
            <Maparea>
                <iframe title={frontmatter.image} src={'/time-machine/static/' + frontmatter.image + '.html'}
                    css={css`
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        -webkit-box-shadow: inset 10px 10px 50px 0px rgba(0,0,0,0.75);
                        -moz-box-shadow: inset 10px 10px 50px 0px rgba(0,0,0,0.75);
                        box-shadow: inset 10px 10px 50px 0px rgba(0,0,0,0.75);
                        color:  #e8e9ca;
                    `} />
                    
            </Maparea>
        </div>
    )
}
export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
        frontmatter {
            path
            title
            text
            image
            storymapurl
            shorttext
        }
    }
}
`
