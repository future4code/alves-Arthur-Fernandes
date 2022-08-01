import React, { useContext, useEffect } from 'react'
import Header from '../../Components/Header'
import GlobalContext from '../../Global/GlobalContext'
import { goToLoginPage, goToPost } from '../../Routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { getPosts, unVotePost, votePost } from '../../Services/posts'
import PostForm from './PostForm'
import { Box, PostBox, IconRow } from './FeedStyle'
import Comments from '../../Assets/img/comments.png'
import UpVote from '../../Assets/img/upvote.png'
import DownVote from '../../Assets/img/downvote.png'
import UpVoteF  from '../../Assets/img/upvoteFilled.png'
import DownVoteF from '../../Assets/img/downvoteFilled.png'






const Feed = () => {
  const navigate = useNavigate()
  const { logged, load, posts, setPosts, setLoading, setErr, err } = useContext(GlobalContext)
  useEffect(() => { (localStorage.getItem('token') === null) && goToLoginPage(navigate) }, [logged])
  useEffect(() => {
    getPosts(setLoading, setPosts, setErr)
  }, [])
  const onClickVote = (value, id) => {
   const body = {direction: value}
    votePost(body, setLoading, setPosts, setErr, id)
  }
  const onClickUnVote = ( id) => {
     unVotePost(setLoading, setPosts, setErr, id)
   }

  return (
    <div>
      <Header />
      <Box>
        <PostForm />
        {posts.map((post) => {
          return <PostBox key={post.id}>
            <div onClick={()=>goToPost(navigate, post.id)}>
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
              <div>
              <img src={Comments} />
              <h4>{post.commentCount}</h4>
              </div>
            </IconRow>
          </PostBox>
        })}
        {load}
        {err}
      </Box>
    </div>
  )
}

export default Feed