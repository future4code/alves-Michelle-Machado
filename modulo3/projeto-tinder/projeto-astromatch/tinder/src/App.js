import { useState, React } from 'react';
import './App.css';
import { Perfis } from './pages/Perfis/Perfis'
import { Matches } from './pages/Matches/Matches'
import {Messages} from './pages/Messages/Messages'
import { MenuLateral } from './component/MenuLateral/MenuLateral'

function App() {

  const [actualPage, changePage] = useState("perfis")
  
  

  const searchPage = () => {
    switch (actualPage) {
      case "perfis":
        return <Perfis 
          goToMatches={goToMatches}
          goToPerfis={goToPerfis} />

      case "matches":
        return <Matches
          goToPerfis={goToPerfis} />
      
      case "messages":
        return <Messages />

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

  const goToMessages = () => {
    changePage("messages")
  }


  return (

    <body>

     

      <MenuLateral
      goToMatches={goToMatches}
      goToPerfis={goToPerfis}
      goToMessages={goToMessages}
      />
      
      {searchPage()}
      
    </body>

  );
}

export default App;
