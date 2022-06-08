import React, {Component} from 'react'

export default class Contador extends Component{

    state = {
        contador:0,
    }

    addSoma = () => {
      //isso é um metodo
        this.setState({
          // setState vai ser o responsavel por mudar o valor do estado
            contador: this.state.contador +1
        })
    }

    render() {
        // console.log("Eu sou o this: ", this)
        return (
          <div >
            <p>{this.state.contador}</p>
            <button onClick={this.addSoma}>Soma</button>
          </div>
        )
      }
}