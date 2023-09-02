import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.styled";


export const GlobalStyles = createGlobalStyle`
  *, 
  *::before
  *::after {  
    box-sizing: border-box;
    padding: 0;
  }

  body {
    background-color: ${myTheme.colors.primary};
  }
`
