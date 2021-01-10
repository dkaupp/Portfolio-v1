import React from "react";
import styled, { css } from "styled-components";

import theme from "../styles/theme";

const Badge = ({ name, direction }) => {
  return (
    <BadgeContainer direction={direction} color={theme.colors[name]}>
      {name}
    </BadgeContainer>
  );
};

const BadgeContainer = styled.div`
  ${({ color }) =>
    color &&
    css`
      color: ${color};
      border: 1px solid ${color};
      box-shadow: 0 0 10px ${color} inset, 0 0 10px ${color};
      background-color: transparent;
      text-shadow: 0 0 30px ${color};
    `};
  padding: 2px 5px;
  font-size: 1.5rem;
  border-radius: 5px;
  text-shadow: 0 0 12 #88fd61;
  text-transform: uppercase;
  margin: ${(props) =>
    !props.direction ? "1rem 1rem 1rem 0" : "1rem 0rem 1rem 1rem"};
`;

export default Badge;
