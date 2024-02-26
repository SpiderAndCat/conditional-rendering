import React, { useState } from "react";
import Form from "./Form.jsx";



function App() {
  // Ternary operator: allows if/else statements to be condensed to an inline expression
  // CONDITION ? DO IF TRUE : DO IF FALSE

  const [userIsRegistered, toggleRegistered] = useState(0);

const currentTime = new Date(2020, 11, 1, 18).getHours();

function toggle() {
  toggleRegistered(!userIsRegistered);
}

  return (
    <div className="container">
        <button id="toggle" onClick={toggle}>useState: Click to toggle <p>userIsRegistered</p></button>
    {userIsRegistered ? <h1>Welcome back!</h1> : <h1>Nice to meet you!</h1>}
    {<Form userIsRegistered={userIsRegistered}/>}
    </div>
  );
}

export default App;
