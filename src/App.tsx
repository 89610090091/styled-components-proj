import React from 'react';
import './App.css';
import { styled } from 'styled-components';
import { StyledBtn } from './components/Button.styled';
import { myTheme } from './styled/Theme.styled';


function App() {
  return (
    <div className="App">
      <Box>
        {/* <StyledBtn color={'green'} fontSize={'20px'}>hello</StyledBtn>
        <StyledBtn color={'red'} fontSize={'50px'}>hello</StyledBtn> */}
        {/* <StyledBtn fontSize={'50px'}>hello</StyledBtn> */}

        <StyledBtn color={myTheme.colors.primary} btnType={'primary'} active>hello</StyledBtn>
        <StyledBtn color={myTheme.colors.secondary} btnType={'outlined'}>hello</StyledBtn>
        {/* <StyledBtn btnType={'primary'}>hello</StyledBtn>
        <StyledBtn btnType={'outlined'}>hello</StyledBtn> */}
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div` 
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 20px;

 button {
   cursor: pointer;
 }

@media screen and (max-width: 800px) {
  flex-direction: column;
}
`


