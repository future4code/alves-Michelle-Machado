import React from 'react'
import styled from 'styled-components'

const ContainerFormulario = styled.div`
	display: flex;
    flex-direction:column;
    align-items:center;
    border: 1px solid gray;
    width: 300px;
    height:auto;
    margin-bottom: 30px;

`
const Input = styled.input`
    width:150px;
	margin-right: 5px;
`

const Button = styled.button`
    border-radius: 20px;

`

export function Formulario(props) {
    return <ContainerFormulario>
        <h2>CRIE SEU POST</h2>
        <Input nome={'nome'} placeholder={'Nome:'} onChange={props.onChangeInputNome} />
        <Input nome={'twite'} placeholder={'Escreva seu Twite:'} onChange={props.onChangeInputTwite} />
        <Input nome={'data'} placeholder={'Data de Hoje:'} onChange={props.onChangeInputData} />

        <Button onClick={props.createPost}>Criar Post</Button>
       
    </ContainerFormulario>
}
