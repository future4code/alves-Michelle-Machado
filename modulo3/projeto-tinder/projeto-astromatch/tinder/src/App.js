import { useState } from 'react';
import './App.css';
import {Header} from './component/Header';
import {Perfis} from './pages/Perfis/Perfis'
import {Matches} from './pages/Matches/Matches'

function App() {

  const [actualPage, changePage] = useState("perfis")

  const searchPage = () => {
    switch (actualPage) {
      case "perfis":
        return <Perfis />

      case "matches":
        return <Matches 
        goToPerfis={goToPerfis}/>
            
      default:
       return "Pagina não encontrada"
    }
  }

  const goToPerfis = () => {
    changePage("perfis")
  }

  const goToMatches = () => {
    changePage("matches")
  }

  return (
    <div>
      <Header 
      goToMatches={goToMatches}
      goToPerfis={goToPerfis} />
      {searchPage()}

    </div>
  );
}

export default App;
