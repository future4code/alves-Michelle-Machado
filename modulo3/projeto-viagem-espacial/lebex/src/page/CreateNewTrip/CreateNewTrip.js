import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import * as C from './styled'
import Galaxy from '../../assets/galaxy.jpg'
import axios from 'axios'

const useProtectedPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            console.log("Não está logado")
            navigate("/login")
        }
    }, [])
}

export const CreateNewTrip = () => {
    const navigate = useNavigate()
    useProtectedPage()

    const [nomeViagem, setNomeViagem] = useState("")
    const [description, setTextArea] = useState("")
    const [date, setDate] = useState("")
    const [planet, setPlanet] = useState("")
    const [duration, setDuration] = useState("")

    const [trip, setTrip] = useState([])

    const onChangeNome = (e) => {
        setNomeViagem(e.target.value)
    }

    const onChangeTextArea = (e) => {
        setTextArea(e.target.value)
    }

    const onChangeData = (e) => {
        setDate(e.target.value)
    }

    const onChangePlanet = (e) => {
        setPlanet(e.target.value)
    }

    const onChangeDuration = (e) => {
        setDuration(e.target.value)
    }

    const CreateTrip = () => {
        const newTrip = {
            "name": nomeViagem,
            "planet": planet,
            "date": date,
            "description": description,
            "durationInDays": duration
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/michelle-machado-alves/trips`, newTrip, {
            headers: {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"
            }
        })
            .then((res) => {
                setTrip(res.data)
                console.log("trip criada")
                navigate(-1)

            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <C.Container>

            <C.ContainerEsquerda>

                <C.Titulo>Cadastrar Viagem</C.Titulo>

                <C.Input
                    placeholder="Nome da Viagem"
                    onChange={onChangeNome}
                    value={nomeViagem} />

                <C.Input
                    placeholder="Duração"
                    onChange={onChangeDuration}
                    value={duration} />

                <C.TextArea
                    onChange={onChangeTextArea}
                    placeholder="Descrição"
                    value={description} />

                <C.ContainerInfo>

                    <C.Data>
                        <label htmlFor="data">Data:</label>
                        <input onChange={onChangeData} type="date" value={date} id="data" name='data'></input>
                    </C.Data>

                    <C.SelectPlanets onChange={onChangePlanet}>

                        <option value="select">Select</option>
                        <option value="Plutão">Plutão</option>
                        <option value="Netuno">Netuno</option>
                        <option value="Urano">Urano</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Marte">Marte</option>
                        <option value="Jupter">Jupter</option>
                        <option value="Terra">Terra</option>
                        <option value="Venus">Venus</option>
                        <option value="Mercúrio">Mercúrio</option>

                    </C.SelectPlanets>

                </C.ContainerInfo>

                <C.Button type='submit' onClick={CreateTrip}>cadastrar</C.Button>

            </C.ContainerEsquerda>

            <C.ContainerDireita>

                <C.Imagem src={Galaxy} />

            </C.ContainerDireita>

        </C.Container>
    )
}

