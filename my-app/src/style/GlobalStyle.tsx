import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

const DefinedGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-weight: 300;
    font-family: sans-serif;
    color : ${props => props.theme.white.darker};
    background-color: #000;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const GlobalStyle = () => {
  return (
    <>
      <Reset />
      <DefinedGlobalStyle />
    </>
  );
};

export default GlobalStyle;
