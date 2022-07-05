import axios from "axios";
import React, { useEffect, useState } from "react";

function PokeCard(props) {
  // Passo 4b
  // Implementa suas variáveis de estado aqui.
  const [pokemon, setPokemon] = useState({})
  // Passo 4c
  useEffect(() => {
    pegaPokemon(props.name)
  },[props.name])

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err))
  };
  // Passo 4c

  // Passo 4c
  console.log(pokemon)
  return (
    <figure>
      <h2>{pokemon.name && pokemon.name.toUpperCase()}</h2>
      <p>Peso:{pokemon.weight} kg</p>
      <p>Tipo:</p>
      <ul>{pokemon.types && pokemon.types.map((type)=>{return <li>{type.type.name}</li>})}</ul>
      {pokemon.sprites && <img src={pokemon.sprites.front_default} alt={pokemon.name} />}
      <p>Skills:</p>
      <ol>{pokemon.abilities && pokemon.abilities.map((ability)=> {return(<li>{ability.ability.name}</li>)})}</ol>
    </figure>
  );
};

export default PokeCard;
