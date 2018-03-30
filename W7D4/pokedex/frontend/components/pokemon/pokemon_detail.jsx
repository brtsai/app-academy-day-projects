import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonDetail extends React.Component {
  componentDidMount() {
    const pokeId = this.props.match.params.pokeId;
    debugger;
    this.props.requestSinglePokemon(pokeId);
  }

  componentWillReceiveProps() {

  }

  render() {
    if (this.props.pokemon === undefined) {
      return (<div></div>);
    }

    console.log(this.props.pokemon);
    return (
      <ul key={this.props.pokemon.id + this.props.pokemon.name} >
        <li><img src={this.props.pokemon.image_url} ></img></li>
        <li>{this.props.pokemon.name}</li>
        <li>Type: {this.props.pokemon.poke_type} </li>
        <li>Attack: {this.props.pokemon.attack} </li>
        <li>Defense: {this.props.pokemon.defense} </li>
        <li>Moves: {this.props.pokemon.moves} </li>

        <h3> Items </h3>
        <ul>

        </ul>
    </ul>
  );
  }

}

export default PokemonDetail;
