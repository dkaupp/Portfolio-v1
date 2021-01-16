import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import NavigationContext from "../context/navigation";

const ListLink = ({ href, title }) => {
  const { handleNavigation } = useContext(NavigationContext);

  const router = useRouter();

  const handleRouter = (title) => {
    router.replace("/");
    handleNavigation(title);
  };

  return (
    <Link href={href}>
      <StyledLi onClick={() => handleRouter(title)}>About</StyledLi>
    </Link>
  );
};

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

export default ListLink;
