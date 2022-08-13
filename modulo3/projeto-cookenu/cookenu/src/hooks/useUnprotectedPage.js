import {useNavigate} from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToListRecipes } from '../routes/coordinator'

const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            goToListRecipes(navigate)
        }
    }, [navigate]) // useLayoutEffect faz a verificação e depois carrega o layout da pagina
}

export default useUnprotectedPage