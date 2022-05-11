import React from 'react';
import { Button } from 'react-bootstrap';
import PokemonThumbnail from './PokemonThumbnail';
import pokeball from "../assets/pokebola.png"

export default function PokeList({ setOffset, offset, pokemonObject }) {

    const showMore = () => {
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
                            pokeball={pokeball}
                        />
                    ))
                }
            </div>
            <div className='mt-3 mb-3'>
                <Button className='btn-sm' onClick={showMore}>Mostrar más</Button>
            </div>
        </div>
    )
}