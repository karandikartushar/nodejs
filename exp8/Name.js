import React from 'react';

class Name extends React.Component{
	render(){
		console.log(this.props.emp);
		return(
			<div>
				{this.props.emp.map( (e,i) =>
					<div key={i}>
					<h3>Your First Name is : {e.firstName} </h3>
					<h3>Your Last Name is : {e.lastName} </h3>
						<ul>
							{e.hobby.map( (hob,i) => <li key={i}>{hob}</li> )}
						</ul>
					</div>
				 )}
				 <h3>Children: {this.props.children}</h3>
			</div>
		)
	}
}

export default Name;
