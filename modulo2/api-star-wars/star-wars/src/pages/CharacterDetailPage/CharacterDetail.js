import React from "react";
import axios from "axios";

export default class CharacterDetail extends React.Component {

    state = {
        caracter: {},
        planet: ""
    }

    componentDidMount() {
        this.getCaracter()
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.caracter !== prevState.caracter) {
            this.getPlanet()
        }

    }

    getCaracter = () => {
        axios.get(this.props.url)
            .then((res) => {
                this.setState({ caracter: res.data })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    getPlanet = () => {
        axios.get(this.state.caracter.homeworld)
            .then((res) => {
                this.setState({ planet: res.data.name })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {

        return (

            <div>

                {this.state.caracter.name && this.state.planet ?

                    (
                    <div>
                        <p>Nome: {this.state.caracter.name}</p>
                        <p>Planeta Natal: {this.state.planet}</p>
                        <button onClick={this.props.goToListPage}>Voltar para Lista</button>
                    </div>
                    ) : <p>Carregando..</p>
                    
            
                }


            </div>
        )
    }
}