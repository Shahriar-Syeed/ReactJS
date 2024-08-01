import { useState } from "react";

export default function Login() {
  const [enterEmail, setEnterEmail]= useState('');
  const [enterPassword, setEnterPassword]= useState('');

  function handleSubmit(event){
    event.preventDefault();

    console.log('user email:'+ enterEmail);
  }

  function handleEmail(event){
   setEnterEmail(event.target.value);
  }
  function handlePassword(event){
    setEnterPassword(event.target.value);
   
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={handleEmail} value={enterEmail} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={handlePassword} value={enterPassword} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button" >Login</button>
      </p>
    </form>
  );
}
