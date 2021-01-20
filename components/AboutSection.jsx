import React from "react";
import styled, { css } from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { Para, Heading3 } from "../styles/typography";
import { mediaQueries } from "../styles/mediaQueries.js";
import Badge from "./Badge";

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <AboutSectionContainer ref={ref} id="about">
      <AboutContainer inView={inView}>
        <Container>
          <AboutTextContainer>
            <AboutH3>What i do : </AboutH3>
            <AboutSectionPara>
              I'm a full stack web developer . Use diferent technologies to
              create responsive, powerful and fully custom Websites /
              Applications.
            </AboutSectionPara>
            <AboutH32>Back End:</AboutH32>
            <StyledListContainer>
              <Badge name={"nodejs"} />
              <Badge name={"express"} />
              <Badge name={"mongodb"} />
            </StyledListContainer>
            <AboutH32>Front End:</AboutH32>
            <StyledListContainer>
              <Badge name={"react"} />
              <Badge name={"redux"} />
              <Badge name={"figma"} />
              <Badge name={"webflow"} />
              <Badge name={"bootstrap"} />
            </StyledListContainer>
          </AboutTextContainer>
          <AboutImg src="/about.svg" />
          <AboutImgMobile src="/about-mobile.png" />
        </Container>
      </AboutContainer>
    </AboutSectionContainer>
  );
};

const AboutSectionContainer = styled.section`
  background-color: black;
  padding: 3rem 3rem 3rem 3rem;
`;
const AboutImg = styled(motion.img)`
  max-width: 128rem;
  width: 100%;
  ${mediaQueries("aboutMediaS")`
    display:none;
  `}
`;

const AboutImgMobile = styled.img`
  width: 100%;
  display: none;
  ${mediaQueries("aboutMediaS")`
    display:block;
  `};
`;

const AboutContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;
  opacity: 0;
  transform: translateY(20rem);
  ${({ value }) =>
    value !== "contact"
      ? css`
          transition: all 1s ease-out;
        `
      : css`
          transition: 0s;
        `}
  ${(props) =>
    props.inView &&
    css`
      transform: translateY(0rem);
      opacity: 1;
    `}
    ${mediaQueries("desktopXS")`
      flex-direction : row
  `}
`;

const AboutTextContainer = styled(motion.div)`
  max-width: 50rem;
  color: white;
  margin-left: 3rem;
  width: 100%;
  margin-top: 3rem;
  position: absolute;

  ${mediaQueries("aboutMedia")`
    max-width: 40rem;
    margin-left: 2rem;
  `};

  ${mediaQueries("aboutMediaS")`
    display: none;
  `}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 128rem;
  width: 100%;
`;
const AboutH3 = styled(Heading3)`
  ${mediaQueries("desktopS")`
    font-size: 2.3rem;
  `};

  ${mediaQueries("aboutMedia")`
    font-size: 2rem;
  `};
`;
const AboutH32 = styled(AboutH3)`
  margin-top: 0.5rem;
  ${mediaQueries("aboutMedia")`
    margin-top: .5rem;
  `};
`;

const AboutSectionPara = styled(Para)`
  ${mediaQueries("desktopS")`
    font-size: 1.8rem;
    letter-spacing: 1.2px;
    line-height: 1.4;
  `};
  ${mediaQueries("aboutMedia")`
    font-size: 1.6rem;
    letter-spacing: 1.2px;
    line-height: 1.2;
  `};
`;

const StyledListContainer = styled.div`
  display: flex;
`;

export default AboutSection;
