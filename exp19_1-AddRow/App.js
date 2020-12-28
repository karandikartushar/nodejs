import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    constructor(props){
          super(props);
          this.state = {rows : []},       
          this.firstName =''
          this.lastName = ''
          this.age = ''
    }
    
    getFirstName =(e) =>{
      this.firstName = e. target.value;
    }
    getLastName =(e)=>{
      this. lastName = e. target.value;
    }
    getAge = (e)=>{
      this. age = e. target.value;
    }
    handleAddRow = () => {
      console.log('add clicked');
      let rowLenght = this.state.rows.length;
      const rows = [...this.state.rows];
      rows [rowLenght] = {
          firstName: this.firstName,
          lastName: this. lastName,
          age: this. age,
          rowIndex: rowLenght
      }
      this.setState({rows :rows})
    }
    deleteRow = selectedRowIndex => e => {
      console.log('remove row', selectedRowIndex);
      let rowCopy = this.state.rows.filter ( (data) => data.rowIndex !== selectedRowIndex)
      let index = 0;
      rowCopy.map( (rowData) =>{
          rowData.rowIndex = index;
          index++;
      });
      console.log('after remove' , rowCopy);
      this.setState({ rows: rowCopy});
    }
    render() {
      return (
       <div>
         Welcome to dynamic table row demo!!!
         <table>
           <tbody>
             <tr>
               <td>First Name</td>
               <td><input type="tex" name='firstName' onChange={this.getFirstName}/></td>
              </tr>
              <tr>
                 <td>Last Name</td>
                 <td><input type="text" name='lastName' onChange={this.getLastName} /></td>
               </tr>
               <tr>
                 <td>Age</td>
                 <td><input type="text" name='age' onChange={this.getAge} /></td>
               </tr>
               <tr>
                 <td colSpan="2">
                   <button name='addbtn' onClick={this.handleAddRow} >Add</button>
                 </td>
               </tr>
           </tbody>
         </table>
         <br/><br/><br/>
         <table>
         <thead>
         <tr>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Age</th>
           <th>Action</th>
           </tr>
         </thead>  
         <tbody>
         {this.state.rows.map( (item, idx) => 
           <tr key={idx}>
           <td>{item. firstName}</td>
           <td>{item.lastName}</td>
           <td>{item. age}</td>
           <td><button onClick={this.deleteRow(idx)}>Delete</button></td>
           </tr>
         )};
         </tbody>
         </table>
       </div>        
       )
   }
}
 
 ReactDOM.render(<App/>,document.getElementById("root"));
