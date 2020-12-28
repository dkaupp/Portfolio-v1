import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import theme from "../styles/theme";

const NavBar = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi> About</StyledLi>
        <StyledLi>Work</StyledLi>
        <StyledLi>Contact</StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  background-color: transparent;
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 134rem;
  padding: 0 3rem;
`;
const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  height: 100%;
`;

const StyledLi = styled(motion.li)`
  font-family: inherit;
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  list-style: none;
  margin: 3rem 0rem 3rem 3rem;
  text-transform: uppercase;
  transition: scale 0.1s ease;
  &:hover {
    color: ${theme.yellow};
    transform: scale(1.1);
  }
`;

export default NavBar;
