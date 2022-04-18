import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Slider = styled.div`
  position: relative;
  height: 30rem;
  overflow: hidden;
`;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
  position: absolute;
  width: 100%;
  padding: 0 8rem;
`;

export const Box = styled(motion.div)<{ bgphoto: string }>`
  background-image: url(${props => props.bgphoto});
  background-size: cover;
  background-position: center center;
  height: 20rem;
  font-size: 2.5rem;
  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }

  &:last-child {
    transform-origin: center right;
  }
`;

export const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${props => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;

  h4 {
    text-align: center;
    font-size: 2rem;
  }
`;
