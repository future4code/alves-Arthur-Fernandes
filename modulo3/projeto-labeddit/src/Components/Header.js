import React, { useContext, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '../Assets/img/logo.png'
import { BackButton, Box2, IconeLogo } from './HeaderStyle'
import { useNavigate, useParams } from 'react-router-dom'
import { goToLoginPage } from '../Routes/coordinator';
import GlobalContext from '../Global/GlobalContext';
import X from '../Assets/img/x.png'
import { goBack } from '../Routes/coordinator';

export default function Header() {
    const {setLogged}= useContext(GlobalContext)
    const navigate = useNavigate()
    const params = useParams()
    
    const logout = () => {
        localStorage.removeItem("token")
        setLogged(false) 
        goToLoginPage(navigate)
    }


    const defineButtonRight = () => {
        if (window.location.pathname === "/signup") {
            return (
                <Button 
                onClick={()=>goToLoginPage(navigate)}
                variant='text' 
                sx={{
                    width:'14vw',
                    color:'#4088CB',
                  }}>Entrar</Button>
            )
        } else if (window.location.pathname !== "/signup") {
            return (
                <Button 
                onClick={logout}
                variant='text' 
                sx={{
                    width:'14vw',
                    color:'#4088CB',
                  }}>Logout</Button>
            )
        }
    }
  const defineButtonLeft = () => {
        if (window.location.pathname === `/post/${params.id}`){
            return <BackButton onClick={()=>goBack(navigate)}>
                <img src={X}/>
            </BackButton>
        }
    }
 
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary" position="static">
        <Toolbar sx={{justifyContent:'flex-end',}}>
            {defineButtonLeft()}
            <Box2>
            <IconeLogo src ={Logo} alt='Logo'/>
            </Box2>
            {defineButtonRight()}     
        </Toolbar>
      </AppBar>
    </Box>
  );
}
