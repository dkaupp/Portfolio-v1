import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";

import { useRouter } from "next/router";

import theme from "../styles/theme";
import NavigationContext from "../context/navigation";

const NavBar = () => {
  const router = useRouter();

  const { handleNavigation } = useContext(NavigationContext);

  const handleClick = (value) => {
    router.push(`#${value}`);
    return handleNavigation(value);
  };

  console.log(router);

  return (
    <StyledNav>
      <StyledUl>
        {/* <a href="#about" replace> */}
        <StyledLi onClick={() => handleClick("about")}>About</StyledLi>
        {/* </a> */}
        <Link href="#work">
          <StyledLi onClick={() => handleNavigation("work")}>Work</StyledLi>
        </Link>
        <Link href="#contact">
          <StyledLi onClick={() => handleNavigation("contact")}>
            Contact
          </StyledLi>
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
`;

export default NavBar;
