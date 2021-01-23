import React, { useState } from "react";
import styled, { css } from "styled-components";

import { motion, useTransform, useViewportScroll } from "framer-motion";
import { mediaQueries } from "../styles/mediaQueries.js";

import theme from "../styles/theme";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const [isActive, setIsActive] = useState(false);

  const { scrollYProgress } = useViewportScroll();

  const scrollAnimation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [2000, 1500, 0]
  );

  return (
    <ContactSectionContainer id="contact">
      <ContactContainer
        // style={{ y: scrollAnimation }}
        transition={{ ease: "easeIn" }}
      >
        <ContactImgContainer>
          <ContactImg src="/contact.svg" />
          <ContactImgMobile src="/contact-mobile.png" isActive={isActive} />
        </ContactImgContainer>
        <ContactForm isActive={isActive} setIsActive={setIsActive} />
        <MailIcon
          width="185"
          height="114"
          viewBox="0 0 185 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setIsActive(true)}
          isActive={isActive ? true : false}
        >
          <g id="mail-icon">
            <path
              id="path1"
              d="M2 15C2 7.8203 7.8203 2 15 2H170C177.18 2 183 7.8203 183 15V99C183 106.18 177.18 112 170 112H15C7.82029 112 2 106.18 2 99V15Z"
              stroke="white"
              strokeWidth="3"
            />
            <path
              id="path2"
              d="M83.1425 83.6198C88.3747 87.4279 95.4594 87.4512 100.717 83.6774L176.628 29.1855C188.468 20.6864 182.456 2 167.881 2H17.0996C2.57514 2 -3.47073 20.5808 8.27266 29.1279L83.1425 83.6198Z"
              stroke="white"
              strokeWidth="3"
            />
          </g>
        </MailIcon>
      </ContactContainer>
    </ContactSectionContainer>
  );
};

const MailIcon = styled.svg`
  display: none;
  position: absolute;
  width: 10rem;
  top: 33%;
  transition: scale 0.1s ease;
  overflow: visible;

  &:hover {
    & #path1,
    & #path2 {
      stroke: ${theme.colors.yellow};
      transform-origin: center;
      transform: scale(1.1);
    }
  }
  ${mediaQueries("tabletS")`
    display: block;
    
    
  `};
  ${mediaQueries("mobileM")`
      bottom : 40rem
  `};

  ${(props) =>
    props.isActive &&
    css`
      display: none !important;
    `}
`;

const ContactSectionContainer = styled.section`
  background-color: black;
  padding: 0rem 3rem 3rem;
  overflow: hidden;

  ${mediaQueries("aboutMediaS")`
     padding: 0rem 1rem 1rem
  `}
`;
const ContactContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;
  position: relative;
  min-height: 60rem;
`;

const ContactImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries("desktopS")`
    width: 50rem
    
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
    
  `};
  ${(props) =>
    props.isActive &&
    css`
      display: none !important;
    `}
`;

export default ContactSection;
