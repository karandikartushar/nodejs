import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

import AddUser from './AddUser.js';
import ViewUser from './ViewUser.js';

class App extends React.Component{

	render(){
		return(
			<Router>
			<div>
				<ui>
					<li> <NavLink to="/addUser" activeStyle={{color:"red"}}>Add User</NavLink></li>
					<li> <NavLink to="/viewUser/10" activeStyle={{color:"yellow"}}>View User</NavLink></li>
				</ui>
			<Route path={"/addUser/"} component={AddUser}/>
			<Route path={"/viewUser/:id"} component={ViewUser}/>
			</div>
			</Router>
		);
	}
}
ReactDOM.render(<App/>,document.getElementById("root"));