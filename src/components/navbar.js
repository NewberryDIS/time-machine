import React, { Fragment } from 'react';
import styled from "@emotion/styled";
import { Link } from 'gatsby'
import logob from '../images/Newberry_N.svg';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
/** @jsx jsx */
import { css, jsx } from '@emotion/core' 

import paper from '../images/paper.png';


const Navchunk = styled.div`
    z-index: 2;
    position: fixed;
    top: 5px;
    left: 7px;
    margin: 7px 0 0 5px;
    height: 60px;
    padding: 0 5px;
    display: inline-flex;
    border-radius: 8px;
    font-family: 'Lato', sans-serif;
    flex-direction: row;
    transition: all .15s ease-in-out;
    & a {
        transition: all .15s ease-in-out;
        text-decoration: none;
        &:hover {
            filter: drop-shadow(0 0 0.25rem white);
        }
    }
        -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
        border: 2px solid white;
        // background: rgba(0,0,0,0.65);
        background-image: url(${paper});
        background: #641818;
        // background: #284883;
        & .nav-textlink {
            color: white;
        }
        & .nav-n-logo img {
            filter: invert(100%);
        }
    & .nav-n-logo {
        padding: 4px 0 4px 7px;
        width: 50px;
    }
    & .nav-textlink {
        padding: 7px;
        display: flex;
        flex-direction: column;
        align-content: stretch;
        height: 40px;
        line-height: 40px;
    }
    & img {
        transition: all .15s ease-in-out;
        margin: 3px 0 0 0;
        background: url('${logob}');
        height: 40px;
        width: 40px;
        background-size: cover;
    }
    #nav-chooselink {
        @media only screen and (min-width: 900px) {
            display: none;
        }
    }
`

export default class Navbar extends React.Component {
    render(){
        return(
            <Navchunk className="navleft" >
                    <OutboundLink href="http://www.newberry.org" className="nav-n-logo">
                        <img alt="Newberry Logo" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                    </OutboundLink>{console.log(this.props.location.pathname)}
                    {   this.props.location.pathname === '/time-machine/' ? 
                            <Link to="/" className="nav-textlink" id="nav-homelink">
                                &gt; Digital Newberry
                            </Link> 
                        : 
                            this.props.location.pathname === '/time-machine/choose/' ? 
                                <Link to="/" className="nav-textlink" id="nav-homelink">
                                    &gt; Time Machine
                                </Link> 
                            : 
                                <Fragment>
                                    <Link to="/" className="nav-textlink" id="nav-homelink">
                                        &gt; Time Machine
                                    </Link>
                                    <Link to="/choose" className="nav-textlink" id="nav-chooselink">
                                        &gt; Swap Traveler
                                    </Link>
                                </Fragment>
                    }
            </Navchunk>
        )
    }
}