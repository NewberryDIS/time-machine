import React from 'react';
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import styled from "@emotion/styled";
import { Travelers } from '../components/data';
import { Link } from "gatsby"
// images

import Navbar from '../components/navbar';
import amyWingreen from '../images/tm-amyWingreen.png';
import blackHawk from '../images/tm-blackHawk.png';
import errettGraham from '../images/tm-errettGraham.png';
import josephWhitehouse from '../images/tm-josephWhitehouse.png';
import juliaNewberry from '../images/tm-juliaNewberry.png';
import jhMagee from '../images/tm-jhMagee.png';
import eraBellThompson from '../images/tm-eraBellThompson.png';
import wolfej from '../images/wolfej.png';
import debord from '../images/debord.png';
import deleuze from '../images/deleuze.png';
import wpg from '../images/wp.png';
import wpc from '../images/time-machine-splash-background.jpg';
import counter from '../images/mtm-index-2-t.png';
import Footer from '../components/footer';

import '../components/layout.css'

let breakPoints = [350, 500, 750];
const images = {
    'amyWingreen': amyWingreen,
    'blackHawk': blackHawk,
    'errettGraham': errettGraham,
    'josephWhitehouse': josephWhitehouse,
    'juliaNewberry': juliaNewberry,
    'wolfej': wolfej,
    'deleuze': deleuze,
    'debord': debord,
    'jhMagee': jhMagee,
    'eraBellThompson': eraBellThompson
};
const Masonrycontainer = styled.div`
    width: 80%;
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
    flex-basis: 220px;
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


const Tile = ({ content, colors }) => 
    <div className="tile" css={css`
        background: rgba(255,255,255,0.5);
        background: rgba(${colors.lightrgba}},0.85);
        background-attachment: fixed;
        background-position: center;
        color: ${colors.dark};
        margin: 4px;
        border: 2px solid #27452B;
        flex-basis: 175px;
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
            background: ${colors.light};
            background-attachment: fixed;
            background-position: center;
        }
    `}>
    <img css={css`
            padding: 25px 25px 5px 25px;
            width: 150px;

            filter: drop-shadow(0 0 0.75rem ${colors.dark});
        `} 
        src={images[content['image']]} alt="person"/>
    <h2 css={css`font-family: 'Hepta Slab', serif;`}>{content.name}</h2>
    <p css={css`font-family: 'Lato', sans-serif;`}>{content.desc}</p>
    <Link to={'/' + content.image} css={css`
        text-decoration: none;
        display: block;
        padding: 10px;
        margin: 15px auto;
        background: rgba(${colors.darkrgba},1);
        color:  rgba(${colors.lightrgba},0.75);
        font-family: 'Hepta Slab', serif;   
        font-size: 0.9rem;
        border-radius: 6px; 
        text-transform: uppercase;
        // font-weight: 900;
        -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
        transition: all .15s ease-in-out;
        &:hover {
            background: ${colors.dark};
            color: white;
            -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.95);
            -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.95);
            box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.95);
        }
    `}>Begin your journey</Link>
</div>
export default class Choose extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            colorState: false
        }
    }
    handleClick() {
        this.setState(prevState => ({
            colorState: !prevState.colorState
        }));
    }
    render() {
        const colors = this.state.colorState ? {
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
        return ( <div>
                    <Global styles={css`
                    @import url('https://fonts.googleapis.com/css?family=Hepta+Slab:300,400,700|Lato:300,400,700&display=swap');
                    body {
                        margin: 0;
                        background: url('${this.state.colorState ? wpg : wpc}');
                        // background-position: center;
                        background-size: cover;
                    }
                `}/>
            <Navbar handleClick={this.handleClick} />
            <div className="container" css={css`
                background-image: url('${this.state.colorState ? wpg : wpc}');
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
                            {Travelers.map((content, i) => <Tile className="twistessa" key={i} content={content} colors={colors} colorState={this.state.colorState} />)}
                        </Masonry>
                </Masonrycontainer>
                <Footer />
            </div>
        )
    }
}