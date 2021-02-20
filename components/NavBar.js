import React, { useContext } from "react";
import styled from "styled-components";

import NavigationContext from "../context/navigation.js";
import { mediaQueries } from "../styles/mediaQueries.js";
import theme from "../styles/theme.js";

import Logo from "../assets/Logo.js";
import ListLink from "./ListLink.js";

const StyledNav = styled.div`
  background-color: transparent;
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 128rem;
  padding: 0 3rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaQueries("tabletL")`
    display: none ;
    
  `}
`;
const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
  & li:last-child {
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.white};
    padding: 5px;
    box-shadow: 0 0 5px ${theme.colors.white} inset,
      0 0 5px ${theme.colors.white};
    border-radius: 4px;
    text-shadow: 0 0 10px ${theme.colors.white};
    :hover {
      border: 2px solid ${theme.colors.yellow};
      box-shadow: 0 0 5px ${theme.colors.yellow} inset,
        0 0 5px ${theme.colors.yellow};
      color: ${theme.colors.yellow};
      text-shadow: 0 0 10px ${theme.colors.yellow};
    }
  }
`;

const links = [
  { id: 1, title: "about", href: "#about" },
  { id: 2, title: "work", href: "#work" },
  { id: 3, title: "contact", href: "#contact" },
];

const NavBar = () => {
  const { handleNavigation } = useContext(NavigationContext);
  return (
    <StyledNav>
      <Logo />
      <StyledUl>
        {links.map((link) => (
          <ListLink
            key={link.id}
            href={link.href}
            title={link.title}
            onClick={() => handleNavigation(link.title)}
          />
        ))}
      </StyledUl>
    </StyledNav>
  );
};

export default NavBar;
