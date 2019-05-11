import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectEmployee} from './EmployeeAction'
class EmployeeComponent extends React.Component{

  constructor(){
    super();
  }
  getEmployeeList = () =>{
    return this.props.employee.map((emp) =>{
      return(
        <li
          key={emp.id}
          onClick={() => this.props.employeeAction(emp) }
        >{emp.fName} {emp.lName} </li>
      );
    });
  }
  render(){
    return(
      <div>
          {this.getEmployeeList()}
      </div>
    )
  }

}

function mapStateToProps(state){
  return{
    employee:state.employee
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({employeeAction:selectEmployee},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps) (EmployeeComponent)
