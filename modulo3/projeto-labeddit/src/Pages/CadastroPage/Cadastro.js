import React from 'react'
import CadastroForm from './CadastroForm'
import { Box } from './CadastroStyle'
import Checkbox from '@mui/material/Checkbox'
import Header from '../../Components/Header'

const Cadastro = () => {
  return (
    <div>
    <Header/>
    <Box>
      <h1>Olá, boas vindas ao LabEddit ;)</h1>
      <CadastroForm/>
    </Box>
    </div>
  )
}

export default Cadastro