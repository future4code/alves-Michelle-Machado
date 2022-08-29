import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import * as C from './styled'


export const AdminPage = () => {

    const [arrayTrips, setArrayTrips] = useState([])
    const [login, setLogin] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        NovoGetTrips()
    }, [])

    const changePageBack = () => {
        navigate(-1)
    }

    const changePageNewTrip = () => {
        navigate("/newTrip")
    }

    // const logout = () => {
    //     axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/michelle-machado-alves/login`)
    //     .then((res) => {
    //         setLogin(false, res.data)
    //         console.log(res.data)
    //         alert("Voce acabou de desconectar")
    //     })
    // }

    // { console.log(arrayTrips) }


    const NovoGetTrips = () => {

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/michelle-machado-alves/trips`)
            .then((res) => {
                setArrayTrips(res.data.trips)
            })
            .catch((err) => {
                console.log("Deu bug", err.resposive)
            })

    }

    const DeleteTrip = (trip) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/michelle-machado-alves/trips/${trip}`, {
            headers: {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp3N0tNUEp2RmFqRmtmUlE4N3RBIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MTc5MDE4NDd9.yKi2emMJ-Ln3fNigx09HNZIDWPEhF8e_WnbYAAd1r2k"
            }
        })
            .then((res) => {
                alert("deletado ")
                NovoGetTrips()
            })
            .catch((err) => {
                console.log(err.resposive)
            })
    }

    return (

        <div>

            <h2>AdminPage</h2>

            <button onClick={changePageBack} >Voltar</button>
            <button onClick={changePageNewTrip} >Criar nova Viagem</button>
            {/* <button onClick={true}>Logout</button> */}


            {arrayTrips.map((trip, indice) => {
                return (
                    <C.Container onClick={() => navigate(`/tripDetail/${trip.id}`)}  key={indice}>
                        <p>{trip.name}</p>

                        <div>
                            <ion-icon onClick={() => DeleteTrip(trip.id)} name="close-circle-outline" size="large"></ion-icon>
                        </div>
                    </C.Container>
                )
            })}


        </div>
    )
}
