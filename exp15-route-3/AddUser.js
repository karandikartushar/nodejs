import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory } from 'react-router-dom';

class AddUser extends React.Component{
	constructor(){
		super();
		this.state = {
			val : ""
		}
	}
	addUser(){
		//this.setState({val:this.state.val});
		//var tmpVal = this.state.val;
		var tmpURL = '/viewUser/' + this.state.val;
		console.log(tmpURL);
		this.props.history.push(tmpURL);
	}
	getUerId(event){
		//console.log(event.target.value);
		this.setState({val:event.target.value});
	}
	render(){
		return(
			<div>
				User Id : &nbsp;&nbsp;&nbsp; <input type="text" name="userId" onChange={this.getUerId.bind(this)}/>
				<button onClick={this.addUser.bind(this)}>Submit</button>
			</div>
		);
	}
}

export default AddUser;
