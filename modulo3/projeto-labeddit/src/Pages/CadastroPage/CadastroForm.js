import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { Forms } from './CadastroStyle'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { SignUp } from '../../Services/users'
import GlobalContext from '../../Global/GlobalContext'
import Checkbox from '@mui/material/Checkbox'
import Popup from 'reactjs-popup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CadastroForm = () => {

  const { form, handleInput } = useForm({ username: '', email: '', password: '' })
  const { load, err, setLoading, setErr } = useContext(GlobalContext)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false);

  const onSubmit = (e) => {
    e.preventDefault()
    SignUp(form, setLoading, setErr, navigate, setOpen)
  }


  return (
    <Forms onSubmit={onSubmit}>
      <TextField
        name='username'
        onChange={handleInput}
        value={form.username}
        placeholder={'Nome de Usuário'}
        fullWidth
        required
        variant='outlined'
        pattern="^.{6,}"
        title="Seu nome de usuário deve conter no mínimo 6 characteres."
      />
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
        pattern="^.{8,}"
        title="Sua senha deve conter no mínimo 8 caracteres."
      />
      <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
      <FormControlLabel control={<Checkbox />} label="Eu concordo em receber emails sobre coisas legais no Labeddit" />
       <Button fullWidth variant='contained' type='submit' sx={{
                background:'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
                borderRadius: '27px',
                color:'White',
                padding: '13px',    
            }}>Cadastrar</Button>
      {err}
      {load}
           <Popup 
              open={open} closeOnDocumentClick onClose={closeModal}
               position='top center' 
               nested>
                <h1>Usuário Cadastrado com Sucesso =D!</h1>
              </Popup>
    </Forms>
  )
}
export default CadastroForm