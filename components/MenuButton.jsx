import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledMenuButton = styled(motion.div)`
  margin-left: auto;
  position: fixed;
  right: 3rem;
  top: 3vh;
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const Menu = styled(motion.svg)`
  width: 5.5.ptrem;
`;

const MenuButton = () => {
  const [isActive, setIsActive] = useState(false);

  console.log(isActive);

  return (
    <StyledMenuButton onClick={() => setIsActive(!isActive)}>
      <Menu
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="menu">
          <circle
            id="Ellipse 80"
            cx="33"
            cy="33"
            r="32"
            stroke="white"
            strokeWidth="2"
          />
          <motion.line
            id="line3"
            x1="15"
            y1="21"
            x2="51"
            y2="21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            animate={isActive ? { rotate: 45, y: 13 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.line
            id="line2"
            x1="15"
            y1="33"
            x2="51"
            y2="33"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={isActive ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3, delay: 5 }}
          />
          <motion.line
            id="line1"
            x1="15"
            y1="45"
            x2="51"
            y2="45"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            animate={isActive ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </g>
      </Menu>
    </StyledMenuButton>
  );
};

export default MenuButton;
