import React from 'react';

export async function getServerSideProps(context) {
  const { name } = context.params;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if (!res.ok) {
      return { notFound: true };
    }
    const data = await res.json();

    const pokemon = {
      name: data.name,
      image: data.sprites.front_default,
      height: data.height,
      weight: data.weight,
      types: data.types.map(t => t.type.name),
      abilities: data.abilities.map(a => a.ability.name)
    };

    return { props: { pokemon } };
  } catch (error) {
    return { notFound: true };
  }
}

export default function PokemonPage({ pokemon }) {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      <p><strong>Tipos:</strong> {pokemon.types.join(', ')}</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.join(', ')}</p>
    </div>
  );
}
