import { css, styled } from 'styled-components';

type StyledBtnPropsType = {
    fontSize?: string
    color?: string
    primary: boolean
    outlined: boolean
}


export const StyledBtn = styled.button<StyledBtnPropsType>`
           border: none;
           border-radius: 10px;
           /* background-color: #fb3f78; */
           /* background-color: ${props => props.color || '#fb3f78'}; */
           padding: 10px 20px;
           /* color: #fdfaff; */
           font-size: ${props => props.fontSize};
           font-weight: bold;
           
           &:hover {
               background-color: #0015ff;
            }

            ${props => props.outlined && css<StyledBtnPropsType>`
                    border: 2px solid ${props => props.color || '#fb3f78'};
                    color: ${props => props.color || '#fb3f78'};
                    background-color: transparent;
            
            ${props => props.primary && css<StyledBtnPropsType>`
                    background-color: ${props => props.color || '#fb3f78'};
                    color: #a58484; 
            `}


                                                                                
            // outline / example 
            /* border: 2px solid ${props => props.color || '#fb3f78'};
            color: ${props => props.color || '#fb3f78'};
            background-color: transparent; */

            // primety / example
            /* background-color: ${props => props.color || '#fb3f78'};
            color: snow; */
`


