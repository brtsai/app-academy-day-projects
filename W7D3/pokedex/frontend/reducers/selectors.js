import _ from 'lodash';

const selectAllPokemon = (state) => {
  return _.values(state.entities.pokemon);
};

export default selectAllPokemon;
