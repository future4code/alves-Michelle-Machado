import { useState, React } from 'react';
import './App.css';
import { Header } from './component/Header';
import { Perfis } from './pages/Perfis/Perfis'
import { Matches } from './pages/Matches/Matches'
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  const [actualPage, changePage] = useState("perfis")


  const searchPage = () => {
    switch (actualPage) {
      case "perfis":
        return <Perfis  goToMatches={goToMatches}
        goToPerfis={goToPerfis}/>

      case "matches":
        return <Matches
          goToPerfis={goToPerfis} />

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
    <ChakraProvider>

      {/* <Header
        goToMatches={goToMatches}
        goToPerfis={goToPerfis} 
      /> */}

      {/* <MenuLateral></MenuLateral> */}

      <div>

        {searchPage()}

      </div>


    </ChakraProvider>
  );
}

export default App;
