import React from 'react';
const ViewEmployee = (props) =>{
  console.log(props);
  return(

      <div>
        <h3> From view Employee ID({props.match.params.id}) name ({props.match.params.name}) </h3>
      </div>
    );
};

export default ViewEmployee;
