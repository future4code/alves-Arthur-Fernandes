import React from 'react'
import Card from '../Components/Card'
import axios from 'axios'

const TelaInicial = () => {
  
    const likeProfile = (id) => {
    const body = {
        id: id,
	    choice: true
    }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthurgf/choose-person',body)
        .then((response)=>{console.log(response.data)})
        .catch((err)=> console.log(err))
    }
    const clearMatches = () => {
    
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthurgf/clear')
        .then((response)=>{console.log(response.data.message)})
        .catch((err)=> console.log(err))
    }
   
    return (
    <div>
         <button onClick={clearMatches}>Limpar Matches</button>
        <Card like={likeProfile}/>
    </div>
  )
}

export default TelaInicial