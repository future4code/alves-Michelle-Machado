import styled from 'styled-components'

export const Body = styled.div `
    width: 75vw;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: #EBEDF0;
    /* border: 1px solid; */

`

export const Container = styled.div `
    width: 60vw;
    height: 120px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin:10px;
     /* border: 1px solid; */
    background-image: linear-gradient(to right, #68164f, #2f1668);
`

export const Imagem = styled.img `
    width: 150px;
    height: 120px;
    top:50%;
    object-fit: cover;

`

export const Dados = styled.div`
    display:flex;
    width:250px;
    text-align:left;
    align-items:center;
    color:white;
    margin-right:20px;
`


export const NomeMatch = styled.h3 `
    margin-right:2px;

`