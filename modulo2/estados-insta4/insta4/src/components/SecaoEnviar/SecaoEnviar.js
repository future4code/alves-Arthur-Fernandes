import React, { Component } from 'react'
import styled from 'styled-components'
import IconeFacebook from '../../img/facebook.png'
import IconeTwitter from '../../img/Twitter.png'
import IconeInstagram from '../../img/instagram.png'

const SendContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap : 2px;
    padding: 5px;
`
const IconeSend = styled.img`
    width: 30px;
    padding: 5px;
`
const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`
const InputComentario = styled.input`
    width: 80%;
    height: 20px;
    margin-right: 5px;
`
const Icones = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`

export class SecaoEnviar extends Component {

    state = {
        comentario: ''
    }
    onChangeComentario = (event) => {
        this.setState({
            comentario: event.target.value,
        })
    }

    onClickCompartilhar = (event) => {
        console.log(`Post compartilhado no ${event.target.alt} com a mensagem : ${this.state.comentario}`)
        this.setState({ comentario : ''})
    }


    render() {
        return <SendContainer>
            <Icones>
                <IconeSend onClick={this.onClickCompartilhar} src={IconeTwitter} alt='Twitter' />
                <IconeSend onClick={this.onClickCompartilhar} src={IconeInstagram} alt='Instagram' />
                <IconeSend onClick={this.onClickCompartilhar} src={IconeFacebook} alt='Faceebook' />
            </Icones>
            <InputComentario
                placeholder={'Comentário'}
                value={this.state.comentario}
                onChange={this.onChangeComentario} />
        </SendContainer>
    }
}
