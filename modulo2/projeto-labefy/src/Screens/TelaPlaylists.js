import React from "react";
import axios from "axios";
import DetalheMusica from "./DetalheMusica"
import styled from "styled-components";
import x from "../img/x.png"
import AdicionaPlaylist from "../Components/AdicionaPlaylist";

const Container = styled.div `
    background-color:#9659e6;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:2vh;
    font-family: sans-serif;
    font-size:1.5rem;
    padding:1.5rem;
`
const Box = styled.div `
    width: 100%;
    min-height: 80vh;
    margin-top:2%;
    display: flex;
    justify-content: center;
`
const Display = styled.div `
    padding: 1rem;
    display: flex;
    flex-direction:column;
    width:40%;
    border: solid #372461;
    border-radius:10px;
    img {height: 20px;
         width: 20px;}
    div{display:flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
        align-items:center;}
    
`
const Geral = styled.div `
width:100%;
`
export default class TelaPlaylists extends React.Component {
    state = {
        playlists: [],
        detalhe: false,
        id: '',
    }

    getAllPlaylist = () => {

        axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',

            {
                headers: {
                    Authorization: "arthur-fernandes-alves"
                }
            })
            .then((response) => {

                this.setState({ playlists: response.data.result.list })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    deletePlaylist = async (id) => {
        try {
            await axios.delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,

                {
                    headers: {
                        Authorization: "arthur-fernandes-alves"
                    }
                })
            this.getAllPlaylist()
        } catch (err) {
            console.log(err.response)
        }
    }

    componentDidMount() {
        this.getAllPlaylist()
    }
    handleDisplay = (id) => {
        this.setState({ detalhe: !this.state.detalhe, id: id })
    }
    mostraDetalhe = () => {
        switch (this.state.detalhe) {
            case true:
                return <Container>
                    <h3> Suas Playlists: </h3>
                    {this.state.playlists.map((playlist) => {
                        return <Display key={playlist.id}>
                            <div>
                            <h4 onClick={() => this.handleDisplay(playlist.id)}>{playlist.name}</h4>
                            <img src={x} onClick={() => this.deletePlaylist(playlist.id)}/>
                            </div>
                           <ul>
                            {this.state.id === playlist.id && <DetalheMusica id={playlist.id} name={playlist.name} />}
                            </ul>
                        </Display>
                    })}
                </Container>
            default:
                return <Container>
                    <h3> Suas Playlists: </h3>
                    {this.state.playlists.map((playlist) => {
                        return <Display key={playlist.id}>
                            <div>
                            <h4 onClick={() => this.handleDisplay(playlist.id)}>{playlist.name}</h4>
                            <img src={x} onClick={() => this.deletePlaylist(playlist.id)}/>
                            </div>
                        </Display>
                    })}


                </Container>
        }
    }
    render() {

        return (<Geral>
            <Box>
                {this.mostraDetalhe()}
            </Box>
            <AdicionaPlaylist atualiza={this.getAllPlaylist()}/>
            </Geral>
        )
    }
}