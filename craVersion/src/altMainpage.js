
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import bg from './images/time-machine-splash-background.jpg';
import fg from './images/time-machine-splash-foreground.jpg';
// import fg from './images/counter.png';
import styled from "@emotion/styled";
// import Background from "./altMainpage";
import wp1 from './images/mtm-index-1.jpg';
import wp2 from './images/mtm-index-2.jpg';
import wp3 from './images/mtm-index-3.jpg';
import wp4 from './images/mtm-index-4.jpg';
import wp5 from './images/mtm-index-5.jpg';
import wp6 from './images/mtm-index-6.jpg';

const Text = styled.div`
flex: 1; 
width: 70%;
margin: 30px auto;
font-family: 'Lato', sans-serif;
padding: 25px;
// box-shadow: 0px 0px 25px 25px rgba(255,255,255, 0.55);
//  background: rgba(255,255,255, 0.55);
//  box-shadow: 0px 0px 25px 25px rgba(0,0,0, 0.55);
//   background: rgba(0,0,0, 0.55);
// border: 2px solid black;
// border-radius: 6px;
// -webkit-box-shadow: 10px 10px 30px 0px rgba(255,255,255,0.75);
// -moz-box-shadow: 10px 10px 30px 0px rgba(255,255,255,0.75);
// box-shadow: 10px 10px 100px 0px rgba(255,255,255,0.75);
// background:rgba(214,215,181,0.5);
`
function Main(props) {
    return 	<div>
        <div css={css`
        position: fixed;
        height: 150vh;
        overflow: hidden;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        display: flex;
        background-color: black;
    `}>
        <div css={css`flex: 1; background-size: auto 150vh; background-position: 50% 50%; margin: 2px; background-image: url('${wp3}');`}/>
        <div css={css`flex: 1; background-size: auto 150vh; background-position: auto; margin: 2px; background-image: url('${wp4}');`}/>
        <div css={css`flex: 1; background-size: auto 150vh; background-position: 5% 100%; margin: 2px; background-image: url('${wp2}');`}/>
        <div css={css`flex: 1; background-size: auto 150vh; background-position: 50% 50%; margin: 2px; background-image: url('${wp1}');`}/>
        <div css={css`flex: 1; background-size: auto 150vh; background-position: 40% 50%; margin: 2px; background-image: url('${wp5}');`}/>
        <div css={css`flex: 1; background-size: auto 150vh; background-position: 50% 100%; margin: 2px; background-image: url('${wp6}');`}/>
    </div>
            <div css={css`
                overflow: auto;
                background: rgba(0,0,0,0.65);
                border: 2px solid white;
                border-radius: 6px;
                width: 50%;
                margin: 5% auto;
                -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 100px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: column;
                color: white;
                font-weight: 900;
                font-family: 'Hepta Slab', serif;
                padding: 20px;
                text-shadow: 5px 5px rgba(0,0,0,0.75);
                `}>
                    <p css={css`
                        margin: 0;
                        font-size: 6rem;
                        line-height: 4rem;
                        `}>
                            Midwest
                    </p>   
                    <p css={css`
                    margin: 0;
                        font-size: 4rem;
                        line-height: 3.5rem;
                        `}>
                            Time Machine
                    </p>
				<p css={css`font-family: 'Lato', sans-serif; font-size: 1.25rem;`}>Come along for the ride with Midwesterners' first-hand accounts of historic events, 
					including frontier expeditions, the Great Chicago Fire, and the 1893 World's Fair.</p>
			<Text >
				<p css={css`padding: 5px 0 20px 0;`}>With help from our volunteer transcribers, you can follow these journeys via historical documents from the Newberry's primary source collections.</p>
                <p css={css`width: 100%; margin: auto; text-align: center;`}>
                    <Link to="/choose" css={css`
                        text-align: center;
                        padding: 13px;
                        margin: auto;
                        background: #C64B2D;
                        color:  #C3C6A4;
                        font-family: 'Libre Baskerville', serif;   
                        border-radius: 6px; 
                        -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
                        -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
                        box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
                        transition: all .15s ease-in-out;
                        text-transform: uppercase;
                        &:hover {
                            color: white;
                        }
                        `}>
                        Choose your traveler
                    </Link>
                </p>
				<p css={css`padding: 20px 0 0 0;`}>Help with our transcription crowdsourcing project: NEWBERRY TRANSCRIBE</p>
			</Text>
		</div>
    </div>
}
export default Main;