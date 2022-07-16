import React from 'react'
import {useNavigate} from 'react-router-dom'

export const AboutPage = () => {
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    const goBack = () => {
        navigate(-1)
    }

  return (
    <div>
        <p>AboutPage</p>
        <button onClick={goToHomePage}>Pagina Home</button>
        <button onClick={goBack}>Voltar</button>
    </div>
  )
}
