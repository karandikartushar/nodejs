import React from 'react';
import ReactDOM from 'react-dom';
import Summary from './Summary';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import EmployeeReducers from './EmployeeReducer';
import ActiveUserReducer from './EmployeeReducerAction';
import {Provider} from 'react-redux'

const allReducer = combineReducers({
	employee: EmployeeReducers,
	activeUser: ActiveUserReducer
})
const store = createStore(allReducer);
class App extends React.Component{
	constructor(){
		super();

	}
	render(){
		return(
			<div>
				<Provider store={store}>
        	<Summary/>
				</Provider>
			</div>
		);
	}

}

ReactDOM.render(<App/>,document.getElementById("root"));

