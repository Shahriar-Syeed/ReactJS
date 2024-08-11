
import Input from "./Input";
import {isEmail, isNotEmpty, hasMinLength} from '../util/validation'
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
    const {value:emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, didEdit}=useInput('');
  const emailIsInvalid = didEdit.email && (!isEmail(value.email) || !isNotEmpty(value.email));
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(value.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    if (emailIsInvalid || passwordIsInvalid) {
      return;
    }
    setDidEdit(false);

    console.log("html request ...");
    console.log("value", value.email, value.password);
    
    setvalue({
    
      email: "",
      password: "",
    });
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value ={emailValue}
          error={emailIsInvalid && "Please enter a valid email address."}

        />
        <Input
          label="Password"
          id="password"
          type='password'
          name='password'
          onBlur={() => handleInputBlur("password")}
          onChange={(event) =>
            handleEnteredValue("password", event.target.value)
          }
          value={value.password}
          error={
            passwordIsInvalid &&  'Please enter a valid password.'
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
