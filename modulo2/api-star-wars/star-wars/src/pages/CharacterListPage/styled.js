import styled from "styled-components"

export const CaracterCard = styled.div `
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    &:hover { /* quando o usuario passar o mouse no CaracterCard */
        cursor:pointer;  /* o cursor passa a ter uma mãozinha, como num botão  */
        background-color: #78cac1;
    }
`