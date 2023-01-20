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

export async function fetchPokemon(type) {
  const params = new URLSearchParams();
  params.set('type', type);
  const response = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${params.toString()}`
  );
  const data = await response.json();
  console.log('data', data);
  return data.results;
}
