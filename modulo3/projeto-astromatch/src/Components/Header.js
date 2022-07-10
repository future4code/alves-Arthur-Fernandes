import React, {useState} from 'react'
import iconeP from '../img/perfis.png'
import iconeP1 from '../img/perfis1.png'
import iconeM from '../img/matches.png'
import iconeM1 from '../img/matches1.png'
import styled from 'styled-components'

const Icon = styled.img`
  width: 1.5vw;
`
const HeaderStyle = styled.div`
  height:7%;
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
  :hover{
    background-color:#BC8184;
    color: #41474c;
  }
  @media (max-width:1000px) {
  p{display:none}
}
`

const Header = (props) => {
 const [icon, setIcon] = useState(false)
const handleIcon =()=> {
  setIcon(!icon)
 } 
 let buttonIcon
 if (icon && props.tela==2) {
   buttonIcon=iconeP1 
 }else if (!icon && props.tela==2){
    buttonIcon=iconeP
 }else if (icon && props.tela==1){
    buttonIcon=iconeM1
 }else{
    buttonIcon=iconeM
 }
 return (
    
    <HeaderStyle>{
       <Button 
       onClick={()=>{ if(props.tela ==2){props.change(1)}else{props.change(2)}}} 
       onMouseEnter={handleIcon} 
       onMouseLeave={handleIcon}>
        <Icon src={buttonIcon}/>{props.tela ==2 ? <p>Perfis</p> : <p>Matches</p>}
        </Button>
        }
    </HeaderStyle>
  )
}

export default Header