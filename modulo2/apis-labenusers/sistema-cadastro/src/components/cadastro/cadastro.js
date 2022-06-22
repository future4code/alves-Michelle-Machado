import React from "react"
import axios from "axios"
import "./style.css"


export default class Cadastro extends React.Component {

    state = {
        cadastros:[],
        name: "",
        email: "",
    }


    render() {

        const onChangeInputNome = (event) => {
            this.setState({
                name: event.target.value
            })
            console.log(this.state.name)
        }

        const onChangeInputEmail = (event) => {
            this.setState({
                email: event.target.value
            })
        }

        const createUser = (props) => {

            const novoUser = {

                name: this.state.name,
                email:this.state.email
            }

            this.state.cadastros.push(novoUser)

            axios.post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", novoUser,
                {
                  headers: {
                    Authorization: "michelle-machado-alves"
                  }
                }
              )
              .then((resposta) => {
                resposta.status === 201 && alert("Usuario Criado");
              })
              .catch((erro) => {
                alert(erro.response.data.message);
              });
          };




        return (
            <container>
                <div>

                    

                    <input onChange={onChangeInputNome} placeholder="Nome" />
                    <input onChange={onChangeInputEmail} placeholder="E-mail" />

                    <button onClick={createUser} type="submit">Criar Usuario</button>

                </div>
            </container>
        )
    }
}

