import React from "react";
import styled from "styled-components";

import { motion, useTransform, useViewportScroll } from "framer-motion";

const ContactSection = () => {
  const { scrollYProgress } = useViewportScroll();

  const scrollAnimation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [2000, 1500, 0]
  );

  return (
    <ContactSectionContainer>
      <ContactContainer
        style={{ y: scrollAnimation }}
        transition={{ ease: "easeIn" }}
      >
        <ContactImgContainer>
          <ContactImg src="../static/contact-svg-final .svg" />

          <StyledContactForm>
            <StyledFormGroup>
              <StyledInput
                type="text"
                name="name"
                id="name"
                required
                autoComplete="off"
              />
              <StyledLable htmlFor="name">
                <StyledSpan>Name:</StyledSpan>
              </StyledLable>
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledInput
                type="text"
                name="email"
                id="email"
                required
                autoComplete="off"
              />
              <StyledLable htmlFor="email">
                <StyledSpan>Email:</StyledSpan>
              </StyledLable>
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledTextArea
                rows="7"
                cols="20"
                id="message"
                name="message"
                required
              ></StyledTextArea>
              <StyledLable htmlFor="message">
                <StyledSpan>Message:</StyledSpan>
              </StyledLable>
            </StyledFormGroup>
          </StyledContactForm>
        </ContactImgContainer>
      </ContactContainer>
    </ContactSectionContainer>
  );
};

const ContactSectionContainer = styled.section`
  background-color: black;
  padding: 0rem 3rem 0rem;
`;
const ContactContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactImg = styled(motion.img)`
  max-width: 104rem;
  width: 100%;
`;

const StyledContactForm = styled(motion.form)`
  font-size: 1.8rem;
  max-width: 34rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 25rem;
`;
const StyledInput = styled.input`
  font-family: inherit;
  font-size: 1.8rem;
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
    font-size: 1.8rem;
  }

  &:focus {
    outline: none;
    border: 2px solid yellow;
  }
`;

const StyledTextArea = styled.textarea`
  font-family: inherit;
  font-size: 1.8rem;
  color: white;
  width: 100%;
  border-radius: 20px;
  border: 2px solid white;
  background-color: black;
  padding: 1.5rem 1.5rem;

  &::placeholder {
    font-size: 1.8rem;
  }
  &:focus {
    outline: none;
    border: 2px solid yellow;
  }
  &:focus ~ label {
    color: yellow;
  }
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

const StyledLable = styled.label`
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
