import React, {useContext, useEffect} from 'react';
import { Box } from './LoginStyle'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToSignUp } from '../../Routes/coordinator'
import Logo from '../../Assets/img/logo.png'
import LoginForm from './LoginForm';
import GlobalContext from '../../Global/GlobalContext';




const Login = () => {
  const {logged} = useContext(GlobalContext)
  const navigate = useNavigate()
  useEffect(()=>{
    (localStorage.getItem('token') !== null) && goToFeed(navigate)
  },[logged])

  return (
    <Box>
      <img src={Logo} />
      <h1>LabEddit</h1>
      <p>O projeto de rede Social Labenu</p>
      <LoginForm />
      <Button
        fullWidth
        variant='outlined'
        color='primary'
        sx ={{
          borderRadius: '27px',
          padding: '13px',
        }}
        onClick={() => goToSignUp(navigate)}>Crie uma conta!</Button>
    </Box>
  )
}

export default Login