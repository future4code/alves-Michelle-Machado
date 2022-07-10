import styled from 'styled-components'


export const BarraEnviar = styled.form `
width:75vw;
height: 100px;
display:flex;
justify-content: center;
align-items:center;
position: absolute;
bottom: 0;
background-image: linear-gradient(to right, #68164f, #2f1668 );
opacity:0.8;
`

export const Input = styled.input `
    background-image: linear-gradient(to right, #68164f, #2f1668 ) ;
    padding-left:15px;
    font-size:20px; 
    opacity:0.4;
    border-radius:40px;
    display:flex;
    border:transparent;
    box-shadow:  1px 5px 10px black;
    width:800px;
    height:70px;
    color:white;
    outline: 0;

    ::-webkit-input-placeholder {
    font-size:20px; 
    padding-left:15px;
    color: white;
}

`

export const SimboloEnviar = styled.div `
   ion-icon {
     color: white;
     margin-left:35px;
    &{
    cursor:pointer}
}

`


