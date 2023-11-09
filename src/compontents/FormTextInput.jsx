import styled from "styled-components";
import { useState } from "react";

const StyledFormInput = styled.div`
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

const FormTextInput = ({ label, placeholder, setOnlyText }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const regex = /^[a-zA-Z]+$/;

  const checkIfText = (val) => {
    if (val != "") {
      if (regex.test(val)) {
        setOnlyText(val);
        setErrorMessage("");
      } else {
        setErrorMessage("The value entered must only be alphabets");
      }
    } else {
      setErrorMessage("");
    }
  };

  return (
    <StyledFormInput>
      <Label htmlFor="text-input">{label}</Label>
      <Input
        id="text-input"
        type="text"
        placeholder={placeholder}
        onChange={(e) => checkIfText(e.target.value)}
      />
      {errorMessage.length > 0 && <Error>{errorMessage}</Error>}
    </StyledFormInput>
  );
};

export default FormTextInput;
