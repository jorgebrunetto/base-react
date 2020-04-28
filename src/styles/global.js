import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200i,400,700,900&display=swap');
`;

export default GlobalStyles;
