import styled from 'styled-components'
import { Fab } from '@mui/material'


export const RecipeListContainer = styled.div `
    display:flex;
    justify-content:space-around;
    flex-direction:row;
    flex-wrap:wrap;
    margin:30px;
`;

export const AddRecipeButton = styled(Fab)`
    position:fixed !important;
    right:20px;
    bottom: 20px;
    z-index:3;
`