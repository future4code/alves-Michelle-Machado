import React from 'react'
// import {useNavigate} from 'react-router-dom'
import * as C from './styled'
import Foto from '../../assets/foguete.webp'

export const HomePage = () => {
    // const navigate = useNavigate()

    // const goToAboutPage = () => {
    //     navigate("/about")
    // }
  return (
    <div>
        <C.Banner src={Foto} />

        {/* <div>Home</div> */}

      
        {/* <p>HomePage</p> */}

        {/* <button onClick={goToAboutPage}>About Page</button> */}

    </div>
  )
}
