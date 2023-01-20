import React from 'react';
import './Card.css';

export default function Card({ pokemon, loading }) {
  if (loading) return <p>Evolving...</p>;
  return (
    <div>
      {pokemon.map((poke) => (
        <h2 className="pokename" key={poke._id}>
          {poke.pokemon} {poke.type_1} {poke.type_2}
        </h2>
        // <img key={poke.url_image} src={`${poke.url_image}`}/>
      ))}
    </div>
  );
}
