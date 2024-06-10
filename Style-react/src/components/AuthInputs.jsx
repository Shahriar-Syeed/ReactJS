import { useState } from "react";
import { styled } from "styled-components";
// import StyledButton from "./Button.jsx";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `;

const TextButton = styled.button`
  color: #f0b322;
  border: none;

  &:hover {
    color: #f0920e;
  }
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-sm p-8 mx-auto rounded shadow-xl bg-gradient-to-b from-stone-700 to-stone-800"
    >
      <div className="flex flex-col gap-2 mb-6 ">
        {/* <ControlContainer> */}
        {/* <p>
          <Label
            $invalid={emailNotValid}
            // className={`label ${emailNotValid ? "invalid" : undefined}`}
          >
            Email
          </Label> */}
        <Input
          label="Email"
          type="email"
          invalid={emailNotValid}
          // style={{
          //   backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db"
          // }}
          // className={emailNotValid ? "invalid" : undefined}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        {/* </p> */}
        {/* <p>
          <Label
            // className={`label ${passwordNotValid ? "invalid" : undefined}`}
            $invalid={passwordNotValid}
          >
            Password
          </Label> */}
        <Input
          label="Password"
          type="password"
          invalid={passwordNotValid}
          // style={{
          //   backgroundColor: passwordNotValid ? "#fed2d2" : "#d1d5db"
          // }}
          // className={passwordNotValid ? "invalid" : undefined}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
        {/* </p> */}
        {/* </ControlContainer> */}
      </div>

      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500 ">Create a new account</button>
        {/* <TextButton type="button">Create a new account</TextButton> */}
        {/* <StyledButton  onClick={handleLogin}>
          Sign In
        </StyledButton> */}
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
