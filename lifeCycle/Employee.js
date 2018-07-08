import React from 'react';
import ReactDOM from 'react-dom';

export default class Employee extends React.Component{

  constructor(props){
    super(props);
    console.log('4. Employee.class consttructor');
  }
  componentWillMount(){
    console.log('5. Employee.class ComponentWillMount');
  }
  componentDidMount(){
    console.log('7. Employee.class componentDidMount');
  }
  componentWillReceiveProps(){
    console.log('Employee.class componentWillReceiveProps');
  }
  shouldComponentUpdate(){
    console.log('Employee.class shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){
    console.log('Employee.class componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('Employee.class componentDidUpdate');
  }
  render(){
    return(
      <div>
        <h1>6. Employee.class render method!!! {this.props.firstName}</h1>
      </div>
    )
  }
}


