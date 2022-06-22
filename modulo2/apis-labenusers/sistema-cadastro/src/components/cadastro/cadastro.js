import React from "react"
import axios from "axios"
import "./style.css"


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
                    this.setState({cadastros: sucesso.data})
                    console.log(this.state.cadastros)
                })
                .catch((erro) => {
                    alert(erro.response.data.message);
                });


        };


        return (

            <div>
                <h4>Pagina de Cadastro</h4>
                <button onClick={this.props.changePageLista}>Trocar de tela</button>
                <input onChange={onChangeInputNome} placeholder="Nome" />
                <input onChange={onChangeInputEmail} placeholder="E-mail" />

                <button onClick={createUser} type="submit">Criar Usuario</button>

            </div>

        )
    }
}

