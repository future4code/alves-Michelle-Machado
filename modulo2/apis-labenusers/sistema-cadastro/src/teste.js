import React from "react"

export default class Batata extends React.Component {

    state = {
        input: "",
    }
    // state é um objeto pois te  chaves e suas propriedades tem essa mesma sintaxe
   
    render() {

        onChangeInput = (event) => {
            this.setState({input: event.target.value})
            console.log(event)
            // sempre que o usuario alterar algo, vamos usar o event
        }

        return (
            
            <>
                <h2>Titulo</h2>
                <input onChange={""} placeholder="Nome" /> 
                {/* caixa de nome e email  */}
            </>
        )
    }

}

