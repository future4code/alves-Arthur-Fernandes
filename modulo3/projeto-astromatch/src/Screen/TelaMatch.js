import React, {useEffect, useState} from 'react'
import axios from 'axios'

const TelaMatch = () => {
    
const [matches, setMatches] = useState([])    
    const getMatches = () => {
    
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthurgf/matches')
        .then((response)=>{setMatches(response.data.matches)})
        .catch((err)=> console.log(err))
    }

    const clearMatches = () => {
    
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthurgf/clear')
        .then((response)=>{console.log(response.data.message)
            getMatches()})
        .catch((err)=> console.log(err))
    }
useEffect(()=>{
    getMatches()
},[])
    return (
    <div>
        <button onClick={clearMatches}>Limpar Matches</button>
        {matches.map((item)=>{
            return <div key={item.id}>
            <h2>{item.name}</h2>
              <img src={item.photo} alt={item.photo_alt}/>
              <p>{item.bio}</p>
              <h4>{item.age}</h4>
          </div>
        })}

    </div>
  )
}

export default TelaMatch