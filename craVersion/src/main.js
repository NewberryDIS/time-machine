
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import wp from './images/wp.png';
import fg from './images/mtm-index-2-t.png';
import styled from "@emotion/styled";
import amyWingreen from './images/tr-amyWingreen.png';
import blackHawk from './images/tr-blackHawk.png';
import errettGraham from './images/tr-errettGraham.png';
import josephWhitehouse from './images/tr-josephWhitehouse.png';
import juliaNewberry from './images/tr-juliaNewberry.png';
import wolfej from './images/wolfej.png';
import debord from './images/debord.png';
import deleuze from './images/deleuze.png';



const colors = {
    dark: '#27452B',
    darkrgba: '39,69,43', 
    light: '#D6D7B5',
    lightrgba: '214,215,181'
}
// const colors = {
//     dark: '#000',
//     darkrgba: '0,0,0', 
//     light: '#fff',
//     lightrgba: '255,255,255'
// }
const Text = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    color: ${colors.dark};
    text-align: justify;
    padding: 15px 30px ;
`
const Title = styled.p`
    color: ${colors.light};
    margin: 0;
    font-family: 'Hepta Slab',serif;
    font-weight: 900;
    // font-size: 7rem;
    // line-height: 5rem;
    text-shadow:
        -1px -1px 0 ${colors.dark},  
         1px -1px 0 ${colors.dark},
         -1px 1px 0 ${colors.dark},
          1px 1px 0 ${colors.dark};
     &.upper {
         font-size: 7vw;
         line-height: 5vw;
     }
     &.lower {
         font-size: 5vw;
         line-height: 4vw;
        }
        filter: drop-shadow(0 0 0.25rem ${colors.dark});
`
const Circleimage = styled.img`
    max-width: 150px;
    transition: all .15s ease-in-out;
    filter: drop-shadow(0 0 0.75rem ${colors.dark});
    &:hover {
        filter: drop-shadow(0 0 1rem ${colors.dark});
    }
`
function Main() {
    return 	<div>
            <div css={css`
                position: fixed;
                height: 150vh;
                overflow: hidden;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                z-index: -2;
                display: flex;
                background-image: url('${wp}');
                background-position: center;
                background-size: cover;
            `} />
        <div css={css`
            display: flex; 
            justify-content: center;
            margin: 10px auto;
            padding: 50px;
            padding-bottom: 20px;
            position: relative;
            
            width: 60%; 
            @media (max-width: 1100px) {width: 75%;} 
            @media (max-width: 750px) {display: block; padding: 30px;} 
            `}><div css={css`
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: -1;
                border: 1px solid ${colors.dark}; 
                background: rgba(${colors.lightrgba},0.75);
                background-attachment: fixed;
                background-position: center;
                -webkit-box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                -moz-box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                box-shadow: 10px 10px 30px 0px rgba(${colors.darkrgba},0.75);
                transition: all .15s ease-in-out;
                &:hover {
                    background: rgba(${colors.lightrgba},1);
                    background-image: url('${fg}'); 
                    background-attachment: fixed;
                    background-position: center;
                    -webkit-box-shadow: 10px 10px 35px 0px rgba(${colors.darkrgba},0.75);
                    -moz-box-shadow: 10px 10px 305x 0px rgba(${colors.darkrgba},0.75);
                    box-shadow: 10px 10px 35px 0px rgba(${colors.darkrgba},0.75);
                }
                width: 80%;
                @media (max-width: 1100px) {width: 85%} 
                @media (max-width: 750px) {width: 100%} 
                `}></div>
            <div css={css`
                flex-basis: 70%;
                @media (max-width: 1100px) {flex-basis: 80%;} 
                @media (max-width: 750px)  {flex-basis: auto;} 
                
                `}>
                <Title className="upper">Midwest</Title>
                <Title className="lower">Time Machine</Title>
                <Text>Come along for the ride with Midwesterners' first-hand accounts of historic events, including frontier expeditions, the Great Chicago Fire, and the 1893 World's Fair.</Text>
                <Text>With help from our volunteer transcribers, you can follow these journeys via historical documents from the Newberry's primary source collections.</Text>
                <div css={css`text-align: center; padding: 20px; display: flex;flex-direction: column;`}>
                    <Link to='/choose' 
                    css={css`
                        flex: 1;
                        text-align: center;
                        padding: 13px;
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
                        1px 1px 0 ${colors.dark};`}>Choose your traveler</Link>
                    <br />
                    <a href="http://newberry.org/transcribe" css={css`
                        flex: 1;
                        padding: 20px;
                        margin: 15px auto;
                        color: ${colors.dark};
                        background: rgba(${colors.lightrgba},0.4);
                        border-radius: 6px;
                        // -webkit-box-shadow: 2px 2px 20px 0px rgba(${colors.darkrgba},0.75);
                        // -moz-box-shadow: 2px 2px 20px 0px rgba(${colors.darkrgba},0.75);
                        // box-shadow: 2px 2px 20px 0px rgba(${colors.darkrgba},0.75);
                        & span {
                            transition: all .15s ease-in-out;
                        }
                        &:hover {
                            & span {

                                color: ${colors.light};
                                text-shadow:
                                -1px -1px 0 ${colors.dark},  
                                 1px -1px 0 ${colors.dark},
                                 -1px 1px 0 ${colors.dark},
                                  1px 1px 0 ${colors.dark};
                            }
                        }
                `}>Help with our transcription crowdsourcing project: <br /><span>NEWBERRY TRANSCRIBE</span></a>
                </div>
            </div>
            <div css={css`flex: 1; display: flex; flex-direction: column; flex-wrap: wrap; justify-content: center; @media (max-width: 750px) {display: none;} `}>
                <div css={css`text-align: center; flex: 1;`}><Circleimage src={juliaNewberry} alt="" /></div>
                <div css={css`text-align: center; flex: 1;`}><Circleimage src={amyWingreen} alt="" /></div>
                <div css={css`text-align: center; flex: 1;`}><Circleimage src={blackHawk} alt="" /></div>
                <div css={css`text-align: center; flex: 1;`}><Circleimage src={errettGraham} alt="" /></div>
            </div>
        </div>
    </div>
}
export default Main;