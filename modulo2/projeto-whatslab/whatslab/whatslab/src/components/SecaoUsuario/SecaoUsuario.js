import React from 'react';
import styled from 'styled-components';

const BoxDisplay = styled.div `
height: 80vh;
width : 50vw;
font-size : 1rem;
font-family : Roboto;
display : flex;
background-color:#8aa0cae2;
`
const BalaoDisplay = styled.li `
 border-radius: 20px;
 box-shadow: 5px 5px 5px grey;
 list-style: none;
 padding : 10px;
 background-color:#8aa0cae2;
 margin : 20px 0 ;
`
const MainContainer = styled.div `
margin: 2rem 0;
display : flex;
width: 100%;
flex-direction: column;
align-items : center;
justify-content: center;
`
const BoxUsuario = styled.div `
display : flex;
width:50vw;
height:3vh;
background-color:#8aa0cae2;
justify-content: space-between;
`
const InputMensagem = styled.input`
width: 30vw;
background-color:#8aa0cacb;
font-family : Roboto;
`
const InputUser = styled.input `
background-color:#8aa0cacb;
font-family : Roboto;
`
const BotaoSend = styled.button `
background-color:#8aa0cacb;
font-family : Roboto;
width : 5vw;
`

export default class SecaoUsuario extends React.Component {
    state = {
        valueUsuario: '',
        valueMensagem: '',
        arrayMensagens: [],

    }
    onChangeUsuario = (event) => {
        this.setState({ valueUsuario: event.target.value })
    }
    onChangeMensagem = (event) => {
        this.setState({ valueMensagem: event.target.value })
    }
    onClickBotao = () => {
        this.setState({ valueMensagem: '' })
        this.setState({ valueUsuario: '' })
        this.setState({ arrayMensagens: [...this.state.arrayMensagens, <BalaoDisplay>{this.state.valueUsuario} : {this.state.valueMensagem}</BalaoDisplay>] })
    }
    render() {
        return (
            <MainContainer>
                <BoxDisplay>
                    <ul>
                        {[this.state.arrayMensagens]}
                    </ul>
                </BoxDisplay>
                <BoxUsuario>
                    <InputUser value={this.state.valueUsuario} onChange={this.onChangeUsuario} placeholder={'Nome de Usuário'} />
                    <InputMensagem value={this.state.valueMensagem} onChange={this.onChangeMensagem} placeholder={'Mensagem'} />
                    <BotaoSend onClick={this.onClickBotao}>Enviar</BotaoSend>
                </BoxUsuario>
            </MainContainer>
        );
    }
}