import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {createContacts,removeContact} from './actions/ContactAction';
class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      fName: '',
      lName: '',
      city: '',
      phNo: ''
    }
  }
  createContact = () =>{
    console.log('Inside createContact click');
    let contact = {
      id: Math.random(),
      fName: this.state.fName,
      lName: this.state.lName,
      city: this.state.city,
      phNo: this.state.phNo
    }
    this.props.createContact(contact);
    this.resetForm();
  }
  resetForm(){
    console.log('reset foem');
    this.setState({
      id:'',
      fName: '',
      lName: '',
      city: '',
      phNo: ''
    })
  }
  handleData = (src,e) =>{
    //console.log('src',src);
    switch (src) {
      case 'FIRST_NAME':
        this.setState({fName:e.target.value})
        break;
      case 'LAST_NAME':
        this.setState({lName:e.target.value})
        break;
      case 'CITY':
        this.setState({city:e.target.value})
        break;
      case 'PH_NO':
        this.setState({phNo:e.target.value})
        break;
      }
    }
deleteContact = (id) =>{
  console.log('contact to delete',id);
  this.props.removeContact(id);
}
  render(){
    let showContact = false;
    if(this.props.contacts.length){
      showContact = true
    }
    return(
      <div>
          <h1>Welcome to Redux CRUD Opertation</h1>
          <hr/>
          {showContact && this.props.contacts.map((contact,i) =>{
            return (
              <li key={i}>
              {contact.fName} {contact.lName} {}<input type="button" name='deleteContact' value='Delete' onClick={this.deleteContact.bind(this,contact.id)}></input>
              </li>
            )
          })
          }
          <hr/>
          First Name :<input type="text" name='fName' onChange={this.handleData.bind(this,'FIRST_NAME')} value={this.state.fName}></input><br/>
          Last Name <input type="text" name='lName' onChange={this.handleData.bind(this,'LAST_NAME')} value={this.state.lName}></input><br/>
          City: <input type="text" name='city' onChange={this.handleData.bind(this,'CITY')} value={this.state.city}></input><br/>
          Ph No: <input type="text" name='phNo' onChange={this.handleData.bind(this,'PH_NO')} value={this.state.phNo}></input><br/>
          <input type='button' name='SubmitBtn' value='Submit' onClick={this.createContact}></input>

      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    contacts: state.contacts
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({createContact:createContacts,removeContact:removeContact},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Contact);
