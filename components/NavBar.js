import React, { useContext } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.js";
import NavigationContext from "../context/navigation.js";

import { mediaQueries } from "../styles/mediaQueries.js";

import ListLink from "./ListLink.js";

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

const StyledNav = styled.div`
  background-color: transparent;
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 128rem;
  padding: 0 3rem;
  height: 8rem;
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
  width: 100%;
  height: auto;
`;

export default NavBar;
