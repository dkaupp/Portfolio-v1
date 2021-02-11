import React, { useContext } from "react";
import styled from "styled-components";
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
  ${mediaQueries("tabletL")`
    display: none ;
    
  `}
`;
const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  height: 100%;
`;

export default NavBar;
