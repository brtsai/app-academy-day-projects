import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    console.log(this.props.pokemon);
    this.props.pokemon.forEach((poke) => {console.log(poke.name);});

    return (
      <ul>
        {
          this.props.pokemon.map((poke) => (
            <li key={poke.id + poke.name}> { poke.name } <img src={ poke.image_url }></img> </li>
          ))
        }
      </ul>
    );
  }
}
export default PokemonIndex;
