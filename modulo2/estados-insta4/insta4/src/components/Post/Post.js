import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeBookmarkPreto from '../../img/bookmark_black_24dp.svg'
import iconeBookmark from '../../img/bookmark_border_black_24dp.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeEnviar from '../../img/send_black_24dp.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoEnviar} from '../SecaoEnviar/SecaoEnviar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    enviando: false,
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando          
    })
  }
  onClickEnviar = () => {
    this.setState({
      enviando: !this.state.enviando          
    })
  }

  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

 
  

  render() {
    let iconeCurtida
    let curtidas = 1

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
      this.state.numeroCurtidas++
      curtidas = this.state.numeroCurtidas
    } else {
      iconeCurtida = iconeCoracaoBranco
      this.state.numeroCurtidas--
      this.state.numeroCurtidas = curtidas-1
    }

    let iconeSalvar

    if(this.state.salvo) {
      iconeSalvar = iconeBookmarkPreto
    }else {
      iconeSalvar = iconeBookmark
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    
    let componenteEnviar

    if(this.state.enviando) {
      componenteEnviar = <SecaoEnviar />
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar}
        />

        <IconeComContador
          icone={iconeEnviar}
          onClickIcone={this.onClickEnviar}
        />
      </PostFooter>
      {componenteComentario}
      {componenteEnviar}
    </PostContainer>
  }
}

export default Post