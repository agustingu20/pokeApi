import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PokemonThumbnail from './PokemonThumbnail';

export default function PokeList({ setOffset, offset, pokemonObject }) {

    const nextPage = () => {
        setOffset(offset + 30)
    }

    return (
        <div>
            <div className='pokemon-display'>
                {
                    pokemonObject.map((pokemon) => (
                        <PokemonThumbnail
                            key={`pokemon-${pokemon.id}`}
                            name={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                            type={pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1)}
                            id={pokemon.id}
                            image={`${pokemon.sprites?.other["official-artwork"]["front_default"]}`}
                        />
                    ))
                }
            </div>
            <div className='mt-3 mb-3'>
                <Button className='btn-sm' onClick={nextPage}>Mostrar más</Button>
            </div>
        </div>
    )
}