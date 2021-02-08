import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { mediaQueries } from "../styles/mediaQueries.js";

const ProjectMobile = ({ source, altText }) => {
  return (
    <ProjectImageContainer>
      <StyledProjectMobile
        src={source}
        alt={altText}
        width={650}
        height={770}
        layout="responsive"
      />
    </ProjectImageContainer>
  );
};

const ProjectImageContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: none;
  z-index: 0;
  ${mediaQueries("aboutMediaS")`
    display:block;
  `};
`;

const StyledProjectMobile = styled(Image)`
  display: none;
`;

export default ProjectMobile;
