import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			count : 0
		}
		this.clickMe = this.clickMe.bind(this);
	};
	clickMe(){
		this.setState({count:this.state.count+1});
	};
	render(){
		return(
			<div>
				<button onClick={this.clickMe}>Click here</button>
				<h4># of click : {this.state.count} </h4>
			</div>
		);
	}
	
}

ReactDOM.render(<App/>,document.getElementById("root"));