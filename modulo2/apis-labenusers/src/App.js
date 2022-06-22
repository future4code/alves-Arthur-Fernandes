
import React from 'react';
import axios from 'axios';
import TelaCadastro from './Components/TelaCadastro';
import TelaUsuario from './Components/TelaUsuario';

class App extends React.Component {
  state = {

    logado: '',
    usuarios: [],
  }
  componentDidMount (){
    this.showUsers()
  }
  showUsers = () => {
    axios.get(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',

      {
        headers: {
          Authorization: "arthur-fernandes-alves"
        }
      })
      .then((resposta) => {
    
        this.setState({ usuarios: resposta.data })
      })
  }
  showUserTela = (tela) => {
    this.setState({ logado: tela })
  }
  
  userInterface = () => {
    switch (this.state.logado) {
        
      case "telaUsuário":
        return <div>
          <TelaUsuario 
          usuarios={this.state.usuarios} 
          pegaUsuarios={this.showUsers} 
          detalhe={this.showUserTela} />
        </div>
     

      default:
        return<div>
          <TelaCadastro />
          <button onClick={() => {this.showUserTela('telaUsuário')}}>Usuários</button>
        </div>
       
    }
  }
    render() {
      return (
        <>
          {this.userInterface()} 
        </>
      );
    }
  }

export default App;
