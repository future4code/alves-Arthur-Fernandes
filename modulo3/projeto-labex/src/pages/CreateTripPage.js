import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import useForm from '../hooks/useForm';
import { goBack, goToLoginPage } from '../routes/coordinator';
import { Input, Button } from '@mui/material'
import { BASE_URL } from '../Constants/BASE_URL';
import axios from 'axios'
import styled from 'styled-components';

const Forms = styled.form`
display: flex;
gap: 2vh;
width: 40vw;
flex-direction: column;
align-items: center;
background-color:rgb(27,27,27);
padding: 2%;
border-radius:15px;
`

const CreateTripPage = () => {   
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const {form, handleInput} = useForm({name: '',planet: '',date: '',description: '',durationInDays: ''})

  const navigate = useNavigate()
  const header = {
    headers: {
      auth: localStorage.getItem('token')
    }
  }

  const CreateTrip = (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(form)
    axios.post(`${BASE_URL}/trips`,form ,header)
  
      .then((resp) => {;
        setLoading(false)
        console.log(resp.data)
        goBack(navigate);
      })
      .catch((err) => {
        setLoading(false)
        setErr(err.response.data.message)
      })
  }
  
  useEffect(()=>{
    (localStorage.getItem('token') === null) && goToLoginPage(navigate)
},[])

  return (
        <div>
    <Forms onSubmit={CreateTrip}>
    <h2>Adicionar viagem</h2>
       <Input id="filled-basic" 
          sx={{
            backgroundColor:'#ffe4c4',
            width: '20vw'
          }}
          variant="filled"
          placeholder="Nome da Viagem"
           name='name'
          onChange={handleInput}
          value={form.name}
          required
      />
       <Input id="filled-basic" 
          sx={{
            backgroundColor:'#ffe4c4',
            width: '20vw'
          }}
          variant="filled"
          placeholder="Planeta Destino"
           name='planet'
          onChange={handleInput}
          value={form.planet}
          required
      />
          <Input id="filled-basic"
              sx={{
                backgroundColor:'#ffe4c4',
                width: '20vw'
              }} 
             variant="filled"
             placeholder="Data de partida:"
              name='date'
             onChange={handleInput}
            //  inputProps={{pattern:"^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$"}}
             title="Você deve inserir uma data válida"
             value={form.date}
             required
         />
       <Input id="filled-basic" 
           sx={{
          backgroundColor:'#ffe4c4',
          width: '20vw'
             }}
          variant="filled"
          placeholder="Descrição da viagem"
           name='description'
          onChange={handleInput}
          value={form.description}
          required
      />
       <Input id="filled-basic" 
          sx={{
               backgroundColor:'#ffe4c4',
                width: '20vw'

             }}
          variant="filled"
          placeholder="Duração em dias da viagem:"
           name='durationInDays'
          onChange={handleInput}
          type='number'
          value={form.durationInDays}
          required
      />
      <Button variant='contained' 
      sx={{
        width: '10vw'
      }}
      type='submit'>Adicionar</Button>
      </Forms>
    <Button variant='contained' onClick={()=>goBack(navigate)}>Voltar</Button>

    </div>
  )
}

export default CreateTripPage