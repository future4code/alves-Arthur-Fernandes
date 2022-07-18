import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationFormPage } from '../routes/coordinator';
import axios from 'axios';
import { BASE_URL } from '../Constants/BASE_URL';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const Box = styled.div `
display:flex;
flex-direction:column;
background-color:rgb(27,27,27);
padding: 10%;
border-radius: 15px;
gap:1vh;
`
const Box2 = styled.div `
display:flex;
flex-direction:column;
padding:2vh;
gap: 2vh;
`

const ListTripsPage = () => {

    const navigate = useNavigate()
    const [trips , setTrips] = useState([])

   useEffect(() =>{
      
      axios.get(`${BASE_URL}/trips`)
      .then((resp)=> {setTrips(resp.data.trips)})
      .catch((e)=>alert(e.response.data.message))
    }, [])

    return (
    <Box2><h1>LabeX</h1>
      {trips && trips.map((trip)=><Box>
      <h3>{trip.name}</h3>
      <p>{trip.discription}</p>
      <p>{trip.planet}</p>
      <p>{trip.duration}</p>
      <p>{trip.date}</p>
    <Button  
    variant='contained'
    sx={{
      width:'50%'
    }}
    onClick={()=>goToApplicationFormPage(navigate, trip.id)}>Inscrever-se</Button>
    </Box>
      )}
    <Button
    variant='contained'
    sx={{
      width:'40%',
      alignSelf: 'center',
    }}
    onClick={()=>goBack(navigate)}>Voltar</Button>

    </Box2>

  )
}

export default ListTripsPage