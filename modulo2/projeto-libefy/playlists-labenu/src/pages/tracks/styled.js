import styled from "styled-components";

export const Body = styled.div`
    font-family: "Poppins", "san-serif";
    height: 150vh;
    background-color: #2a2b35;
   
`;

export const Infos = styled.div `
    display: flex;
    flex-direction:column;
    justify-content: center;
`

export const Titulo = styled.h1`
    display:flex;
    justify-content:center;
    padding: 20px;
    color: #e1e1e1;
`;

export const AdicionarMusicas = styled.div `
    display:flex;
    flex-direction:column;
    justify-content: center;
`

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
    margin: 5px;
`;

export const Button = styled.button`
    padding: 5px 10px;
    background-color: #aaaaaf;
    border-radius: 20px;
    border-color: transparent;
    margin: 8px;
    &:hover { 
        cursor:pointer;
        background-color: #fafafc;
        color: #2a2b35;
    }
`;

export const ContainerTracks = styled.div`
    width:80vw;
    margin:auto;
    background-color: #5a5b62;
   
`;

export const SingleTracks = styled.div `
    display: flex;
    justify-content:space-between;
    &:hover { 
        background-color: #fafafc;
        color: #2a2b35;
    }

`

export const InfoTrack = styled.div `
    margin:10px;
    padding: 10px;
    display:flex;
    flex-direction:column;
    
`

export const AudioTrack = styled.div `
    display:flex;
    align-items:center;
    padding: 5px;

`
