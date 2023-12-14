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

const Select = styled.select`
  width: 100%;
  padding: 8px;
`;

const Error = styled.label`
  width: 100%;
  font-size: 12px;
  line-height: 50px;
  color: red;
`;

const FormSelectOption = ({ label, setSelectOption }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = useState("");

  const selectedOption = (val) => {
    alert(val);
    if (val != "") {
      setValue(val);
      setSelectOption(val);
      setErrorMessage("");
    } else {
      setErrorMessage("Select an Option");
    }
  };

  return (
    <StyledFormInput>
      <Label htmlFor="text-input">{label}</Label>
      <Select
        name="selopt"
        defaultValue={value}
        value={value}
        onChange={(e) => selectedOption(e.target.value)}
      >
        <option value=""></option>
        <option value="Option A">Option A</option>
        <option value="Option B">Option B</option>
      </Select>
      {errorMessage.length > 0 && <Error>{errorMessage}</Error>}
    </StyledFormInput>
  );
};

export default FormSelectOption;
