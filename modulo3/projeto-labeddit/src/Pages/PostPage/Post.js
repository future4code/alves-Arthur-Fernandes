import React, { useContext, useEffect } from 'react'
import Header from '../../Components/Header'
import GlobalContext from '../../Global/GlobalContext'
import { goToLoginPage } from '../../Routes/coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import CommentForm from './CommentForm'
import {CommentBox} from './PostStyle'
import { getComments } from '../../Services/posts'

const Post = () => {
  const navigate = useNavigate()
  const params = useParams
  const {logged, comments, setLoading, setComments, setErr} = useContext(GlobalContext)
  console.log(params)
  // useEffect(()=>{getComments()},[])
  useEffect(() => {(localStorage.getItem('token') === null) && goToLoginPage(navigate)}, [logged])
  return (
    <div>
      <Header/>
      <CommentForm/>
      {comments.map((comment)=>{
        return <CommentBox>

        </CommentBox>
      })}
      Post</div>
  )
}

export default Post