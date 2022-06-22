import React from 'react';
import Cadastro from './components/cadastro/cadastro';
import Lista from './components/lista/lista';
import './App.css';

export default class App extends React.Component {

  state = {
    paginaAtual: "cadastro"
  }

    tela = () => {
      switch(this.state.paginaAtual){
        case "cadastro":
          return  <Cadastro changePageLista={this.changePageLista} />
        
        case "lista":
          return <Lista changePageCadastro={this.changePageCadastro}/>
        
        default:
          return <div>Erro: Pagina não encontrada</div>
      }
  }

    changePageCadastro = () => {
      this.setState({paginaAtual: "cadastro" })
    }

    changePageLista = () => {
      this.setState({paginaAtual: "lista"})
    }



  render() {

    return (
      <div >
        
        {this.tela()} 
        {/* quando foi dentro da classe (ou seja, antes do render), é preciso colocar o this */}
      </div>
    );
  }
}

