import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,  Route, NavLink as Link, browserHistory, Switch} from 'react-router-dom';

import AddEmployee from './AddEmployee.js';
import ViewEmployee from './ViewEmployee.js';
const About = () =>(
  <h2>About</h2>
)

class App extends React.Component{
  render(){
    return(
      <Router history={browserHistory}>
        <div>
          <ul>
            <li><Link to="/addEmployee">Add Employee</Link></li>
            <li><Link to="/viewEmployee/10/Tushar">View Employee</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path="/" component={AddEmployee}/>
            <Route path="/viewEmployee/:id/:name" component={ViewEmployee}/>
            <Route path="/addEmployee" component={AddEmployee}/>
            <Route path="/about" component={About}/>
            <Route render = { () =>{
              return(
                <h1> Not found</h1>
              );
            }
            } />
          </Switch>
        </div>

    </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
