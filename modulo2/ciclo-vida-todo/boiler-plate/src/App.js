import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')}; 
`// Caso a tarefa seja "completa", a tarefa será riscada, senão não terá nenhum decoração

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Lavar a louça',
          completa: false // Indica se a tarefa está completa (true ou false)
        },

        {
          id: Date.now(), // Explicação abaixo
          texto: 'Estender a roupa',
          completa: true // Indica se a tarefa está completa (true ou false)
        }
      ],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {
   
    
  };

  // componentDidMount() {
  //   this.criaTarefa();
  // };

  onChangeInput = (event) => {
    this.setState({inputValue:event.target.value})
  }

  criaTarefa = () => {

    const novaTarefa ={
      id: Date.now(),
      texto:this.state.inputValue,
      completa:false
    }

    const novaListaTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas:novaListaTarefas})

  }

  selectTarefa = (id) => {
    //Esse id seria tipo o event? Ele tem uma vaga especifica no DOM?
    const selecionarTarefa = this.state.tarefas.filter((tarefa) => {
      return id === tarefa.id
 
    })

    this.setState({novaListaTarefas: selecionarTarefa})

  }

  onChangeFilter = (event) => {
    this.setState({filtro:event.target.value})

  }

  render() {

    // eu não sei quando colocar um bloco de código em baixo do render
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
          // eu entendi o que o switch case faz, mas não entendi como que o !tarefa.completa tras esse resultado
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
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            //são as tarefas que não escritas em uma lista desordenada (em baixo do filtro)
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                //NÃO SEI PORQUE FOI FEITO DESSA FORMA
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
