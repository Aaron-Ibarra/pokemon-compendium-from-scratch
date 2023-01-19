import React from 'react';

export default function Card({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke._id}>{poke.pokemon}</p>
      ))}
    </div>
  );
}
