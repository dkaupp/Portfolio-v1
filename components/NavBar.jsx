import React from "react";
import styled from "styled-components";

import { mediaQueries } from "../styles/mediaQueries.js";

import ListLink from "./ListLink.js";

const links = [
  { id: 1, title: "about", href: "#about" },
  { id: 2, title: "work", href: "#work" },
  { id: 3, title: "contact", href: "#contact" },
];

const NavBar = () => {
  return (
    <StyledNav>
      <StyledUl>
        {links.map((link) => (
          <ListLink key={link.id} href={link.href} title={link.title} />
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
  max-width: 134rem;
  padding: 0 3rem;

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
