import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import * as C from './styled'
import Banner from '../../assets/galaxia2.jpg'
import axios from 'axios'

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const navigate = useNavigate()

    const Login = () => {

        const infos = {
            "email": email,
            "password": password
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/michelle-machado-alves/login`, infos)
            .then((res) => {
                console.log("Foi um sucesso", res.data)
                localStorage.setItem('token', res.data.token)
                navigate("/admin")
            })
            .catch((err) => {
                console.log("Deu ruim", err.response)
            })
    }

    return (
        <C.Container>

            <C.ContainerEsquerda>
                <C.Imagem src={Banner} />
            </C.ContainerEsquerda>

            <C.ContainerDireita>

                <C.Titulo>LOGIN</C.Titulo>

                <C.Input
                    placeholder="Email"
                    type="email"
                    onChange={onChangeEmail}
                    src={true}
                />

                <C.Input
                    placeholder="Password"
                    type="password"
                    onChange={onChangePassword}
                />

                <C.Button onClick={Login}>Enviar</C.Button>

            </C.ContainerDireita>
        </C.Container>
    )
}
