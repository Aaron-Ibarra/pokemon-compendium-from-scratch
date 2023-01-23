import React from 'react';
import { usePokemon } from '../../hooks/pokemon.js';
import Select from '../Select/Select.js';
import Card from '../Card/Card.js';
import Query from '../Query/Query.js';
import './Main.css';

export default function Main() {
  const { pokemon, types, handleTypeChange, loading } = usePokemon();
  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <Query />
      <div className="cardsContainer">
        <Card pokemon={pokemon} loading={loading} />
      </div>
    </>
  );
}
