import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Card = (props) => {

const[card, setCard] = useState([])

const getProfile = () => {
    
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthurgf/person')
    .then((response)=>{setCard([response.data.profile])})
    .catch((err)=> console.log(err))
}
useEffect(()=> {getProfile()},[])

  return (
    <div>
        {card.map((item)=>{
   return <div key={item.id}>
      <h2>{item.name}</h2>
        <img src={item.photo} alt={item.photo_alt}/>
        <p>{item.bio}</p>
        <h4>{item.age}</h4>
        <button onClick={()=>{props.like(item.id); getProfile()}}>Like</button>
        <button onClick={getProfile}>Dislike</button>
    </div>})}
    </div>
  )
}

export default Card