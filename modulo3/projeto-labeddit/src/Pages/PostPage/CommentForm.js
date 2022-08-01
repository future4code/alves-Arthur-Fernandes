import { TextField } from '@mui/material'
import React, { useContext } from 'react'
import {Forms, Line} from './FeedStyle'
import {useNavigate} from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import GlobalContext from '../../Global/GlobalContext'
import Button from '@mui/material/Button'
import { postComment } from '../../Services/posts'

const CommentForm = () => {
    const { form, handleInput, clear } = useForm({ body: '' })
    const {load, err, setLoading, setErr, setComments} = useContext(GlobalContext)
    const navigate = useNavigate()
  
   const onSubmit = (e) => {
       e.preventDefault()
        setLoading(true)
       postComment(form, setLoading, setComments, setErr, clear)
    }
  return (
    <Forms onSubmit={onSubmit}>
            <TextField
                name='body'
                color='secondary'
                onChange={handleInput}
                value={form.body}
                placeholder={'Adicionar comentário'}
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
            }}>Responder</Button>
            {load}
            {err}
        <Line/>
        </Forms>
  )
}

export default CommentForm