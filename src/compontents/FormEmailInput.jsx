import { useState } from "react";
import styled from "styled-components";

const StyledFormEmail = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  background: #d2d2d2;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 50px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
`;

const Error = styled.label`
  width: 100%;
  font-size: 12px;
  line-height: 50px;
  color: red;
`;

const FormEmailInput = ({ label, placeholder, setEmail }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const checkIfEmail = (val) => {
    if (val != "") {
      if (val.includes("@") && val.includes(".")) {
        setEmail(val);
        setErrorMessage("");
      } else {
        setErrorMessage("Invalid Email");
      }
    } else {
      setErrorMessage("");
    }
  };

  return (
    <StyledFormEmail>
      <Label htmlFor="text-input">{label}</Label>
      <Input
        id="text-input"
        type="text"
        placeholder={placeholder}
        onChange={(e) => checkIfEmail(e.target.value)}
      />
      {errorMessage.length > 0 && <Error>{errorMessage}</Error>}
    </StyledFormEmail>
  );
};

export default FormEmailInput;
