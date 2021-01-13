import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { NavBar, MouseIcon } from "./";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <NavBar />
      <Container>
        <StyledH1 src="/neon-heading.svg" />
      </Container>
      <MouseIconContainer>
        <MouseIcon />
      </MouseIconContainer>
    </HeroSectionContainer>
  );
};

const HeroSectionContainer = styled.section`
  height: 100vh;
  min-height: 500px;
  width: 100%;
  background-color: black;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Container = styled(motion.div)`
  margin-top: -20rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MouseIconContainer = styled(motion.div)`
  position: absolute;
  bottom: 1.5rem;
  width: 3.5rem;
`;

const StyledH1 = styled(motion.img)`
  width: 100%;
`;

export default HeroSection;
