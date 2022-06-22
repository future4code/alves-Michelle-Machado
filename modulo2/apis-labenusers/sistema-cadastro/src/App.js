import React from 'react';
import Cadastro from './components/cadastro/cadastro';
import Detalhe from './components/detalhes/detalhes';
import './App.css';

export default class App extends React.Component {

  state = {
    paginaAtual: <Cadastro />
  }

  render() {

    const changePage = () => {
      if(this.state.paginaAtual === <Cadastro />){
         this.setState({paginaAtual: <Detalhe />}) 

      } else {
          <Cadastro />
      }
    }

    return (
      <div >

        <button onClick={changePage}>Trocar de tela</button>
        
        {this.state.paginaAtual}
      </div>
    );
  }
}

