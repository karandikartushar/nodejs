import React from 'react'
import ReactDOM from 'react-dom'
import EmployeeTable from './EmployeeTable.js'

class App extends React.Component{

	constructor(){
		super();
		this.state = {
			employee:[
				{
					"id":"1",
					"firstName":"Tushar",
					"lastName":"Karandikar"
				},
				{
					"id":"2",
					"firstName":"Aayushi",
					"lastName":"Karandikar"
				},
				{
					"id":"3",
					"firstName":"Arya",
					"lastName":"Karandikar"
				}
			]
		}
	}
	render(){
		return (<div>
			<table><tbody>
				{this.state.employee.map( (employee) => <EmployeeTable data = {employee} key={employee.id} />)}
			</tbody></table>
		</div>
		);
	}
	/*
	we can also use
	{this.state.employee.map( (employee, key) => <EmployeeTable data = {employee} key={key} />)} if u don't have specific key but key
	needs to be 2nd parameter
	it can also be, but will get waring for key
	{this.state.employee.map( (employee) => <EmployeeTable data = {employee} />)} if u don't have specific key but key
	https://facebook.github.io/react/docs/lists-and-keys.html#keys
	*/
}
ReactDOM.render(<App/>,document.getElementById("exp4"));

