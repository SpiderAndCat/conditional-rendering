import React, { useState } from "react";
import Form from "./Form.jsx";



function App() {
  // Ternary operator: allows if/else statements to be condensed to an inline expression
  // CONDITION ? DO IF TRUE : DO IF FALSE

  const [userIsRegistered, toggleRegistered] = useState(0);

  function toggle() {
    toggleRegistered(!userIsRegistered);
  }

  const currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  setInterval(updateTime, 1000);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">


      <button id="toggle" onClick={toggle}>useState: Click to toggle <p>userIsRegistered</p></button>
      {userIsRegistered ? <h1>Welcome back!</h1> : <h1>Nice to meet you!</h1>}
      <h3>{time}</h3>
      {<Form userIsRegistered={userIsRegistered}/>}
    </div>
  );
}

export default App;
