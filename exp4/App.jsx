import React from 'react'
import ReactDOM from 'react-dom'
import EmployeeTable from './EmployeeTable.jsx'

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
				},
				{
					"id":"4",
					"firstName":"Bakul",
					"lastName":"Karandikar2"
				}
			]
		}
	}
	render(){
		return (<div>
			<table><tbody>
				{this.state.employee.map( (employee) => <EmployeeTable data = {employee} key={employee.id} /> )}
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
	it can also be i.e. no (employee) but sine we have just 1 parameter it's fine
	{this.state.employee.map( employee => <EmployeeTable data = {employee} key={employee.id} /> )}
	*/
}
ReactDOM.render(<App/>,document.getElementById("root"));

