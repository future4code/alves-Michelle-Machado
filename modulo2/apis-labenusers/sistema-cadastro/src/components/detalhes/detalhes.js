import React from "react";



export default class Detalhes extends React.Component {
    render() {
        return (
            <container>
                <div>

                    <button>Trocar de tela</button>

                    <p>{this.props.novoUser}</p>

                    <hr/>

                    <h4>Procurar Usuario</h4>

                    <input placeholder="Nome exato da busca" />
                    <button>Salvar Edição</button>
                </div>
            </container>
        )
    }
}
