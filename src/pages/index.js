import { useState} from 'react';
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import styled from "@emotion/styled";
import { Link } from "gatsby"

import Navbar from '../components/navbar';
import wpg from '../images/wp.png';
import wpc from '../images/time-machine-splash-background.jpg';
import fg from '../images/mtm-index-2-t.png';
import amyWingreen from '../images/tr-amyWingreen.png';
import blackHawk from '../images/tr-blackHawk.png';
import errettGraham from '../images/tr-errettGraham.png';
import juliaNewberry from '../images/tr-juliaNewberry.png';

const Text  = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    text-align: justify;
    padding: 15px 30px ;
`
const Title  = styled.p`
    margin: 0;
    font-family: 'Hepta Slab',serif;
    font-weight: 900;
    // font-size: 7rem;
    // line-height: 5rem;
   
     &.upper {
         font-size: 7vw;
         line-height: 5vw;
     }
     &.lower {
         font-size: 5vw;
         line-height: 4vw;
        }
`
const Circleimage  = styled.img`
    flex: 1;
    max-width: 150px;
    transition: all .15s ease-in-out;
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
    flex-basis: 70%;
    @media (max-width: 1100px) {flex-basis: 80%;} 
    @media (max-width: 750px)  {flex-basis: auto;} 
`
const Splashright = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const Halfground  = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    border-radius: 3px;
    transition: all .15s ease-in-out;
    &:hover {
 
        background-attachment: fixed;
        background-position: center;
    }
    width: 75%;
    @media (max-width: 1100px) {width: 85%;} 
    @media (max-width: 750px) {width: 100%;} 
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
                    body {
                        background: url('${colorState ? wpg : wpc}');
                        background-position: center;
                        background-size: cover;
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
                `}
                />
        <Splash>
            <Halfground className="halfground" />
            <Splashleft>
                <Title className="upper title">Midwest</Title>
                <Title className="lower title">Time Machine</Title>
                <Text className="text">Come along for the ride with Midwesterners' first-hand accounts of historic events, including frontier expeditions, the Great Chicago Fire, and the 1893 World's Fair.</Text>
                <Text className="text">With help from our volunteer transcribers, you can follow these journeys via historical documents from the Newberry's primary source collections.</Text>
                <Link to="/choose/" css={css`
                        text-align: center;
                        text-decoration: none;
                        display: table;
                        margin: 15px auto;
                        padding: 13px 20px;
                        font-family: 'Hepta Slab',serif;
                        font-weight: 900;
                        background: ${colors.dark};
                        transition: all .15s ease-in-out;
                        color:  rgba(${colors.lightrgba},0.75) ;
                        border-radius: 6px; 
                        -webkit-box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                        -moz-box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                        box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                        text-transform: uppercase;
                        &:hover {
                            text-shadow: none;
                            color: ${colors.light};
                        }
                        text-shadow:
                            -1px -1px 0 ${colors.dark},  
                             1px -1px 0 ${colors.dark},
                             -1px 1px 0 ${colors.dark},
                              1px 1px 0 ${colors.dark};
                `}>Choose Your Time Traveler</Link>
            </Splashleft>
            <Splashright>
                <Circleimage className="circleimage" src={ blackHawk } alt=""/>
                <Circleimage className="circleimage" src={ errettGraham } alt=""/>
                <Circleimage className="circleimage" src={ amyWingreen } alt=""/>
                <Circleimage className="circleimage" src={ juliaNewberry } alt=""/>
            </Splashright>
        </Splash>
    </div>
}
export default Main