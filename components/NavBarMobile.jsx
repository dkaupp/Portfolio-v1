import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { mediaQueries } from "../styles/mediaQueries";

const StyledMenuButton = styled(motion.div)`
  margin-left: auto;
  position: fixed;
  right: 3rem;
  display: none;
  z-index: 4;
  ${mediaQueries("tabletL")`
    display: block ;
    right: 2rem;
    top: 1rem; 
  `}
`;

const MenuButtonContainer = styled(motion.svg)`
  width: 4.5rem;
  height: 4.5rem;
`;

const StyledNavBar = styled.div`
  background-color: black;
  width: 100%;
  height: 6.5rem;
  position: fixed;
  top: 0;
  display: none;
  z-index: 3;
  transition: opacity 0.4s ease-out;

  ${mediaQueries("tabletL")`
    display: block ;
  `}
  ${(props) =>
    props.isActive &&
    css`
      opacity: 0;
    `}
`;

const SlidingMenu = styled.div`
  position: fixed;
  background-color: red;
  /* background-color: rgba(0, 0, 0, 0.62); */
  height: 110%;
  width: 60%;
  z-index: 3;
  right: 0;
  display: none;
  will-change: transform;
  transform: translateX(100%);
  transition: all 0.3s linear;

  ${(props) =>
    props.isActive &&
    css`
      transform: translateX(0);
    `}

  ${mediaQueries("tabletL")`
    display: block ;
  `}
`;

const NavBarMobile = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <StyledNavBar isActive={isActive} />
      <StyledMenuButton onClick={() => setIsActive(!isActive)}>
        <MenuButtonContainer
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="menu">
            <circle
              id="Ellipse 80"
              cx="33"
              cy="33"
              r="32"
              stroke="white"
              strokeWidth="2"
            />
            <motion.line
              id="line3"
              x1="15"
              y1="21"
              x2="51"
              y2="21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isActive ? { rotate: 45, y: 13 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.line
              id="line2"
              x1="15"
              y1="33"
              x2="51"
              y2="33"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={isActive ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3, delay: 5 }}
            />
            <motion.line
              id="line1"
              x1="15"
              y1="45"
              x2="51"
              y2="45"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isActive ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </g>
        </MenuButtonContainer>
      </StyledMenuButton>
      <SlidingMenu isActive={isActive}></SlidingMenu>
    </>
  );
};

export default NavBarMobile;
