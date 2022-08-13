import React from 'react'
import Header from '../../Components/Header'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { ButtonBox, Box } from './ErrorStyled'
import { goToFeed } from '../../Routes/coordinator'

const ErrorPage = () => {
const navigate = useNavigate()

    return (
    <div>
        <Header/>
        <Box>
        <h1> Oooops... Pagina não encontrada =/ </h1>
        <ButtonBox>
        <Button fullWidth variant='contained' onClick={()=>goToFeed(navigate)} sx={{
                background:'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
                borderRadius: '12px',
                color:'White',
                padding: '13px',    
            }}>Ir para a Home</Button>
        </ButtonBox>
        </Box>
    </div>
  )
}

export default ErrorPage