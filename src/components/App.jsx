import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = true;

function App() {
  // Ternary operator: allows if/else statements to be condensed to an inline expression
  // CONDITION ? DO IF TRUE : DO IF FALSE

  return (
    <div className="container">
      
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
