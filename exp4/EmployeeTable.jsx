import React from 'react'

class EmployeeTable extends React.Component{

	render(){
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.firstName}</td>
				<td>{this.props.data.lastName}</td>
			</tr>
			);
	}
}
export default EmployeeTable;