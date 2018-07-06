import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name.js';
class App extends React.Component{
	constructor(){
		super();
		this.state = {
			employee:[
				{
					"id":"1",
					"firstName":"Tushar",
					"lastName":"Karandikar",
					"hobby" :["cricket-1","football-1","TT-1"]
				},
				{
					"id":"2",
					"firstName":"Aayushi",
					"lastName":"Karandikar",
					"hobby" :["cricket-2","football-2","TT-2"]
				},
				{
					"id":"3",
					"firstName":"Arya",
					"lastName":"Karandikar",
					"hobby" :["cricket-3","football-3","TT-3"]
				}
			]
		}
	}

	render(){
		return(
			<div>
				<Name emp={this.state.employee}> From Name Children </Name>
			</div>
		)

	}

}
ReactDOM.render(<App/>,document.getElementById("root"));