import * as React from 'react';
import * as C from './styled'
import Box from '@mui/material/Box';
import axios from 'axios'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import facebook from '../../assets/fb.png'
import google from '../../assets/gp.png'
import twitter from '../../assets/tw.png'
import { BASE_URL } from '../../constants/url';

const LoginPage = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [login, setLogin] = React.useState('')

  const doLogin = () => {
    const profile = {
      "email": "machado.profile@gmail.com",
      "password": "123456"
  }
    axios.post(`${BASE_URL}/user/login`, profile)
    .then((res) => {
      console.log('Voce entrou no login', res)
    })
    .catch ((err) => {
      console.log("Deu ruim", err)
    })
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const x = document.getElementById("login")
  const y = document.getElementById("register")
  const z = document.getElementById("btn")

  const SignUp = () => {
    x.style.left = "433px"
    y.style.left = "10px"
    z.style.left = "0"

   
  }

  const Login = () => {
    x.style.left = "10px"
    y.style.left = "433px"
    z.style.left = "110px"
  }

  return (
    <C.Background >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <C.Formulario>

          <C.ButtonBox>
            <C.btn id='btn'></C.btn>
            <C.Button type='button' onClick={() => SignUp()}>Signup</C.Button>
            <C.Button type='button' onClick={() => Login()}>Login</C.Button>
          </C.ButtonBox>

          <C.SocialIcones>
            <C.IconImage src={google} />
            <C.IconImage src={facebook} />
            <C.IconImage src={twitter} />
          </C.SocialIcones>

    
          <C.ContainerInput>

            <C.InputGroupLogin id='login'>
              <TextField
                label="User Email"
                value={email}
                onChange={onChangeEmail}
                required
              />

              <TextField
                label="Enter Password"
                type={'password'}
                value={password}
                onChange={onChangePassword}
                required
              />
              <div><C.Checkbox type='checkbox' /><C.span>Remember Password</C.span></div>
              <C.SubmitButton type='submit' variant="contained" onClick={() => doLogin()}>Login</C.SubmitButton>
            </C.InputGroupLogin>

            {/* -------------------------------------------------------------------------------------- */}

            <C.InputGroupSignUp id='register'>
              <TextField
                label="User Name"
                // value={email}
                required
              />

              <TextField
                label="User Email"
                // value={email}
                required
              />

              <TextField
                label="Enter Password"
                type={'password'}
                // value={password}
                required
              />
              <div><C.Checkbox type='checkbox' /><C.span>I agree to the terms & conditions</C.span></div>
              <C.SubmitButton type='submit' variant="contained" >Register</C.SubmitButton>
            </C.InputGroupSignUp>
          </C.ContainerInput>
        </C.Formulario>


      </Box>
    </C.Background>
  );
}



export default LoginPage
