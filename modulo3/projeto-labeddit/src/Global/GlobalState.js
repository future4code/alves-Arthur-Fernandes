
import React, { useEffect, useState } from 'react';
import GlobalContext from './GlobalContext';
import CircularProgress from '@mui/material/CircularProgress';

const GlobalState = (props) => {
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState('')
    const [logged, setLogged] = useState(false)
    const [posts, setPosts] = useState ([])
    const [comments, setComments] = useState ([])


    let load
  useEffect(
    ()=>{if (loading) {
    load = <CircularProgress color="primary" />
    } else {load = <></>}},[loading]
  )
    const valor = {
        loading,
        setLoading,
        err,
        setErr,
        load,
        logged,
        setLogged,
        posts,
        setPosts,
        comments,
        setComments,
      }
  return (
    <GlobalContext.Provider value={valor}>
    {props.children}
   </GlobalContext.Provider>
  )
}

export default GlobalState