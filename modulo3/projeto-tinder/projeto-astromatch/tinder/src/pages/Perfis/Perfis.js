import React, { useEffect, useState } from 'react'
import * as C from "./styled"
import axios from 'axios'
import { Header } from '../../component/Header'
import { Button } from '@chakra-ui/react'
import { FcLike } from 'react-icons/fc'
import { AiOutlineClose } from 'react-icons/ai'
import { GrPowerReset } from 'react-icons/gr'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'

export const Perfis = (props) => {

    const [profile, setProfile] = useState([])

    useEffect(() => {
        GetProfileToChoose()
    }, [])


    const GetProfileToChoose = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michelle-mach-alves/person`)
            .then((res) => {
                if (profile === null) {
                    <Button onClick={() => ClearPerfis()} leftIcon={<GrPowerReset />} variant='solid' size='sm'></Button>
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
            <C.Container>
                <C.CardContainer>
                    <div>
                        <Header
                            goToMatches={props.goToMatches}
                            goToPerfis={props.goToPerfis} 
                          
                        />
 
                        <Button onClick={() => ClearPerfis()} leftIcon={<GrPowerReset />} variant='solid' size='sm'></Button>
                    </div>

                    <C.Imagem src={profile.photo} alt={profile.photo_alt} />

                    <C.Dados>
                        <C.Nome>{profile.name} </C.Nome>
                        <C.Idade> {profile.age}</C.Idade>
                    </C.Dados>
                    <C.Bio>{profile.bio}</C.Bio>
                    { console.log(props.goToMatches)}

                    <C.Botoes>

                        <Button onClick={() => ChoosePerson()} leftIcon={<FcLike />} variant='solid' size='lg'>Like</Button>
                        {/* <button onClick={() => ChoosePerson()}>Like</button> */}
                        <Button onClick={() => GetProfileToChoose()} leftIcon={<AiOutlineClose />} variant='solid' size='lg'>Dislike</Button>
                        {/* <button onClick={() => GetProfileToChoose()}>Dislike</button> */}

                    </C.Botoes>

                </C.CardContainer>

            </C.Container>



        </C.Body>
    )
}
