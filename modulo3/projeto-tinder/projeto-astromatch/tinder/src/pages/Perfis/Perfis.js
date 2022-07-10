import React, { useEffect, useState } from 'react'
import * as C from "./styled"
import Like from '../../assets/like.png'
import Dislike from '../../assets/x.png'
// import { Wobble } from 'animate-css-styled-components';
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
                    { <button onClick={() => ClearPerfis()} > reset</button> }
                }
                setProfile(res.data.profile)
                console.log(profile)

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

        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michelle-mach-alves/choose-person`, newMatch)
            .then((res) => {
                if (res.data.isMatch === true) {
                    alert("It´s a Match")
                    GetProfileToChoose()
                } else {
                    console.log("Não deu Match")
                    GetProfileToChoose()
                }


                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const ClearPerfis = () => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michelle-mach-alves/clear`)
            .then((res) => {
                GetProfileToChoose(res)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
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
