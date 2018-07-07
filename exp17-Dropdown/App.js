import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      selectedValue:"2",
      city:[
        {
          "id":"1",
          "name":"Pune"
        },
        {
          "id":"2",
          "name":"Mumbai"
        },
        {
          "id":"3",
          "name":"Nagpur"
        }
      ]
    }
  }
  onCityChange = (e) =>{
    this.setState({selectedValue:e.target.value});
  }
  render(){
    return(
        <div>
        <select value={this.state.selectedValue} onChange={this.onCityChange}>
          {
            this.state.city.map( (data) =>
              <option value={data.id}>{data.name}</option>
            )
          }
        </select>
        <h3>selectedValue is : {this.state.selectedValue}</h3>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
