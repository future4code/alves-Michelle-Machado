import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const useProtectedPage = () => {

    const  navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token ===null) {
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
    const [duration, setDuration] = useState(Number(""))

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
            setTrip( res.data)
            console.log("trip criada")
            navigate(-1)
    
        })
        .catch((err) => {
            console.log(err)
        })
    }



    return (
        <div>

            <h3>Cadastrar Viagem</h3>

            <input
                placeholder="Nome da Viagem"
                onChange={onChangeNome}
                value={nomeViagem} />

            <input
                placeholder="Duração"
                onChange={onChangeDuration}
                value={duration} />

            <textarea
                onChange={onChangeTextArea}
                placeholder={"Descrição"}
                rows="4"
                value={description}/>

            <form>
                <label htmlFor="data">Data:</label>
                <input onChange={onChangeData} type="date" value={date} id="data" name='data'></input>
            </form>

            <select onChange={onChangePlanet}>

                <option value="select">Select</option>
                <option value="plutao">Plutão</option>
                <option value="netuno">Netuno</option>
                <option value="urano">Urano</option>
                <option value="saturno">Saturno</option>
                <option value="marte">Marte</option>
                <option value="jupter">Jupter</option>
                <option value="terra">Terra</option>
                <option value="venus">Venus</option>
                <option value="mercurio">Mercúrio</option>

            </select>

          

            <button type='submit' onClick={CreateTrip}>cadastrar</button>

            

          




        </div>
    )
}

