import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constantes/url";
import {CaracterCard} from "./styled"

export default class CharacterList extends React.Component{

    state ={
        list: []
    }

    componentDidMount() {
        this.getCharactersList()
    }

    getCharactersList = () => {
        axios.get( `${BASE_URL}/people`)
        .then((res) => {
            this.setState({list: res.data.results})
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    render(){

        const characteres = this.state.list.map((person) => {
            return (
            <CaracterCard 
               onClick={() => {this.props.goToDetailPage(person.url)}} key={person.url}> 
                {person.name}
            </CaracterCard>
            )
        })

        return(
            <div>
                {characteres}
            </div>
        )
    }
}