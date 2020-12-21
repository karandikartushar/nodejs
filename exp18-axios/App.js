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
        axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const persons = res.data;
        this.setState({ persons : persons});
      })
    }
    render() {
       return (
        <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
       );
    }
 }
 
 ReactDOM.render(<App/>,document.getElementById("root"));
