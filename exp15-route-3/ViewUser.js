import React from 'react';
import ReactDOM from 'react-dom';

class ViewUser extends React.Component{

	render(){
		console.log(this.props);
		return(
			<div>
				USer Id  : {this.props.match.params.id}
			</div>
		);
	}
}

export default ViewUser;
