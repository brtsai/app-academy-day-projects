export function fetchAllPokemon() {
  return $.ajax({ url: '/api/pokemon', method: 'GET' });
}

export function fetchSinglePokemon(pokemonId) {
  return $.ajax({ url: `/api/pokemon/${pokemonId}`, method: 'GET' });
}
// export default { fetchAllPokemon };
