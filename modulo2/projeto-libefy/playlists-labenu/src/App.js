import React from 'react';
import './App.css';
import Playlists from "./pages/playlists/Playlists"
import Tracks from "./pages/tracks/Tracks"

export default class App extends React.Component {

  state = {
    actualPage: "playlists"
  }

  selectPage = () => {
    switch (this.state.actualPage) {
      case "playlists":
        return <Playlists changePageTracks={this.changePageTracks} />
      
      case "tracks":
        return <Tracks changePagePlaylist={this.changePagePlaylist} />
    
      default:
        return ("Erro: Página não encontrada")
    }
  }

  changePageTracks = () => {
    this.setState({actualPage: "tracks"})
  }

  changePagePlaylist = () => {
    this.setState({actualPage: "playlists"})
  }

  render() {

  
    return (
      
      <div>
        {this.selectPage()}
      </div>
    );

  }
  
}

