import { useRef, useState } from "react";
import Input from "./Input";
import {isEmail, isNotEmpty, hasMinLength} from '../util/validation'

export default function StateLogin() {
  //   const [enterEmail, setEnterEmail]= useState('');
  //   const [enterPassword, setEnterPassword]= useState('');
  const [enteredValue, setEnteredValue] = useState({
    //   email: {
    //     value:'',
    //     didEdit: false,
    //   },
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

 

  // const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@");
  const emailIsInvalid = didEdit.email && (!isEmail(enteredValue.email) || !isNotEmpty(enteredValue.email));
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValue.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    if (emailIsInvalid || passwordIsInvalid) {
      return;
    }
    setDidEdit(false);

    console.log("html request ...");
    console.log("enteredValue", enteredValue.email, enteredValue.password);
    
    setEnteredValue({
      //   email: {
      //     value:'',
      //     didEdit: false,
      //   },
      email: "",
      password: "",
    });
  }
  function handleEnteredValue(id, input) {
    setEnteredValue({
      ...enteredValue,
      [id]: input,
    });
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [id]: false,
    }));
  }
  function handleInputBlur(identifier) {
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: true,
    }));
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type='email'
          name='email'
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleEnteredValue("email", event.target.value)}
          error={emailIsInvalid && "Please enter a valid email address."}
        />

        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) =>
              handleEnteredValue("email", event.target.value)
            }
            value={enteredValue.email}
          />
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div> */}

        <Input
          label="Password"
          id="password"
          type='password'
          name='password'
          onBlur={() => handleInputBlur("password")}
          onChange={(event) =>
            handleEnteredValue("password", event.target.value)
          }
          value={enteredValue.password}
          error={
            passwordIsInvalid &&  'Please enter a valid password.'
          }
        />

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleEnteredValue("password", event.target.value)
            }
            value={enteredValue.password}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
