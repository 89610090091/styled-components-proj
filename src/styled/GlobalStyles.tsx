import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  *, 
  *::before
  *::after {  
    box-sizing: border-box;
    padding: 0;
    
  }

  body {
    background-color: #3a3f4a;
  }
`
