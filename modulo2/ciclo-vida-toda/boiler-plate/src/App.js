import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  margin: 10px;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const DisplayTarefas = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`
class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate() {
    localStorage.setItem('lista', JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    let lista
    {
      localStorage.getItem('lista') ?
      lista = localStorage.getItem('lista') : lista = "[]"
    }
    lista = JSON.parse(lista)
    this.setState({ tarefas: lista })
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    }
    const novasTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({ tarefas: novasTarefas })
  }
  removeItems = (id) => {
    const removeTarefa = this.state.tarefas.filter((objeto) => {
      if (objeto.id !== id) {
        return true
      } else  {return false}
    })
    this.setState ({tarefas : removeTarefa})
  }
  selectTarefa = (id) => {
    const inverteTarefa = this.state.tarefas.map((objeto) => {
      if (objeto.id === id) {
        let tarefa = {
          ...objeto,
          completa: !objeto.completa,
        }

        return tarefa
      } else {
        return objeto
      }
    })
    this.setState({ tarefas: inverteTarefa })

  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <DisplayTarefas>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <>
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
              <button onClick={()=>this.removeItems(tarefa.id)}>Remover</button>
              </>
            )
          })}
        </TarefaList>
        </DisplayTarefas>
      </div>
    )
  }
}

export default App
