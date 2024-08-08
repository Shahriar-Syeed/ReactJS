import { useRef, useState } from "react";

export default function StateLogin() {
//   const [enterEmail, setEnterEmail]= useState('');
//   const [enterPassword, setEnterPassword]= useState('');
  const [enteredValue, setEnteredValue]= useState({
    email : '',
    password : '',
  }); 

//   const mail = useRef();
//   const pass = useRef();

  const emailIsInvalid = enteredValue.email !=='' && !enteredValue.email.includes('@');
 

  function handleSubmit(event){
    event.preventDefault();

    console.log('enteredValue', enteredValue.email, enteredValue.password);
    // const enteredEmail = mail.current.value;
    // const enteredPassword = pass.current.value;
    // console.log(enteredEmail, enteredPassword);
    setEnteredValue({
        email : '',
        password : '',
    });
 
  }
  function handleEnteredValue(id, input){
    setEnteredValue({
      ...enteredValue,
      [id] :input,
    })

  }
//   function handleEmail(event){
//    setEnterEmail(event.target.value);
//   }
//   function handlePassword(event){
//     setEnterPassword(event.target.value);   
//   }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event)=>handleEnteredValue('email', event.target.value)} value={enteredValue.email} />
          {/* <input id="email" type="email" name="email" ref={mail} /> */}
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event)=>handleEnteredValue('password', event.target.value)} value={enteredValue.password} />
          {/* <input id="password" type="password" name="password" ref={pass} /> */}
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button" >Login</button>
      </p>
    </form>
  );
}
