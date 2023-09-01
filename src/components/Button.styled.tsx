import { css, styled } from 'styled-components';

type StyledBtnPropsType = {
        fontSize?: string
        color?: string
        primary?: boolean
        outlined?: boolean
}


export const StyledBtn = styled.button<StyledBtnPropsType>`
           border: none;
           border-radius: 10px;
           /* background-color: #fb3f78; */
           /* background-color: ${props => props.color || '#fb3f78'}; */
           padding: 10px 20px;
           /* color: #fdfaff;f */
           /* font-size: 2rem; */
           font-size: ${props => props.fontSize || '2rem'};
           font-weight: bold;
           
           &:hover {
               background-color: #4053cc;
            }

            ${props => props.outlined && css<StyledBtnPropsType>`
                        border: 2px solid ${props => props.color || '#fb3f78'};
                        color: ${props => props.color || '#fb3f78'};
                        background-color: transparent;

                        &:hover {
                                border-color: #ffee00;
                                color: #4053cc;>
                                background-color: #13cd10;

            }
                `}

            ${props => props.primary && css<StyledBtnPropsType>`
                        background-color: ${props => props.color || '#fb3f78'};
                        color: snow;
                `}

                `