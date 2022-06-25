import styled from "styled-components";

    export const Body = styled.body`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100vh;
        align-items: center;
        text-align:center;
        background-color:#d4a165;
          
    `;

    export const Container = styled.div`
        display: block;
        /* width: 600px; */
        height:auto;
        padding: 50px;
        border-radius: 20px;
        background-color: #b07d91;
    `;

    export const Button = styled.button`
        width: 120px;
        padding: 5px;
        margin:20px;
        background-color: #342e5c;
        color: 	#d6d5de;
        border-radius: 15px;
        border-color: transparent;
    `

    export const Titulo = styled.h3`
        color: white;
        margin-bottom: 5px;
    `

    export const Input = styled.input`
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        background-color: #aeabbe;
        border-color:transparent;
    `

    export const CardUsuarios = styled.div`
        display: flex;
        justify-content: space-between;
        width:200px;
        color: #342e5c;
        align-items:center;
        padding: 5px;
        border: 1px solid #ffcc33;
        margin:5px;

    `

    export const ButtonDelete = styled.button`
        width: 20px;
        background-color: red;
        border-color: transparent;
        color:white;
        border-radius: 20px;

    `
