import React, { useEffect, useState } from 'react'
import * as C from './styled'
import { Menu } from '../../component/menu/Menu'
import Foto from '../../assets/foguete.webp'
import Marte from '../../assets/planeta-marte.webp'
import Venus from '../../assets/planeta-venus.webp'
import Plutao from '../../assets/planeta-plutao.webp'
import Saturno from '../../assets/planeta-saturno.webp'
import axios from 'axios'

export const HomePage = () => {

  const [trips, setTrips] = useState([])

  // console.log(trips)

  useEffect(() => {
    GetTrips()
  }, [])


  const GetTrips = () => {

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/michelle-machado-alves/trips`)
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((err) => {
        console.log("Deu bug", err.resposive)
      })

  }



  return (
    <div>
      <Menu />
      <C.Banner src={Foto} />

      <C.Slider >

        <C.Planets src={Marte} />

        <C.Planets src={Venus} />

        <C.Planets src={Plutao} />

        <C.Planets src={Saturno} />

      </C.Slider>

      <h3>ÚLTIMAS VIAGENS</h3>
      <C.Container>
        {
          trips.map((trip, indice) => {

            return (

              <C.CardTrip key={indice}>
                
                <p>{trip.planet}</p>
                <p>{trip.name}</p>
                <p>{trip.description}</p>
                <p>{trip.durationInDays}</p>
                <p>{trip.date}</p>

              </C.CardTrip>
            )
          })
        }
      </C.Container>
    </div>
  )
}
