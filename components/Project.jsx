import React from "react";
import styled from "styled-components";

import { mediaQueries } from "../styles/mediaQueries.js";

const Project = ({ source }) => {
  return <StyledProject src={source} />;
};

const StyledProject = styled.img`
  max-width: 60%;
  width: 100%;
  padding-top: 2rem;

  ${mediaQueries("aboutMediaS")`
    display:none;
  `}
`;
export default Project;
