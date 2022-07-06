import { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";

function App() {

    const [nomePokemon, setPokemon] = useState("")
    const [arrayPokemon, setArrayPokemon] = useState([])

  // Passo 3c

  useEffect (() => {
    getNamePokemon()
  }, [nomePokemon])


  const getNamePokemon = () => {

    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then((res) => {
        setArrayPokemon( res.data.results );
       

      })
      .catch((err) => {
        console.log(err);

      });
  };


  const changePokeName = (event) => {
    setPokemon(event.target.value) }

  const pokeOptions = arrayPokemon.map(pokemon => {
    return (
      <option key={pokemon.name} value={pokemon.name} >
        {pokemon.name}
        {/* {console.log(arrayPokemon)} */}
      </option>
      
    );
  });

  const pokemon = nomePokemon && <PokeCard pokemon={nomePokemon} />;

  return (
    <>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>

        <select onChange={changePokeName} id={"select-pokemon"}>
          <option  value={nomePokemon} >Nenhum</option>
          {pokeOptions}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </>
  );
};

export default App;
