import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[]
		}
		this.setMyState=this.setMyState.bind(this);	
	};	
	setMyState(){
		var myState = 'set state ';
		var lData = this.state.data;
		lData.push(myState);lData.push('Tusar');
		this.setState({data:lData});
	};
	render(){
		return(
			<div>
				<button onClick={this.setMyState}>SET STATUS</button>
				<h4>from state : {this.state.data} </h4>
			</div>
		);
	}

}

ReactDOM.render(<App/>,document.getElementById("root"));