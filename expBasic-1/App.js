import React from 'react';
import ReactDOM from 'react-dom';
import util, {test1,test2} from './Util.js'

class App extends React.Component{
  constructor(){
    super();
    util();
    test1();
    var names = test2();
    this.state = {
      nameList:names
    }
  }
  render(){
    return(
      <div>
        <h4>wecome to function exp</h4>
        {
          this.state.nameList.map((data)=>
            <h4>{data}</h4>
          )
        }
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById("root"));
