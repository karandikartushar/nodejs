import React, { Component } from "react"
import { render } from "react-dom"
import {  Button } from 'react-bootstrap';
import { debounce } from 'lodash'

export class TestMain extends Component {
	constructor (props) {
		super(props)
		this.state = {
            text: ''
        }
	}
    
    debounceEvent(...args) {
        this.debouncedEvent = debounce(...args);
        return e => {
            e.persist();
            return this.debouncedEvent(e);
        };
    }

	handleChange = (e) => {
		this.setState({ text: e.target.value })
	}

    render() {
        return (
            <div>
                <input onChange={this.debounceEvent(this.handleChange, 500)} />
                <textarea value={this.state.text}/>
            </div>
            
        )
    }
}