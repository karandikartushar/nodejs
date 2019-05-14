import React, { Component } from "react"
import { render } from "react-dom"
import {  Button } from 'react-bootstrap';
import { debounce } from 'lodash'
import {  TestMain } from './TestMain';

export default class test extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			show: true
		}
	}
	
	handleToggle = debounce(() => {
		console.log('show--->');
		this.setState(prevState => ({show: !prevState.show}))
	}, 1000)

  render() {
    return (
    		<div>
    			<button onClick={this.handleToggle} >Toggle</button>
					{ this.state.show ? <TestMain /> : null}
        </div>
    )
  }
}
