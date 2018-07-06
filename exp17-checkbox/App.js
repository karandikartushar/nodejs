import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      checked: false
    }
  }
  toggle(event){
     if(event.target.checked) {
        this.setState({
          checked:true
        });
     }else{
       this.setState({
         checked:false
       });
     }

  }
  render() {
     return (
        <div>
            <input type="checkbox" name="vehicle" onClick={this.toggle.bind(this)}/>Check All <br/><br/><br/>

            <input type="checkbox" name="vehicle1" checked={this.state.checked} value="Bike"/>I have a bike<br/>
            <input type="checkbox" name="vehicle2" checked={this.state.checked} value="Car"/>I have a car <br/>
            <input type="checkbox" name="vehicle3" checked={this.state.checked} value="i20"/>I have a i20 <br/>
            <input type="checkbox" name="vehicle4" checked={this.state.checked} value="i10"/>I have a i10 <br/>
        </div>
     );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
