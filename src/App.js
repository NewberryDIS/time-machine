import React, { useState } from 'react';

import Navbarsm from './navbarsm';
import Chooseone from './choose'
import Choosetwo from './choosetwo'
import Mainone from './main'
import Maintwo from './maintwo'
import Timetravelerone from './timetraveler'
import Timetravelertwo from './timetravelertwo'
import './masonry.css';
import { BrowserRouter as BrowserRouter, Route, withRouter } from "react-router-dom";
import wp from './images/wp.png';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const App = () => {
	const [mode, setMode] = useState(true);
	const toggle = () => setMode(!mode)
	const Main = mode ? Mainone : Maintwo
	const Choose = mode ? Chooseone : Choosetwo
	const Timetraveler = mode ? Timetravelerone : Timetravelertwo
    return (
		<div>
			<Navbarsm handleClick={toggle} />
			<BrowserRouter css={css`background-image: ${wp}`}>
				<Route path="/" exact component={Main} />
				<Route path="/choose" exact component={withRouter(Choose)}/>
				<Route path="/juliaNewberry" component={withRouter(Timetraveler)} />
				<Route path="/blackHawk" component={withRouter(Timetraveler)} />
				<Route path="/errettGraham" component={withRouter(Timetraveler)} />
				<Route path="/amyWingreen" component={withRouter(Timetraveler)} />
				<Route path="/josephWhitehouse" component={withRouter(Timetraveler)} />
				<Route path="/wolfej" component={withRouter(Timetraveler)} />
				<Route path="/deleuze" component={withRouter(Timetraveler)} />
				<Route path="/debord" component={withRouter(Timetraveler)} />
			</BrowserRouter>
		</div>
    );
}
export default App;