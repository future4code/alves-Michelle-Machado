import styled from "styled-components";


export const Container = styled.div `
    display:flex;
    overflow: hidden;
`;

export const ContainerDireita = styled.div `
    width: 50vw;
    height: 100vh;
    display:inline;
    box-shadow: 20px 20px 40px black;
`;

export const ContainerEsquerda = styled.div `
    width: 50vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
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
    outline:0;
`;


export const TextArea = styled.textarea `
    width:300px;
    padding:10px;
    height:150px;
    margin:10px;
    background-color:transparent;
    border: 1px solid #2D3047;
    resize: none;
    outline:0;
`;

export const ContainerInfo = styled.div `
    display:flex;
    margin-top:5px;
    
`;

export const Data = styled.form `
   display:flex;
   cursor: pointer;
   font-family:'Poppins';
   border-radius: 5px;
   height: 30px; 
   line-height: 30px; 
   border: solid 1px #2D3047; 
   outline: none;
   margin-right:10px;

    label{
        font-size:13px;
        padding-left: 18px;
        padding-right: 15px;
        align-items:center;
    }

    input{
        border:none;
        outline: none;
        align-items:center;
    }

`;

export const SelectPlanets = styled.select `
   display:flex;
   border-radius: 5px;
   height: 30px;
   line-height: 30px; 
   border: solid 1px #2D3047; 
   cursor: pointer;
   font-size: 14px;
   font-weight: normal;
   outline: none;
   padding-left: 18px;
   padding-right: 30px;
   transition: all 0.2s ease-in-out;
   margin-left:10px;

`;

export const Button = styled.button `
    padding:5px;
    width:100px;
    margin-top:15px;
    background-color:transparent;
    border: 1px solid #2D3047;
    color: #2D3047;
    &:hover{
        cursor:pointer;
        background-color:#2D3047;
        color:white;
        border: 1px solid white;
    }
    
`;
