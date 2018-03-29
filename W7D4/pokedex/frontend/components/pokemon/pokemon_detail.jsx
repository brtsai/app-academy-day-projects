import React from 'react';
import ItemContainer from './items_container';

class PokemonDetail extends React.Component {
  componentDidMount() {
    const pokeId = this.props.match.params.pokeId;

    this.props.requestSinglePokemon(pokeId);
  }

  render() {
    if (this.props.pokemon === undefined) {
      return (<div></div>);
    }
    return (
      <ul key={this.props.pokemon.id + this.props.pokemon.name} >
        <li><img src={this.props.pokemon.image_url} ></img></li>
        <li>{this.props.pokemon.name}</li>
        <li>Type: {this.props.pokemon.poke_type} </li>
        <li>Attack: {this.props.pokemon.attack} </li>
        <li>Defense: {this.props.pokemon.defense} </li>
        <li>Moves: {this.props.pokemon.moves} </li>
        <ItemContainer />
    </ul>
  );
  }

}

export default PokemonDetail;
