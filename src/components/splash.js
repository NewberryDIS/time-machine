/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import styled from "@emotion/styled";
import { Link } from "gatsby"
import eraBellThompson from '../images/tm-eraBellThompson.png';
import blackHawk from '../images/tm-blackHawk.png';
import errettGraham from '../images/tm-errettGraham.png';
import juliaNewberry from '../images/tm-juliaNewberry.png';
import '../components/layout.css'
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Text  = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: calc(0.5vw + 15px);
    padding: 7px 30px ;
`
const Title  = styled.p`
    font-family: 'Hepta Slab',serif;
    font-weight: 900;
    margin: 0;
    filter: drop-shadow(0 0 0.25rem #000);
    color: #fff;
    text-shadow:
        -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
    &.upper {
        font-size: calc(7vw + 20px);
        line-height: calc(5vw);
    }
    &.lower {
        font-size: calc(4vw + 12px);
        margin: 0 0 10px 0;
        line-height: calc(4vw + 12px);;
    }
`
const Splashcss = styled.div`
    margin: 0px auto;
    padding: 30px;
    width: 80%;
    @media (min-width: 967px) {width: 60%;} 
    border-radius: 3px;                        
    border: 2px solid rgba(0,0,0,1); 
    background: rgba(255,255,255,0.85);
    box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
    position: relative;
    .Splashcssleft {
        // width: calc(100% - 80px);
        // @media (max-width: 800px) {width: 100%;} 
    }
    .chooseButton {
        display: block;
        margin: 15px auto;
        padding: 13px 20px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        font-family: 'Hepta Slab',serif;
        font-weight: 900;
        background: #000;
        color:  rgba(255,255,255,0.75);
        box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
        border-radius: 6px; 
        border: 1px solid rgba(0,0,0, 0.5);
        &:hover {
            border: 1px solid #000;
            background-color: #fff;
            box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
            text-shadow: none;
            color: #000;
        }
        text-shadow:
            -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
    }
    .transcribeButton {
        display: block;
        font-family: 'Lato', sans-serif;
        font-size: 1rem;
        color: black;
        text-decoration: none;
        padding: 15px 30px ;
        border: 1px solid rgba(0,0,0, 0.5);
        &:hover {
            border: 1px solid #000;
            background-color: #fff;
            box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
        }
        background: rgba(255,255,255,0.8);
        border-radius: 6px; 
        flex-basis: 1rem;
        text-align: center;
        flex-shrink: 0;
    }
    .ortext {
        display: block;
        text-align: center;
        overflow: hidden;
        white-space: nowrap; 
        span {
            position: relative;
            display: inline-block;
            font-family: 'Hepta Slab',serif;
            text-transform: uppercase;
            font-style: italic;
        }
        span:before,
        span:after {
            content: "";
            position: absolute;
            top: 50%;
            width: 9999px;
            height: 1px;
            background: black;
        }
        span:before {
            right: 100%;
            margin-right: 15px;
        }
        span:after {
            left: 100%;
            margin-left: 15px;
        }
    }
    
`
const CirclePanel = styled.div`
    position: absolute;
    display: flex;
    // jen's alleged disappearing circlefaces 
    // flex-wrap: wrap;
    @media (min-width: 800px) {
        justify-content: flex-start;
        flex-direction: column;
        right: -75px;
        top: 0;
    } 
    @media (max-width: 800px) {
        justify-content: space-between;
        flex-direction: row;
        bottom: -150px;
        left: 0;
    } 
`
const CircleImage = styled.img`
    flex: 1;
    filter: drop-shadow(0 0 0.75rem #000);
    &:hover {
        filter: drop-shadow(0 0 1rem #000);
    }
    @media (min-width: 800px) {
        width: 150px;
        height: 150px;
    } 
    @media (max-width: 800px) {
        width: calc(100% / 5);
    } 

`
const Splash  = props => (
    <div >
        <Splashcss>
            <div className="Splashcssleft">
                <Title className="upper">
                    Midwest
                </Title>
                <Title className="lower">
                    Time Machine
                </Title>
                <Text className="text">Travel to the past via first-hand accounts from letters, diaries, and rare books in the Newberry's collections</Text>
                <Text className="text">Witness the Chicago Fire, join the Lewis and Clark expedition, and marvel at the World's Fair through manuscripts transcribed by our online volunteers!</Text>
                <Link to="#main" className="chooseButton">Choose Your Time Traveler</Link>
                {/* <div className="ortext"><span>or</span></div> */}
                {/* <OutboundLink className="transcribeButton"  href="https://publications.newberry.org/transcribe" target="_blank" rel="noopener noreferrer">Unlock more stories from the past at our transcription crowdsourcing project:<br/>NEWBERRY TRANSCRIBE</OutboundLink> */}
            </div>
            {/* <CirclePanel>
                <CircleImage src={ blackHawk } alt=""/>
                <CircleImage src={ errettGraham } alt=""/>
                <CircleImage src={ eraBellThompson } alt=""/>
                <CircleImage src={ juliaNewberry } alt=""/>
            </CirclePanel> */}
        </Splashcss>
    </div>
)
export default Splash