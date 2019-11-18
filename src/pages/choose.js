import React from 'react';
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import styled from "@emotion/styled";
import { Travelers } from '../components/data';
import { Link } from "gatsby"

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../components/layout.css'

// images
import amyWingreen from '../images/tm-amyWingreen.png';
import blackHawk from '../images/tm-blackHawk.png';
import errettGraham from '../images/tm-errettGraham.png';
import josephWhitehouse from '../images/tm-josephWhitehouse.png';
import juliaNewberry from '../images/tm-juliaNewberry.png';
import jhMagee from '../images/tm-jhMagee.png';
import eraBellThompson from '../images/tm-eraBellThompson.png';
import wolfej from '../images/wolfej.png';
import cgPearce from '../images/tm-cgPearce.png';
import thx from '../images/tm-thx.png';
import raster from '../images/tm-raster.png';
import noone from '../images/noone.png';
import wpc from '../images/time-machine-splash-background.jpg';
import paper from '../images/paper.png';
import { OutboundLink } from 'gatsby-plugin-google-analytics';


let breakPoints = [350, 500, 750, 1050];
const images = {
    'amyWingreen': amyWingreen,
    'blackHawk': blackHawk,
    'errettGraham': errettGraham,
    'josephWhitehouse': josephWhitehouse,
    'juliaNewberry': juliaNewberry,
    'wolfej': wolfej,
    'cgPearce': cgPearce,
    'jhMagee': jhMagee,
    'noone': noone,
    'raster': raster,
    'eraBellThompson': eraBellThompson,
    'thx': thx
};
const Masonrycontainer = styled.div`
    width: 85%;
    margin: auto;
    margin-top: 10px;
    text-align: center;
    padding: 4px;
    color: #efefef;
`
const Masonrycss = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: stretch;
    width: 100%;
    margin: auto;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: stretch;
    flex-basis: 235px;
    // width: 235px;
`
class Masonry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { columns: 1 };
        this.onResize = this.onResize.bind(this);
    }
    componentDidMount() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }
    getColumns(w) {
        return breakPoints.reduceRight((p, c, i) => {
            return c < w ? p : i;
        }, breakPoints.length) + 1;
    }
    onResize() {
        const columns = this.getColumns(this.refs.Masonry.offsetWidth);
        if (columns !== this.state.columns) {
            this.setState({ columns: columns });
        }
    }
    mapChildren() {
        let col = [];
        const numC = this.state.columns;
        for (let i = 0; i < numC; i++) {
            col.push([]);
        }
        return this.props.children.reduce((p, c, i) => {
            p[i % numC].push(c);
            return p;
        }, col);
    }
    render() {
        return (
        <Masonrycss className="masonry" ref="Masonry">
            {this.mapChildren().map((col, ci) => 
                <Column className="column" key={ci}>
                    {col.map((child, i) => 
                        <div key={i}>{child}</div>
                    )}              
                </Column>
                )}
        </Masonrycss>
        )
    }
}

const tileCss = () => css`text-decoration: none;`
const buttoncss = () => css`
    cursor: pointer;
    text-decoration: none;
    display: block;
    padding: 10px;
    margin: 15px auto;
    background: rgba(0,0,0,1);;
    background-image: url(${paper});
    color:  rgba(255,255,255,0.75);
    font-family: 'Hepta Slab', serif;   
    font-size: 0.9rem;
    border-radius: 6px; 
    border: 1px solid transparent;
    text-transform: uppercase;
    // font-weight: 900;
    -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
    transition: all .15s ease-in-out;
    &:hover {
        background: white;
        color: black;
        font-weight: 700;
        border: 1px solid black;
        -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.95);
        -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.95);
        box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.95);
    }

`

const Tile = ({ content }) => 
    <div className="tile" css={css`
    * {text-decoration: none;}
        text-decoration: none;
        display: block;
        background: rgba(255,255,255,0.5);
        // background: rgba(255,255,255,0.85);
        background-attachment: fixed;
        background-position: center;
        color: #000;
        margin: 4px;
        border: 2px solid #27452B;
        flex-basis: 200px;
        border-radius: 6px;
        padding: 10px 10px 25px 10px;
        position: relative;
        transition: all .15s ease-in-out;
        & p {
            padding: 5px 10px 15px 10px;
        }
        &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -1;
            -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
        }
        &:hover {
            background: #fff;
            background-attachment: fixed;
            background-position: center;
            & .tilecap {
                color: rgba(255,255,255,1);
            }
        }
        & h2 {
            font-size: calc(12px + 1.1vw);
            padding: 0;
            margin: 0;
            overflow-wrap: normal;
        }
        & .tilecap, .tilecapthx {
            font-family: 'Lato', sans-serif;
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            font-weight: 700;
            border-radius: 6px 6px 0 0;
            color: rgba(255,255,255,0.75);
            background-image: url(${paper});
        }
        & .tilecap {
            background: ${content.button ? '#284883' : '#641818' };

            border: 2px solid #27452B;
            border-bottom: 2px solid transparent;
        }
        & .tilecapthx {
            color: white;
            background: orange;
            line-height: 52px;
            border: 2px solid #27452B;
            border-bottom: 2px solid transparent;
        }
    `}>
        {content.image === 'thx' ? 
            <div className="tilecapthx">{content.dest}</div>
            : <div className="tilecap">Destination:<br />{content.dest}</div>}
        <img css={css`
                padding: 55px 25px 5px 25px;
                width: 150px;
                filter: drop-shadow(0 0 0.75rem #000);
            `} 
            src={images[content['image']]} alt="person"/>
        <h2 css={css`font-family: 'Hepta Slab', serif;`}>{content.name}</h2>
        <p css={css`font-family: 'Lato', sans-serif;`}>{content.desc}</p>
        <button css={buttoncss} >{content.button ? content.button : 'Begin your journey'}</button>
    </div>

export default class Choose extends React.Component {
    render() {
        return ( <div>
                    <Global styles={css`
                    @import url('https://fonts.googleapis.com/css?family=Hepta+Slab:300,400,700|Lato:300,400,700&display=swap');
                    body {
                        margin: 0;
                        background: url('${wpc}');
                        // background-position: center;
                        background-size: cover;
                    }
                `}/>
            <Navbar />
            <div className="container" css={css`
                background-image: url('${wpc}');
                background-size: cover;
                position: fixed;
                overflow: hidden;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                z-index: -1;
                
            `}></div>
                <Masonrycontainer>
                        <Masonry breakPoints={breakPoints}>
                            {Travelers.map((content, i) => content.button ? <OutboundLink css={tileCss} key={i} href="https://publications.newberry.org/digital/mms-transcribe/index" target="_blank">  <Tile content={content}  /></OutboundLink> : <Link key={i} css={tileCss} to={'/' + content.image}>  <Tile content={content}  /></Link>)}
                        </Masonry>
                </Masonrycontainer>
                <Footer />
            </div>
        )
    }
}