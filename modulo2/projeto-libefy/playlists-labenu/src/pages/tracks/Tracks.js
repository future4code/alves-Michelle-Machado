import axios from 'axios'
import React, { Component } from 'react'
import * as C from "./styled"

export default class Tracks extends Component {

  state = {
    songs: [],
    name: "",
    artist: "",
    url: "",
    playlistId: this.props.id,
    playlistName: this.props.name
  }

  componentDidMount() {
    this.getPlaylistTracks()
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

  onChangeArtist = (e) => {
    this.setState({ artist: e.target.value })
  }

  onChangeUrl = (e) => {
    this.setState({ url: e.target.value })
  }

  addTrackToPlaylist = () => {

    const music = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`, music,
      {
        headers: {
          Authorization: "michelle-machado-alves"
        }
      }).then((res) => {
        console.log("Musica adicionada com sucesso", res)
        this.componentDidMount()

        //Quando eu adiciono a musica, eu não consigo mudar o estado no then
      }).catch((err) => {
        console.log(err.request.response)
      })
  }

  getPlaylistTracks = () => {

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`,
      {
        headers: {
          Authorization: "michelle-machado-alves"
        }
      }).then((res) => {
        this.setState({ songs: res.data.result.tracks })

      }).catch((err) => {
        console.log(err)
      })
  }

  removeTrackFromPlaylist = (id) => {

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks/${id}`,
      {
        headers:
        {
          Authorization: "michelle-machado-alves"
        }
      }
    ).then((res) => {
      this.getPlaylistTracks()
      // console.log("Usuario deletado com sucesso", this.state.songs)

    })
      .catch((err) => {
        console.log(err.request)
        console.log(this.state.songs)
      })
  }

  render() {

    const showAllSongs = this.state.songs.map((music, index) => {
      return (
        <C.SingleTracks key={index}>
          <C.InfoTrack>
            <h2>{music.name} <br /></h2>
            <p>Artista: {music.artist} <br /></p>
            <p>Url: {music.url} <br /></p>
          </C.InfoTrack>
          <C.AudioTrack>
          <audio controls><source src={music.url} type="audio/mp3"></source></audio>
          <C.Button onClick={this.removeTrackFromPlaylist}>delete</C.Button>
          </C.AudioTrack>
        </C.SingleTracks>)

    })

    return (
      <C.Body>

        <C.Button onClick={this.props.goToPagePlaylist}>Voltar para Playlists</C.Button>

        <C.Infos>
          <C.Titulo>{this.state.playlistName}</C.Titulo>
        </C.Infos>


        <C.AdicionarMusicas>
          <C.CardInput>
            <C.Input onChange={this.onChangeName} placeholder='Nome da Musica' />
            <C.Input onChange={this.onChangeArtist} placeholder='Nome do Artista' />
            <C.Input onChange={this.onChangeUrl} placeholder='Url' />
            <C.Button onClick={this.addTrackToPlaylist}>Adicionar</C.Button>
          </C.CardInput>
        </C.AdicionarMusicas>

        <C.ContainerTracks>
          {showAllSongs}
        </C.ContainerTracks>
      </C.Body>
    )
  }
}
