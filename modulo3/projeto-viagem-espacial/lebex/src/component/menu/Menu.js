import React from 'react'
import {useNavigate} from 'react-router-dom'
import * as C from "./styled"

export const Menu = () => {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    const goToAboutPage = () => {
        navigate("/about")
    }

  return (
    <div>
        <C.Navi>
            <C.Categoria onClick={goToHomePage}>
                Home
            </C.Categoria>

            <C.Categoria onClick={goToAboutPage}>
                About Us
            </C.Categoria>

            <C.Categoria>
                Promoções
            </C.Categoria>

            <C.Categoria>
                Lançamentos
            </C.Categoria>

            <C.Categoria>
                Pacotes
            </C.Categoria>

            <C.Cadastrar>
                Cadastrar Viagem
            </C.Cadastrar>
        </C.Navi>
    </div>
  )
}
