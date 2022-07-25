import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from '../routes/coordinator';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Box = styled.div` 
  margin-top: 13vh;
  display: flex;
  width: 100vw;
  justify-content:space-around;
`
const HomePage = () => {
    const navigate = useNavigate()
    
  return (
    <div>
        <h1>LabeX</h1>
        <Box>
        <Button 
        variant='contained' 
         onClick={()=>goToLoginPage(navigate)}
         sx={{width:'18vw'}}
         >Login</Button>
        <Button 
        variant='contained' 
        sx={{width:'18vw'}}
        onClick={()=>goToListTripsPage(navigate)}
        >Ver viagens</Button>
        </Box>
    </div>

  )
}

export default HomePage