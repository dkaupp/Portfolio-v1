import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { mediaQueries } from "../styles/mediaQueries.js";

const ProjectImageContainer = styled.div`
  width: 100%;
  max-width: 768px;
  padding-top: 2rem;
  ${mediaQueries("aboutMediaS")`
    display:none;
  `}
`;

const Project = ({ source, altText }) => {
  return (
    <ProjectImageContainer>
      <Image
        src={source}
        alt={altText}
        width={1536}
        height={1191}
        layout="responsive"
      />
    </ProjectImageContainer>
  );
};

export default Project;
