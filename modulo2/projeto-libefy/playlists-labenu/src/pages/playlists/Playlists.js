import axios from 'axios'
import React, { Component } from 'react'

export default class Playlists extends Component {

    state = {
        playlists: [],
        name: ""
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    onChangeNamePlaylist = (event) => {
        this.setState({ name: event.target.value })
        // console.log(this.state.name)
    }

    createPlaylist = () => {
        const urlCreatePlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const NamePlaylist = { name: this.state.name }

        axios.post(urlCreatePlaylist, NamePlaylist,
            {
                headers: {
                    Authorization: "michelle-machado-alves"
                }
            })
            .then((res) => {
                console.log("Playlist criada: ", res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getAllPlaylists = () => {
        const urlGetAllPlaylists = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(urlGetAllPlaylists,
            {
                headers: {
                    Authorization: "michelle-machado-alves"
                }
            })
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
                console.log("Todas as playlists ai", this.state.playlists)
            })
            .catch((err) => {
                console.log(err.data)
            })
    }

    // deletePlaylist = () => {
    //     const urlGetAllPlaylists
    // }

    render() {

        const showPlaylists = this.state.playlists.map((playlist) => {
            return (
                <p key={playlist.id}>
                    {playlist.name}
                </p>)
        })

        return (
            <div>
                <h1>Lista de Playlists</h1>
                <input onChange={this.onChangeNamePlaylist} placeholder='Nome da Playlist' />
                <button onClick={this.createPlaylist} type='submit'>Criar</button>
                {showPlaylists}

            </div>
        )
    }
}
