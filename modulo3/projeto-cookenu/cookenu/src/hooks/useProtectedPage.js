import {useNavigate} from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToLogin } from '../routes/coordinator'

const useProtectedPage = () => {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            goToLogin(navigate)
        }
    }, [navigate]) // useLayoutEffect faz a verificação e depois carrega o layout da pagina
}

export default useProtectedPage