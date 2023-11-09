import "./styles.css";
import FormTextInput from "./compontents/FormTextInput";
import FormEmailInput from "./compontents/FormEmailInput";
import FormSelectOption from "./compontents/FormSelectOption";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body, label, input, form {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: sans-serif;
`;

const Title = styled.label`
  font-size: 24px;
  line-height: 50px;
`;

const StyledForm = styled.form`
  background: #d4d4d4;
  border: 2px solid #d6d6d6;
`;

export default function App() {
  const [onlyText, setOnlyText] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container>
      <GlobalStyle />
      <Title>React Forms - Validations</Title>
      <StyledForm>
        <FormTextInput
          label="Enter only alphabets"
          placeholder="Type any alphabets..."
          setOnlyText={setOnlyText}
        />
      </StyledForm>
      <StyledForm>
        <FormEmailInput
          label="Enter email"
          placeholder="Enter your email"
          setEmail={setEmail}
        />
      </StyledForm>
      <StyledForm>
        <FormSelectOption />
      </StyledForm>
    </Container>
  );
}
