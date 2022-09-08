
import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

export const ApplyTrips = () => {
    const params = useParams()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setAplication] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeAge = (e) => {
        setAge(e.target.value)
    }

    const onChangeApplicationText = (e) => {
        setAplication(e.target.value)
    }

    const onChangeProfession = (e) => {
        setProfession(e.target.value)
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const ApplyToTrips = () => {
        const applyTrip = {
          
            "name": name,
            "age": age,
            "applicationText": applicationText,
            "profession": profession,
            "country": country,
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/michelle-machado-alves/trips/${params.id}/apply`, applyTrip)
      }


  return (
    <div>

        <input onChange={onChangeName} />
        <input onChange={onChangeAge} />
        <textarea onChange={onChangeApplicationText} />
        <input onChange={onChangeProfession} />
        <select onChange={onChangeCountry}>

            <option>select</option>
        </select>
        

    </div>
  )
}



 