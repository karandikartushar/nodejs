import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.js';
import Home from './Home.js';
class App extends React.Component{

	render(){
		return(
			<Root>
				<Home></Home>
			</Root>
		);
	}
}
ReactDOM.render(<App/>,document.getElementById("root"));