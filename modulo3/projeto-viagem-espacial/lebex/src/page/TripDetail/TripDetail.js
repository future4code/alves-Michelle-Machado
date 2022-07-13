import axios from 'axios'
import React,{useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom"

const useProtectedPage = () => {

    const[id, setId] = useState("")

    const  navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token ===null) {
            console.log("Não está logado")
            navigate("/login")
        }
    }, [])
}

export const TripDetail = () => {

    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/michelle-machado-alves/trip/${params.id}`,{
            headers: {
                auth: token
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    })
    

  return (

    <div>    
        <h3>INFOS DA VIAGEM</h3>

        {}
        
        
    </div>
  )
}
