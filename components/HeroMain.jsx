import React, { useEffect } from "react";
import styled from "styled-components";

import Head from "./Head.jsx";

const HeroMain = ({ visible, onIsTrue, isTrue }) => {
  useEffect(() => {
    if (visible) onIsTrue(true);
  });

  return (
    <MainContainer>
      <Head isTrue={isTrue} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 55rem;
  position: relative;
`;

export default HeroMain;
