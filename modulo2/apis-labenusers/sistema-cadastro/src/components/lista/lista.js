import React from "react";
import axios from "axios";
import * as C from "./style"


export default class Lista extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.getAllUser(this.state.usuarios)

    }

    getAllUser = () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url,

            {
                headers: {
                    Authorization: "michelle-machado-alves"
                }
            })
            .then((res) => {
                this.setState({ usuarios: res.data })
                console.log(this.state.usuarios)
            })
            .catch((err) => {
                console.log("Erro:", err)
            })

    }

    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.delete( url, {
            headers: {
                Authorization: "michelle-machado-alves"
            }
        })

        .then((res) => {
            console.log("Usuario deletado com sucesso")
            this.getAllUser()
            // Não daria para fazer um componentDidUpdate?
        })
        .catch((err) => {
            console.log("Erro: ", err)
        })


    }



    render() {

        const listaUsuarios = this.state.usuarios.map((user) => {
            return <C.CardUsuarios key={user.id}>{user.name} <button onClick={() => {this.deleteUser(user.id)}}>X</button></C.CardUsuarios>
        })

        return (



            <div>
                <h4>Procurar Usuario</h4>

                <button onClick={this.props.changePageCadastro}>Trocar de tela</button>

                <input placeholder="Nome exato da busca" />
                <C.Container>
                    {listaUsuarios}
                </C.Container>
                <button>Salvar Edição</button>
            </div>

        )
    }
}
