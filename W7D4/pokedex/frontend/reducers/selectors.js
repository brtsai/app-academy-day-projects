import _ from 'lodash';

export const selectAllPokemon = (state) => {
  return _.values(state.entities.pokemon);
};

export const selectSinglePokemon = (state, pokeId) => {
  return _.values(state.entities.pokemon[pokeId]);
};

export const selectItemsForSinglePokemon = (state, pokeId) => {
  let items = [];
  if (state.entities.pokemon[pokeId] !== undefined) {
    const itemIds = state.entities.pokemon[pokeId].item_ids;
    items = itemIds.map(itemId => state.entities.items[itemId]);
  }
  return items;
};
