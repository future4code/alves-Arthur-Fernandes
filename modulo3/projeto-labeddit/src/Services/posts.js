import { BASE_URL } from '../Constants/url'
import axios from 'axios'
import { clear } from '@testing-library/user-event/dist/clear'




export const getPosts = (setLoading, setPosts, setErr) => {
    const token = localStorage.getItem('token')
    const header = {
        Authorization: token
}
    axios.get(`${BASE_URL}posts`, {headers : header})

      .then((resp) => {
        console.log(resp);
        setPosts(resp.data);
      setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setErr(err.response.data.message)
      })
  }
  
export const getComments = (setLoading, setPosts, setErr,id) => {
    const token = localStorage.getItem('token')
    const header = {
        Authorization: token
}
    axios.get(`${BASE_URL}posts/${id}`, {headers : header})

      .then((resp) => {
        console.log(resp);
        setPosts(resp.data);
      setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setErr(err.response.data.message)
      })
  }

export const postPost = (body, setLoading, setPosts, setErr, clear) => {
    const token = localStorage.getItem('token')
    const header = {
        Authorization: token
}
    axios.post(`${BASE_URL}posts`,body , {headers : header})

      .then((resp) => {
            console.log(resp);
            getPosts(setLoading, setPosts, setErr);
            setLoading(false)
            clear()
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        clear()
        setErr(err.response.data.message)
      })
  }
  export const votePost = (body, setLoading, setPosts, setErr,id) => {
    const token = localStorage.getItem('token')
    const header = {
        Authorization: token
}
    axios.post(`${BASE_URL}posts/${id}/votes`,body , {headers : header})

      .then((resp) => {
            console.log(resp);
            getPosts(setLoading, setPosts, setErr);
            setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setErr(err.response.data.message)
      })
  }

  export const unVotePost = (setLoading, setPosts, setErr,id) => {
    const token = localStorage.getItem('token')
    const header = {
        Authorization: token
}
    axios.delete(`${BASE_URL}posts/${id}/votes`, {headers : header})

      .then((resp) => {
            console.log(resp);
            getPosts(setLoading, setPosts, setErr);
            setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setErr(err.response.data.message)
      })
  }

  export const postComment = (body, setLoading, setPosts, setErr, clear) => {
    const token = localStorage.getItem('token')
    const header = {
        Authorization: token
}
    axios.post(`${BASE_URL}posts`,body , {headers : header})

      .then((resp) => {
            console.log(resp);
            setLoading(false)
            clear()
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        clear()
        setErr(err.response.data.message)
      })
  }