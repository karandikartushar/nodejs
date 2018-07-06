import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

	constructor(){
		super();
	}
	childAge(){
		alert('Age of Child');
	}
	render(){
		return(
			<div>
				<h3>Parent to child function call</h3>

			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById("root"));