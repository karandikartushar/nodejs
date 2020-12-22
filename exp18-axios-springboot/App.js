import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(){
        super();
        this.state = {
            persons:[]
        }
    }
    componentDidMount(){ console.log('asdasddad');
        axios.get('http://localhost:8090/user/getAllUsers')
      .then(res => {
        const persons = res.data;
        this.setState({ persons : persons});
      })
    }
    render() {
       return (
        <div> 
          <h1>Sample Axios call</h1>
          <ul>
          { this.state.persons.map(person => <li>{person.firstName}</li>)}
          </ul>
        </div>
       );
    }
 }
 
 ReactDOM.render(<App/>,document.getElementById("root"));
