export async function fetchInitialPokemon() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/');
  const data = await response.json();
  return data.results;
}

export async function fetchTypes() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data;
}
