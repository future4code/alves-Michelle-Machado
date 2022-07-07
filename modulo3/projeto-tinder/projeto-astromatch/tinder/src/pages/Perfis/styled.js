import styled from "styled-components"

export const Body = styled.div `
    width: 100%;
    height: 90vh;
    display:flex;
    justify-content:center;
    align-items:center;

`;

export const Container = styled.div `

    display:flex;
    justify-content:center;
    width: 400px;
    height: 630px;
    border: 1px solid;
    
`;

export const CardContainer = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Imagem = styled.img `
    width:350px;
    height: 450px;
    object-fit:cover;
`;

export const Dados = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    /* background-color:pink */

`;

export const Nome = styled.h1 `
    padding-right: 10px;
    font-weight:bold;
    font-size:25px;
`;

export const Idade = styled.p `
    padding-left: 10px;
    font-size:20px;
`;

export const Bio = styled.p`
    width:350px;
`

export const Botoes = styled.div `
    margin:10px;
    display:flex;
    justify-content:space-between;

`;