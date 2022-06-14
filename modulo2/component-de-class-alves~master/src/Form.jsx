import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        nome: "",
        numero: "",
        seguranca: "",
    }

    pegaNome = (event) => {
        this.setState({
            nome: event.nome
            
        })

    }

    pegaNumero = (event) => {
        this.setState({
            numero: event.target.value
        })
    }

    pegaSeguranca = (event) => {
        
        this.setState({
            seguranca: event.target.value
        })
    }


    render() {

        return (
            <div div >
                <p>Nome: {this.pegaNome}</p>
                <p>Número: {this.pegaNumero}</p>
                <p>CCV: {this.pegaSeguranca} </p>
                

                <hr />

                <h2>Insira os dados do seu cartão</h2>

                <form>
                    <label>
                        Nome:
                        <input
                            onChange={this.pegaNome}
                            type={"text"}
                            placeholder={"Digite seu nome"} 
                        />

                    </label>
                    <br />
                    <label>
                        Número
                        <input
                            onChange={this.pegaNumero}
                            type={"text"}
                            placeholder={"Digite o numero do seu cartão"}
                        />
                    </label>
                    <br />
                    <label>
                        CCV:
                        <input
                            onChange={this.pegaSeguranca}
                            type={"text"}
                            placeholder={"Digite o numero do seu cartão"}
                        />
                    </label>
                </form>
            </div>

        )
    }

}

