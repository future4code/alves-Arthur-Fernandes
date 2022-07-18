import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { goBack, goToAdminHomePage, goToHomePage } from '../routes/coordinator';
import axios from 'axios';
import { BASE_URL } from '../Constants/BASE_URL';
import useForm from '../hooks/useForm';
import styled from 'styled-components';
import Rockets from '../img/rocket.png'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const Box = styled.div `
display: flex; 
flex-direction: column;
justify-content: center;
height:100vh;
`
const Forms = styled.form`
  margin:5vh 0;
  display: flex;
  gap: 1rem;

`

const Rocket = styled.img`
width: 5vw;
align-self:center;

	        animation: slide-right 1s ease-out alternate both;

@keyframes slide-right {
  0% {
    -webkit-transform: translateX(-1000px) rotate(45deg);
            transform: translateX(-1000px) rotate(45deg);
  }
  100% { 
    -webkit-transform: translateX(1000px) rotate(45deg);
            transform: translateX(1000px) rotate(45deg);
          }
}

`
const LoginPage = () => {
  const { form, handleInput } = useForm({email:'', password:''})
  const navigate = useNavigate()
  const [logar, setLogar] = useState(false)
  const [err, setErr] = useState('')


useEffect(
 ()=>{if (localStorage.getItem("token") !== null) {
    goToAdminHomePage(navigate)
  }},[]
)
  const Authenticate = (e) => {
    e.preventDefault()
    setLogar(true)
    axios.post(`${BASE_URL}/login`, form)

      .then((resp) => {
        localStorage.setItem('token', resp.data.token);
        setLogar(false)
        goToAdminHomePage(navigate);
      })
      .catch((err) => {
        setLogar(false)
        setErr(err.response.data.message)
      })
  }
  let loading
  if (logar) {
    loading = <Rocket src={Rockets}/>
  }

  return (
    <Box>
        <h1>LabeX</h1>
      <Forms onSubmit={Authenticate}>
      <Input
        name='email'
        sx={{
          backgroundColor:'#ffe4c4',
          width: '40%'
  
        }}
        onChange={handleInput}
        value={ form.email }
        placeholder={'Email'}
        required
        pattern="\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
        title="Digite um email válido. ex: meuemail@meuemail.com"
      />
      <Input
        name='password'
        sx={{
          backgroundColor:'#ffe4c4',
          width: '40%'
  
        }}
        onChange={handleInput}
        value={ form.password }
        placeholder={'Senha'}
        type='password'
        required
        pattern="^.{6,}"
        title="Sua senha deve conter no mínimo 6 caracteres."
      />
      <Button variant='contained' type='submit'>Logar</Button>
      <p>{err}</p>
      
      </Forms>
       <Button 
       sx={{
        width:'10vw',
        alignSelf: 'center'
       }}
       variant='contained' 
       onClick={()=>goToHomePage(navigate)}>Voltar</Button>
      {loading}
    </Box>
  )
}

export default LoginPage