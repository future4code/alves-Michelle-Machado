import React, { useState } from 'react'
import axios from 'axios'
import * as C from './styled'

export const MenuLateral = (props) => {
    const [profile, setProfile] = useState([])

    const GetProfileToChoose = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michelle-mach-alves/person`)
            .then((res) => {
                if (profile === null) {
                    alert("Sua lista de perfis está vazia. Clique em resetar para recomeçar")
                    { <button onClick={() => ClearPerfis()} > Reset</button> }
                }
                setProfile(res.data.profile)
                
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

            <C.Cabecalho>
                <C.ImagemCabecalho src='https://picsum.photos/seed/picsum/200/300' />
                <C.NomeCabecalho>Eduardo</C.NomeCabecalho>
            </C.Cabecalho>

            <C.Navigation >
                <C.Opcoes onClick={() => props.goToPerfis()} >
                    <C.SimboloOpcoes><ion-icon name="person-outline"></ion-icon></C.SimboloOpcoes>
                    <C.NomeOpcoes>Perfis</C.NomeOpcoes>
                </C.Opcoes>

                <C.Opcoes onClick={() => props.goToMatches()}>
                    <C.SimboloOpcoes><ion-icon name="heart-outline"></ion-icon></C.SimboloOpcoes>
                    <C.NomeOpcoes>Matches</C.NomeOpcoes>
                </C.Opcoes>

                <C.Opcoes onClick={() => props.goToMessages()}>
                    <C.SimboloOpcoes><ion-icon name="chatbubbles-outline"></ion-icon></C.SimboloOpcoes>
                    <C.NomeOpcoes>Mensagens</C.NomeOpcoes>
                </C.Opcoes>

                
                    <C.Opcoes onClick={() => (alert("Essa ação irá resetar os seus Matchs"), props.goToPerfis(ClearPerfis()))
                    }>
                        <C.SimboloOpcoes><ion-icon name="refresh-outline"></ion-icon></C.SimboloOpcoes>
                        <C.NomeOpcoes>Reset</C.NomeOpcoes>
                    </C.Opcoes>
                    

            </C.Navigation>
        </C.Body>
    )
}