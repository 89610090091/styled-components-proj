import React from 'react';
import './App.css';
import { styled } from 'styled-components';

function App() {
  return (
    <div className="App">
      <Box>
        <StyledBtn>Hello</StyledBtn>
        <SuperButton>SuperButton</SuperButton>
      </Box>
    </div>
  );
}

export default App;

const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 19px 20px;
  border-radius: 5px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;
`

const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #ffe869;
  color: black;
`

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
