import { useState } from "react";
import { styled } from "styled-components";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => (props.$invalid ? "#f87171" : "#6b7280")};
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;
const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  border: 1px solid;
  color: ${(props) => (props.$invalid ? "#ef4444" : "#374151")};
  color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
  background-color: ${(props) => (props.$invalid ? " #fed2d2" : "#d1d5db")};
  background-color: ${({ $invalid }) => ($invalid ? " #fed2d2" : "#d1d5db")};
  border-color: ${(props) => (props.$invalid ? " #f73f3f" : "transparent")};
  border-color: ${({ $invalid }) => ($invalid ? " #f73f3f" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
`;
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
    <div id="auth-inputs">
      <ControlContainer>
        <p>
          <Label
            $invalid={emailNotValid}
            // className={`label ${emailNotValid ? "invalid" : undefined}`}
          >
            Email
          </Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            // style={{
            //   backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db"
            // }}
            // className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Label
            // className={`label ${passwordNotValid ? "invalid" : undefined}`}
            $invalid={passwordNotValid}
          >
            Password
          </Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            // style={{
            //   backgroundColor: passwordNotValid ? "#fed2d2" : "#d1d5db"
            // }}
            // className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <TextButton type="button">
          Create a new account
        </TextButton>
        <StyledButton  onClick={handleLogin}>
          Sign In
        </StyledButton>
      </div>
    </div>
  );
}
