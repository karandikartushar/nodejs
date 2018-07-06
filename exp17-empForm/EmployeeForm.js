import React from 'react';
import ReactDOM from 'react-dom';

class EmployeeForm extends React.Component{

  constructor(){
    super();
    this.state ={
      eName: '',
      eAge: '',
      eSalary:''
    }
  }
  createEmployee(event){
    event.preventDefault();
    //console.log(this);
    console.log('Name:',this.state.eName);
    console.log('Age:',this.state.eAge);
    console.log('Salary:',this.state.eSalary);
    this.refs.eName.value='';this.refs.eAge.value='';this.refs.eSalary.value='';
  }
  readData(event){
    //console.log(event.target.name,event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }
  render(){
    return(
      <div>
        <form name='empForm' onSubmit={this.createEmployee.bind(this)}>
          <table><tbody>
            <tr>
              <td>Name</td><td><input type='text' ref='eName' name='eName' value={this.state.eName} onChange={this.readData.bind(this)} /></td>
            </tr>
            <tr>
              <td>Age</td><td><input type='text' ref='eAge' name='eAge' value={this.state.eAge} onChange={this.readData.bind(this)} /></td>
            </tr>
            <tr>
              <td>Salary</td><td><input type='text' ref='eSalary' name='eSalary' value={this.state.eSalary} onChange={this.readData.bind(this)} /></td>
            </tr>
            <tr>
              <td><button type="submit">submit</button></td>
            </tr>
          </tbody></table>
        </form>
      </div>
    );
  }
}
export default EmployeeForm;
