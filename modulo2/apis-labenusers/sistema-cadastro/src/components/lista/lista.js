import React from "react";
import axios from "axios";
import * as C from "./style.js"


export default class Lista extends React.Component {

    state = {
        usuarios: [],
        busca: "",
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

        axios.delete(url, {
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

    onChangeBusca = (event) => {
        this.setState({busca: event.target.value})
    }

    searchUser = () => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.busca}&email=`

        axios.get(url, {
            headers: {
                Authorization: "michelle-machado-alves"
            }
        })

        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log("Erro: ", err)
        })
    }


    render() {

        const listaUsuarios = this.state.usuarios
        .filter((user) => {
            return user.name.includes(this.state.busca)
        })
        .map((user) => {
            return <C.CardUsuarios key={user.id}>
                {user.name} 
                <C.ButtonDelete onClick={() => { this.deleteUser(user.id) }}>X</C.ButtonDelete>
                {/*  quando tiver um parametro, usar a arrow function */}
                </C.CardUsuarios>
            })

        return (

            <C.Body>

                <C.Container>
                    <C.Titulo>Procurar Usuario</C.Titulo>

                    <C.Button onClick={this.props.changePageCadastro}>Trocar de tela</C.Button>

                    <C.Input onChange={this.onChangeBusca} placeholder="Nome exato da busca" />  
                    <C.Container>
                        {listaUsuarios}
                    </C.Container>
                    <C.Button>Salvar Edição</C.Button>
                </C.Container>
            </C.Body>

        )
    }
}
