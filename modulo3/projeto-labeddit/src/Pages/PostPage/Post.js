import React, { useContext, useEffect } from 'react'
import Header from '../../Components/Header'
import GlobalContext from '../../Global/GlobalContext'
import { goToLoginPage } from '../../Routes/coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import CommentForm from './CommentForm'
import {Box, CommentBox} from './PostStyle'
import { getComments, unvoteComment, voteComment } from '../../Services/posts'
import UpVote from '../../Assets/img/upvote.png'
import DownVote from '../../Assets/img/downvote.png'
import UpVoteF  from '../../Assets/img/upvoteFilled.png'
import DownVoteF from '../../Assets/img/downvoteFilled.png' 


const Post = () => {
  const navigate = useNavigate()
  const params = useParams()
  const {load, err, logged, comments, setLoading, setComments, setErr} = useContext(GlobalContext)
  console.log(params)
  useEffect(()=>{getComments(setLoading, setComments, setErr, params.id)},[])
  useEffect(() => {(localStorage.getItem('token') === null) && goToLoginPage(navigate)}, [logged])
  
  const onClickVote = (value, id, idPost) => {
    const body = {direction: value}
     voteComment(body, setLoading, setComments, setErr, id, idPost)
   }
   const onClickUnVote = (id, idPost) => {
      unvoteComment(setLoading, setComments, setErr, id, idPost)
    }

  return (
  <div>
    <Header/>
    <Box>
      <CommentForm/>
      {load}
      {err}
      {comments.map((comment)=>{
        return <CommentBox>
          <p>Enviado por : {comment.userId}</p>
            <h2>{comment.body}</h2>
            <div>
              {comment.userVote===1 ? 
              <button onClick = {()=> onClickUnVote(comment.id ,comment.postId)} ><img src={UpVoteF} /></button> 
              : <button onClick = {()=> onClickVote(1, comment.id, comment.postId)} ><img src={UpVote} /></button> }
              <h4>{comment.voteSum}</h4>
              {comment.userVote ===-1 ? 
                 <button onClick = {()=> onClickUnVote(comment.id, comment.postId)} ><img src={DownVoteF} /></button> 
                 : <button onClick = {()=> onClickVote(-1, comment.id, comment.postId)}><img src={DownVote} /></button> }
            </div>
        </CommentBox>
      })}
    </Box>
  </div>
  )
}

export default Post