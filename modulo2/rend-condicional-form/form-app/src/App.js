import React from 'react';
import './App.css';
import styled from 'styled-components'
import Etapa1 from './components/Etapa01/Etapa1'
import Etapa2 from './components/Etapa02/Etapa2'
import Etapa3 from './components/Etapa03/Etapa3'
import Etapa4 from './components/Etapa04/Etapa4'

const Container = styled.div`
  display:flex;
  justify-content: center;

`;

const Botao = styled.div`
  display:flex;
  justify-content:center;
`

class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />


      case 2:
        return <Etapa2 />


      case 3:
        return <Etapa3 />


      default:
        return <Etapa4 />

    }
  }

  render() {
    
    // const proximaEtapa = () => {
    //   this.setState({ 
    //     etapa: this.state.etapa + 1 })
    // }


    return (
      <div>

        <Container>
          {this.renderizaEtapa()}
        </Container>

        <Botao>
          <button>Próxima Etapa</button>
          </Botao>

      </div>
    );
  }
}

export default App;
