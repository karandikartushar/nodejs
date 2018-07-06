import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
			data:[]
		}
  }
  addMe(){
    console.log(this);
    let lData = this.state.data ;
    lData.push(this.refs.fName.value);
    this.setState({data:lData});
    this.refs.fName.value='';
  }

  render(){
    return(
      <div>
        <input type='text' ref='fName'/>
        <button onClick={this.addMe.bind(this)}>Addme</button>
        {
        this.state.data.map( (str,i)=>
            <div key={i}>
              <h3>Your Name is : {str} </h3>
            </div>
        )}
      </div>
    );

  }
}

ReactDOM.render(<App/>,document.getElementById("root"));
