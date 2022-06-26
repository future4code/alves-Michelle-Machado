import React from 'react';
import './App.css';
import Playlists from "./pages/playlists/Playlists"
import Tracks from "./pages/tracks/Tracks"

export default class App extends React.Component {

  state = {
    actualPage: "playlists",
    clickedTrackId: "",
    namePlaylist:"",
  }

  goToPageTracks = (id, name) => {
    this.setState({actualPage: "tracks", clickedTrackId: id, namePlaylist:name})
  }

  goToPagePlaylist = () => {
    this.setState({actualPage: "playlists", clickedTrackId: ""})
  }


  selectPage = () => {
    switch (this.state.actualPage) {
      case "playlists":
        return <Playlists goToPageTracks={this.goToPageTracks} />
      
      case "tracks":
        return <Tracks goToPagePlaylist={this.goToPagePlaylist} id={this.state.clickedTrackId} name={this.state.namePlaylist} />
    
      default:
        return ("Erro: Página não encontrada")
    }
  }

  render() {

  
    return (
      
      <div>
        {this.selectPage()}
      </div>
    );

  }
  
}

