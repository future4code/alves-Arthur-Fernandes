import React, { useContext, useEffect } from 'react'
import Header from '../../Components/Header'
import GlobalContext from '../../Global/GlobalContext'
import { goToLoginPage } from '../../Routes/coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import CommentForm from './CommentForm'
import {Box, CommentBox, IconRow, PostBox} from './PostStyle'
import { getComments, unvoteComment, unVotePost, voteComment, votePost } from '../../Services/posts'
import UpVote from '../../Assets/img/upvote.png'
import DownVote from '../../Assets/img/downvote.png'
import UpVoteF  from '../../Assets/img/upvoteFilled.png'
import DownVoteF from '../../Assets/img/downvoteFilled.png' 


const Post = () => {
  const navigate = useNavigate()
  const params = useParams()
  const {load, posts, err, logged, comments,setPosts , setLoading, setComments, setErr} = useContext(GlobalContext)

  useEffect(()=>{getComments(setLoading, setComments, setErr, params.id)},[])
  useEffect(() => {(localStorage.getItem('token') === null) && goToLoginPage(navigate)}, [logged])
  const postUnico = () => {
    return posts.filter((post)=> post.id===params.id)
  }
  const onClickVoteC = (value, id, idPost) => {
    const body = {direction: value}
     voteComment(body, setLoading, setComments, setErr, id, idPost)
   }
   const onClickUnVoteC = (id, idPost) => {
      unvoteComment(setLoading, setComments, setErr, id, idPost)
    }
    const onClickVote = (value, id) => {
      const body = {direction: value}
       votePost(body, setLoading, setPosts, setErr, id)
     }
     const onClickUnVote = ( id) => {
        unVotePost(setLoading, setPosts, setErr, id)
      }

  return (
  <div>
    <Header/>
    <Box>
        {postUnico().map((post)=>{
          return <PostBox id={post.id}>
            <div>
            <p>Enviado por {post.username}</p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
            <IconRow>
              <div>
              {post.userVote===1 ? 
              <button onClick = {()=> onClickUnVote(post.id)} ><img src={UpVoteF} /></button> 
              : <button onClick = {()=> onClickVote(1, post.id)} ><img src={UpVote} /></button> }
              <h4>{post.voteSum}</h4>
              {post.userVote ===-1 ? 
                 <button onClick = {()=> onClickUnVote(post.id)} ><img src={DownVoteF} /></button> 
                 : <button onClick = {()=> onClickVote(-1, post.id)}><img src={DownVote} /></button> }
              </div>
            </IconRow>
          </PostBox>
        })}
      <CommentForm/>
      {load}
      {err}
      {comments.map((comment)=>{
        return <CommentBox>
          <p>Enviado por : {comment.userId}</p>
            <h2>{comment.body}</h2>
            <div>
              {comment.userVote===1 ? 
              <button onClick = {()=> onClickUnVoteC(comment.id ,comment.postId)} ><img src={UpVoteF} /></button> 
              : <button onClick = {()=> onClickVoteC(1, comment.id, comment.postId)} ><img src={UpVote} /></button> }
              <h4>{comment.voteSum}</h4>
              {comment.userVote ===-1 ? 
                 <button onClick = {()=> onClickUnVoteC(comment.id, comment.postId)} ><img src={DownVoteF} /></button> 
                 : <button onClick = {()=> onClickVoteC(-1, comment.id, comment.postId)}><img src={DownVote} /></button> }
            </div>
        </CommentBox>
      })}
    </Box>
  </div>
  )
}

export default Post