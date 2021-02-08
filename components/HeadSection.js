import React from "react";
import styled from "styled-components";

import { useInView } from "react-intersection-observer";

import HeroMain from "./HeroMain";

const HeadSection = ({ onIsTrue, isTrue }) => {
  const { ref, inView } = useInView({
    threshold: 0.95,
  });

  return (
    <StyledHeadSection ref={ref}>
      <HeroMain visible={inView} onIsTrue={onIsTrue} isTrue={isTrue} />
    </StyledHeadSection>
  );
};

const StyledHeadSection = styled.section`
  padding: 3rem;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default HeadSection;
