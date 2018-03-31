import React from "react";

const person = (props) => {
    
  return (
     <div>
     <p onClick={props.click}> I am a {props.name} &  I am  {props.age} year odl</p>
     <input type="text" onChange={props.changed}/>
     
     </div>  
    );
};

export default person;
