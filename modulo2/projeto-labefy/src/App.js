
import React from "react";
import axios from "axios";
import styled from "styled-components";
import TelaPlaylists from "./Screens/TelaPlaylists";
import logo from "./img/logo.png"

const BoxGeral = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#372461;
  min-height: 100vh;
  width: 100%;
`
const Logo = styled.img `
  width:10vw;
`
function App() {
  return (
    <>
    <BoxGeral>
    <Logo src={logo}/>
     <TelaPlaylists/>
    </BoxGeral>
  </>);
}

export default App;
