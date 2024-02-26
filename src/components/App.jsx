import React from "react";
import Form from "./Form.jsx";

var userIsRegistered = true

const currentTime = new Date(2020, 11, 1, 18).getHours();

function App() {
  // Ternary operator: allows if/else statements to be condensed to an inline expression
  // CONDITION ? DO IF TRUE : DO IF FALSE

  return (
    <div className="container">
    {<Form userIsRegistered={userIsRegistered}/>}
    </div>
  );
}

export default App;
