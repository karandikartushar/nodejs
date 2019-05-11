import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class EmployeeDetails extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div>
          <h1>{this.props.activeUser.fName} {this.props.activeUser.lName}</h1>
          <h2>{this.props.activeUser.city}</h2>
          <h2>{this.props.activeUser.phNo}</h2>
      </div>
    )
  }

}

function mapStateToProps(state){
  return{
    activeUser:state.activeUser
  }
}
export default connect(mapStateToProps) (EmployeeDetails)
