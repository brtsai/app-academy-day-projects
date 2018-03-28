export function fetchAllPokemon() {
  return $.ajax({ url: '/api/pokemon', method: 'GET' });
}

// export default { fetchAllPokemon };
