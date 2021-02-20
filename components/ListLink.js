import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import NavigationContext from "../context/navigation";
import theme from "../styles/theme";
import { mediaQueries } from "../styles/mediaQueries";

const StyledLi = styled.li`
  color: ${(props) => props.color && props.color};
  font-weight: 700;
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

const ListLink = ({ href, title, onIsActive = null, color = "white" }) => {
  const { handleNavigation } = useContext(NavigationContext);

  const router = useRouter();

  const handleRouter = (title) => {
    router.replace("/");
    handleNavigation(title);
    onIsActive ? onIsActive() : null;
  };

  return (
    <Link href={href}>
      <StyledLi color={color} onClick={() => handleRouter(title)}>
        {title}
      </StyledLi>
    </Link>
  );
};

export default ListLink;
