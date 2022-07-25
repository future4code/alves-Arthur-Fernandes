import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { goBack } from '../routes/coordinator';
import useForm from '../hooks/useForm';
import styled from 'styled-components';
import { BASE_URL } from '../Constants/BASE_URL';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Countries } from '../Constants/Countries';
import { Select, Button, MenuItem, Input } from '@mui/material';
import Rockets from '../img/rocket.png'
import Rockets1 from '../img/rocket1.png'
import { borderRadius, width } from '@mui/system';

const Box1 = styled.div `
display: flex;
justify-content: space-between;
width: inherit;
margin-top: 10vh;
`
const Forms = styled.form`
  width:50vw;
  display: flex;
  flex-direction:column;
  gap: 5vh;
` 
const Container = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  
  `
const Rocket2 = styled.img`
width:5vw;
align-self:center;
` 
const Rocket = styled.img`
width: 5vw;
align-self:center;

	        animation: slide-top 1s ease-out alternate both;

@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0) rotate(-45deg);
            transform: translateY(0) rotate(-45deg);
  }
  100% { 
    -webkit-transform: translateY(-1000px) rotate(-45deg);
            transform: translateY(-1000px) rotate(-45deg);
          }
}
`
const ApplicationFormPage = () => {
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const {form, handleInput, handleSelect} = useForm({name:'', age:'', applicationText:'', profession:'', country: ''})

  const navigate = useNavigate()
  const {id} = useParams()

const ApplyTrip = (e) => {
  e.preventDefault()
  setLoading(true)
  axios.post(`${BASE_URL}/trips/${id}/apply`, form)

    .then((resp) => {
      setLoading(false)
      console.log(resp);
      resp.data.success === true && alert('Seu formulário foi enviado! Caso seja aprovado entraremos em contato!')
      // goBack(navigate);
    })
    .catch((err) => {
      setLoading(false)
      setErr(err.response.data.message)
    })
}

return (
    <Container>
      <h1>Formulário de Aplicante:</h1>
       
       <Forms onSubmit={ApplyTrip}>
       <Box1>
       <Input id="filled-basic" 
       sx={{
        backgroundColor:'#ffe4c4',
        width: '40%'

      }}
          variant="filled"
          placeholder='Nome Completo'
          name='name'
          onChange={handleInput}
          value={form.name}
          required
          title="Nome e sobrenome necessários!"
        />
        <Input id="filled-basic" 
        sx={{
          backgroundColor:'#ffe4c4'
        }}
          variant="filled"
          placeholder="Sua idade"
           name='age'
          onChange={handleInput}
          inputProps={{pattern:"^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$"}}
          title="Você deve ser maior de 18 anos."
          value={form.age}
          required
      />
      </Box1>
      <Input id="filled-basic" 
      sx={{
        backgroundColor:'#ffe4c4'
      }}
       placeholder="Por que você deveria ser selecionado para essa viagem?" 
        variant="filled"
        name='applicationText'
        onChange={handleInput}
        value={form.applicationText}
        multiline
        fullWidth
        minRows='4'
        required
       />
       <Input id="filled-basic" 
          sx={{
            backgroundColor:'#ffe4c4',
            width: '40%'

          }}
          variant="filled"
          placeholder="Qual a sua profissão?" 
           name='profession'
          onChange={handleInput}
          value={form.profession}
          inputProps={{pattern:"^.{3,}"}}
          title="Minimo de 3 caracteres."
          required
      />
      <h2>Seu país:</h2>
      <Select 
      sx={{
        backgroundColor:'#ffe4c4',
        width: '40%'
      }}
      name='country' 
      value={form.country} 
      onChange={handleInput} 
      displayEmpty>
        {Countries.map((option)=><MenuItem value={option.label}>{option.label}</MenuItem>)}
      </Select>
      <div>
      <Button type='submit'
        variant='contained'
      >Enviar</Button>
      </div>
     {loading ? <Rocket src={Rockets}/> : <Rocket2 src={Rockets1}/>}
      </Forms>
       <p>{err}</p>
        <Button
        variant='contained'
        onClick={()=>goBack(navigate)}>Voltar</Button>
    </Container>
  )
}

export default ApplicationFormPage