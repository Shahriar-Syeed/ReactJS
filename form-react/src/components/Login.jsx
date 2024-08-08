import { useRef, useState } from "react";

export default function Login() {
  // const [enterEmail, setEnterEmail]= useState('');
  // const [enterPassword, setEnterPassword]= useState('');
  // const [enteredValue, setEnteredValue]= useState({
  //   email : '',
  //   password : '',
  // });
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const mail = useRef();
  const pass = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    // console.log('enteredValue', enteredValue.email, enteredValue.password);
    const enteredEmail = mail.current.value;
    const enteredPassword = pass.current.value;
    console.log(enteredEmail, enteredPassword);

    const emailIsValid = enteredEmail.includes("@");
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
    console.log("sending http request. . . ");
    // mail.current.value = '';
    // pass.current.value = '';
  }
  // function handleEnteredValue(id, input){
  //   setEnteredValue({
  //     ...enteredValue,
  //     [id] :input,
  //   })

  // }
  // function handleEmail(event){
  //  setEnterEmail(event.target.value);
  // }
  // function handlePassword(event){
  //   setEnterPassword(event.target.value);
  // }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          {/* <input id="email" type="email" name="email" onChange={(event)=>handleEnteredValue('email', event.target.value)} value={enteredValue.email} /> */}
          <input id="email" type="text" name="email" ref={mail} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          {/* <input id="password" type="password" name="password" onChange={(event)=>handleEnteredValue('password', event.target.value)} value={enteredValue.password} /> */}
          <input id="password" type="password" name="password" ref={pass} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
