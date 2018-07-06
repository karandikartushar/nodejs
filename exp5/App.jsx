import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
	
	render (){
		return (
				<div>
					Welcome {this.props.name}
				</div>
		);
	}
}
//world war 1 hindi documentary
//https://www.youtube.com/watch?v=8SsQHHCd1nQ
App.defaultProps = {
		name : "Guest"
	}
ReactDOM.render(<div>
<App/>
<App name="Tushar"/> 
</div>,
document.getElementById("root"));
