import React from 'react';
import styled from "@emotion/styled";
import wp from './images/wp.png';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { juliaNewberry, blackHawk, errettGraham, amyWingreen, josephWhitehouse, wolfej, deleuze, debord } from './data';
// import { juliaNewberrypic, blackHawkpic, errettGrahampic, amyWingreenpic, josephWhitehousepic, wolfejpic, deleuzepic, debordpic } from './images';
import debordpic from './images/debord.png';
import deleuzepic from './images/deleuze.png';
import amyWingreenpic from './images/tr-amyWingreen.png';
import blackHawkpic from './images/tr-blackHawk.png';
import errettGrahampic from './images/tr-errettGraham.png';
import josephWhitehousepic from './images/tr-josephWhitehouse.png';
import juliaNewberrypic from './images/tr-juliaNewberry.png';
import wolfejpic from './images/wolfej.png';
import bg from './images/time-machine-splash-background.jpg';


// const colors = {
//     dark: '#27452B',
//     darkrgba: '39,69,43', 
//     light: '#D6D7B5',
//     lightrgba: '214,215,181'
// }
const colors = {
    dark: '#000',
    darkrgba: '0,0,0', 
    light: '#fff',
    lightrgba: '255,255,255'
}

const Travelerlayout = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    background-image: url('${bg}');
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
`
const people = {
    '/juliaNewberry': juliaNewberry,
    '/blackHawk': blackHawk,
    '/errettGraham': errettGraham,
    '/amyWingreen': amyWingreen,
    '/josephWhitehouse': josephWhitehouse,
    '/wolfej': wolfej,
    '/deleuze': deleuze,
    '/debord': debord
}
const images = {
    '/juliaNewberry': juliaNewberrypic,
    '/blackHawk': blackHawkpic,
    '/errettGraham': errettGrahampic,
    '/amyWingreen': amyWingreenpic,
    '/josephWhitehouse': josephWhitehousepic,
    '/wolfej': wolfejpic,
    '/deleuze': deleuzepic,
    '/debord': debordpic
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
        <div  css={css`width: 80%; margin: 40% auto;`} >
            <img css={css`display: block; margin: auto; max-width: 150px; filter: drop-shadow(0 0 0.25rem ${colors.dark});`} src={images[props.content]} />
            <p css={css`padding-top: 35px; font-size: 2rem; font-family: 'Libre Baskerville',serif;`} >{people[props.content].name}</p>
            <p>{people[props.content].desc}</p>
        </div>
    </div>
)
function Timetraveler ({ match }) {
    function handleClick(e) {
    e.preventDefault();
    alert('Please don\'t do that.');
  }
    return(
        <Travelerlayout>
            <Leftpanel content={match.url} />
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
                    color: #333;
                    &:hover {
                        color: #e8e9ca;
                        & button {
                        color: #e8e9ca;
                        &:hover {

                            border: 1px solid #e8e9ca;
                        }

                        }
                    }
                `}>
                    <p css={css`
                        width: 25%;
                        height: 25%;
                        display: block;
                        margin: auto;`} >
                        click "yes" if you think we should have some content in this box
                        <button css={css`
                            display: block;
                            border: 1px solid transparent;
                            padding:10px;
                            color: #333;
                            background: none;
                            margin: 10px auto;`} onClick={handleClick}>
                        yes
                    </button>
                    </p>
                </div>
            </Maparea>
        </Travelerlayout>
    )
}
export default Timetraveler