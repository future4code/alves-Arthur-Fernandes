import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { goToCreateTripFormPage, goToLoginPage, goToTripDetailsPage } from '../routes/coordinator';
import axios from 'axios';
import { BASE_URL } from '../Constants/BASE_URL';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Box1 = styled.div `
display: flex;
justify-content: space-between;
width: inherit;
`
const Box2 = styled.div `
display:flex;
flex-direction:column;
width: 20vw;
gap: 2vh;
padding:2vh 0;
`
const Box3 = styled.div `
display:flex;
flex-direction:column;
background-color:rgb(27,27,27);
padding: 10%;
border-radius: 15px;
`

const AdminHomePage = () => {
  const [logged, setLogged] = useState(true)
  const [trips, setTrips] = useState([])
  
  const header = {
    headers: {
      auth: localStorage.getItem('token')
    }
  }

  const navigate = useNavigate()
  const getTrips = () => {
    axios.get(`${BASE_URL}/trips`)
      .then((resp) => {
        setTrips(resp.data.trips)
      })
      .catch((e) => console.log(e.data))
  }
  useEffect(() => {
    getTrips()
  }, [])

  useEffect(() => {
    (localStorage.getItem('token') === null) && goToLoginPage(navigate)
  }, [logged])

  const deleteTrip = (id) => {
    axios.delete(`${BASE_URL}/trips/${id}`, header)
      .then((resp) => { setTrips(resp.data.trips); getTrips() })
      .catch((e) => console.log(e.data))
  }

  return (<Box2>
      <Box1>
      <Button variant='contained' onClick={() => goToCreateTripFormPage(navigate)}>Adicionar nova Viagem</Button>
      {/* falta id */}
      <Button variant='contained' onClick={() => { localStorage.removeItem("token"); setLogged(false) }}> Deslogar</Button>
      </Box1>
      <h2>Viagens</h2>
      {trips && trips.map((trip) => {
        return <Box3 key={trips.id}>
          <h3>{trip.name}</h3>
          <p>{trip.planet}</p>
          <p>{trip.date}</p>
          <Box1>
          <Button variant='contained' onClick={() => goToTripDetailsPage(navigate, trip.id)}>Detalhes</Button>
          <Button variant='contained' onClick={() => deleteTrip(trip.id)}>Remover</Button>
          </Box1>
        </Box3>
      })}
    </Box2>
  )
}

export default AdminHomePage