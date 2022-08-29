import axios from 'axios'
import { BASE_URL } from '../constants/url';
import { goToListRecipes } from '../routes/coordinator';

export const login = (body, clear, navigate, setRightButtonText) => {

    axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      // clear()
      console.log("Usuario está logado")
      goToListRecipes(navigate)
      setRightButtonText("Logout")
    })
    .catch ((err) => {
      alert('Erro no login')
      console.log(err.response.data.message)
    })
  }

export const signup = (body, clear, navigate, setRightButtonText) => {

    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      // clear()
      console.log("Usuario criado com sucesso")
      goToListRecipes(navigate)
      setRightButtonText("Logout")
    })
    .catch ((err) => {
      alert('Erro no signup')
      console.log(err.response.data.message)
    })
  }

