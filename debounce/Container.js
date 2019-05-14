import React from "react"
import PropTypes from 'prop-types'
import {SecondaryNavigation}from 'ssc-cdt4'

import { Redirect, Route, IndexRedirect,Switch,withRouter } from 'react-router-dom'
import MyNavLandingPage from '../pages/MyNavLandingPage'
import test from '../pages/test'

import classNames from 'classnames'
import header from '../styles/header.css';

const ProfileMenu = [ 
   
] 
const routes=[
    {
        // key: '/summary',
        // title:'Entity Group Summary'
    }
]


class Container extends React.Component {
    constructor(props) {
        super(props)
        
        const defaultKey = props.location.pathname.slice(1)
        this.state =  {
            navTop:false, 
            defaultKey:defaultKey?defaultKey:'summary'
        }
    }
    componentWillReceiveProps(nextProps) {
        const defaultKey = nextProps.location.pathname.slice(1)
        this.setState( {defaultKey:defaultKey?defaultKey:'summary'})
      }
    selectMenu = (e) => {
        this.props.history.push(`${e.key}`)
    }
    render() {
        const {children} = this.props 
        const {defaultKey} = this.state 
        
        return ( 
        	<div> 
                <Switch>
            		<Route path="/" exact component={MyNavLandingPage} />
                    <Route path="/test" component={test} />
                </Switch>
            </div > 
        )
    }
}

Container.propTypes =  {
    children:PropTypes.node, 
    router:PropTypes.object, 
    location:PropTypes.object,
    history:PropTypes.any
}

Container.contextTypes = {
    router: PropTypes.object
}
export default withRouter(Container)