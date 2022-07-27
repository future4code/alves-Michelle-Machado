import axios from 'axios'
import { BASE_URL } from '../constants/url';
import { goToListRecipes } from '../routes/coordinator';

export const login = (body, clear, navigate) => {

    axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      // clear()
      console.log("Usuario está logado")
      goToListRecipes(navigate)
    })
    .catch ((err) => {
      alert('Erro no login')
      console.log(err)
    })
  }

export const signup = (body, clear, navigate) => {

    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      // clear()
      console.log("Usuario criado com sucesso")
      goToListRecipes(navigate)
    })
    .catch ((err) => {
      alert('Erro no login')
      console.log(err)
    })
  }

export const feedRecipes = () => {
  axios.get(`${BASE_URL}/recipe/feed`, {
    headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhNzBhMTQzLTZhNzEtNDcwMS1iNjkxLWRiOTY2ODZhZGM0NyIsImlhdCI6MTYzMDQyNzAxMywiZXhwIjoxNjMwNTk5ODEzfQ.z10bOSPdLdGdRhwI-eB3uYxDYRxxW726V86bJQigZDk'
    }
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
}