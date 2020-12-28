import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { Para } from "../styles/typography";
import Badge from "./Badge";

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <AboutSectionContainer ref={ref}>
      <AboutContainer
        variants={aboutSectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Container>
          <AboutTextContainer>
            <AboutH2>What i do : </AboutH2>
            <AboutSectionPara>
              I'm a full stack web developer . Use diferent technologies to
              create responsive, powerful and fully custom Websites /
              Applications.
            </AboutSectionPara>
            <AboutH22>Front End:</AboutH22>

            <StyledListContainer>
              <Badge name={"react"} />
              <Badge name={"redux"} />
              <Badge name={"figma"} />
              <Badge name={"webflow"} />
              <Badge name={"bootstrap"} />
            </StyledListContainer>
            <AboutH22>Back End:</AboutH22>
            <StyledListContainer>
              <Badge name={"nodejs"} />
              <Badge name={"express"} />
              <Badge name={"mongodb"} />
            </StyledListContainer>
          </AboutTextContainer>
          <AboutImg src="../static/about-svg-final (1).svg" />
        </Container>
      </AboutContainer>
    </AboutSectionContainer>
  );
};

const AboutSectionContainer = styled.section`
  background-color: black;
  padding: 0 3rem 0 3rem;
  height: 100vh;
`;
const AboutImg = styled(motion.img)`
  max-width: 128rem;
  width: 100%;
  position: absolute;
`;

const AboutContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutTextContainer = styled(motion.div)`
  max-width: 50rem;
  color: white;
  margin-left: 3rem;
  width: 100%;
  margin-top: 3rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 128rem;
  width: 100%;
`;
const AboutH2 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.3rem;
`;
const AboutH22 = styled(AboutH2)`
  margin-top: 1rem;
`;

const AboutSectionPara = styled(Para)`
  color: white;
  line-height: 1.5;
  font-size: 2rem;
`;

const aboutSectionVariants = {
  hidden: {
    y: "80rem",
    opacity: 0,
  },
  visible: {
    y: "25rem",
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const StyledListContainer = styled.div`
  display: flex;
`;

export default AboutSection;
