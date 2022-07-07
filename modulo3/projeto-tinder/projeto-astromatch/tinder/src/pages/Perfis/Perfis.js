import React, { useEffect, useState } from 'react'
import * as C from "./styled"
import axios from 'axios'


export const Perfis = () => {

    const [profile, setProfile] = useState({})
    // const ListaPerfis = require('./ListaPerfis.json')

    useEffect(() => {
        GetProfileToChoose()
    }, [])


    const GetProfileToChoose = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michelle-machado-alves/person`)
            .then((res) => {
                // setProfile(res.data.profile)
                console.log(res)

            })
            .catch((err) => {
                console.log(err)

            })
    }

    const ChoosePerson = () => {
        const newMatch = {
            id: profile.id,
            choice: true
        }

        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michelle-machado-alves/choose-person`, newMatch)
            .then((res) => {
                if (res.data = { isMatch: true }) {
                    alert("Its a Match")
                    GetProfileToChoose()
                } else {
                    GetProfileToChoose()
                }
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (

        <C.Body>

            <C.Container>

                {/* <h3>Perfis</h3> */}

                <C.CardContainer>
                    <C.Imagem src={profile.photo} alt={profile.photo_alt} />
                    <p>{profile.name}</p>
                    <p>{profile.age}</p>
                    <p>{profile.bio}</p>

                    <div>
                        <button onClick={() => ChoosePerson()}>Like</button>
                        <button onClick={() => GetProfileToChoose()}>Dislike</button>
                    </div>

                </C.CardContainer>



            </C.Container>

        </C.Body>
    )
}
