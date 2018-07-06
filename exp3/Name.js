import React from 'react'
import ReactDOM from 'react-dom';
import Logo from './Logo.js';

class Name extends React.Component{
	render (){
		return(
			<div>
				<Logo companyName="Maxima"/>
				<h3> Welcome {this.props.firstName} {this.props.lastName} !!!!</h3>
			</div>
		);
	}
}
ReactDOM.render(<Name firstName="Aayushi" lastName="Karandikar"/>,document.getElementById('root'));
