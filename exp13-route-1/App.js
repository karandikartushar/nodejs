import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom';

import Home from './Home.js';
import User from './User.js';
import Header from './Header.js';

class App extends React.Component{

	render(){
		return(
			<Router>
			<div className="App">
			    <div className="container">

			      <nav className="navbar navbar-default">
			        <div className="container-fluid">
			          <div className="navbar-header">
			            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			              <span className="sr-only">Toggle navigation</span>
			              <span className="icon-bar"></span>
			              <span className="icon-bar"></span>
			              <span className="icon-bar"></span>
			            </button>
			            <a className="navbar-brand" href="#">Love to Eat</a>
			          </div>
			          <div id="navbar" className="navbar-collapse collapse">
			            <ul className="nav navbar-nav">
			              <li className="active"><Link to="/">Home</Link></li>
			              <li><Link to="/user">User</Link></li>
			              <li><Link to="/header">Header</Link></li>
			            </ul>
			          </div>
			        </div>
			      </nav>
						<Route exact path="/" component={Home}/>
						<Route path="/user" component={User}/>
						<Route path="/header" component={Header}/>

		    </div>
			</div>

			</Router>
		);
	}
}
ReactDOM.render(<App/>,document.getElementById("root"));