import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link, hashHistory} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

import Success from './Success.js';
import Info from './Info.js';
import Warn from './Warn.js';

class App extends React.Component{
	successClick(){
		console.log(this.props);
			//this.props.BrowserRouter.push("/Success");
	}
	infoClick(){
			//alert('Info clicked');
	}
	warningClick(){
			//alert('Warning clicked');
	}
	render(){

	return(
			<Router history={hashHistory}>
			<div id="btnContainer">
				<button type="button" className="btn btn-success"><Link to="/success">Success</Link></button>
				<button type="button" className="btn btn-info"><Link to="/info">Info</Link></button>
				<button type="button" className="btn btn-warning"><Link to="/warn">Warning</Link></button>
				<Route exact path="/success" component={Success}/>
				<Route path="/info" component={Info}/>
				<Route path="/warn" component={Warn} histoy={history}/>
			</div>

			</Router>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById("root"));