import React from 'react';

export default function Card({ pokemon, loading }) {
  if (loading) return <p>Evolving...</p>;
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke._id}>{poke.pokemon}</p>
      ))}
    </div>
  );
}
