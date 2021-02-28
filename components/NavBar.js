import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";

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

const SlidingMenu = styled.div`
  position: fixed;
  background-color: ${theme.colors.react};
  height: 110vh;
  min-height: 500px;
  width: 60%;
  z-index: 4;
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

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7rem;
  position: fixed;
  top: 0;
  background-color: black;
  z-index: 2;
  transition: top 0.5s ease-out, opacity 0.3s ease-out;
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

const MenuButtom = styled.button`
  display: none;
  cursor: pointer;
  border: 2px solid white;
  background-color: transparent;
  height: 50px;
  width: 50px;
  position: fixed;
  right: 2rem;
  top: 1rem;
  border-radius: 50%;
  z-index: 2000;
  transition: top 0.5s ease-out, border 0.2s;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  & i {
    font-size: 3rem;
  }

  &:active,
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.isActive &&
    css`
      border: 2px solid black;
    `}
  ${(props) =>
    props.isVisible
      ? css`
          top: 1rem;
        `
      : css`
          top: -6.5rem;
        `}

  ${mediaQueries("tabletL")`
    display: block ;
  `}
  ${mediaQueries("mobileM")`
    right: 1rem ;
  `}
`;

const NavIcon = styled.span`
  position: relative;
  margin-top: 1.3rem;
  &::before,
  &::after,
  & {
    width: 3rem;
    height: 2px;
    background-color: white;
    display: inline-block;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }
  &::before {
    top: -0.8rem;
  }
  &::after {
    top: 0.8rem;
  }
  ${(props) =>
    props.isActive &&
    css`
      & {
        background-color: transparent;
      }
      &::before {
        transform: rotate(135deg);
        top: 0;
        background-color: black;
      }
      &::after {
        transform: rotate(-135deg);
        top: 0;
        background-color: black;
      }
    `}

  ${mediaQueries("mobile")`
            margin-top: 2rem;
    `}
`;

const links = [
  { id: 4, title: "home", href: "/" },
  { id: 1, title: "about", href: "#about" },
  { id: 2, title: "work", href: "#work" },
  { id: 3, title: "contact", href: "#contact" },
];

const NavBar = () => {
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
      <MenuButtom
        onClick={() => setIsActive(!isActive)}
        isVisible={isActive ? true : isVisible}
        isActive={isActive}
      >
        <NavIcon isActive={isActive}>&nbsp;</NavIcon>
      </MenuButtom>
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
