export const selectEmployee = (emp) => {
  console.log('user selected:',emp.fName);
  return{
    type:'USER_SELECTED',
    payload: emp
  }
};
