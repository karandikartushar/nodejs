import React from 'react';
import EmployeeComponent from './EmployeeComponent'
import EmployeeDetails from './EmployeeDetails'
export default class Summary extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <h1>User List</h1>
        <EmployeeComponent/>
        <hr/>
        <h2>User Detail</h2>
        <EmployeeDetails/>
      </div>
    )
  }
}
