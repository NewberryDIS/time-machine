import { useState} from 'react';
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import styled from "@emotion/styled";
import { Link } from "gatsby"
import Navbar from '../components/navbar';
import wpg from '../images/wp.png';
import wpc from '../images/time-machine-splash-background.jpg';
import fg from '../images/mtm-index-2-t.png';
import eraBellThompson from '../images/tm-eraBellThompson.png';
import blackHawk from '../images/tm-blackHawk.png';
import errettGraham from '../images/tm-errettGraham.png';
import juliaNewberry from '../images/tm-juliaNewberry.png';
import '../components/layout.css'

const Text  = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    // text-align: justify;
    padding: 15px 30px ;
`
const Title  = styled.p`
    font-family: 'Hepta Slab',serif;
    font-weight: 900;
    // font-size: 7rem;
    // line-height: 5rem;
    margin: 0;
     &.upper {
         font-size: 7vw;
         line-height: 5vw;
     }
     &.lower {
         font-size: 5vw;
    margin: 0 0 10px 0;
    line-height: 4vw;
        }
`
const Circleimage  = styled.img`
    flex: 1;
    max-width: 150px;
`
const Splash = styled.div`
    width: 60%; 
    @media (max-width: 1100px) {width: 75%;} 
    @media (max-width: 750px) {display: block; padding: 30px;} 
    
    display: flex; 
    justify-content: center;
    margin: 10px auto;
    padding: 50px;
    padding-bottom: 20px;
    position: relative;
`
const Splashleft = styled.div`
position: relative;
    align-content: space-between;
    display: flex;
    flex-direction: column;
    flex-basis: 70%;
    height: 100%;
    @media (max-width: 1100px) {flex-basis: 80%;} 
    @media (max-width: 750px)  {flex-basis: auto;} 
`
const Splashright = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 1100px) {width: 85%;} 
    @media (max-width: 750px) {display: none;} 
`
const Halfground  = styled.div`
    position: absolute;
    top: -30px;
    bottom: -20px;
    left: -40px;
    right: -80px;
    z-index: -1;
    border-radius: 3px;
    &:hover {
        background-attachment: fixed;
        background-position: center;
    }
    // width: 75%;
    // @media (max-width: 1100px) {width: 85%;} 
    // @media (max-width: 750px) {width: 100%;} 
`
function Main() {
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
    return <div className="wrapper">
        <Navbar handleClick={toggle} />
        <Global styles={css`
                    @import url('https://fonts.googleapis.com/css?family=Hepta+Slab:300,400,700|Lato:300,400,700&display=swap');
                    * {
                        transition: all .15s ease-in-out;
                    }
                    html {
                        height: 100vh;
                    }
                    body {
                        margin: 0;
                        background: url('${colorState ? wpg : wpc}');
                        // background-position: center;
                        background-size: cover;
                        background-attachment: fixed;
                    }
                    .title {
                        filter: drop-shadow(0 0 0.25rem ${colors.dark});
                        color: ${colors.light};
                        text-shadow:
                        -1px -1px 0 ${colors.dark},  
                        1px -1px 0 ${colors.dark},
                        -1px 1px 0 ${colors.dark},
                        1px 1px 0 ${colors.dark};
                    }
                    .text {
                        color: ${colors.dark};
                    }
                    .circleimage {
                        filter: drop-shadow(0 0 0.75rem ${colors.dark});
                        &:hover {
                            filter: drop-shadow(0 0 1rem ${colors.dark});
                        }
                    }
                    .halfground {
                        border: 2px solid rgba(${colors.darkrgba},1); 
                        background: rgba(${colors.lightrgba},0.85);
                        -webkit-box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                        -moz-box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                        box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                        &:hover {
                            background: rgba(${colors.lightrgba},1);
                            background-image: url('${fg}'); 
                            -webkit-box-shadow: 10px 10px 35px 0px rgba(${colors.darkrgba},0.75);
                            -moz-box-shadow: 10px 10px 305x 0px rgba(${colors.darkrgba},0.75);
                            box-shadow: 10px 10px 35px 0px rgba(${colors.darkrgba},0.75);
                        }
                    }
                    .newberry-transcribe {
                            font-family: 'Lato', sans-serif;
                            font-weight: 100;
                            font-size: 1rem;
                            color: black;
                            text-decoration: none;
                        padding: 15px 30px ;
                        border: 1px solid rgba(${colors.darkrgba}, 0.5);
                        &:hover {
                            border: 1px solid ${colors.dark};
                            background-color: ${colors.light};
                            -webkit-box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                            -moz-box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                            box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                        }
                        background: rgba(${colors.lightrgba},0);
                        border-radius: 6px; 
                        flex-basis: 1rem;
                        text-align: center;
                        flex-shrink: 0;
                    }
                    .textcontent {
                        flex-grow: 1;
                    }
                    .strike {
                        display: block;
                        text-align: center;
                        overflow: hidden;
                        white-space: nowrap; 
                    }
                
                    .strike > span {
                        position: relative;
                        display: inline-block;
                        font-family: 'Hepta Slab',serif;
                        text-transform: uppercase;
                        font-style: italic;
                    }
                    
                    .strike > span:before,
                    .strike > span:after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        width: 9999px;
                        height: 1px;
                        background: black;
                    }
                
                    .strike > span:before {
                        right: 100%;
                        margin-right: 15px;
                    }
                
                    .strike > span:after {
                        left: 100%;
                        margin-left: 15px;
                    }
                `}/>
        <Splash>
            <Splashright />
            <Splashleft>
            <Halfground className="halfground" />
                <div className="textcontent">
                    <Title className="upper title">Midwest</Title>
                    <Title className="lower title">Time Machine</Title>
                    <Text className="text">Travel to the past via first-hand accounts from letters, diaries, and rare books in the Newberry's collections</Text>
                    <Text className="text">Witness the Chicago Fire, settle the frontier, and marvel at the World's Fair through manuscripts transcribed by our online volunteers!</Text>
                    <Link to="/choose/" 
                        css={css`
                            text-align: center;
                            text-decoration: none;
                            display: table;
                            margin: 15px auto;
                            padding: 13px 20px;
                            font-family: 'Hepta Slab',serif;
                            font-weight: 900;
                            background: ${colors.dark};
                            color:  rgba(${colors.lightrgba},0.75) ;
                            border-radius: 6px; 
                            -webkit-box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                            -moz-box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                            box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                            text-transform: uppercase;
                            &:hover {
                                text-shadow: none;
                                color: ${colors.dark};
                            }
                            text-shadow:
                            -1px -1px 0 ${colors.dark},  
                            1px -1px 0 ${colors.dark},
                            -1px 1px 0 ${colors.dark},
                            1px 1px 0 ${colors.dark};
                            `}
                            className="newberry-transcribe"
                            >Choose Your Time Traveler</Link>
                    </div>
                    <div className="strike">
                        <span>Or</span>
                    </div>
                    <a className="newberry-transcribe" href="https://publications.newberry.org/digital/mms-transcribe/index" target="_blank">Unlock more stories from the past at our transcription crowdsourcing project: NEWBERRY TRANSCRIBE</a>
            </Splashleft>
            <Splashright>
                <Circleimage className="circleimage" src={ blackHawk } alt=""/>
                <Circleimage className="circleimage" src={ errettGraham } alt=""/>
                <Circleimage className="circleimage" src={ eraBellThompson } alt=""/>
                <Circleimage className="circleimage" src={ juliaNewberry } alt=""/>
            </Splashright>
        </Splash>
    </div>
}
export default Main