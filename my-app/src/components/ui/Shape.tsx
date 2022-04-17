import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Circle = styled(motion.span)`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;

export const NavCircle = styled(Circle)`
  background-color: ${props => props.theme.red};
  position: absolute;
  bottom: -1.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
