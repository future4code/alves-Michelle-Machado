import React from "react"
import axios from "axios"
import * as C from "./style.js"


export default class Cadastro extends React.Component {

    state = {
        cadastros: [],
        name: "",
        email: "",
    }


    render() {

        const onChangeInputNome = (event) => {
            this.setState({
                name: event.target.value
            })

        }

        const onChangeInputEmail = (event) => {
            this.setState({
                email: event.target.value
            })
        }

        const createUser = () => {

            const novoUser = {

                name: this.state.name,
                email: this.state.email
            }

            axios.post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", novoUser,
                {
                    headers: {
                        Authorization: "michelle-machado-alves"
                    }
                }
            )
                .then((sucesso) => {
                    this.setState({ cadastros: sucesso.data })
                    alert("Usuario criado com sucesso")
                })
                .catch((erro) => {
                    alert(erro.response.data.message);
                });


        };


        return (

            <>

            <C.Body >

                <C.Container>

                <C.Button onClick={this.props.changePageLista}>Trocar de Tela</C.Button>
                    <C.Titulo>Página de Cadastro</C.Titulo>
                    <C.Input onChange={onChangeInputNome} placeholder="Nome" />
                    <C.Input onChange={onChangeInputEmail} placeholder="E-mail" />

                    <C.Button onClick={createUser} type="submit">Criar Usuario</C.Button>
                </C.Container>

            </C.Body>

            </>

        )
    }
}

