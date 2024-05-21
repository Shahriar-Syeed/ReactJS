import React, { useState } from "react";
import "./UseState.css";

export default function UseState() {
 

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    loggedIn: false,
    
  });

  console.log(formData)

  function handleSelect() {
    setFormData({ ...formData, email : "gdhgs s", password: "1234", loggedIn: true});
  }
  return (
    <>
      <div id="app">
        <h1>User Login</h1>
        <p>
          <label>Email</label>
          {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
          <input type="email" />
        </p>

        <p>
          <label>Password</label>
          {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
          <input type="password" />
        </p>

        <p id="actions">
          <button onClick={handleSelect}>Login</button>
        </p>
      </div>
       <div class="extra">
    <h4>{formData.email}</h4>
    <h5>{formData.password}</h5>
    <h6>{formData.loggedIn}</h6>
    </div>
    </>
  );
}
