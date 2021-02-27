import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";

import NavigationContext from "../context/navigation.js";
import { mediaQueries } from "../styles/mediaQueries.js";
import theme from "../styles/theme.js";

import Logo from "../assets/Logo.js";
import ListLink from "./ListLink.js";
import useScroll from "../hooks/useScroll";

const StyledUl = styled.ul`
  display: flex;
  color: white;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  & li:last-child {
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.white};
    padding: 5px;
    box-shadow: 0 0 5px ${theme.colors.white} inset,
      0 0 5px ${theme.colors.white};
    border-radius: 4px;
    text-shadow: 0 0 10px ${theme.colors.white};
    ${mediaQueries("tabletL")`
      color: black;
      border: 2px solid black;
      box-shadow: none;
      text-shadow: none;
  `}
    :hover {
      border: 2px solid ${theme.colors.yellow};
      box-shadow: 0 0 5px ${theme.colors.yellow} inset,
        0 0 5px ${theme.colors.yellow};
      color: ${theme.colors.yellow};
      text-shadow: 0 0 10px ${theme.colors.yellow};
    }
  }
`;

const PcStyledUl = styled(StyledUl)`
  ${mediaQueries("tabletL")`
    display : none;
  `}
`;

const MenuStyledUl = styled(StyledUl)`
  display: none;
  ${mediaQueries("tabletL")`
     display: flex ;
    flex-direction: column;
    justify-content : center;
    align-items: center;
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

const LogoContainer = styled.div`
  width: 16rem;
  position: relative;
  left: 2.5rem;

  ${mediaQueries("tabletL")`
    left: 1.5rem ;
    width: 12rem;
    margin-top: .5rem
  `}

  ${mediaQueries("mobileM")`
    left: 1rem ;
    width: 12rem;
    margin-top: .5rem
  `}
`;

const MenuButtonContainer = styled.svg`
  width: 45px;
  height: 45px;
  overflow: visible;
  display: none;
  ${mediaQueries("tabletL")`
    display: block ;
  `}
`;

const SlidingMenu = styled.div`
  position: fixed;
  background-color: ${theme.colors.react};
  height: 110%;
  min-height: 500px;
  width: 60%;
  z-index: 3;
  right: 0;
  will-change: transform;
  transform: translateX(100%);
  transition: transform 0.3s linear;
  display: none;

  ${(props) =>
    props.isActive &&
    css`
      transform: translateX(0);
    `}

  ${mediaQueries("tabletL")`
    display: block ;
  `}
`;

const StyledCircle = styled.circle`
  ${(props) =>
    props.isActive &&
    css`
      stroke: black;
    `}
`;

const StyledMenuButton = styled.div`
  margin-left: auto;
  position: fixed;
  right: 2rem;
  z-index: 4;

  transition: top 0.5s ease;
  ${(props) =>
    props.isVisible
      ? css`
          top: 1rem;
        `
      : css`
          top: -6.5rem;
        `}
  ${mediaQueries("mobileM")`
     right: 1rem;
  `}
`;

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.5rem;
  position: fixed;
  top: 0;
  background-color: black;
  z-index: 3;
  transition: all 0.5s ease-out;
  overflow: visible;
  ${(props) =>
    props.isVisible
      ? css`
          top: 0rem;
        `
      : css`
          top: -6.5rem;
        `}
  ${(props) =>
    props.isActive &&
    css`
      opacity: 0;
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

const links = [
  { id: 4, title: "home", href: "/" },
  { id: 1, title: "about", href: "#about" },
  { id: 2, title: "work", href: "#work" },
  { id: 3, title: "contact", href: "#contact" },
];

const NavBar = () => {
  const { handleNavigation } = useContext(NavigationContext);

  const { visible: isVisible } = useScroll();
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => setIsActive(false);

  return (
    <>
      <StyledNavBar isActive={isActive} isVisible={isVisible}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <PcStyledUl>
          {links.map((link) => (
            <ListLink
              color="white"
              key={link.id}
              href={link.href}
              title={link.title}
              onIsActive={handleIsActive}
            />
          ))}
        </PcStyledUl>
      </StyledNavBar>
      <StyledMenuButton
        onClick={() => setIsActive(!isActive)}
        isVisible={isActive ? true : isVisible}
      >
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
        <MenuStyledUl>
          {links.map((link) => (
            <ListLink
              color="black"
              key={link.id}
              href={link.href}
              title={link.title}
              onIsActive={handleIsActive}
            />
          ))}
        </MenuStyledUl>
      </SlidingMenu>
    </>
  );
};

export default NavBar;
