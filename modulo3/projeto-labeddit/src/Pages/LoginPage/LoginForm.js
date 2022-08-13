
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { Forms } from './LoginStyle'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Line } from './LoginStyle'
import { Logar } from '../../Services/users'
import GlobalContext from '../../Global/GlobalContext'



const LoginForm = () => {
    const { form, handleInput } = useForm({ email: '', password: '' })
    const {load, err, setLoading, setErr, setLogged} = useContext(GlobalContext)
    const navigate = useNavigate()
  
   const onSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        Logar(form, setLoading, setErr, navigate, setLogged)
    }

    return (
        <Forms onSubmit={onSubmit}>
            <TextField
                name='email'
                onChange={handleInput}
                value={form.email}
                placeholder={'Email'}
                fullWidth
                variant='outlined'
                required
                pattern="\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                title="Digite um email válido. ex: meuemail@meuemail.com"
            />
            <TextField
                name='password'
                onChange={handleInput}
                value={form.password}
                placeholder={'Senha'}
                type='password'
                required
                fullWidth
                pattern="^.{6,}"
                title="Sua senha deve conter no mínimo 6 caracteres."
            />
                {err}
                {load}
            <Button fullWidth variant='contained' type='submit' sx={{
                background:'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
                borderRadius: '27px',
                color:'White',
                padding: '13px',    
            }}>Continuar</Button>
            <Line/>
        </Forms>
    )
}

export default LoginForm