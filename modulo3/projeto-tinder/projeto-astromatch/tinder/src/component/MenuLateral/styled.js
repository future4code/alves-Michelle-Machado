import styled from "styled-components";

export const Body = styled.div `
    width:330px;
    height:100vh;
    background-color:white;
`;

export const Cabecalho = styled.header `
    width:100%;
    height: 110px;
    display:flex;
    align-items:center;
    box-shadow: 1px 4px 45px #5b5b5b;
    background-image: linear-gradient(to right, #68164f, #2f1668);
`

export const ImagemCabecalho = styled.img `
    width: 60px;
    height:60px;
    border-radius: 50%;
    margin: 0 15px;
`

export const NomeCabecalho = styled.h4`
    color:white;
`

export const Navigation = styled.ul `
    display:flex;
    flex-direction:column;
    /* justify-content:space-evenly; */
   
    weight:300px;
    height:500px;
`

export const Opcoes = styled.li `
    display:flex;
    padding:20px 30px;
    margin-left:10px;
    margin-top:15px;
    margin-bottom: 15px;
    /* border:1px solid; */
    align-items:center;

    &:'active'{
        background-color: #311667;
        ion-icon {
        color: white;
        },

        h4{
        color: white;
        }
    };

    &:hover {
        cursor:pointer;
        background-color: #311667;
        border-top-left-radius:30px;
        border-bottom-left-radius:30px;

        ion-icon {
        color: white;
        },

        h4{
        color: white;
        }
    }
`

export const SimboloOpcoes = styled.span `
    ion-icon {
    font-size: 30px;
    color: #311667;
    margin-right: 10px;

    }

`

export const NomeOpcoes = styled.h4 `
    color: #311667;


`
