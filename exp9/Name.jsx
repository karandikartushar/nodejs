import React from 'react';

class Name extends React.Component{
	constructor(props){
		super();
		//this.age = parseInt(props.age);
		this.state = {
			initialAge : props.age,
			age : parseInt(props.age)
		}
	}
	clickMe(){
		this.setState({
			age: this.state.age + 3
		});
	}
	render(){
		return (
			<div>
			<button onClick={this.clickMe.bind(this)}> Add by 3 </button>
				<h3> Your initial age is {this.state.initialAge} and incremental Age is {this.state.age} </h3>
			</div>
		);
	}
}

export default Name;

