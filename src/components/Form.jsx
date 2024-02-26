import React from "react";
import Input from "./Input.jsx";

function Form(props) {
  return (
      <form className="form">
        <Input type="text" placeholder="Username"/>
        <Input type="password" placeholder="Password"/>

        {!props.userIsRegistered && 
          <Input type="password" placeholder="Confirm Password"/>
        }
        {props.userIsRegistered ? 
          <button type="submit">Login</button> : 
          <button type="submit">Register</button>
        }
        
    </form>
  );
}

export default Form;
