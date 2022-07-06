import { useEffect, useState } from "react";
import axios from "axios";

function PokeCard(props) {

  const[pokemonEscolhido, setPokemonEscolhido] = useState({})

  useEffect(() => {
    pegaPokemon()
  }, [props.pokemon])


  // Passo 4c
  const pegaPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}/`)
      .then((res) => {
        setPokemonEscolhido( res.data );
        console.log("Foram feitas essas operações ternarias poispara API's mais complicadas, é necessario essa verificação")
        // console.log( res.data )
       
    
      })
      .catch((err) => {
        console.log(err);

      });
  };

  return (
    <figure>

      <strong>{pokemonEscolhido.name && pokemonEscolhido.name.toUpperCase()}</strong>

      <p>Peso: {pokemonEscolhido.weight} Kg</p>

      <p>Tipo: {pokemonEscolhido.types && pokemonEscolhido.types[1].type.name} </p>
      
      
      {pokemonEscolhido.sprites && (
        <img src={pokemonEscolhido.sprites.front_default} alt={pokemonEscolhido.name} />
      )}

      

    </figure>
  );
};

export default PokeCard;
