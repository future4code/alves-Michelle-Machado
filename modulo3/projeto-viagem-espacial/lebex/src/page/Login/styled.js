import styled from "styled-components";


export const Container = styled.div `
    display:flex;
    overflow: hidden;
`

export const ContainerEsquerda = styled.div `
    width: 60vw;
    height: 100vh;
    display:inline;
    box-shadow: 8px 10px 40px black;
`;

export const ContainerDireita = styled.div `
    width: 50vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    /* background-color:#18181E */

`;

export const Imagem = styled.img `
    width: 100%;
    height:100%;
    object-fit:cover;
`;

export const Titulo = styled.h1 `
    font-size: 50px;
    color: #2D3047;

`;

export const Input = styled.input `
    background-color:transparent;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #2D3047;
    margin:10px;
    padding:10px;
    width:300px;
`;

export const Button = styled.button `
    /* border-radius:15px; */
    padding:5px;
    width:70px;
    margin-top:10px;
    background-color:transparent;
    border: 1px solid #2D3047;
    color: #2D3047;
    &:hover{
        cursor:pointer;
        background-color:#2D3047;
        color:white;
        border: 1px solid white;
    }
    

`
