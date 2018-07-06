import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component{

	render(){
		return(
			<div>
				<h3>Hi This text from Root Component</h3>
				<h3>{this.props.children}</h3>
			</div>
		);
	}
}

export default Root;