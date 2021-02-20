import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { mediaQueries } from "../styles/mediaQueries.js";

const ProjectMobileImageContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: none;
  ${mediaQueries("aboutMediaS")`
    display:block;
  `};
`;

const ProjectMobile = ({ source, altText }) => {
  return (
    <ProjectMobileImageContainer>
      <Image
        src={source}
        alt={altText}
        width={1140}
        height={1320}
        layout="responsive"
      />
    </ProjectMobileImageContainer>
  );
};

export default ProjectMobile;
