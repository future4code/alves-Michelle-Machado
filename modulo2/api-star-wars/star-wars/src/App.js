import React from "react";
import "./App.css"
import CharacterDetail from "./pages/CharacterDetailPage/CharacterDetail";
import CharacterList from "./pages/CharacterListPage/CharacterList";

export default class App extends React.Component {

  state = {
    actualPage:"list",
    clickedCharacterUrl: "",
  }

  goToDetailPage = (url) => {
    this.setState({actualPage: "detail", clickedCharacterUrl: url })

  }

  goToListPage = () => {
    this.setState({actualPage: "list", clickedCharacterUrl: "" })
  }

  selectPage = () => {

    switch (this.state.actualPage) {
      case "list":
        return <CharacterList goToDetailPage={this.goToDetailPage}  />
        
      case "detail":
        return <CharacterDetail goToListPage={this.goToListPage} url={this.state.clickedCharacterUrl} />
    
      default:
        return ("Houve um erro!")
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

