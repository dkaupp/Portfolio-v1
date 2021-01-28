import React from "react";
import styled, { css } from "styled-components";
import Joi from "joi-browser";

import { mediaQueries } from "../styles/mediaQueries.js";
import useForm from "../hooks/useForm";
import theme from "../styles/theme";
import { sendContactMail } from "../api/mail";

const schema = {
  email: Joi.string().email().min(5).max(30).required().label("Email"),
  name: Joi.string().label("Name"),
  message: Joi.string().required().label("message"),
};

const ContactForm = ({ isActive, setIsActive }) => {
  const { data, handleChange, handleSubmit, errors } = useForm({
    initialData: {
      name: "",
      email: "",
      message: "",
    },
    async onSubmit(data) {
      const result = await sendContactMail(data);
      if (!result.ok) return console.log(rusult);

      return setIsActive(false);
    },
    schema,
  });

  const { name, email, message } = data;

  return (
    <ContactFormContainer isActive={isActive}>
      <StyledContactForm onSubmit={handleSubmit}>
        <StyledFormGroup>
          <NameInput
            type="text"
            name="name"
            id="name"
            required
            autoComplete="off"
            onChange={handleChange}
            value={name}
            errors={errors}
          />
          <StyledLabel htmlFor="name">
            <StyledSpan>Name:</StyledSpan>
          </StyledLabel>
        </StyledFormGroup>
        <StyledFormGroup>
          <EmailInput
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            required
            onChange={handleChange}
            value={email}
            errors={errors}
          />
          <StyledLabel htmlFor="email">
            <StyledSpan>Email:</StyledSpan>
          </StyledLabel>
        </StyledFormGroup>
        <StyledFormGroup>
          <MessageInput
            rows="7"
            cols="20"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
            errors={errors}
            required
          />
          <StyledLabel htmlFor="message">
            <StyledSpan>Message:</StyledSpan>
          </StyledLabel>
        </StyledFormGroup>
        <ButtonContainer>
          {!errors || Object.keys(errors).length === 0 ? (
            <SubmitButton
              onClick={handleSubmit}
              width="100"
              height="50"
              viewBox="0 0 100 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="path1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.3094 6C20.3634 6 18 8.41926 18 11.3727V39.6273C18 42.5807 20.3634 45 23.3094 45H74.6906C77.6366 45 80 42.5807 80 39.6273V32H94.0021L90.7073 36.4007C90.3763 36.8428 90.4664 37.4695 90.9085 37.8005C91.3506 38.1315 91.9773 38.0414 92.3083 37.5993L97.2492 31L92.3083 24.4007C91.9773 23.9586 91.3506 23.8685 90.9085 24.1995C90.4664 24.5305 90.3763 25.1572 90.7073 25.5993L94.0021 30H80V11.3727C80 8.41926 77.6366 6 74.6906 6H23.3094ZM78 30V16.5287C77.8364 16.6759 77.662 16.8175 77.4766 16.9525L52.3125 35.2816C50.2169 36.808 47.3896 36.7986 45.304 35.2583L20.4853 16.9292C20.3141 16.8028 20.1524 16.6708 20 16.5339V39.6273C20 41.5038 21.4954 43 23.3094 43H74.6906C76.5046 43 78 41.5038 78 39.6273V32H71C70.4477 32 70 31.5523 70 31C70 30.4477 70.4477 30 71 30H78ZM24.0054 8H73.9882C77.8184 8 79.4682 13.0276 76.2991 15.3359L51.135 33.665C49.7452 34.6773 47.8755 34.6711 46.4921 33.6495L21.6734 15.3204C18.53 12.999 20.1884 8 24.0054 8Z"
                fill="white"
              />
            </SubmitButton>
          ) : (
            <svg
              onClick={handleSubmit}
              width="100"
              height="50"
              viewBox="0 0 100 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              errors={errors}
            >
              <path
                id="path1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.3094 6C20.3634 6 18 8.41926 18 11.3727V39.6273C18 42.5807 20.3634 45 23.3094 45H74.6906C77.6366 45 80 42.5807 80 39.6273V32H94.0021L90.7073 36.4007C90.3763 36.8428 90.4664 37.4695 90.9085 37.8005C91.3506 38.1315 91.9773 38.0414 92.3083 37.5993L97.2492 31L92.3083 24.4007C91.9773 23.9586 91.3506 23.8685 90.9085 24.1995C90.4664 24.5305 90.3763 25.1572 90.7073 25.5993L94.0021 30H80V11.3727C80 8.41926 77.6366 6 74.6906 6H23.3094ZM78 30V16.5287C77.8364 16.6759 77.662 16.8175 77.4766 16.9525L52.3125 35.2816C50.2169 36.808 47.3896 36.7986 45.304 35.2583L20.4853 16.9292C20.3141 16.8028 20.1524 16.6708 20 16.5339V39.6273C20 41.5038 21.4954 43 23.3094 43H74.6906C76.5046 43 78 41.5038 78 39.6273V32H71C70.4477 32 70 31.5523 70 31C70 30.4477 70.4477 30 71 30H78ZM24.0054 8H73.9882C77.8184 8 79.4682 13.0276 76.2991 15.3359L51.135 33.665C49.7452 34.6773 47.8755 34.6711 46.4921 33.6495L21.6734 15.3204C18.53 12.999 20.1884 8 24.0054 8Z"
                fill="red"
              />
            </svg>
          )}
        </ButtonContainer>
      </StyledContactForm>
    </ContactFormContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  ${mediaQueries("desktopS")`
    margin-top: 1rem;
  `}
`;

const SubmitButton = styled.svg`
  transition: scale 0.1s ease;
  overflow: visible;

  &:hover {
    & #path1 {
      fill: ${theme.colors.yellow};
      transform-origin: center;
      transform: scale(1.1);
    }
  }
`;
const ContactFormContainer = styled.div`
  position: absolute;
  top: 26%;
  width: 34rem;
  ${mediaQueries("desktopS")`
    top: 21%;

    width: 30rem
  `}

  ${mediaQueries("tabletS")`
    transform: scale(0);
    top: 28%;
  `}

${(props) =>
    props.isActive &&
    css`
      transform: scale(1) !important;
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
  ${mediaQueries("desktopS")`
    margin-bottom : 2rem;
  `}

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
  ${mediaQueries("tabletS")`
    border: 2px solid #6DFC3C;
  };

  `}
`;

const EmailInput = styled(StyledInput)`
  ${(props) =>
    props.errors &&
    props.errors.email &&
    css`
      border: 2px solid red;
    `}
`;
const NameInput = styled(StyledInput)`
  ${(props) =>
    props.errors &&
    props.errors.name &&
    css`
      border: 2px solid red;
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
  ${mediaQueries("tabletS")`
    border: 2px solid #6DFC3C;
    
  };

  `}
`;

const MessageInput = styled(StyledTextArea)`
  ${(props) =>
    props.errors &&
    props.errors.message &&
    css`
      border: 2px solid red;
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
