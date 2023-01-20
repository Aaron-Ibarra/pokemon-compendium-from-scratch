import React from 'react';
import { usePokemon } from '../../hooks/pokemon.js';
import Select from '../Select/Select.js';
import Card from '../Card/Card.js';

export default function Main() {
  const { pokemon, types, handleTypeChange } = usePokemon();
  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <Card pokemon={pokemon} />
    </>
  );
}
