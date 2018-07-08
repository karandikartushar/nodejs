import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './Employee.js';

class App extends React.Component{

  constructor(){
    super();
    console.log('1. App.class consttructor');
    this.state = {
      cityName: 'Mumbai'
    }
  }
  componentWillMount(){
    console.log('2. App.class ComponentWillMount');
  }
  componentDidMount(){
    console.log('4. App.class componentDidMount');
  }
  componentWillReceiveProps(){
    console.log('App.class componentWillReceiveProps');
  }
  shouldComponentUpdate(){
    console.log('App.class shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){
    console.log('App.class componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('App.class componentDidUpdate');
  }
  render(){
    return(
      <div>
          <h1> 3. App.class render method</h1>
          {this.state.cityName}
          <button onClick={()=> {this.setState({cityName:'Indore'})}}> change status</button>
          <Employee firstName='Tushar' lastName='Karandikar' age='23' city='pune'/>
      </div>
    )
  }

}


ReactDOM.render(<App/>, document.getElementById('root'));

