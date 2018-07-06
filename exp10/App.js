import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './Header.js';
class App extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			<h3> Stateless component exp </h3>
			<Header/>
		</div>
		)
	}
}
ReactDOM.render(<App/>,document.getElementById("root"));