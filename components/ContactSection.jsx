import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";

import { motion, useTransform, useViewportScroll } from "framer-motion";
import { mediaQueries } from "../styles/mediaQueries.js";

import theme from "../styles/theme";
import ContactForm from "./ContactForm";
import NavigationContext from "../context/navigation";

const ContactSection = () => {
  const { navigationValue } = useContext(NavigationContext);

  const [isActive, setIsActive] = useState(null);
  const [mailSend, setMailSend] = useState(null);

  const { scrollYProgress } = useViewportScroll();

  const scrollAnimation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [2000, 1500, 0]
  );

  return (
    <ContactSectionContainer id="contact">
      <ContactContainer
        style={{ y: scrollAnimation || 0 }}
        transition={{ ease: "easeIn" }}
      >
        <ContactImgContainer>
          <ContactImg src="/contact.svg" />
          <ContactImgMobile src="/contact-mobile.png" isActive={isActive} />
        </ContactImgContainer>
        <ContactForm
          isActive={isActive}
          setIsActive={setIsActive}
          mailSend={mailSend}
          setMailSend={setMailSend}
        />
        {!mailSend && (
          <MailIcon
            width="185"
            height="114"
            viewBox="0 0 185 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsActive(true)}
            isActive={isActive}
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
        )}
        <MailSendIcon
          width="100"
          height="50"
          viewBox="0 0 100 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          mailSend={mailSend}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.3094 6C20.3634 6 18 8.41926 18 11.3727V39.6273C18 42.5807 20.3634 45 23.3094 45H74.6906C77.6366 45 80 42.5807 80 39.6273V32H94.0021L90.7073 36.4007C90.3763 36.8428 90.4664 37.4695 90.9085 37.8005C91.3506 38.1315 91.9773 38.0414 92.3083 37.5993L97.2492 31L92.3083 24.4007C91.9773 23.9586 91.3506 23.8685 90.9085 24.1995C90.4664 24.5305 90.3763 25.1572 90.7073 25.5993L94.0021 30H80V11.3727C80 8.41926 77.6366 6 74.6906 6H23.3094ZM78 30V16.5287C77.8364 16.6759 77.662 16.8175 77.4766 16.9525L52.3125 35.2816C50.2169 36.808 47.3896 36.7986 45.304 35.2583L20.4853 16.9292C20.3141 16.8028 20.1524 16.6708 20 16.5339V39.6273C20 41.5038 21.4954 43 23.3094 43H74.6906C76.5046 43 78 41.5038 78 39.6273V32H71C70.4477 32 70 31.5523 70 31C70 30.4477 70.4477 30 71 30H78ZM24.0054 8H73.9882C77.8184 8 79.4682 13.0276 76.2991 15.3359L51.135 33.665C49.7452 34.6773 47.8755 34.6711 46.4921 33.6495L21.6734 15.3204C18.53 12.999 20.1884 8 24.0054 8Z"
            fill={theme.colors.primary}
          />
        </MailSendIcon>
      </ContactContainer>
    </ContactSectionContainer>
  );
};

const MailSendIcon = styled.svg`
  display: ${(props) => (props.mailSend ? "block" : "none")};
  position: absolute;
  width: 30rem;
  height: 10rem;
  top: 38%;

  ${mediaQueries("desktopS")`
    width: 15rem;
  height: 10rem;
  top: 34%;
    
  `};

  ${mediaQueries("mobileM")`
      bottom : 40rem
  `};
`;

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
    !props.mailSend &&
    css`
      display: none !important;
    `}
`;

const ContactSectionContainer = styled.section`
  background-color: black;
  padding: 0rem 3rem 3rem;
  overflow: visible;

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
