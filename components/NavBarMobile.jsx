import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { mediaQueries } from "../styles/mediaQueries";
import ListLink from "./ListLink.js";
import theme from "../styles/theme";

const StyledMenuButton = styled(motion.div)`
  margin-left: auto;
  position: fixed;
  right: 3rem;
  display: none;
  z-index: 4;
  ${mediaQueries("tabletL")`
    display: block ;
    right: 2rem;
    top: 2rem; 
  `}
  ${mediaQueries("mobileM")`
    display: block ;
    right: 1.5rem;
    top: 1.5rem; 
  `}
`;

const MenuButtonContainer = styled(motion.svg)`
  width: 4.5rem;
  height: 4.5rem;
  overflow: visible;
`;

const StyledNavBar = styled.div`
  /* background-color: black; */
  width: 100%;
  height: 6.5rem;
  position: fixed;
  top: 0;
  display: none;
  z-index: 3;
  transition: opacity 0.4s ease-out;
  overflow: visible;
  ${mediaQueries("tabletL")`
    display: block ;
  `}
  ${(props) =>
    props.isActive &&
    css`
      opacity: 0;
    `}
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const SlidingMenu = styled.div`
  position: fixed;
  background-color: ${theme.colors.react};
  height: 110%;
  min-height: 500px;
  width: 60%;
  z-index: 3;
  right: 0;
  display: none;
  will-change: transform;
  transform: translateX(100%);
  transition: transform 0.3s linear;

  ${(props) =>
    props.isActive &&
    css`
      transform: translateX(0);
    `}

  ${mediaQueries("tabletL")`
    display: block ;
  `}
`;

const BottomLine = styled.line`
  transform-origin: 33px 45px;

  transition: all 0.2s linear;

  ${(props) =>
    props.isActive &&
    css`
      transform: translateY(-11px) rotate(-45deg);
      stroke: black;
    `}
`;

const TopLine = styled.line`
  transform-origin: 33px 21px;

  transition: all 0.2s linear;

  ${(props) =>
    props.isActive &&
    css`
      transform: translateY(13px) rotate(45deg);
      stroke: black;
    `}
`;

const CenterLine = styled.line`
  transition: all 0.2s linear;
  transition-delay: 0.1s;
  ${(props) =>
    props.isActive &&
    css`
      transition-delay: 0s;
      opacity: 0;
    `}
`;

const StyledCircle = styled.circle`
  ${(props) =>
    props.isActive &&
    css`
      stroke: black;
    `}
`;

const links = [
  { id: 1, title: "about", href: "#about" },
  { id: 2, title: "work", href: "#work" },
  { id: 3, title: "contact", href: "#contact" },
];

const NavBarMobile = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => setIsActive(false);

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
            <StyledCircle
              isActive={isActive}
              id="Ellipse 80"
              cx="33"
              cy="33"
              r="32"
              stroke="white"
              strokeWidth="3"
            />
            <TopLine
              id="line3"
              x1="15"
              y1="21"
              x2="51"
              y2="21"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              isActive={isActive}
            />
            <CenterLine
              id="line2"
              x1="15"
              y1="33"
              x2="51"
              y2="33"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              isActive={isActive}
            />
            <BottomLine
              id="line1"
              x1="15"
              y1="45"
              x2="51"
              y2="45"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              isActive={isActive}
            />
          </g>
        </MenuButtonContainer>
      </StyledMenuButton>
      <SlidingMenu isActive={isActive}>
        <StyledUl>
          {links.map((link) => (
            <ListLink
              color="black"
              key={link.id}
              href={link.href}
              title={link.title}
              onIsActive={handleIsActive}
            />
          ))}
        </StyledUl>
      </SlidingMenu>
    </>
  );
};

export default NavBarMobile;
