import React from 'react';
import './App.css';
import { styled } from 'styled-components';
// import { hover } from '@testing-library/user-event/dist/hover';

function App() {
  return (
    <div className="App">

      <Menu>
        <ul>
          <li><a href="">menu item1</a></li>
          <li><a href="">menu item2</a></li>
          <li><a href="">menu item3</a></li>
        </ul>
      </Menu>

      <Box>
        <StyledBtn as={Link} href={'#'}>LinkComponent</StyledBtn>
        <StyledBtn as='a' href={'#'}>Link</StyledBtn>
        <StyledBtn>hello</StyledBtn>
        <SuperButton>SuperButton</SuperButton>
      </Box>

    </div>
  );
}

export default App;

const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fdfaff;
  font-size: 2rem;
  font-weight: bold;
  &:hover {
    background-color: #4053cc;
  }

  &:last-child {
    background-color: green;
  }
`
const Link = styled.a`
  color: #4c9be4;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
`

const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  color: #747476;
  background-color: yellow;
`

const Box = styled.div` // wrapper button
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 20px;

 button {
   cursor: pointer;
 }

${Link} {
  cursor: zoom-in;
}
`
const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  
    li + li {
      margin-left: 20px;
    }

    li > a {
      color: green;
    }
  }
`


