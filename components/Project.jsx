import React from "react";
import styled from "styled-components";

const Project = ({ source }) => {
  return <StyledProject src={source} />;
};

const StyledProject = styled.img`
  max-width: 80rem;
  width: 100%;
  padding-top: 2rem;
`;
export default Project;
