import { useState } from 'react';
import { graphql } from 'gatsby';
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import styled from "@emotion/styled";

import Navbar from '../components/navbar';

import debordpic from '../images/debord.png';
import deleuzepic from '../images/deleuze.png';
import amyWingreenpic from '../images/tr-amyWingreen.png';
import blackHawkpic from '../images/tr-blackHawk.png';
import errettGrahampic from '../images/tr-errettGraham.png';
import josephWhitehousepic from '../images/tr-josephWhitehouse.png';
import juliaNewberrypic from '../images/tr-juliaNewberry.png';
import wolfejpic from '../images/wolfej.png';
import wpg from '../images/wp.png';
import wpc from '../images/time-machine-splash-background.jpg';

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
    'debord': debordpic
}
const Maparea = styled.div` 
    flex: 1;
    display: flex;
    -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
`
const Leftpanel = ( props ) => (
    <div css={css`
        flex-basis: 25%;
        background: #333;
        height: 100%;
        color: #e8e9ca;
    `}>
        <div css={css`width: 80%; margin: 40% auto;`} >
            <img css={css`display: block; margin: auto; max-width: 150px; filter: drop-shadow(0 0 0.25rem ${props.colors.dark});`} src={images[props.image]} alt="" />
            <p css={css`padding-top: 35px; font-size: 2rem; line-height: 2.25rem;font-family: 'Hepta Slab',serif;`} >{props.title}</p>
            <p css={css`padding-top: 35px; font-family: 'Lato',sans-serif;`} >{props.text}</p>
        </div>
    </div>
)
export default function Template({
    data, // this prop will be injected by the GraphQL query below.
    }) {
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { frontmatter } = markdownRemark
    const [text, setText] = useState(true);
    const [colorState, setColorState] = useState(false);
    const toggle = () => setColorState(!colorState)
    let colors = colorState ? {
            dark: '#27452B',
            darkrgba: '39,69,43', 
            light: '#D6D7B5',
            lightrgba: '214,215,181'
        } : {
            dark: '#000',
            darkrgba: '0,0,0', 
            light: '#fff',
            lightrgba: '255,255,255'
        }
    return (
        <div css={css`
            display: flex;
            align-items: stretch;
            height: 100%;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
        `} >
        <Navbar handleClick={toggle} />
            <Global styles={css`
            @import url('https://fonts.googleapis.com/css?family=Bitter|Lato:100i,300i,400|Libre+Baskerville|BioRhyme:700|Hepta+Slab:400,700|Ultra:400,700&display=swap');

                body {
                    background: url('${colorState ? wpg : wpc}');
                    background-position: center;
                    background-size: cover;
                }
            `} />
            <Leftpanel image={frontmatter.image} text={frontmatter.text} title={frontmatter.title} colors={colors} />
            <Maparea>
                <div css={css`
                    height: 70%;
                    width: 80%;
                    display: flex;
                    margin: auto;
                    background-color: #333;
                    -webkit-box-shadow: inset 10px 10px 50px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: inset 10px 10px 50px 0px rgba(0,0,0,0.75);
                    box-shadow: inset 10px 10px 50px 0px rgba(0,0,0,0.75);
                    color:  #e8e9ca;
                `}>
                    <p css={css`
                        width: 25%;
                        height: 25%;
                        display: block;
                        margin: auto;`} >
                        click "yes" if you think we should have some content in this box
                        <br />
                        <button css={css`
                                border: 1px solid #e8e9ca;
                                cursor: pointer;
                                display: inline-block;
                                width: 75px;
                                padding:10px;
                                color:  #e8e9ca;
                                background: none;
                                margin: 10px auto;`}
                            onMouseEnter={() => setText(false)}
                            onMouseLeave={() => setText(true)}>
                            {text ? 'yes' : 'no' }
                        </button>
                    </p>
                </div>
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
        }
    }
}
`