import { useState } from "react";
import Input from "./Input";
import {isEmail, isNotEmpty, hasMinLength} from '../util/validation'

export default function StateLogin() {
  //   const [enterEmail, setEnterEmail]= useState('');
  //   const [enterPassword, setEnterPassword]= useState('');
  const [enteredValues, setEnteredValues] = useState({
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

 

  // const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const emailIsInvalid = didEdit.email && (!isEmail(enteredValues.email) || !isNotEmpty(enteredValues.email));
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    if (emailIsInvalid || passwordIsInvalid) {
      return;
    }
    setDidEdit(false);

    console.log("html request ...");
    console.log("enteredValues", enteredValues.email, enteredValues.password);
    
    setEnteredValues({
      //   email: {
      //     value:'',
      //     didEdit: false,
      //   },
      email: "",
      password: "",
    });
  }
  function handleEnteredValues(id, input) {
    setEnteredValues({
      ...enteredValues,
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
          onChange={(event) => handleEnteredValues("email", event.target.value)}
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
              handleEnteredValues("email", event.target.value)
            }
            value={enteredValues.email}
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
            handleEnteredValues("password", event.target.value)
          }
          value={enteredValues.password}
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
              handleEnteredValues("password", event.target.value)
            }
            value={enteredValues.password}
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
