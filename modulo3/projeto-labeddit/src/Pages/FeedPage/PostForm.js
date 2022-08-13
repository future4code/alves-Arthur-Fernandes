import { TextField } from '@mui/material'
import React, { useContext } from 'react'
import {Forms, Line} from './FeedStyle'
import {useNavigate} from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import GlobalContext from '../../Global/GlobalContext'
import Button from '@mui/material/Button'
import { postPost } from '../../Services/posts'

const PostForm = () => {
    const { form, handleInput, clear } = useForm({ title:'', body: '' })
    const {load, err, setLoading, setErr, setPosts} = useContext(GlobalContext)
    const navigate = useNavigate()
  
   const onSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
       postPost(form, setLoading, setPosts, setErr, clear)
    }
  return (
    <Forms onSubmit={onSubmit}>
    <TextField
                name='title'
                onChange={handleInput}
                value={form.title}
                placeholder={'Título do Post'}
                fullWidth
                variant='outlined'
                required
                color='secondary'
                sx={{ backgroundColor:'#EDEDED',}}
            />
            <TextField
                name='body'
                color='secondary'
                onChange={handleInput}
                value={form.body}
                placeholder={'Escreva seu post ...'}
                required
                multiline
                rows={4}
                fullWidth   
                sx={{ backgroundColor:'#EDEDED',}}
            />
             <Button fullWidth variant='contained' type='submit' sx={{
                background:'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
                borderRadius: '12px',
                color:'White',
                padding: '13px',    
            }}>Postar</Button>
            {load}
            {err}
        <Line/>
        </Forms>
  )
}

export default PostForm

