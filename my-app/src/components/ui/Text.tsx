import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 7rem;
  margin-bottom: 2rem;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

export const Overview = styled.p`
  font-size: 2rem;
  width: 50%;
  line-height: 1.5;
`;

export const SliderTitle = styled(Title)`
  font-size: 3.5rem;
  padding: 1rem;
  text-transform: uppercase;
`;

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
