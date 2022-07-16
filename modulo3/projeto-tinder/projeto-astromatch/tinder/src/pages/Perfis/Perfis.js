import React, { useEffect, useState } from 'react'
import * as C from "./styled"
import Like from '../../assets/like.png'
import Dislike from '../../assets/x.png'
import axios from 'axios'



export const Perfis = (props) => {

    const [profile, setProfile] = useState([])
    const [animation, setAnimation] = useState("")

    useEffect(() => {
        GetProfileToChoose()
    }, [])


    const GetProfileToChoose = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michelle-mach-alves/person`)
            .then((res) => {
                if (profile === null) {
                    alert("Sua lista de perfis está vazia. Clique em resetar para recomeçar")
                    { <button onClick={() => ClearPerfis()}>Reset</button> }
                }
                setProfile(res.data.profile)
            })

    }

    const ChoosePerson = () => {
        const newMatch = {
            id: profile.id,
            choice: true
        }

        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michelle-mach-alves/choose-person`, newMatch)
            .then((res) => {
                GetProfileToChoose()
            })
    }

    const ClearPerfis = () => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michelle-mach-alves/clear`)
            .then((res) => {
                GetProfileToChoose(res)
            })

    }

    return (

        <C.Body>

            <C.Container animation={animation}>

                <C.Imagem src={profile.photo} alt={profile.photo_alt} />

                <C.CardContainer>

                    <C.Dados>
                        <C.Nome>{profile.name} </C.Nome>
                        <C.Idade> {profile.age}</C.Idade>

                    </C.Dados>

                    <C.Bio>{profile.bio}</C.Bio>

                    <C.Botoes>
                        <C.BotaoImgem animation={animation} src={Like} onClick={() => (setAnimation("direita"), ChoosePerson())}></C.BotaoImgem>
                        <C.BotaoImgem animation={animation} src={Dislike} onClick={() => (setAnimation("esquerda"), GetProfileToChoose())}></C.BotaoImgem>
                        {/* <button onClick={() => ClearPerfis()} > RESET</button> */}
                    </C.Botoes>

                </C.CardContainer>

            </C.Container>


        </C.Body>

    )
}
