import React from 'react';
import { useNavigate } from 'react-router-dom'
import * as C from './styled'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import facebook from '../../assets/fb.png'
import google from '../../assets/gp.png'
import twitter from '../../assets/tw.png'
import useForm from '../../hooks/useForm'
import { login, signup } from '../../services/user'
// import useUnprotectedPage from '../../hooks/useUnprotectedPage';


const LoginPage = ({rightButtonText, setRightButtonText}) => {
  // useUnprotectedPage()
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const [formSign, onChangeSign, clearSign] = useForm({ email: "", password: "", name: "" })
  const navigate = useNavigate()

  const onSubmitFormLogin = (e) => {
    e.preventDefault()
    console.log(form)
    login(form, clear, navigate, setRightButtonText )
  }

  const onSubmitFormSignUp = (e) => {
    e.preventDefault()
    console.log(formSign)
    signup(formSign, clearSign, navigate, setRightButtonText)
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
        component="section"
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

            <C.InputGroupLogin onSubmit={onSubmitFormLogin} id={'login'} rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} >
              <TextField
                name='email'
                type={'email'}
                label="User Email"
                value={form.email}
                onChange={onChange}
                required
              />

              <TextField
                name='password'
                type={'password'}
                label="Enter Password"
                value={form.password}
                onChange={onChange}
                required
              />
              <div><C.Checkbox type='checkbox' /><C.span>Remember password</C.span></div>
              <C.SubmitButton type='submit' variant="contained" >Login</C.SubmitButton>
            </C.InputGroupLogin>

            {/* -------------------------------------------------------------------------------------- */}

            <C.InputGroupSignUp onSubmit={onSubmitFormSignUp} id='register' rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}>
              <TextField
                name='name'
                type={'name'}
                label="User Name"
                value={formSign.name}
                onChange={onChangeSign}
                required
              />

              <TextField
                name='email'
                type={'email'}
                label="User Email"
                value={formSign.email}
                onChange={onChangeSign}
                required
              />

              <TextField
                name='password'
                type={'password'}
                label="Enter Password"
                value={formSign.password}
                onChange={onChangeSign}
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
