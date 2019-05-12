export default function(state={},action){
console.log('from createContacts reducer--->',action);
  switch (action.type) {
    case 'CREATE_CONTACT':
      return[
        ...state,
        Object.assign({}, action.payload)];
      break;
    case 'REMOVE_CONTACT':
      return state.filter((contact) => contact.id !== action.id);
    break;
  }
  return state;
}

