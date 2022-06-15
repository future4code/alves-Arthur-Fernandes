import React from 'react';
import styled from 'styled-components';
import Etapa2 from './pages/Etapa2'
import Etapa3 from './pages/Etapa3'
import EtapaFinal from './pages/EtapaFinal'


const Main = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
 
`
const Etapas = styled.div `
  margin : 5vh;
  text-align: center;
`
class App extends React.Component {
  state = {
    value: "",
    etapa: 1,
  }
  onClickProxima = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }
  onChangeEnsino = (event) => {
    this.setState({ value: event.target.value })
  }
  etapa1 = () => {
    return (<>
      <h1>Etapa 1: Dados Gerais</h1>
      <p>1. Qual o seu nome?</p>
      <input />
      <p>2. Qual a sua idade?</p>
      <input />
      <p>3. Qual o seu email?</p>
      <input />
      <p>4. Qual a sua escolaridade</p>
      <select onChange={this.onChangeEnsino}>
        <option value="Médio Incompleto">Ensino Médio Incompleto</option>
        <option value="Medio Completo">Ensino Médio Completo</option>
        <option value="Superior Incompleto">Ensino Superior Incompleto</option>
        <option value="Superior Completo">Ensino Superior Completo</option>
      </select>
    </>)
  }
  render() {
    const opcao1 = this.state.value === "Superior Completo" || this.state.value === "Superior Incompleto"
    return (
      <Main>
        <Etapas>
          {this.state.etapa === 1 && this.etapa1()}
          {this.state.etapa === 2 && opcao1 ? <Etapa2 /> : <></>}
          {this.state.etapa === 2 && opcao1 === false ? <Etapa3 /> : <></>}
          {this.state.etapa === 3 && opcao1 ? <Etapa3 /> : <></>}
          {this.state.etapa === 3 && opcao1 === false ? <EtapaFinal /> : <></>}
          {this.state.etapa >3 && <EtapaFinal />}
        </Etapas>
          {(this.state.etapa < 3 && opcao1 === false) && <button onClick={this.onClickProxima}>Próxima</button>}
          {(this.state.etapa < 4 && opcao1) && <button onClick={this.onClickProxima}>Próxima</button>}
      </Main>
    );
  }
}

export default App;
