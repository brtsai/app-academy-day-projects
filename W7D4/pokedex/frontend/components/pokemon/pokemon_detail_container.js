import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { selectSinglePokemon, selectItemsForSinglePokemon } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const pokeId = ownProps.match.params.pokeId;
  return ({
    // piece of state that container subscribes to
    pokemon: selectSinglePokemon(state,pokeId),
    items: selectItemsForSinglePokemon(state, pokeId),
    errors: state.errors
  });
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id)) // dispatch requestAllPokemon action.
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail));
