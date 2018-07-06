import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name.jsx';
class App extends React.Component{

	render (){
		return (
			<div>
				<Name age="27" />
			</div>
		)

	}
}

ReactDOM.render(<App/>,document.getElementById("root"));