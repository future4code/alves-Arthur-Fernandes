import React from 'react'
import Card from '../Components/Card'
import axios from 'axios'

const TelaInicial = (props) => {
  
    const likeProfile = (id) => {
    const body = {
        id: id,
	    choice: true
    }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthurgf/choose-person',body)
        .then((response)=>{response.data.isMatch&& alert('É um Match!')})
        .catch((err)=> console.log(err))
    }

    return (
        <Card like={likeProfile} clearMatches={props.clearMatches}/>
  )
}

export default TelaInicial