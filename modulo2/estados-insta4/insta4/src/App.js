import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state ={
    inputNome:'',
    inputPerfil:'',
    inputImagem:'',
    postNovo : {
      nomeUsuario:'',
      fotoUsuario:'',
      fotoPost:''
    }
  };

 adicionaPost = () => {
   const novoPost ={
  nomeUsuario: this.state.inputNome,
  fotoUsuario: this.state.inputPerfil,
  fotoPost: this.state.inputImagem,
  }
  this.state.postNovo = novoPost
 }
 onChangePostNome = (event) => {
  this.setState({
    inputNome: event.target.value,
  }) 
}
onChangePostPerfil = (event) => {
  this.setState({
    inputPerfil: event.target.value,
  }) 
}
onChangePostImg = (event) => {
  this.setState({
    inputImagem: event.target.value,
  }) 
}

  render() {
    
   
    return (
      <MainContainer>
        <Post post={this.state.postNovo}/>
        <form>
          <input value ={this.state.inputNome} onChange ={this.onChangePostNome} placeholder = 'Seu Nome'/>
          <input value ={this.state.inputPerfil} onChange ={this.onChangePostPerfil} placeholder = 'Sua foto'/>
          <input value ={this.state.inputImagem} onChange ={this.onChangePostImg}placeholder = 'Link da foto'/>
        </form>
      <button onClick={this.adicionaPost}/>
      </MainContainer>
    );
  }
}

export default App;
