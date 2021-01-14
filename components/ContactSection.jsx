import React from "react";
import styled from "styled-components";

import { motion, useTransform, useViewportScroll } from "framer-motion";
import { mediaQueries } from "../styles/mediaQueries.js";

const ContactSection = () => {
  const { scrollYProgress } = useViewportScroll();

  const scrollAnimation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [2000, 1500, 0]
  );

  return (
    <ContactSectionContainer id="contact">
      <ContactContainer
        style={{ y: scrollAnimation }}
        transition={{ ease: "easeIn" }}
      >
        <ContactImgContainer>
          <ContactImg src="/contact.svg" />
          <ContactImgMobile src="/contact-mobile.png" />
        </ContactImgContainer>
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
      </ContactContainer>
    </ContactSectionContainer>
  );
};

const ContactFormContainer = styled.div`
  position: absolute;
  max-width: 34rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 25rem;

  ${mediaQueries("desktopS")`
    top: 22rem;
  `}
`;

const ContactSectionContainer = styled.section`
  background-color: black;
  padding: 0rem 3rem 3rem;
  overflow: hidden;
`;
const ContactContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;
  position: relative;
`;

const ContactImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaQueries("desktopXS")`
     max-width : 60rem
     `}
`;

const ContactImg = styled(motion.img)`
  width: 100%;

  ${mediaQueries("desktopS")`
    display: none;
  `}
`;

const ContactImgMobile = styled(motion.img)`
  max-width: 60rem;
  width: 100%;
  display: none;

  ${mediaQueries("desktopS")`
    display: block;
  `}
`;

const StyledContactForm = styled(motion.form)`
  font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mediaQueries("desktopXS")`
    font-size : 1.8rem;
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
  ${mediaQueries("desktopXS")`
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

const StyledSpan = styled(motion.span)``;

export default ContactSection;
