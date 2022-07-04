import React from "react";
import axios from "axios";
import styled from "styled-components";

const BoxAdd = styled.div `
padding: 1rem;
font-size:2rem;
font-family:sans-serif;
color:#AE97E0;
min-height:10vh;
display: flex; 
flex-direction: column;
align-items: center;
    input{
        height:4vh;
        font-size:100%;
        width: 20vw;
        border-radius:10px;
        background-color:#AE97E0;
        margin: 10px 0;
    }
    button{
        height:4vh;
        font-size:60%;
        width: 9vw;
        border-radius:10px;
        background-color:#AE97E0;
        margin: 10px 0;
    }
`

export default class AdicionaPlaylist extends React.Component {
    state = {
        name: ''
    }
    addPlaylist = async (nomePlaylist) => {
        const body = {
           name: nomePlaylist
      }
      
          try {
       await axios.post(
         `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,body,
      
         {
           headers: {
             Authorization: "arthur-fernandes-alves"
           }
         })
         this.props.atualiza()
         this.setState({name: ''})
         } catch (err) {
             console.log (err.response)
         }
      }
      
   handleInputPlaylist = (e)=> {
    this.setState({name: e.target.value})
   }
    render() {
        return (
            <BoxAdd>
                <label>Nova Playlist</label>
                <input
                    value={this.state.name}
                    onChange = {this.handleInputPlaylist}
                />
                <button onClick = {()=> this.addPlaylist(this.state.name)}>Adicionar Playlist</button>
            </BoxAdd>
        )
    }
}