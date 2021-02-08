import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { mediaQueries } from "../styles/mediaQueries.js";

const Project = ({ source, altText }) => {
  return (
    <ProjectImageContainer>
      <StyledProject
        src={source}
        alt={altText}
        width={800}
        height={620}
        layout="responsive"
      />
    </ProjectImageContainer>
  );
};

const ProjectImageContainer = styled.div`
  width: 100%;
  max-width: 60%;
  padding-top: 2rem;
  ${mediaQueries("aboutMediaS")`
    display:none;
  `}
`;

const StyledProject = styled(Image)``;

export default Project;
