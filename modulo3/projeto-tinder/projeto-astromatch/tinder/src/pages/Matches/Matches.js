import axios from 'axios'
import React, { useState, useEffect } from 'react'
import * as C from "./styled"

export const Matches = () => {

  const [myMatches, setMatchProfile] = useState([])

  useEffect(() => {
    getMatchs()
  }, [])

  const getMatchs = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michelle-mach-alves/matches`)
      .then((res) => {
        setMatchProfile(res.data.matches)
        // console.log(myMatches)
        // console.log(res.data.matches)

      })
      .catch((err) => {
        console.log(err)

      })
  }


  const showAllMatches = myMatches.map((matchs) => {
    
    return (<div key={matchs.id}>
      <C.Body>
        <C.Container>
          <C.Imagem src={matchs.photo} alt={matchs.photo_alt} /> 
          <C.Dados>
          <h4>{matchs.name}</h4> 
          <p> | {matchs.age}</p>
          </C.Dados>
        </C.Container>
      </C.Body>

    </div>)
  })

  return (

    <div>
      {showAllMatches}
      </div>
  )
}
