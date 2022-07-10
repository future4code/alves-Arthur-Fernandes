import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import iconC from '../img/lixo.png'
import iconC1 from '../img/lixo1.png'


const ImageMatch = styled.img`
width: 5vw;
height: 5vw;
border-radius: 50%;
margin: 1vh;
`
const Button = styled.button `
  display:flex;
  align-items:center;
  gap:0.5vw;
  font-family:sans-serif;
  border:none;
  justify-content: center;
  border-radius: 20px;
  color: #c4ccd3;
  background-color: #C03F47;
  padding:5px 10px;
  width:7vw;
  align-self: center;
  :hover{
    background-color:#BC8184;
    color: #41474c;
  }
  img{ width:1vw;}
`
const DisplayMatches = styled.div `
    display: flex;
    flex-direction: column-reverse;
    gap:2vh;
`

const TelaMatch = (props) => {
    
const [matches, setMatches] = useState([]) 
const [iconClear, setIconClear] = useState(false)    

    const getMatches = () => {
    
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthurgf/matches')
        .then((response)=>{setMatches(response.data.matches)})
        .catch((err)=> console.log(err))
    }


useEffect(()=>{
    getMatches()
},[])
const handleIconC = () => {
    setIconClear(!iconClear)
}

let iconCl 
iconClear ?  iconCl = iconC1 : iconCl = iconC

    return (
    <DisplayMatches>
        <Button 
        onClick={props.clearMatches}
        onMouseEnter={handleIconC}
        onMouseLeave={handleIconC}
        ><img src={iconCl} alt='Limpar Matches'/>Limpar Matches</Button>
        {matches.map((item)=>{
            return <div key={item.id}>
            <h2>{item.name}   {item.age}</h2>
              <ImageMatch src={item.photo} alt={item.photo_alt}/>
              <hr></hr>
          </div>
        })}

    </DisplayMatches>
  )
}

export default TelaMatch