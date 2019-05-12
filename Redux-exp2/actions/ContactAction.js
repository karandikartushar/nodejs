import * as action from './ActionType'

export const createContacts = (contact) =>{
console.log('from createContacts action');
  return {
    type : action.CREATE_CONTACT,
    payload: contact
  }
};

export const removeContact =(id) =>{
  return{
    type: action.REMOVE_CONTACT,
    id:id
  }
};
