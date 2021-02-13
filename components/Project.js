import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { mediaQueries } from "../styles/mediaQueries.js";

const Project = ({ source, altText }) => {
  return (
    <ProjectImageContainer>
      <Image
        src={source}
        alt={altText}
        width={1600}
        height={1240}
        layout="responsive"
      />
    </ProjectImageContainer>
  );
};

const ProjectImageContainer = styled.div`
  width: 100%;
  max-width: 768px;
  padding-top: 2rem;
  ${mediaQueries("aboutMediaS")`
    display:none;
  `}
`;

// const StyledProject = styled(Image)`
//   width: 100%;
//   height: 100%;
// `;

export default Project;
