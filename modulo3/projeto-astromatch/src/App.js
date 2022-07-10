import Header from "./Components/Header";
import TelaMatch from "./Screen/TelaMatch"
import TelaInicial from "./Screen/TelaInicial"
import React,{useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.main`
width: 35vw;
display: flex;
font-family: sans-serif;
flex-direction:column;
text-align:center;
border-radius: 15px;
padding: 1vh;
min-height: 60vh;
color:#c4ccd3;
background-color:#41474c;
`

function App() {
  const [tela, setTela] = useState(1)
  
const switchScreen = (x) => {
  setTela(x)
}  
const clearMatches = () => {
    
  axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthurgf/clear')
  .then((response)=>{(response.data.message=='Success')&& alert('Matches resetados com sucesso!')})
  .catch((err)=> console.log(err))
}
let screen 
  switch (tela) {
    case 2:
     screen = <Main>
      <Header change={switchScreen} tela={tela}/>
      <TelaMatch clearMatches={clearMatches}/>
      </Main>
      break;
  
    default:
     screen = <Main>
      <Header change={switchScreen} tela={tela}/>
      <TelaInicial clearMatches={clearMatches}/>
      </Main>
      break;
  }
  
  return (
    <>
      {screen}
    </>
  );
}

export default App;
