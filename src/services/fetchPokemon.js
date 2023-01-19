export async function fetchInitialPokemon() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/');
  console.log(response);
  const data = await response.json();
  return data.results;
}
