import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const Matches = () => {

  const [myMatches, setMatchProfile] = useState([])

  useEffect(() => {
    getMatchs()
}, [])

  const getMatchs = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`)
    .then((res) => {
      setMatchProfile( res.data.matches)
      // console.log(myMatches)
      // console.log(res.data.matches)

  })
  .catch((err) => {
      console.log(err)

  })}

  const showAllMatches = myMatches.map((matchs) => {
    return (<div key={matchs.id}>
      
      <p>{matchs.photo}</p>
      <p>{matchs.name}</p>
      <p>{matchs.age}</p>

    </div>)
  })

  return (
    <div></div>
    // <div>{showAllMatches}</div>
  )
}
