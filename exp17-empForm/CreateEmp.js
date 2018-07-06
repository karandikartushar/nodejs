import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeForm from './EmployeeForm.js';

class CreateEmp extends React.Component{

  render(){
    return(
      <div>
        <EmployeeForm/>
      </div>
    );
  }
}
ReactDOM.render(<CreateEmp/>,document.getElementById("root"));
