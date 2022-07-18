import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { goBack, goToLoginPage } from '../routes/coordinator';
import axios from 'axios'
import { BASE_URL } from '../Constants/BASE_URL';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Box= styled.div`
display:flex;
flex-direction:column;
background-color:rgb(27,27,27);
padding: 2vw;
max-width:20vw;
border-radius: 15px;
gap:1vh;
`
const Box2= styled.div`
  display:flex;
  justify-content:space-around;
  `
const Box3 = styled.div`
  margin:8vh 0;
  display:flex;
  gap:50px;
  flex-wrap:wrap;
`
const P =styled.p`
display:inline;
font-size:80%;
`
const TripDetailsPage = () => {
  const [trip, setTrip] = useState('')

  const {id} = useParams()

  const header = {
    headers: {
      auth: localStorage.getItem("token")
    }
  }

  const getDetails = () => {
    axios.get(`${BASE_URL}/trip/${id}`, header)
  .then((resp) => {setTrip(resp.data.trip)})
  .catch((e) => alert(e.response.data.message))
}
  const navigate = useNavigate()
  useEffect(()=>{
    getDetails();
    (localStorage.getItem('token') === null) && goToLoginPage(navigate)
},[])
  const Decide = (idCan, boolean) => {
    const body = {
      "approve": boolean
    }
    axios.put(`${BASE_URL}/trips/${id}/candidates/${idCan}/decide`,body, header)
    .then((resp) =>alert(resp.data.message))
    .catch((e) => console.log(e.data))
  }

  return (
    <div> <h1>Details:</h1>
    
            <div>
            <h1>{trip.name}</h1>
            <h3>{trip.planet}</h3>
              <Box3>
              {trip && trip.candidates.map((can)=>{
                return(
                  <Box>
                    <h4>Candidato : {can.name}</h4>
                    <p>Descrição:<br></br><P>{can.applicationText}</P></p>
                    <p>Idade: <P>{can.age}</P> </p>
                    <p>Profissão:  <P>{can.profession}</P></p>
                    <p>País de origem: <P>{can.country}</P></p>
                    <Box2>
                    <Button 
                    variant='contained' 
                    sx={{
                      width:'30%'
                    }}
                    onClick={()=>Decide(can.id, true)}> Aceitar </Button>
                    <Button 
                    variant='contained' 
                    sx={{
                      width:'30%'
                    }}
                    onClick={()=>Decide(can.id, false)}> Recusar </Button>
                    </Box2> 
                  </Box>
                )
              })}
              </Box3>
            </div>
        <Button variant='contained' onClick={()=>goBack(navigate)}>Voltar</Button>
    </div>
  )
}

export default TripDetailsPage