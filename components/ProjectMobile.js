import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { mediaQueries } from "../styles/mediaQueries.js";

const ProjectMobile = ({ source, altText }) => {
  return (
    <ProjectMobileImageContainer>
      <StyledProjectMobile
        src={source}
        alt={altText}
        width={650}
        height={780}
        layout="responsive"
      />
    </ProjectMobileImageContainer>
  );
};

const ProjectMobileImageContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: none;
  ${mediaQueries("aboutMediaS")`
    display:block;
  `};
`;

const StyledProjectMobile = styled(Image)``;

export default ProjectMobile;
