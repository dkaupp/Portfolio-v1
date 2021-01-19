import React, { useContext } from "react";
import styled from "styled-components";

import { motion, useTransform, useViewportScroll } from "framer-motion";
import { mediaQueries } from "../styles/mediaQueries.js";
import NavigationContext from "../context/navigation.js";

import ContactForm from "./ContactForm";

const ContactSection = () => {
  const { navigationValue: value } = useContext(NavigationContext);

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
        <ContactForm />
      </ContactContainer>
    </ContactSectionContainer>
  );
};

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
    
  `}
`;

export default ContactSection;
