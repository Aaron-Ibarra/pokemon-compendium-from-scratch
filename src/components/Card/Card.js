import React from 'react';
import './Card.css';

export default function Card({ pokemon, loading }) {
  if (loading) return <p>Evolving...</p>;
  return (
    <div className="cardsContainer">
      {pokemon.map((poke) => (
        <div className="card" key={poke._id}>
          <h2 className="pokename">{poke.pokemon.toUpperCase()}</h2>
          <p className="details">
            {poke.type_1} {poke.type_2}
          </p>
          <img src={`${poke.url_image}`} />
        </div>
      ))}
    </div>
  );
}
