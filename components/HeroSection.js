import React from "react";
import styled from "styled-components";

import { NavBar, MouseIcon, NavBarMobile } from "./";
import { mediaQueries } from "../styles/mediaQueries.js";
import Heading from "../assets/Heading";

const HeadingContainer = styled.div`
  width: 100%;
  max-width: 100rem;
`;

const HeroSectionContainer = styled.section`
  height: 100vh;
  min-height: 600px;
  width: 100%;
  background-color: black;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  ${mediaQueries("tabletL")`
     padding: 1rem 1rem 3rem 1rem
  `}
  ${mediaQueries("mobileL")`
     padding: 1rem .5rem 0rem .5rem
  `}
`;

const Container = styled.div`
  margin-top: -20rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const MouseIconContainer = styled.div`
  position: absolute;
  bottom: 0.5rem;
  width: 3.5rem;

  ${mediaQueries("desktopS")`
    width: 3rem;
    bottom : .5rem;
  `};
  ${mediaQueries("tabletS")`
    width: 3rem;
    bottom : 0;
  `};
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <NavBar />
      <NavBarMobile />
      <Container>
        <HeadingContainer>
          <Heading />
        </HeadingContainer>
      </Container>
      <MouseIconContainer>
        <MouseIcon />
      </MouseIconContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
