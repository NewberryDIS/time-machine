import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
/** @jsx jsx */
import { css, jsx } from '@emotion/core' 
import twicon from '../images/twicon.png';
import paper from '../images/paper.png';

const TwitterButton = () => (
    <div className="wrapper" css={css`
        width: 60px;
        height: 60px;
        position: absolute;
        top: 10px;
        right: 10px;
        border-radius: 8px;
        background-image: url(${paper});
        background: #641818;
        border: 2px solid white;
        &:hover {
            .twittericon img {
                filter: drop-shadow(0 0 0.25rem white);
            }
        }
        img {
            transition: all .15s ease-in-out;
            margin: 0;
        }
    `}>
        <OutboundLink href="http://twitter.com" className="twittericon">
            <img src={twicon} alt="twitter icon"/>
        </OutboundLink>
    </div>
)

export default TwitterButton
