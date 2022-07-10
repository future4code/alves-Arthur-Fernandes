import React,{useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import iconL from '../img/coracao.png'
import iconL1 from '../img/coracao1.png'
import iconX from '../img/x.png'
import iconX1 from '../img/x1.png'
import iconC from '../img/lixo.png'
import iconC1 from '../img/lixo1.png'


const ImageProfile = styled.img`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
`
const BoxCard = styled.div` 
 display: flex;
 height: 100%;
 flex-direction: column;
 justify-content: space-evenly;
  align-items: center;
  min-width:100%;
`
const Container = styled.div`
  height: 57.6vh;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
`
const ButtonSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  justify-self:flex-end;
`
const Button = styled.button`
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
  width:10vw;
  height: 5vh;
  :hover{
    background-color:#BC8184;
    color: #41474c;
  }
  img{width:2vw;}
`

const Card = (props) => {

const[card, setCard] = useState({})
const[iconLike, seticonLike] = useState(false)
const[iconReject, seticonReject] = useState(false)
const[iconClear, setIconClear] = useState(false)

const getProfile = () => {
    
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthurgf/person')
    .then((response)=>{setCard(response.data.profile)})
    .catch((err)=> console.log(err))
}
useEffect(()=> {getProfile()},[])

let iconeLike 
iconLike ? iconeLike = iconL1: iconeLike = iconL
let iconeX
iconReject ? iconeX = iconX1 : iconeX = iconX


const handleIconL = () =>{
  seticonLike(!iconLike)
}
const handleIconX = () =>{
  seticonReject(!iconReject)
}
const handleIconC = () => {
  setIconClear(!iconClear)
}

let iconCl 
iconClear ?  iconCl = iconC1 : iconCl = iconC

  return (
    <Container>
        {card ? <BoxCard key={card.id}>
          <h2>{card.name} {card.age}</h2>
        <ImageProfile src={card.photo} alt={card.photo_alt}/>
        <p>{card.bio}</p>
        <ButtonSection>
        <Button 
        onClick={()=>{props.like(card.id); getProfile()}}
        onMouseEnter={handleIconL}
        onMouseLeave={handleIconL}
        ><img src={iconeLike}/></Button>
        <Button onClick={getProfile}
        onMouseEnter={handleIconX}
        onMouseLeave={handleIconX}
        ><img src={iconeX}/></Button>
        </ButtonSection>
    </BoxCard> : <BoxCard> 
      <h3>Desculpe!</h3>
      <p>Acabaram os perfis</p>
      <Button 
        onClick={()=>{props.clearMatches();getProfile()}}
        onMouseEnter={handleIconC}
        onMouseLeave={handleIconC}
        ><img src={iconCl} alt='Limpar Matches'/>Limpar Matches</Button>
    </BoxCard>
}
    </Container>
  )
}

export default Card