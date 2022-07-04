import React from "react";
import axios from "axios";
import styled from "styled-components";
import x from "../img/x.png"

const BoxDetalhe = styled.div `
    display: flex;
    flex-direction: column;
    section{
        display: flex;
        flex-direction:column;
        gap: 10px;
        margin:10px 0 ;
        width:100%;
        align-items: center;
    }
    input{
        border: none;
        margin: 5px;
        height: 30px;
        width: 80%;
        background-color: #ae97e0;
        font-size:100%;
        border-radius:10px;
    }
    button{
        color:#ae97e0;
        background-color:#18092b;
        height:3vh;
        width: 6vw;
        margin-top:2vh;
    }
    label{
        font-size:90%;
        font-weight:bold;
        margin: 10px 0;
    }
`

export default class DetalheMusica extends React.Component {
    state = {
        musicas: [],
        novaMusicaNome: '',
        novaMusicaArt: '',
        novaMusicaUrl: '',
    }
    componentDidMount() {
        this.getPlaylistTracks(this.props.id)
    }
    
    getPlaylistTracks = (id) => {
       
          axios.get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,

                {
                    headers: {
                        Authorization: "arthur-fernandes-alves"
                    }
                })
        .then ((response)=>{
            this.setState({musicas : response.data.result.tracks})
         } )
        .catch ((err)=> {
            console.log(err.response)
        })
    }
    handleInputMusicaNome = (e) => {
        this.setState({novaMusicaNome: e.target.value})
    }
    handleInputMusicaArt= (e) => {
        this.setState({novaMusicaArt: e.target.value})
    }
    handleInputMusicaURL= (e) => {
        this.setState({novaMusicaUrl: e.target.value})
    }
    enviarMusica = async (id) => {
        const body = {
            name: this.state.novaMusicaNome,
            artist: this.state.novaMusicaArt,
            url: this.state.novaMusicaUrl
        }
      
          try {
       const response =  await axios.post(
         `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,body,
      
         {
           headers: {
             Authorization: "arthur-fernandes-alves"
           }
         }) 
         this.getPlaylistTracks(this.props.id)
         this.setState({novaMusicaArt : '' , novaMusicaNome:'', novaMusicaUrl:''})
         } catch (err) {
             console.log (err.response)
         }
      }
      removeTrack = async (idMusica) => {
        try {
     const response =  await axios.delete(
       `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${idMusica}`,
    
       {
         headers: {
           Authorization: "arthur-fernandes-alves"
         }
       }) 
       this.getPlaylistTracks(this.props.id)
       } catch (err) {
           console.log (err.response)
       }
    }
    render() {
        return (
            <BoxDetalhe>
            <h4>{this.props.name}</h4>
                        {this.state.musicas.map((musica) => {
                            return <section key={musica.id}>
                                <div>
                                <h4>{musica.name}</h4>
                                <h5>{musica.artist}</h5>
                            <img onClick={()=>this.removeTrack(musica.id)} src={x}/>
                            </div>
                                <audio controls>
                                    <source src={musica.url} type="audio/mp3"/>
                                </audio>
                            </section>
                        })}
            <label>Nome da Música</label>
            <input
            value={this.state.novaMusicaNome}
            onChange={this.handleInputMusicaNome}
            />
            <label>Artista</label>
            <input
            value={this.state.novaMusicaArt}
            onChange={this.handleInputMusicaArt}
            />
             <label>URL</label>
            <input
            value={this.state.novaMusicaUrl}
            onChange={this.handleInputMusicaURL}
            />
            <button onClick={()=> this.enviarMusica(this.props.id)}>Adicionar</button>
            </BoxDetalhe>
         )
    }
}