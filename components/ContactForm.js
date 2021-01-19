import React from "react";
import styled from "styled-components";

import { mediaQueries } from "../styles/mediaQueries.js";

const ContactForm = () => {
  return (
    <ContactFormContainer>
      <StyledContactForm>
        <StyledFormGroup>
          <StyledInput
            type="text"
            name="name"
            id="name"
            required
            autoComplete="off"
          />
          <StyledLabel htmlFor="name">
            <StyledSpan>Name:</StyledSpan>
          </StyledLabel>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledInput
            type="text"
            name="email"
            id="email"
            required
            autoComplete="off"
          />
          <StyledLabel htmlFor="email">
            <StyledSpan>Email:</StyledSpan>
          </StyledLabel>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledTextArea
            rows="7"
            cols="20"
            id="message"
            name="message"
            required
          ></StyledTextArea>
          <StyledLabel htmlFor="message">
            <StyledSpan>Message:</StyledSpan>
          </StyledLabel>
        </StyledFormGroup>
      </StyledContactForm>
    </ContactFormContainer>
  );
};

const ContactFormContainer = styled.div`
  position: absolute;
  top: 26%;
  width: 34rem;

  ${mediaQueries("desktopS")`
    top: 21%;

    width: 30rem
  `}
`;

const StyledContactForm = styled.form`
  font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mediaQueries("desktopXS")`
    font-size : 1.8rem;
  `}
  ${mediaQueries("aboutMedia")`
    font-size : 1.6rem;
  `}
`;
const StyledInput = styled.input`
  font-family: inherit;
  font-size: 2rem;
  background-color: black;
  height: 4rem;
  width: 100%;
  border: 2px solid white;
  border-radius: 20px;
  margin-bottom: 3rem;
  color: white;
  padding: 1.5rem 1.5rem;
  &-webkit-autofill:focus {
    background-color: black;
  }

  &::placeholder {
    font-size: 2rem;
  }

  &:focus {
    outline: none;
    border: 2px solid yellow;
  }
  ${mediaQueries("desktopXS")`
    font-size : 1.8rem;
    &::placeholder {
    font-size: 1.8rem;
  };

  `}
  ${mediaQueries("aboutMedia")`
    font-size : 1.6rem;
    &::placeholder {
    font-size: 1.6rem;
  };

  `}
`;

const StyledTextArea = styled.textarea`
  font-family: inherit;
  font-size: 2rem;
  color: white;
  width: 100%;
  border-radius: 20px;
  border: 2px solid white;
  background-color: black;
  padding: 1.5rem 1.5rem;

  &::placeholder {
    font-size: 2rem;
  }
  &:focus {
    outline: none;
    border: 2px solid yellow;
  }
  &:focus ~ label {
    color: yellow;
  }
  ${mediaQueries("desktopS")`
    font-size : 1.8rem;
    &::placeholder {
    font-size: 1.8rem;
  };
  
  `}
`;

const StyledFormGroup = styled.div`
  width: 100%;
  position: relative;

  & input:focus ~ label,
  & input:valid ~ label {
    top: -1.1rem;
  }
  & input:focus ~ label {
    color: yellow;
  }

  & textarea:focus ~ label,
  & textarea:valid ~ label {
    top: -1.1rem;
  }

  & textarea:focus ~ label {
    color: yellow;
  }
`;

const StyledLabel = styled.label`
  color: white;
  position: absolute;
  left: 1.5rem;
  background-color: black;
  font-weight: bold;
  top: 0.9rem;
  transition: all 0.2s ease;
`;

const StyledSpan = styled.span``;

export default ContactForm;
