import { styled } from 'styled-components';

export const StyledBtn = styled.button`
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

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  color: #747476;
  background-color: yellow;
`

