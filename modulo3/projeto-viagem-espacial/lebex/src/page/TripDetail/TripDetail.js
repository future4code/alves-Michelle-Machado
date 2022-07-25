import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"

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

export const TripDetail = (props) => {

    const [trip, setTrip] = useState("")
    const navigate = useNavigate()

    useProtectedPage()

    const params = useParams()

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/michelle-machado-alves/trip/${params.id}`, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setTrip(res.data.trip)
                // console.log(res.data.trip)

            })
            .catch((err) => {
                console.log(err.response)
            })
    })


    return (

        <div>
            <h3>INFOS DA VIAGEM</h3>

            <button onClick={() => navigate(-1)}>Voltar</button>

            <div>
                <p>{trip.name}</p>
                <p>{trip.description}</p>
                <p>{trip.date}</p>
                <p>{trip.planet}</p>
                <p>{trip.durationDays}</p>

            </div>

        </div>
    )
}
