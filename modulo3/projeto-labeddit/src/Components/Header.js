import React, { useContext, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '../Assets/img/logo.png'
import { Box2, IconeLogo } from './HeaderStyle'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../Routes/coordinator';
import GlobalContext from '../Global/GlobalContext';

export default function Header() {
    const {setLogged}= useContext(GlobalContext)
    const navigate = useNavigate()
    
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
 
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary" position="static">
        <Toolbar sx={{justifyContent:'flex-end',}}>
            <Box2>
            <IconeLogo src ={Logo} alt='Logo'/>
            </Box2>
            {defineButtonRight()}     
        </Toolbar>
      </AppBar>
    </Box>
  );
}
