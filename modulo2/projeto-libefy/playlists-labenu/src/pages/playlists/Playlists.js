import axios from 'axios'
import React, { Component } from 'react'
import * as C from "./styled"

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
                headers:
                {
                    Authorization: "michelle-machado-alves"
                }
            }
        ).then((res) => {
            this.setState({ playlists: res.data.result.list })
            this.componentDidMount()

        })
            .catch((err) => {
                console.log(err.data)
            })
    }

    deletePlaylist = (id) => {
        const urlDeletePlaylist = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(urlDeletePlaylist,
            {
                headers:
                {
                    Authorization: "michelle-machado-alves"
                }
            }
        ).then((res) => {
            console.log(id)
            this.componentDidMount()

            // console.log("Usuario deletado com sucesso", this.state.playlists)

        })
            .catch((err) => {
                console.log(err.request)
            })
    }

    render() {

        const showPlaylists = this.state.playlists.map((playlist) => {
            return (

                <div >
                    <C.CardPlaylist>
                        <div onClick={() => { this.props.goToPageTracks(playlist.id, playlist.name) }} key={playlist.id} >
                            {playlist.name}
                        </div>
                        <C.Button onClick={() => { this.deletePlaylist(playlist.id) }}>Deletar</C.Button>
                    </C.CardPlaylist>
                </div>

            )
        })

        return (
            <C.Body>

                <C.Titulo>Suas Playlists</C.Titulo>
                <C.CardInput>
                    <C.Input onChange={this.onChangeNamePlaylist} placeholder='Nome da Playlist' />
                    <C.Button onClick={this.createPlaylist} type='submit'>Criar</C.Button>
                </C.CardInput>
                <C.Playlists>
                    {showPlaylists}
                </C.Playlists>

            </C.Body>
        )
    }
}
