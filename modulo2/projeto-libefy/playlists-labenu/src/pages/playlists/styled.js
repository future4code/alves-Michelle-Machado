import styled from "styled-components";

export const Body = styled.div`
    font-family: "Poppins", "san-serif";
    background-color: #2a2b35;
    width: 100%;
    height: 100vh;
`;

export const Playlists = styled.div`
    width:80vw;
    margin:auto;
    padding:15px;
    background-color: #5a5b62;
`;

export const Container = styled.div `
    display:flex;
    flex-direction:column;
    alignitems:center;
    flex:none;
`

export const Titulo = styled.h1`
    display:flex;
    justify-content:center;
    padding: 20px;
    color: #e1e1e1;
`;

export const CardInput = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 15px;
`

export const Input = styled.input`
    padding: 10px;
    width: 18vw;
    border: none;
`;

export const Button = styled.button`
    padding: 5px 10px;
    background-color: #aaaaaf;
    border-radius: 20px;
    border-color: transparent;
    margin: 8px;
    &:hover { 
        /* quando o usuario passar o mouse no CaracterCard */
        cursor:pointer;  /* o cursor passa a ter uma mãozinha, como num botão  */
        background-color: #fafafc;
        color: #2a2b35;
    }
`

export const CardPlaylist = styled.div `
    display: flex;
    justify-content:space-between;
    padding: 15px;
    color: white;
    font-size: 20px;
    &:hover { 
        /* quando o usuario passar o mouse no CaracterCard */
        cursor:pointer;  /* o cursor passa a ter uma mãozinha, como num botão  */
        background-color: #2a2b35;
    }

`  