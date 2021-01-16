import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { mediaQueries } from "../styles/mediaQueries.js";
import theme from "../styles/theme";
import NavigationContext from "../context/navigation";

const NavBar = () => {
  const { handleNavigation } = useContext(NavigationContext);

  const router = useRouter();

  const handleRouter = (title) => {
    router.replace("/");
    handleNavigation(title);
  };

  return (
    <StyledNav>
      <StyledUl>
        <Link href="#about">
          <StyledLi onClick={() => handleRouter("about")}>About</StyledLi>
        </Link>
        <Link href="#work">
          <StyledLi onClick={() => handleRouter("work")}>Work</StyledLi>
        </Link>
        <Link href="#contact">
          <StyledLi onClick={() => handleRouter("contact")}>Contact</StyledLi>
        </Link>
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

const StyledLi = styled.li`
  font-family: inherit;
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  list-style: none;
  margin: 3rem 0rem 3rem 3rem;
  text-transform: uppercase;
  transition: scale 0.1s ease;
  &:hover {
    color: ${theme.colors.yellow};
    transform: scale(1.1);
  }
  ${mediaQueries("desktopS")`
  font-size: 1.6rem;
 `}
`;

export default NavBar;
