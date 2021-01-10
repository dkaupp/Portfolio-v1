import React, { useEffect } from "react";
import styled from "styled-components";

import Head2 from "./Head2.js";

const HeroMain = ({ visible, onIsTrue, isTrue }) => {
  useEffect(() => {
    if (visible) onIsTrue(true);
  });

  return (
    <MainContainer>
      <Head2 isTrue={isTrue} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 55rem;
  position: relative;
  overflow: visible;
`;

export default HeroMain;
