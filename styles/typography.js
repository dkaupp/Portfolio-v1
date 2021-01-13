import styled from "styled-components";
import { motion } from "framer-motion";

import { mediaQueries } from "./mediaQueries.js";

export const Heading2 = styled(motion.h2)`
  font-size: 5rem;
`;

export const Heading3 = styled.h3`
  font-size: 3rem;
`;

export const Para = styled.p`
  font-size: 2rem;
  letter-spacing: 1.4px;
  line-height: 1.5;
  color: white;
  font-weight: 400;
`;

export const Li = styled.li`
  list-style: none;
  font-size: 1.8rem;
  letter-spacing: 1px;
`;
