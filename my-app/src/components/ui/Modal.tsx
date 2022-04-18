import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

export const BigMovie = styled(motion.div)`
  position: absolute;
  width: 50vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${props => props.theme.black.lighter};
  border-radius: 15px;
  overflow: hidden;
`;

export const BigCover = styled.div<{ clickedBgPhoto: string }>`
  width: 100%;
  height: 30rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${props => props.clickedBgPhoto});
  background-position: center center;
  background-size: cover;
`;

export const BigTitle = styled.h3`
  color: ${props => props.theme.white.lighter};
  font-size: 2.5rem;
  padding: 1rem;
  position: relative;
  top: -60px;
  display: inline-block;
`;

export const BigOverview = styled.p`
  padding: 2rem;
  font-size: 1.7rem;
  line-height: 1.5;
  position: relative;
  color: ${props => props.theme.white.lighter};
  top: -40px;
`;

export const BigGenres = styled.ul`
  position: absolute;
  list-style: none;
  right: 1%;
  top: 40%;
  display: flex;
  gap: 1rem;
  li {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    padding: 1rem;
    font-size: 1.5rem;
  }
`;

export const BigHomePage = styled.a`
  position: absolute;
  width: 100%;
  bottom: 10%;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  font-size: 1.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  transition: all 0.2s;
  &:hover {
    color: ${props => props.theme.white.lighter};
  }
`;

export const BigCompanyLogo = styled.ul`
  position: absolute;
  width: 100%;
  bottom: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 1rem;
  background-color: #fff;
  li {
    img {
      width: 10rem;
      height: 5rem;
    }
  }
`;

export const BigRunTime = styled.span`
  display: inline-block;
  position: absolute;
  font-size: 3rem;
`;
