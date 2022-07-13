import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
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
        .then((res) =>{
            console.log("Foi um sucesso", res.data)
            localStorage.setItem('token', res.data.token)
            navigate("/newTrip")
        })
        .catch((err) => {
            console.log("Deu ruim", err.response)
        })
    }

    return (
        <div>

            <input
                placeholder="Email"
                type={"email"}
                onChange={onChangeEmail} 
            />

            <input
                placeholder="Password"
                type={"password"}
                onChange={onChangePassword} 
            />

            <button onClick={Login}>Enviar</button>
        </div>
    )
}
