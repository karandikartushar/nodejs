import React from 'react';
import ReactDOM from 'react-dom';

const dropdownData= ['Add','Update','Select','Delete'];
let firsrName="Tushar";
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      selectedValue:'Add',
      companyName:'Maxima',
      lastName:"Karandikar"
    }
    //this.printData1 = this.printData1.bind(this);
  }
  printData(){
    console.log('from printData',this.state.companyName);
    dropdownData.map( data =>{
             console.log('printData',data);
    })
  }
  clickMe(){
    console.log('Click me');
  }
  clickMe1(){
    console.log('Click me',this.state.companyName);
    console.log('Click me',firsrName);// constant defined before class only accessable in render method
  }
  clickMe2 () {
    //let dd = this.state.companyName;
    console.log('Click me-2');
    //console.log('Click me-2',this.firsrName);// constant defined before class only accessable in render method
  }
  render(){

    return(
      <div>
        this is normal function call, usgin it's own variable:{this.printData()}
        <button onClick={this.clickMe()}>Click invalid</button>
        <button onClick={this.clickMe1.bind(this)}>ClickMe valid1</button>
        <button onClick={this.clickMe2}>ClickMe invalid-2</button>
        <button onClick={()=>{this.setState({lastName:"Karan"})}}>ClickMe valid-21</button>
          {dropdownData.map(data =>
            <h4>{data}</h4>
          )}
          {firsrName}
          <br/>
          {this.state.lastName}
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById("root"));
