import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = true;

const currentTime = new Date(2020, 11, 1, 18).getHours();

function App() {
  // Ternary operator: allows if/else statements to be condensed to an inline expression
  // CONDITION ? DO IF TRUE : DO IF FALSE

  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {currentTime > 17 ? <h1>Why are you still working?</h1> : null}
    </div>
  );
}

export default App;
